"use strict";
require("dotenv").config();

const cheerio = require("cheerio");
const superagent = require("superagent");
const fetch = require("node-fetch");
const express = require("express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const path = require("path");
const app = express();
const port = process.env.PORT || process.env.LOCAL_SERVER_PORT;

const normalizerNames = require("./serverFiles/normalizer-names.js");

const db = pgp({
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
}

app.post("/api/p4d", (req, res) => {
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

  const url = "http://www.p4d.co.uk/go/domestic/GB/GB/10,10,10,10";
  superagent
    .get(url)
    .query()
    .end(function(err, response) {
      if (err) {
        res.json({
          confirmation: "fail",
          message: err
        });
        return;
      }
      $ = cheerio.load(response.text);

      $("#newquote-list li form .newquote-title").each(function(i, el) {
        const service_nameP4D = $(this).text();

        //.split("\n") = I split to array where each value are splited by enter key
        const service_nameArray = service_nameP4D.split("\n");
        service_nameArray.forEach((name, i) => {
          //.trim() remove white spaces
          service_nameArray[i] = name.trim();
        });

        const service_nameP4DArray = service_nameArray[1];
        const priceP4D = service_nameArray[3];

        //remove from string priceP4D all characters but not numbers
        const price = priceP4D.replace(/[^\d.-]/g, "");
        const courier_name = normalizerNames.courierNameP4D(
          service_nameP4DArray
        );
        const service_name = normalizerNames.serviceName(
          service_nameP4DArray,
          "p4d.co.uk"
        );

        outputArray[i] = Object.assign({}, outputArray[i], {
          company_name: "p4d.co.uk",
          price: price,
          service_name: service_name,
          courier_name: courier_name
        });
      });

      $(
        "#newquote-list li form  .newquote-topbox .newquote-delivery-time b"
      ).each(function(i, el) {
        const deliveryTimeP4D = $(this).text();
        const deliveryTime = normalizerNames.deliveryTime(
          deliveryTimeP4D,
          "p4d.co.uk"
        );
        outputArray[i] = Object.assign({}, outputArray[i], {
          deliveryTime
        });
      });
      res.json(outputArray);
    });
});

app.post("/api/p2g", (req, res) => {
  //now everything is hard coded but later will be passed all data
  fetch("https://www.parcel2go.com/auth/connect/token", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "User-Agent": "insomnia/5.14.6",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body:
      "grant_type=client_credentials&scope=public-api%20payment&client_id=52bec26d025a4b8db2248a90da1e455a:testing&client_secret=testing123"
  })
    .then(response => response.json())
    .then(body => {
      if (body) {
        // res.json(body);
        fetch("https://www.parcel2go.com/api/quotes", {
          body: JSON.stringify({
            CollectionAddress: {
              Country: "GBR"
            },
            DeliveryAddress: {
              Country: "GBR"
            },
            Parcels: [
              {
                Value: 0,
                Weight: 10,
                Length: 10,
                Width: 10,
                Height: 10
              }
            ]
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            "User-Agent": "insomnia/5.14.6",
            Authorization: `Bearer ${body.access_token}`
          },
          method: "POST"
        })
          .then(response => response.json())
          .then(body => {
            if (body) {
              let outputArray = [];
              body.Quotes.forEach(item => {
                const courier_name = normalizerNames.courierName(
                  item.Service.CourierName,
                  "parcel2go.com"
                );
                const service_name = normalizerNames.serviceName(
                  item.Service.Name,
                  "parcel2go.com"
                );
                const deliveryTime = normalizerNames.deliveryTime(
                  item.Service.Classification,
                  "parcel2go.com"
                );

                outputArray.push({
                  company_name: "parcel2go.com",
                  courier_name: courier_name,
                  service_name: service_name,
                  price: item.TotalPrice,
                  deliveryTime: deliveryTime
                });
              });
              res.json(outputArray);
              // console.log(body);
            } else {
              res.json({ error: "no body after respond" });
            }
          })
          .catch(error => {
            res.json({ error: error.message });
          });
      } else {
        res.json({ error: "no body after respond" });
      }
    })
    .catch(error => {
      res.json({ error: error.message });
    });
});
app.post("/api/parcelmonkey", (req, res) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
  const url = "https://api.parcelmonkey.co.uk/GetQuote";

  fetch(url, {
    method: "post",
    headers: {
      apiversion: process.env.PARCELMONKEY_APIVERSION,
      userid: process.env.PARCELMONKEY_USERID,
      token: process.env.PARCELMONKEY_TOKEN
    },
    body: JSON.stringify({
      origin: "GB",
      destination: "GB",
      boxes: [
        {
          length: 10,
          width: 10,
          height: 10,
          weight: 10
        }
      ],
      goods_value: 0,
      sender: {
        name: "Rich",
        phone: "01234567890",
        address1: "Unit 21 Tollgate",
        town: "purfleet",
        county: "essex",
        postcode: "RM19 1ZY"
      },
      recipient: {
        name: "Nicola",
        phone: "01234567890",
        email: "nicola@example.com",
        address1: "2 Baker's Yard",
        address2: "",
        town: "purfleet",
        county: "essex",
        postcode: "RM19 1ZY"
      }
    })
  })
    .then(response => response.json())
    .then(body => {
      if (body) {
        let outputArray = [];
        body.forEach(item => {
          const courier_name = normalizerNames.courierName(
            item.carrier,
            "parcelmonkey.co.uk"
          );
          const service_name = normalizerNames.serviceName(
            item.service,
            "parcelmonkey.co.uk"
          );
          const deliveryTime = normalizerNames.deliveryTime(
            item.service_name,
            "parcelmonkey.co.uk"
          );
          const price = item.total_price_gross;

          outputArray.push({
            company_name: "parcelmonkey.co.uk",
            courier_name: courier_name,
            service_name: service_name,
            price: price,
            deliveryTime: deliveryTime
          });
        });
        res.json(outputArray);
      } else {
        res.json({ error: "no body after respond" });
      }
    })
    .catch(error => {
      res.json(error);
      console.log("Server failed to return data: " + error);
    });
});

app.get("/api/key", function(req, res) {
  db.any("SELECT MAX(unique_search_id) FROM results")
    .then(response => res.json(response))
    .catch(error => {
      res.json({ error: error.message });
    });
  // res.json({ a: "hello world" });;
});

app.post("/api/insertToDatabase", function(req, res) {
  const {
    unique_search_id,
    company_name,
    courier_name,
    courier_delivery_time,
    service_name,
    price,
    currentTime
  } = req.body;

  db.one(
    `INSERT INTO results VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7) RETURNING company_name, courier_name, courier_delivery_time, service_name, price`,
    [
      unique_search_id,
      company_name,
      courier_name,
      courier_delivery_time,
      service_name,
      price,
      currentTime
    ]
  )
    //I don't need right now any response
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json({ error: error.message });
    });
});

app.post("/api/results", function(req, res) {
  const { unique_search_id, company_name } = req.body;
  //I had a issue with my results as I received always full results with unique id
  //I added company_name=$2 to get data only with company_name
  //I used DISTINCT as data from parcelmonkey have duplicated entries
  db.any(
    `SELECT DISTINCT company_name,
    courier_name,
    courier_delivery_time,
    service_name,
    price FROM results WHERE unique_search_id=$1 AND company_name=$2 ORDER BY price ASC`,
    [unique_search_id, company_name]
  )
    .then(response => res.json(response))
    .catch(error => {
      res.json({ error: error.message });
    });
});

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
