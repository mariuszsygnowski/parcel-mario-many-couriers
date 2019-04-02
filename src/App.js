import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: {
        Quotes: []
      }
    };
    this.fetchCurrentBasket = this.fetchCurrentBasket.bind(this);
  }

  fetchCurrentBasket() {
    fetch("/api/getToken", {
      method: "POST"
    })
      .then(response => response.json())
      .then(body => {
        this.setState({
          orders: body
        });
        // console.log(body);
      });
  }

  render() {
    console.log(this.state.orders);
    return (
      <div>
        <button onClick={this.fetchCurrentBasket}>click</button>
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
