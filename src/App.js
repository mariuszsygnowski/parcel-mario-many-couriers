import React, { Component } from "react";
import "./App.css";
import SingleBox from "./components/SingleBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: {
        p2g: [
          {
            company_name: "parcelmonkey",
            courier_delivery_time: "one_day",
            courier_name: "UPS",
            id: 227,
            price: "29.14",
            unique_search_id: "1aa"
          }
        ]
      },
      searching: ""
    };
    this.fetchCurrentBasket = this.fetchCurrentBasket.bind(this);
    this.test = this.test.bind(this);
  }

  fetchCurrentBasket() {
    this.setState({
      searching: "searching"
    });
    fetch("/api/getToken", {
      method: "POST"
    })
      .then(response => response.json())
      .then(body => {
        if (body) {
          this.setState({
            quotes: {
              p2g: body
            },
            searching: "found"
          });
        } else {
          // res.json({ error: "no body after respond" });
        }
      })
      .catch(error => {
        console.log("Server failed to return data: " + error);
      });
  }

  test() {
    fetch("/api/results", {
      method: "GET"
    })
      .then(response => response.json())
      .then(body => {
        if (body) {
          this.setState({
            quotes: {
              p2g: body
            },
            searching: "found"
          });
        } else {
          // res.json({ error: "no body after respond" });
        }
      })
      .catch(error => {
        console.log("Server failed to return data: " + error);
      });
  }

  render() {
    console.log(this.state.quotes);
    return (
      <div>
        <button onClick={this.test}>click</button>

        <div>
          {this.state.quotes.p2g.map(result => {
            return <SingleBox key={result.id} result={result} />;
          })}
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
