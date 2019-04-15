import React, { Component, Fragment } from "react";
import autoBind from "react-autobind";
import "./App.css";
import SingleBox from "./components/SingleBox";
import { watchFile } from "fs";
import { promised } from "q";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyResult: [],
      how_many_responses: 0,
      courierNames: ["p2g", "parcelmonkey"],
      quotes: {
        one_day: [
          // {
          //   price: "",
          //   courier: "dpd",
          //   data: [
          //     {
          //       company_name: "interparcel",
          //       id: 17,
          //       price: "21.11"
          //     },
          //     {
          //       company_name: "parcelmonkey",
          //       id: 17,
          //       price: "20.11"
          //     },
          //     {
          //       company_name: "Pd",
          //       id: 17,
          //       price: "22.41"
          //     }
          //   ]
          // },
          // {
          //   price: "",
          //   courier: "ups",
          //   data: [
          //     {
          //       company_name: "interparcel",
          //       id: 17,
          //       price: "25.11"
          //     },
          //     {
          //       company_name: "parcelmonkey",
          //       id: 17,
          //       price: "19.00"
          //     },
          //     {
          //       company_name: "Pd",
          //       id: 17,
          //       price: "24.00"
          //     }
          //   ]
          // },
          // {
          //   price: "",
          //   courier: "hermes",
          //   data: [
          //     {
          //       company_name: "interparcel",
          //       id: 17,
          //       price: "25.11"
          //     },
          //     {
          //       company_name: "parcelmonkey",
          //       id: 17,
          //       price: "22.00"
          //     },
          //     {
          //       company_name: "Pd",
          //       id: 17,
          //       price: "26.00"
          //     }
          //   ]
          // }
        ],
        two_days: [],
        over_two_days: []
      }
    };
    autoBind(this);
  }

  fetchCouriers() {
    //reset to default values results
    this.setState({
      how_many_responses: 0,
      quotes: {
        one_day: [],
        two_days: [],
        over_two_days: []
      }
    });

    //1. at the beggining I need to know unique_search_id
    //I will pass to any searches and get data from database with that id
    fetch("/api/key", {
      method: "GET"
    })
      .then(response => response.json())
      .then(bodyKey => {
        if (bodyKey) {
          //if response is positive then I set unique_search_id
          //with "highest unique id" + 1
          const unique_search_id = Number(bodyKey[0].max) + 1;
          const courierNames = [...this.state.courierNames];
          // let ar = this.state.ar;

          courierNames.forEach(courier => {
            this.state.bodyResult.push(
              this.getDataFromSingleCourier(courier, unique_search_id)
            );
          });
          // );
        } else {
          console.log("no body after respond /api/key");
        }
      })
      .catch(error => {
        console.log("Server failed to return data: " + error);
      });
  }

  getDataFromSingleCourier(courierName, unique_search_id) {
    const url = `/api/${courierName}`;
    fetch(url, {
      method: "POST"
    })
      .then(response => response.json())
      .then(bodyCourierName => {
        if (bodyCourierName) {
          // console.log(bodyCourierName);
          //if I get respond then I need to get a unique_id
          //I asking my database for highest unique_search_id

          //if response is positive then I set unique_search_id
          //with "highest unique id" + 1

          // itarate over response from bodyCourierName
          let company_name = "";
          bodyCourierName.forEach(resSingleCourier => {
            company_name = resSingleCourier.company_name;
            let deliveryTime = "";
            if (resSingleCourier.deliveryTime === "Fast") {
              deliveryTime = "one_day";
            } else if (resSingleCourier.deliveryTime === "Medium") {
              deliveryTime = "two_days";
            } else if (resSingleCourier.deliveryTime === "Slow") {
              deliveryTime = "over_two_days";
            }

            //insering into database results from resSingleCourier
            fetch("/api/insertToDatabase", {
              method: "POST",
              body: JSON.stringify({
                unique_search_id: unique_search_id,
                company_name: resSingleCourier.company_name,
                courier_name: resSingleCourier.courier_name,
                courier_delivery_time: deliveryTime,
                service_name: resSingleCourier.service_name,
                price: resSingleCourier.price
              }),
              headers: {
                "Content-Type": "application/json"
              }
            })
              .then(response => response.json())
              .then(bodySearch => {
                if (bodySearch) {
                } else {
                  console.log("no body after respond /api/insertToDatabase");
                }
              })
              .catch(error => {
                console.log("Server failed to return data: " + error);
              });
          });

          //get a results from database
          fetch("/api/results", {
            method: "POST",
            body: JSON.stringify({
              unique_search_id: unique_search_id,
              company_name: company_name
            }),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(response => response.json())
            .then(bodyResult => {
              if (bodyResult) {
                bodyResult.forEach(res => {
                  res.price = Number(res.price);
                });

                this.setState({
                  bodyResult: {
                    [courierName]: bodyResult
                  }
                });
              } else {
                console.log("no body after respond /api/results");
              }
            })
            .catch(error => {
              console.log("Server failed to return data: " + error);
            });
        } else {
          console.log(`no body after respond /api/${courierName}`);
        }
      })
      .catch(error => {
        console.log("Server failed to return data: " + error);
      });
  }

  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function(a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  sortingBy(e) {
    let output = {};
    let minPrice = 0;
    let thisStateQuotes = Object.assign({}, this.state.quotes);
    Object.entries(thisStateQuotes).forEach(item => {
      item[1].forEach(courier => {
        //sorting inside each courier via searching company

        //I always sort by "price a-z" inside each courier as
        //what is a reason to know highest price from each parcel courier
        //But even I will change my mnid is easy to add that feature
        courier.data.sort(this.dynamicSort("price"));
        minPrice = courier.data[0].price;
        courier.price = minPrice;
      });
      output = Object.assign(output, { [item[0]]: item[1] });
      // console.log(output[item[0]]);
      //sorting via each courier
      output[item[0]].sort(this.dynamicSort(e));
    });
    this.setState({
      quotes: output
    });
  }

  aaa() {
    console.log(this.state.quotes);
    this.sortingBy("price");
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.bodyResult !== this.state.bodyResult) {
      this.setState({ how_many_responses: this.state.how_many_responses + 1 });

      let bodyResult = Object.values(this.state.bodyResult)[0];
      let thisStateQuotesOne_day = [...this.state.quotes.one_day];
      let thisStateQuotesTwo_days = [...this.state.quotes.two_days];
      let thisStateQuotesOver_two_days = [...this.state.quotes.over_two_days];
      bodyResult.forEach(resBodyResult => {
        if (resBodyResult.courier_delivery_time === "one_day") {
          //looking if courier name exist in array this.state.quotes.one_day

          const dataOneDay = thisStateQuotesOne_day.find(function(ele) {
            return ele.courier === resBodyResult.courier_name;
          });

          //if exist then I just add new data
          if (dataOneDay) {
            dataOneDay.data.push({
              // id: resBodyResult.id,
              company_name: resBodyResult.company_name.toLowerCase(),
              service_name: resBodyResult.service_name.toLowerCase(),
              price: resBodyResult.price
            });
          } else {
            //if not then I crate object plus add first entry into data
            thisStateQuotesOne_day.push({
              price: resBodyResult.price,
              courier: resBodyResult.courier_name,
              data: [
                {
                  // id: resBodyResult.id,
                  company_name: resBodyResult.company_name.toLowerCase(),
                  service_name: resBodyResult.service_name.toLowerCase(),
                  price: resBodyResult.price
                }
              ]
            });
          }
        } else if (
          //I need to repeat for each delivery time
          //I can crate a array with arr=["one_day", "two_days", "over_two_days"]
          //and itarate over this array, but when I pass into function respond
          //I got an error, I tried to do new Function but still there is some issues
          //later I will do something more universal
          resBodyResult.courier_delivery_time === "two_days"
        ) {
          const dataTwoDays = thisStateQuotesTwo_days.find(function(ele) {
            return ele.courier === resBodyResult.courier_name;
          });

          if (dataTwoDays) {
            dataTwoDays.data.push({
              // id: resBodyResult.id,
              company_name: resBodyResult.company_name,
              service_name: resBodyResult.service_name.toLowerCase(),
              price: resBodyResult.price
            });
          } else {
            thisStateQuotesTwo_days.push({
              price: resBodyResult.price,
              courier: resBodyResult.courier_name,
              data: [
                {
                  // id: resBodyResult.id,
                  company_name: resBodyResult.company_name.toLowerCase(),
                  service_name: resBodyResult.service_name.toLowerCase(),
                  price: resBodyResult.price
                }
              ]
            });
          }
        } else if (resBodyResult.courier_delivery_time === "over_two_days") {
          const dataOverTwoDays = thisStateQuotesOver_two_days.find(function(
            ele
          ) {
            return ele.courier === resBodyResult.courier_name;
          });

          if (dataOverTwoDays) {
            dataOverTwoDays.data.push({
              // id: resBodyResult.id,
              company_name: resBodyResult.company_name.toLowerCase(),
              service_name: resBodyResult.service_name.toLowerCase(),
              price: resBodyResult.price
            });
          } else {
            thisStateQuotesOver_two_days.push({
              price: resBodyResult.price,
              courier: resBodyResult.courier_name,
              data: [
                {
                  // id: resBodyResult.id,
                  company_name: resBodyResult.company_name.toLowerCase(),
                  service_name: resBodyResult.service_name.toLowerCase(),
                  price: resBodyResult.price
                }
              ]
            });
          }
        }
        //to make sure that
        this.setState(
          {
            quotes: {
              one_day: thisStateQuotesOne_day,
              two_days: thisStateQuotesTwo_days,
              over_two_days: thisStateQuotesOver_two_days
            }
          },
          () => {
            this.sortingBy("price");
          }
        );
      });
      // this.sortingBy("price");
      // console.log(this.state.quotes);
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchCouriers}>search button</button>
        <button onClick={() => this.sortingBy("price")}>
          sort by price low to high
        </button>
        <button onClick={() => this.sortingBy("-price")}>
          sort by price high to low
        </button>
        <button onClick={() => this.sortingBy("courier")}>
          sort by name a-z
        </button>
        <button onClick={() => this.sortingBy("-courier")}>
          sort by name z-a
        </button>
        <button onClick={this.aaa}>aaa</button>
        <p>
          Received responses {this.state.how_many_responses}/
          {this.state.courierNames.length}
        </p>
        <p>{this.state.re}</p>
        <div className="app__singleBox">
          {Object.entries(this.state.quotes).map(item => {
            //item is array this.state.quotes.one_day, this.state.quotes.two_days...
            //example: (3) [{…}, {…}, {…}]
            //item[0] is "one_day" or "two_days"...
            //item[1] is array with data
            return (
              <div key={item[0]} className="app__days">
                <p>{item[0]}</p>
                {item[1].map(result => {
                  //result is object this.state.quotes.one_day[index], this.state.quotes.two_days[index]...
                  //example: {id: 1, price: "20.11", courier: "DPD", data: Array(3)}.

                  const resultPrice = result.price.toFixed(2);
                  return (
                    <div
                      // key={result.courier + result.data[0].id}
                      className="app_singleCurier"
                    >
                      <p>
                        <b>
                          {result.courier}, from: £{resultPrice}
                        </b>
                      </p>
                      <div className="app_singleRespond">
                        {result.data.map(res => {
                          //res is object this.state.quotes.one_day[2].data, this.state.quotes.two_days[2].data...
                          //example: {company_name: "interparcel", id: 17, price: "21.11"}.
                          const resPrice = res.price.toFixed(2);
                          return (
                            <div
                              // key={res.id}
                              className="app_singleRespond--eachCourier"
                            >
                              <p>{res.company_name}</p>
                              <p>Service: {res.service_name}</p>
                              <p>Price: £{resPrice} inc VAT</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
