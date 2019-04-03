import React, { Component } from "react";
import "./App.css";
import SingleBox from "./components/SingleBox";

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
    this.test = this.test.bind(this);
    this.sortingBy = this.sortingBy.bind(this);
    this.dynamicSort = this.dynamicSort.bind(this);
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
    const arrayToSort = this.state.quotes.p2g;
    const sortedArray = arrayToSort.sort(this.dynamicSort(e));
    this.setState({
      quotes: {
        p2g: sortedArray
      }
    });
  }

  render() {
    // console.log(this.state.quotes.p2g);
    return (
      <div>
        <button onClick={this.test}>search button</button>
        <button onClick={() => this.sortingBy("price")}>
          sort by price ascending
        </button>
        <button onClick={() => this.sortingBy("-price")}>
          sort by price descending
        </button>

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
