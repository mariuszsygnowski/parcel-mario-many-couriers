// const bodyParser = require("body-parser");
// const fetch = require("node-fetch");

// const client_id = "52bec26d025a4b8db2248a90da1e455a:testing";
// const client_secret = "testing123";
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const port = process.env.PORT || 8080;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
  //
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "build/index.html")));
  });
}

app.get("/api/getToken", (req, res) => {
  // fetch("https://www.parcel2go.com/auth/connect/token", {
  //   method: "POST",
  //   headers: {
  //     Accept: "*/*",
  //     "User-Agent": "insomnia/5.14.6",
  //     "Content-Type": "application/x-www-form-urlencoded"
  //   },
  //   body:
  //     "grant_type=client_credentials&scope=public-api%20payment&client_id=52bec26d025a4b8db2248a90da1e455a:testing&client_secret=testing123"
  // })
  //   .then(response => response.json())
  //   .then(body => {
  //     if (body) {
  //       // res.json(body);
  //       console.log(body.access_token);
  //       fetch("https://www.parcel2go.com/api/quotes", {
  //         body: JSON.stringify({
  //           CollectionAddress: {
  //             Country: "GBR"
  //           },
  //           DeliveryAddress: {
  //             Country: "GBR"
  //           },
  //           Parcels: [
  //             {
  //               Value: 150,
  //               Weight: 2,
  //               Length: 9,
  //               Width: 8,
  //               Height: 10
  //             }
  //           ]
  //         }),
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "*/*",
  //           "User-Agent": "insomnia/5.14.6",
  //           Authorization: `Bearer ${body.access_token}`
  //         },
  //         method: "POST"
  //       })
  //         .then(response => response.json())
  //         .then(body => {
  //           if (body) {
  //             res.json(body);
  //           } else {
  //             res.json({ error: "no body after respond" });
  //           }
  //         })
  //         .catch(error => {
  //           res.json(error);
  //           console.log("Server failed to return data: " + error);
  //         });
  //     } else {
  //       res.json({ error: "no body after respond" });
  //     }
  //   })
  //   .catch(error => {
  //     res.json(error);
  //     console.log("Server failed to return data: " + error);
  //   });
  res.json({ ok: "ok" });
});

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
