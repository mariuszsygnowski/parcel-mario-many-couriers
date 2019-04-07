import React, { Component } from "react";
import "./Styles/singleBox.css";

class SingleBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.result);
    return (
      <div className="singleBox">
        <div>
          <p>{this.props.result.company_name}</p>
          <p>£{this.props.result.price}</p>
          {/* <p>{this.props.result.courier_name}</p> */}
        </div>
      </div>
    );
  }
}

export default SingleBox;
