require("dotenv").config();

const fetch = require("node-fetch");
const express = require("express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const path = require("path");
const app = express();
const port = process.env.PORT || process.env.LOCAL_SERVER_PORT;

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
                outputArray.push({
                  company_name: "p2g",
                  courier_name: item.Service.CourierName,
                  service_name: item.Service.Name,
                  price: item.TotalPrice,
                  deliveryTime: item.Service.Classification
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
  const { unique_search_id } = req.body;

  db.any(`SELECT * FROM results WHERE unique_search_id=$1 ORDER BY price ASC`, [
    unique_search_id
  ])
    .then(response => res.json(response))
    .catch(error => {
      res.json({ error: error.message });
    });
});

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
