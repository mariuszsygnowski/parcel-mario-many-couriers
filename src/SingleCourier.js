import React, { Fragment } from "react";
import {
  Button,
  ButtonDropdown,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import autoBind from "react-autobind";
import { ServiceName } from "./ServiceName";

export class SingleCourier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      counter: 0,
      className: "off"
    };
    autoBind(this);
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  componentWillMount() {
    let counter = 0;
    this.props.result.data.forEach((res_result_data, i) => {
      counter = counter + res_result_data.entries.length;
    });
    this.setState({ counter });
  }

  componentWillReceiveProps() {
    let counter = 0;
    this.props.result.data.forEach((res_result_data, i) => {
      counter = counter + res_result_data.entries.length;
    });
    this.setState({ counter });
  }

  className() {
    if (this.state.className === "off") {
      this.setState({ className: "on" });
    } else {
      this.setState({ className: "off" });
    }
  }

  render() {
    return (
      <Fragment>
        <Button
          color="primary"
          block
          onClick={this.className}
          // isOpen={this.state.dropdownOpen}
          // toggle={this.toggle}
        >
          {this.props.result.courier} ({this.state.counter}) from: £
          {this.props.result.min_price_in_courier.toFixed(2)}
        </Button>
        <div className={this.state.className}>
          {this.props.result.data.map((res_result_data, i) => {
            //res is object this.state.quotes.one_day[2].data, this.state.quotes.two_days[2].data...
            //example: {company_name: "interparcel", id: 17, price: "21.11"}.
            //converting numbers to have always 2 numbers after dot

            return <ServiceName res_result_data={res_result_data} />;
          })}
        </div>
      </Fragment>
    );
  }
}
