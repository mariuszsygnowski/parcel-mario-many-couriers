import React, { Component, Fragment } from "react";
import "./App.css";
import SingleBox from "./components/SingleBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: {
        one_day: [
          {
            id: 1,
            price: "20.11",
            courier: "DPD",
            data: [
              {
                company_name: "interparcel",
                id: 17,
                price: "21.11"
              },
              {
                company_name: "p2g",
                id: 17,
                price: "23.11"
              },
              {
                company_name: "parcelmonkey",
                id: 17,
                price: "20.11"
              }
            ]
          },
          {
            id: 2,
            price: "19.00",
            courier: "UPS",
            data: [
              {
                company_name: "p2g",
                id: 17,
                price: "33.11"
              },
              {
                company_name: "interparcel",
                id: 17,
                price: "25.11"
              },
              {
                company_name: "parcelmonkey",
                id: 17,
                price: "19.00"
              },
              {
                company_name: "Pd",
                id: 17,
                price: "24.00"
              }
            ]
          },
          {
            id: 3,
            price: "22.00",
            courier: "Hermes",
            data: [
              {
                company_name: "p2g",
                id: 17,
                price: "22.11"
              },
              {
                company_name: "interparcel",
                id: 17,
                price: "25.11"
              },
              {
                company_name: "parcelmonkey",
                id: 17,
                price: "22.00"
              },
              {
                company_name: "Pd",
                id: 17,
                price: "26.00"
              }
            ]
          }
        ],
        two_days: [
          {
            id: 1,
            price: "18.11",
            courier: "DPD",
            data: [
              {
                company_name: "interparcel",
                id: 17,
                price: "20.10"
              },
              {
                company_name: "parcelmonkey",
                id: 17,
                price: "18.11"
              }
            ]
          },
          {
            id: 2,
            price: "17.55",
            courier: "UPS",
            data: [
              {
                company_name: "interparcel",
                id: 17,
                price: "23.44"
              },
              {
                company_name: "parcelmonkey",
                id: 17,
                price: "17.55"
              },
              {
                company_name: "Pd",
                id: 17,
                price: "23.00"
              }
            ]
          },
          {
            id: 3,
            price: "18.02",
            courier: "Hermes",
            data: [
              {
                company_name: "p2g",
                id: 17,
                price: "19.41"
              },
              {
                company_name: "interparcel",
                id: 17,
                price: "20.11"
              },
              {
                company_name: "parcelmonkey",
                id: 17,
                price: "18.02"
              },
              {
                company_name: "Pd",
                id: 17,
                price: "19.90"
              },
              {
                company_name: "inter",
                id: 17,
                price: "19.99"
              },
              {
                company_name: "parcelmario",
                id: 17,
                price: "21.13"
              }
            ]
          }
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
          body.forEach(result => {
            if (result.courier_delivery_time === "one_day") {
              // console.log(result);
              let obj = {
                company_name: result.company_name,
                courier: result.courier_name,
                id: result.id,
                price: result.price
              };
              console.log(obj);
              Object.values(result).forEach(item => {
                // console.log(item);
              });
              // one_day_array = [...one_day_array, result];
            } else if (result.courier_delivery_time === "two_days") {
              // console.log(result);
              // two_days_array = [...two_days_array, result];
            }
          });
          // this.setState({
          //   quotes: {
          //     one_day: one_day_array,
          //     two_days: two_days_array
          //   },
          //   searching: "found"
          // });
        } else {
          // res.json({ error: "no body after respond" });
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
    let sortedArrayData = [];
    this.state.quotes.one_day.forEach((curier, index, i) => {
      curier.data.sort(this.dynamicSort(e));
      sortedArrayData.push(this.state.quotes.one_day[index]);
    });
    // console.log(outputArray);
    const sortedArrayOneDay = sortedArrayData.sort(this.dynamicSort(e));

    this.setState({
      quotes: {
        one_day: sortedArrayOneDay
      }
    });
    // const sortedArrayOneDay = this.state.quotes.one_day.sort((a, b) =>
    //   a[0].price > b[0].price ? 1 : -1
    // );
    // console.log(sortedArrayOneDay);
    Object.values(this.state.quotes).forEach((curier, index) => {
      // console.log(curier);
      // const sortedArrayOneDay = curier.sort(this.dynamicSort(e));
      // console.log(sortedArrayOneDay);
      // this.state.quotes.one_day.sort((a, b) => (a.price > b.price ? 1 : -1));
      // curier.sort(this.dynamicSort(e));
    });

    // console.log("output", sortedObject);
    // console.log("state", this.state.quotes.one_day);
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
            console.log(item[1]);

            return (
              <div className="app__days">
                <p>{item[0]}</p>
                {item[1].map(result => {
                  return (
                    <div className="app_singleCurier">
                      <p>
                        <b>
                          {result.courier}, minimum: £{result.price}
                        </b>
                      </p>
                      {result.data.map(res => {
                        return (
                          <Fragment>
                            <SingleBox result={res} />
                          </Fragment>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}

          {/* <div>
            <p>Two days courier</p>
            {this.state.quotes.two_days.map(result => {
              return (
                <div>
                  <SingleBox key={result.id} result={result} />
                </div>
              );
            })}
          </div> */}
        </div>
        {/* <div>
          {Object.values(this.state.orders.Quotes).map((product, index) => {
            // console.log(product)
            return <Tile key={index} singleProduct={product} />;
          })}
        </div> */}
      </div>
    );
  }
}

export default App;
