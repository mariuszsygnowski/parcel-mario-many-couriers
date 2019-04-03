import React, { Component } from "react";

class SingleBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.result.price}</p>
        <p>{this.props.result.company_name}</p>
      </div>
    );
  }
}

export default SingleBox;
