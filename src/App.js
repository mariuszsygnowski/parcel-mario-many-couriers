import React, { Component, Fragment } from "react";
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
    // this.fetchCurrentBasket = this.fetchCurrentBasket.bind(this);
    this.test = this.test.bind(this);
    this.sortingBy = this.sortingBy.bind(this);
    this.dynamicSort = this.dynamicSort.bind(this);
  }

  // fetchCurrentBasket() {
  //   this.setState({
  //     searching: "searching"
  //   });
  //   fetch("/api/getToken", {
  //     method: "POST"
  //   })
  //     .then(response => response.json())
  //     .then(body => {
  //       if (body) {
  //         this.setState({
  //           quotes: {
  //             p2g: body
  //           },
  //           searching: "found"
  //         });
  //       } else {
  //         // res.json({ error: "no body after respond" });
  //       }
  //     })
  //     .catch(error => {
  //       console.log("Server failed to return data: " + error);
  //     });
  // }

  test() {
    fetch("/api/results", {
      method: "GET"
    })
      .then(response => response.json())
      .then(body => {
        if (body) {
          // console.log(body);
          // let one_day_array = [...this.state.quotes.one_day];
          // let two_days_array = [...this.state.quotes.two_days];
          body.forEach(res => {
            const deliveryTime = ["one_day", "two_days", "over_two_days"];
            // deliveryTime.forEach(dalivery => {

            // })
            if (res.courier_delivery_time === "one_day") {
              // console.log(res);
              const courierName = res.courier_name.toLowerCase();
              const dataOneDay = this.state.quotes.one_day.find(function(ele) {
                return ele.courier === courierName;
              });

              if (dataOneDay) {
                // console.log(dataOneDay);
                dataOneDay.data.push({
                  company_name: res.company_name.toLowerCase(),
                  price: res.price
                });
              } else {
                this.state.quotes.one_day.push({
                  price: res.price,
                  courier: res.courier_name.toLowerCase(),
                  data: [
                    {
                      company_name: res.company_name.toLowerCase(),
                      price: res.price
                    }
                  ]
                });
              }
            } else if (res.courier_delivery_time === "two_days") {
              // console.log(res);
              let courierName = res.courier_name.toLowerCase();
              var dataTwoDays = this.state.quotes.two_days.find(function(ele) {
                return ele.courier === courierName;
              });

              if (dataTwoDays) {
                // console.log(dataTwoDays);
                dataTwoDays.data.push({
                  company_name: res.company_name,
                  id: 17,
                  price: res.price
                });
              } else {
                this.state.quotes.two_days.push({
                  price: res.price,
                  courier: res.courier_name.toLowerCase(),
                  data: [
                    {
                      company_name: res.company_name.toLowerCase(),
                      price: res.price
                    }
                  ]
                });
              }
            } else if (res.courier_delivery_time === "over_two_days") {
              // console.log(res);
              let courierName = res.courier_name.toLowerCase();
              var dataOverTwoDays = this.state.quotes.over_two_days.find(
                function(ele) {
                  return ele.courier === courierName;
                }
              );

              if (dataOverTwoDays) {
                // console.log(data);
                dataOverTwoDays.data.push({
                  company_name: res.company_name.toLowerCase(),
                  id: 17,
                  price: res.price
                });
              } else {
                this.state.quotes.over_two_days.push({
                  price: res.price,
                  courier: res.courier_name.toLowerCase(),
                  data: [
                    {
                      company_name: res.company_name.toLowerCase(),
                      price: res.price
                    }
                  ]
                });
              }
            }
          });

          this.sortingBy("price");
          console.log(this.state.quotes);
        } else {
          console.log("no body after respond /api/results");
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

        //sorting always inside courier by price from low to high
        curier.data.sort(this.dynamicSort("price"));
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
        <button onClick={this.test}>search button</button>
        <button onClick={() => this.sortingBy("price")}>
          sort by price ascending
        </button>
        <button onClick={() => this.sortingBy("-price")}>
          sort by price descending
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
                      <div>
                        {result.data.map(res => {
                          //res is object this.state.quotes.one_day[2].data, this.state.quotes.two_days[2].data...
                          //example: {company_name: "interparcel", id: 17, price: "21.11"}.
                          return (
                            <div>
                              <p>{res.company_name}</p>
                              <p>£{res.price}</p>
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
