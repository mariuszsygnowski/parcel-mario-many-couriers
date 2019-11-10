'use strict';
require('dotenv').config();

const cheerio = require('cheerio');
const superagent = require('superagent');
const fetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const path = require('path');
const app = express();
const port = process.env.PORT || process.env.LOCAL_SERVER_PORT;

const normalizerNames = require('./serverFiles/normalizer-names.js');
const isoCodes = require('./serverFiles/isoCodes.js');
const create_UUID = require('./serverFiles/create_UUID.js');

const db = pgp({
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
}

app.post('/api/p4d', (req, res) => {
  const {postcode_from, postcode_to, country_from, country_to, weight, width, height, length} = req.body;
  // (async () => {
  //   try {
  //     const res = await superagent.post('/api/pet');
  //     console.log(res);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  let $;
  let outputArray = [];

  let locale = 'domestic';
  //if country from are not GB then in url should be in place destination: "import"
  if (country_from !== 'GB') {
    locale = 'import';
  }
  const url = `https://www.p4d.co.uk/go/${locale}/${country_from}---MAIN/${country_to}---MAIN/${weight},${width},${height},${length}?fromPostcode=${postcode_from}`;
  superagent
    .get(url)
    .query()
    .end(function(err, response) {
      if (err) {
        res.json({
          confirmation: 'fail',
          message: err
        });
        return;
      }
      $ = cheerio.load(response.text);

      $('#newquote-list li form .newquote-title').each(function(i, el) {
        const service_nameP4D = $(this).text();

        //.split("\n") = I split to array where each value are splited by enter key
        const service_nameArray = service_nameP4D.split('\n');
        service_nameArray.forEach((name, i) => {
          //.trim() remove white spaces
          service_nameArray[i] = name.trim();
        });

        const service_nameP4DArray = service_nameArray[1];
        const priceP4D = service_nameArray[3];

        //remove from string priceP4D all characters but not numbers
        const price = priceP4D.replace(/[^\d.-]/g, '');
        const courier_name = normalizerNames.courierNameP4D(service_nameP4DArray);
        const service_name = normalizerNames.serviceName(service_nameP4DArray, 'p4d.co.uk');

        outputArray[i] = Object.assign({}, outputArray[i], {
          company_name: 'p4d.co.uk',
          price: price,
          service_name: service_name,
          courier_name: courier_name
        });
      });

      $('#newquote-list li form  .newquote-topbox .newquote-delivery-time b').each(function(i, el) {
        const deliveryTimeP4D = $(this).text();

        const deliveryTime = normalizerNames.deliveryTime(deliveryTimeP4D, 'p4d.co.uk');
        outputArray[i] = Object.assign({}, outputArray[i], {
          deliveryTime,
          url
        });
      });

      $('#newdropoff-list li .newdropoff-title').each(function(i, e) {
        const deliveryTimeP4D = $(this).text();
        const service_nameArray = deliveryTimeP4D.split('\n');
        service_nameArray.forEach((name, i) => {
          //.trim() remove white spaces
          service_nameArray[i] = name.trim();
        });
        console.log(`deliveryTimeP4D:`, service_nameArray[1]);
      });
      res.json(outputArray);
    });
});

app.post('/api/p2g', (req, res) => {
  const {postcode_from, postcode_to, country_from, country_to, weight, width, height, length} = req.body;

  // const da = isoCodes.find(e => {
  //   return e.name === "Albania";
  // });
  const new_country_from = isoCodes.iso3ToIso2(country_from);
  const new_country_to = isoCodes.iso3ToIso2(country_to);

  // console.log(`create_UUID():`, create_UUID.create_UUID());
  // https://www.parcel2go.com/quotes?col=219&dest=219&cp=RM191ZY&dp=EC1R3DD&mdd=0&p=1~1|10|10|10&quotetype=Default
  // https://www.parcel2go.com/order/parcel/myhermes-parcelshop-next-day?cp=rm191zy&dp=ec1r3dd&quoteslug=myhermes-parcelshop-next-day&basketitemid=b37ffcd3-2ec0-4c15-9e96-188af899f8ac&redir=1
  const url = `https://www.parcel2go.com/quotes?col=219&dest=219&cp=${postcode_from}&dp=${postcode_to}&mdd=0&p=1~${weight}|${width}|${height}|${length}&quotetype=Default`;
  //now everything is hard coded but later will be passed all data
  fetch('https://www.parcel2go.com/auth/connect/token', {
    method: 'POST',
    headers: {
      Accept: '*/*',
      'User-Agent': 'insomnia/5.14.6',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:
      'grant_type=client_credentials&scope=public-api%20payment&client_id=52bec26d025a4b8db2248a90da1e455a:testing&client_secret=testing123'
  })
    .then(response => response.json())
    .then(body => {
      if (body) {
        fetch('https://www.parcel2go.com/api/quotes', {
          body: JSON.stringify({
            CollectionAddress: {
              Country: new_country_from,
              Postcode: postcode_from
            },
            DeliveryAddress: {
              Country: new_country_to,
              Postcode: postcode_to
            },
            Parcels: [
              {
                Value: 0,
                Weight: weight,
                Length: length,
                Width: width,
                Height: height
              }
            ]
          }),
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
            'User-Agent': 'insomnia/5.14.6',
            Authorization: `Bearer ${body.access_token}`
          },
          method: 'POST'
        })
          .then(response => response.json())
          .then(body => {
            if (body) {
              let outputArray = [];
              body.Quotes.forEach(item => {
                const courier_name = normalizerNames.courierName(item.Service.CourierName, 'parcel2go.com');
                const service_name = normalizerNames.serviceName(item.Service.Name, 'parcel2go.com');
                const deliveryTime = normalizerNames.deliveryTime(item.Service.Classification, 'parcel2go.com');

                outputArray.push({
                  company_name: 'parcel2go.com',
                  courier_name: courier_name,
                  service_name: service_name,
                  price: item.TotalPrice,
                  deliveryTime: deliveryTime,
                  url: url
                });
              });
              res.json(outputArray);
            } else {
              res.json({error: 'no body after respond'});
            }
          })
          .catch(error => {
            res.json({error: error.message});
          });

        //   fetch('https://www.parcel2go.com/api/orders', {
        //     body: JSON.stringify({
        //       Items: [
        //         {
        //           Id: '4246ef16-b8ff-4bfc-b69a-a32e580ed599',
        //           CollectionDate: '2019-11-11T18:05:19.8547896+00:00',
        //           Parcels: [
        //             {
        //               Id: '00000000-0000-0000-0000-000000000000',
        //               Height: 10,
        //               Length: 10,
        //               EstimatedValue: 100,
        //               Weight: 10,
        //               Width: 10,
        //               DeliveryAddress: {
        //                 ContactName: 'Test',
        //                 Email: 'test@test.com',
        //                 Property: '11',
        //                 Street: 'Saville St',
        //                 Town: 'Malton',
        //                 County: 'North Yorkshire',
        //                 Postcode: 'YO17 7LL',
        //                 CountryIsoCode: 'GBR',
        //                 CountryId: 0
        //               },
        //               ContentsSummary: 'Slippers'
        //             }
        //           ],
        //           Service: 'hermes-uk-economy',
        //           CollectionAddress: {
        //             ContactName: 'Gary Wilson',
        //             Organisation: '',
        //             Email: 'g.wilson@parcel2go.com',
        //             Phone: '077777777777',
        //             Property: '1',
        //             Street: 'Raleigh Street',
        //             Locality: '',
        //             Town: 'Scarborough',
        //             County: 'North Yorkshire',
        //             Postcode: 'yo12 7jz',
        //             CountryIsoCode: 'GBR',
        //             CountryId: 0,
        //             SpecialInstructions: ''
        //           }
        //         }
        //       ],
        //       CustomerDetails: {
        //         Email: 'g.wilson@parcel2go.com',
        //         Forename: 'Gary',
        //         Surname: 'Wilson'
        //       }
        //     }),
        //     headers: {
        //       'Content-Type': 'application/json',
        //       Accept: '*/*',
        //       'User-Agent': 'insomnia/5.14.6',
        //       Authorization: `Bearer ${body.access_token}`
        //     },
        //     method: 'POST'
        //   })
        //     .then(response => response.json())
        //     .then(body => {
        //       if (body) {
        //         let outputArray = [];
        //         body.Quotes.forEach(item => {
        //           const courier_name = normalizerNames.courierName(item.Service.CourierName, 'parcel2go.com');
        //           const service_name = normalizerNames.serviceName(item.Service.Name, 'parcel2go.com');
        //           const deliveryTime = normalizerNames.deliveryTime(item.Service.Classification, 'parcel2go.com');

        //           outputArray.push({
        //             company_name: 'parcel2go.com',
        //             courier_name: courier_name,
        //             service_name: service_name,
        //             price: item.TotalPrice,
        //             deliveryTime: deliveryTime,
        //             url: url
        //           });
        //         });
        //         res.json(outputArray);
        //         // console.log(body);
        //       } else {
        //         res.json({error: 'no body after respond'});
        //       }
        //     })
        //     .catch(error => {
        //       res.json({error: error.message});
        //     });
        // } else {
        //   res.json({error: 'no body after respond'});
      }
    })
    .catch(error => {
      res.json({error: error.message});
    });
});
app.post('/api/parcelmonkey', (req, res) => {
  const {postcode_from, postcode_to, country_from, country_to, weight, width, height, length} = req.body;
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
  const url = 'https://api.parcelmonkey.co.uk/GetQuote';

  fetch(url, {
    method: 'post',
    headers: {
      apiversion: 3.3,
      userid: 308283,
      token: 'C41OK-1ZXFM-1BWGX-SKL7I-Z89NM'
    },
    body: JSON.stringify({
      origin: country_from,
      destination: country_to,
      boxes: [
        {
          weight,
          width,
          height,
          length
        }
      ],
      goods_value: 0,
      sender: {
        name: 'Rich',
        phone: '01234567890',
        address1: 'Unit 21 Tollgate',
        town: 'purfleet',
        county: 'essex',
        postcode: 'RM19 1ZY'
      },
      recipient: {
        name: 'Nicola',
        phone: '01234567890',
        email: 'nicola@example.com',
        address1: "2 Baker's Yard",
        address2: '',
        town: 'purfleet',
        county: 'essex',
        postcode: 'RM19 1ZY'
      }
    })
  })
    .then(response => response.json())
    .then(body => {
      // res.json(body);
      if (body) {
        let outputArray = [];
        body.forEach(item => {
          const courier_name = normalizerNames.courierName(item.carrier, 'parcelmonkey.co.uk');
          const service_name = normalizerNames.serviceName(item.service, 'parcelmonkey.co.uk');
          const deliveryTime = normalizerNames.deliveryTime(item.service_name, 'parcelmonkey.co.uk');
          const price = item.total_price_gross;

          outputArray.push({
            company_name: 'parcelmonkey.co.uk',
            courier_name: courier_name,
            service_name: service_name,
            price: price,
            deliveryTime: deliveryTime,
            url: 'https://www.parcelmonkey.co.uk/'
          });
        });
        res.json(outputArray);
      } else {
        res.json({error: 'no body after respond'});
      }
    })
    .catch(error => {
      res.json(error);
      console.log('Server failed to return data: ' + error);
    });
});

app.get('/api/key', function(req, res) {
  db.any('SELECT MAX(unique_search_id) FROM results')
    .then(response => res.json(response))
    .catch(error => {
      res.json({error: error.message});
    });
  // res.json({ a: "hello world" });;
});

app.post('/api/insertToDatabase', function(req, res) {
  const {
    unique_search_id,
    company_name,
    courier_name,
    courier_delivery_time,
    service_name,
    price,
    currentTime,
    url
  } = req.body;

  db.one(
    `INSERT INTO results VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8) RETURNING company_name, courier_name, courier_delivery_time, service_name, price, url`,
    [unique_search_id, company_name, courier_name, courier_delivery_time, service_name, price, url, currentTime]
  )
    //I don't need right now any response
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json({error: error.message});
    });
});

app.post('/api/results', function(req, res) {
  const {unique_search_id, company_name} = req.body;
  //I had a issue with my results as I received always full results with unique id
  //I added company_name=$2 to get data only with company_name
  //I used DISTINCT as data from parcelmonkey have duplicated entries
  db.any(
    `SELECT DISTINCT company_name,
    courier_name,
    courier_delivery_time,
    service_name,
    price, 
    url 
    FROM results WHERE unique_search_id=$1 AND company_name=$2 ORDER BY price ASC`,
    [unique_search_id, company_name]
  )
    .then(response => res.json(response))
    .catch(error => {
      res.json({error: error.message});
    });
});

app.post('/api/all_results', function(req, res) {
  const {unique_search_id} = req.body;
  //I had a issue with my results as I received always full results with unique id
  //I added company_name=$2 to get data only with company_name
  //I used DISTINCT as data from parcelmonkey have duplicated entries
  db.any(
    `SELECT DISTINCT company_name,
    courier_name,
    courier_delivery_time,
    service_name,
    price, url FROM results WHERE unique_search_id=$1 ORDER BY price ASC`,
    [unique_search_id]
  )
    .then(response => res.json(response))
    .catch(error => {
      res.json({error: error.message});
    });
});

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
