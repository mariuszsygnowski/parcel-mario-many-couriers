import React, { Component, Fragment } from "react";
import autoBind from "react-autobind";
import "./App.css";
import SingleBox from "./components/SingleBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        two_days: [
          // {
          //   id: 1,
          //   price: "",
          //   courier: "dpd",
          //   data: [
          //     {
          //       company_name: "interparcel",
          //       id: 17,
          //       price: "20.10"
          //     },
          //     {
          //       company_name: "parcelmonkey",
          //       id: 17,
          //       price: "18.11"
          //     }
          //   ]
          // },
          // {
          //   id: 2,
          //   price: "",
          //   courier: "ups",
          //   data: [
          //     {
          //       company_name: "interparcel",
          //       id: 17,
          //       price: "23.44"
          //     },
          //     {
          //       company_name: "parcelmonkey",
          //       id: 17,
          //       price: "17.55"
          //     },
          //     {
          //       company_name: "PDP",
          //       id: 17,
          //       price: "18.61"
          //     },
          //     {
          //       company_name: "Pd",
          //       id: 17,
          //       price: "23.00"
          //     }
          //   ]
          // },
          // {
          //   id: 3,
          //   price: "",
          //   courier: "hermes",
          //   data: [
          //     {
          //       company_name: "interparcel",
          //       id: 17,
          //       price: "20.11"
          //     },
          //     {
          //       company_name: "parcelmonkey",
          //       id: 17,
          //       price: "18.02"
          //     },
          //     {
          //       company_name: "Pd",
          //       id: 17,
          //       price: "19.90"
          //     },
          //     {
          //       company_name: "inter",
          //       id: 17,
          //       price: "19.99"
          //     },
          //     {
          //       company_name: "parcelmario",
          //       id: 17,
          //       price: "21.13"
          //     }
          //   ]
          // }
        ],
        over_two_days: [
          // {
          //   id: 1,
          //   price: "",
          //   courier: "dpd",
          //   data: [
          //     {
          //       company_name: "interparcel",
          //       id: 17,
          //       price: "20.10"
          //     },
          //     {
          //       company_name: "parcelmonkey",
          //       id: 17,
          //       price: "18.11"
          //     }
          //   ]
          // },
          // {
          //   id: 2,
          //   price: "",
          //   courier: "ups",
          //   data: [
          //     {
          //       company_name: "interparcel",
          //       id: 17,
          //       price: "23.44"
          //     },
          //     {
          //       company_name: "parcelmonkey",
          //       id: 17,
          //       price: "17.55"
          //     },
          //     {
          //       company_name: "Pd",
          //       id: 17,
          //       price: "23.00"
          //     }
          //   ]
          // },
          // {
          //   id: 3,
          //   price: "",
          //   courier: "hermes",
          //   data: [
          //     {
          //       company_name: "interparcel",
          //       id: 17,
          //       price: "15.11"
          //     },
          //     {
          //       company_name: "PDP",
          //       id: 17,
          //       price: "12.61"
          //     },
          //     {
          //       company_name: "parcelmonkey",
          //       id: 17,
          //       price: "11.02"
          //     },
          //     {
          //       company_name: "Pd",
          //       id: 17,
          //       price: "12.90"
          //     },
          //     {
          //       company_name: "inter",
          //       id: 17,
          //       price: "13.99"
          //     },
          //     {
          //       company_name: "parcelmario",
          //       id: 17,
          //       price: "16.13"
          //     }
          //   ]
          // }
        ]
      }
    };
    autoBind(this);
  }

  fetchCurrentBasket() {
    fetch("/api/p2g", {
      method: "POST"
    })
      .then(response => response.json())
      .then(bodyGetP2g => {
        if (bodyGetP2g) {
          //if I get respond then I need to get a unique_id
          //I asking my database for highest unique_search_id
          fetch("/api/key", {
            method: "GET"
          })
            .then(response => response.json())
            .then(bodyKey => {
              if (bodyKey) {
                //if response is positive then I set unique_search_id
                //with "highest unique id" + 1
                const unique_search_id = Number(bodyKey[0].max) + 1;

                //itarate over response from bodyGetP2g
                bodyGetP2g.forEach(res => {
                  let deliveryTime = "";
                  if (res.Service.Classification === "Fast") {
                    deliveryTime = "one_day";
                  } else if (res.Service.Classification === "Medium") {
                    deliveryTime = "two_days";
                  } else if (res.Service.Classification === "Slow") {
                    deliveryTime = "over_two_days";
                  }

                  //insering into databas results from bodyGetP2g
                  fetch("/api/search", {
                    method: "POST",
                    body: JSON.stringify({
                      unique_search_id: unique_search_id,
                      company_name: "p2g",
                      courier_name: res.Service.CourierName,
                      courier_delivery_time: deliveryTime,
                      service_name: res.Service.Name,
                      price: res.TotalPrice
                    }),
                    headers: {
                      "Content-Type": "application/json"
                    }
                  })
                    .then(response => response.json())
                    .then(body => {
                      if (body) {
                        //get a results from database
                        fetch("/api/results", {
                          method: "POST",
                          body: JSON.stringify({
                            unique_search_id: unique_search_id
                          }),
                          headers: {
                            "Content-Type": "application/json"
                          }
                        })
                          .then(response => response.json())
                          .then(body => {
                            if (body) {
                              //reset to default values results
                              this.setState({
                                quotes: {
                                  one_day: [],
                                  two_days: [],
                                  over_two_days: []
                                }
                              });

                              //itarate over results from database
                              body.forEach(res => {
                                if (
                                  res.courier_delivery_time === "over_two_days"
                                ) {
                                  const courierName = res.courier_name.toLowerCase();

                                  //looking if courier name exist in array this.state.quotes.one_day
                                  const dataOneDay = this.state.quotes.one_day.find(
                                    function(ele) {
                                      return ele.courier === courierName;
                                    }
                                  );

                                  //if exist then I just add new data
                                  if (dataOneDay) {
                                    dataOneDay.data.push({
                                      company_name: res.company_name.toLowerCase(),
                                      service_name: res.service_name.toLowerCase(),
                                      price: res.price
                                    });
                                  } else {
                                    //if not then I crate object plus add first entry into data
                                    this.state.quotes.one_day.push({
                                      price: res.price,
                                      courier: res.courier_name.toLowerCase(),
                                      data: [
                                        {
                                          company_name: res.company_name.toLowerCase(),
                                          service_name: res.service_name.toLowerCase(),
                                          price: res.price
                                        }
                                      ]
                                    });
                                  }
                                } else if (
                                  //I need to repeat for each delivery time
                                  //I can crate a array with arr=["one_day", "two_days", "over_two_days"]
                                  //and itarate over this array, but when I pass into function respond
                                  //I got an error, I tride to do new Function but still there is some issues
                                  //later I will do something more universal
                                  res.courier_delivery_time === "two_days"
                                ) {
                                  let courierName = res.courier_name.toLowerCase();
                                  var dataTwoDays = this.state.quotes.two_days.find(
                                    function(ele) {
                                      return ele.courier === courierName;
                                    }
                                  );

                                  if (dataTwoDays) {
                                    dataTwoDays.data.push({
                                      company_name: res.company_name,
                                      service_name: res.service_name.toLowerCase(),
                                      price: res.price
                                    });
                                  } else {
                                    this.state.quotes.two_days.push({
                                      price: res.price,
                                      courier: res.courier_name.toLowerCase(),
                                      data: [
                                        {
                                          company_name: res.company_name.toLowerCase(),
                                          service_name: res.service_name.toLowerCase(),
                                          price: res.price
                                        }
                                      ]
                                    });
                                  }
                                } else if (
                                  res.courier_delivery_time === "over_two_days"
                                ) {
                                  let courierName = res.courier_name.toLowerCase();
                                  var dataOverTwoDays = this.state.quotes.over_two_days.find(
                                    function(ele) {
                                      return ele.courier === courierName;
                                    }
                                  );

                                  if (dataOverTwoDays) {
                                    dataOverTwoDays.data.push({
                                      company_name: res.company_name.toLowerCase(),
                                      service_name: res.service_name.toLowerCase(),
                                      price: res.price
                                    });
                                  } else {
                                    this.state.quotes.over_two_days.push({
                                      price: res.price,
                                      courier: res.courier_name.toLowerCase(),
                                      data: [
                                        {
                                          company_name: res.company_name.toLowerCase(),
                                          service_name: res.service_name.toLowerCase(),
                                          price: res.price
                                        }
                                      ]
                                    });
                                  }
                                }
                              });

                              //I always sort by "price a-z" inside each courier as
                              //what is a reason to know highest price from each parcel courier
                              //But even I will change my mnid is easy to add that feature
                              this.sortingBy("price");
                            } else {
                              console.log("no body after respond /api/results");
                            }
                          })
                          .catch(error => {
                            console.log(
                              "Server failed to return data: " + error
                            );
                          });
                      } else {
                        console.log("no body after respond /api/search");
                      }
                    })
                    .catch(error => {
                      console.log("Server failed to return data: " + error);
                    });
                });
              } else {
                console.log("no body after respond /api/key");
              }
            })
            .catch(error => {
              console.log("Server failed to return data: " + error);
            });
        } else {
          console.log("no body after respond /api/p2g");
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
    Object.entries(this.state.quotes).forEach(item => {
      item[1].forEach(curier => {
        //sorting inside each courier via searching company
        minPrice = curier.data[0].price;
        curier.price = minPrice;
      });
      output = Object.assign(output, { [item[0]]: item[1] });

      //sorting via each courier
      output[item[0]].sort(this.dynamicSort(e));
    });

    this.setState({
      quotes: output
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchCurrentBasket}>search button</button>
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

        <div className="app__singleBox">
          {Object.entries(this.state.quotes).map(item => {
            //item is array this.state.quotes.one_day, this.state.quotes.two_days...
            //example: (3) [{…}, {…}, {…}]
            //item[0] is "one_day" or "two_days"...
            //item[1] is array with data

            return (
              <div className="app__days">
                <p>{item[0]}</p>
                {item[1].map((result, index) => {
                  //result is object this.state.quotes.one_day[index], this.state.quotes.two_days[index]...
                  //example: {id: 1, price: "20.11", courier: "DPD", data: Array(3)}.

                  return (
                    <div className="app_singleCurier">
                      <p>
                        <b>
                          {result.courier}, from: £{result.price}
                        </b>
                      </p>
                      <div className="app_singleRespond">
                        {result.data.map(res => {
                          //res is object this.state.quotes.one_day[2].data, this.state.quotes.two_days[2].data...
                          //example: {company_name: "interparcel", id: 17, price: "21.11"}.
                          return (
                            <div className="app_singleRespond--eachCourier">
                              <p>{res.company_name}</p>
                              <p>Service: {res.service_name}</p>
                              <p>Price: £{res.price} inc VAT</p>
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
