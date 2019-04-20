import React from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import autoBind from "react-autobind";

export class SingleCourier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
    autoBind(this);
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color="primary">
          {this.props.result.courier} ({this.props.result.data.length}) from: £
          {this.props.result.price}
        </DropdownToggle>
        <DropdownMenu>
          {this.props.result.data.map(res => {
            //res is object this.state.quotes.one_day[2].data, this.state.quotes.two_days[2].data...
            //example: {company_name: "interparcel", id: 17, price: "21.11"}.
            //converting numbers to have always 2 numbers after dot

            return (
              <DropdownItem
                key={res.company_name + res.service_name + res.price}
                //   className="app_singleRespond--eachCourier"
              >
                <b>{res.company_name}</b>
                <p>Service: {res.service_name}</p>
                <p>Price: £{res.price} inc VAT</p>
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
