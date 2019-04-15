require("dotenv").config();

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
        // console.log(body.access_token);
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
                  item.Service.CourierName
                );
                const service_name = normalizerNames.serviceName(
                  item.Service.Name
                );
                const deliveryTime = normalizerNames.deliveryTime(
                  item.Service.Classification
                );

                outputArray.push({
                  company_name: "p2g",
                  courier_name: courier_name,
                  service_name: item.Service.Name,
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
          console.log(item.carrier);
          const courier_name = normalizerNames.courierName(item.carrier);
          const service_name = normalizerNames.serviceName(item.service);
          const deliveryTime = normalizerNames.deliveryTime(item.service_name);
          const price = item.total_price_gross;

          outputArray.push({
            company_name: "parcelmonkey",
            courier_name: courier_name,
            service_name: item.service,
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
  // fetch("https://api.parcelmonkey.co.uk/GetQuote", {
  //   method: "POST",
  //   headers: {
  //     apiversion: 3.1,
  //     userid: 308283,
  //     token: "4j0bGNwJgm"
  //   },
  //   body: JSON.stringify({
  //     origin: "UK",
  //     destination: "UK",
  //     boxes: [
  //       {
  //         length: 10,
  //         width: 10,
  //         height: 10,
  //         weight: 10
  //       }
  //     ],
  //     goods_value: 0,
  //     sender: {
  //       name: "Rich",
  //       phone: "01234567890",
  //       address1: "Unit 21 Tollgate",
  //       town: "purfleet",
  //       county: "essex",
  //       postcode: "RM19 1ZY"
  //     },
  //     recipient: {
  //       name: "Nicola",
  //       phone: "01234567890",
  //       email: "nicola@example.com",
  //       address1: "2 Baker's Yard",
  //       address2: "",
  //       town: "purfleet",
  //       county: "essex",
  //       postcode: "RM19 1ZY"
  //     }
  //   })
  // })
  //   .then(response => response.json())
  //   .then(body => {
  //     if (body) {
  //       console.log(body);
  //       // let outputArray = [];
  //       // body.Quotes.forEach(item => {
  //       //   const courier_name = normalizerNames.courierName(
  //       //     item.Service.CourierName
  //       //   );
  //       //   const service_name = normalizerNames.serviceName(
  //       //     item.Service.Name
  //       //   );
  //       //   const deliveryTime = normalizerNames.deliveryTime(
  //       //     item.Service.Classification
  //       //   );

  //       //   outputArray.push({
  //       //     company_name: "p2g",
  //       //     courier_name: courier_name,
  //       //     service_name: service_name,
  //       //     price: item.TotalPrice,
  //       //     deliveryTime: deliveryTime
  //       //   });
  //       // });
  //       // res.json(outputArray);
  //     }
  //   })
  //   .catch(error => {
  //     console.log("Server failed to return data: " + error);
  //   });
});

app.get("/api/key", function(req, res) {
  db.any("SELECT MAX(unique_search_id) FROM results")
    .then(response => res.json(response))
    .catch(error => {
      res.json({ error: error.message });
    });
});

app.post("/api/insertToDatabase", function(req, res) {
  const {
    unique_search_id,
    company_name,
    courier_name,
    courier_delivery_time,
    service_name,
    price
  } = req.body;

  db.one(`INSERT INTO results VALUES (DEFAULT, $1, $2, $3, $4, $5, $6)`, [
    unique_search_id,
    company_name,
    courier_name,
    courier_delivery_time,
    service_name,
    price
  ])
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json({ error: error.message });
    });
});

app.post("/api/results", function(req, res) {
  const { unique_search_id, company_name } = req.body;

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
