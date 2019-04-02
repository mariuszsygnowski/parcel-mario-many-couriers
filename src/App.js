import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: {
        p2g: []
      },
      searching: ""
    };
    this.fetchCurrentBasket = this.fetchCurrentBasket.bind(this);
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

  render() {
    console.log(this.state.quotes);
    return (
      <div>
        <button onClick={this.fetchCurrentBasket}>click</button>
        <p>{this.state.searching}</p>
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
