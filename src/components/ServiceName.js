import React, { Fragment } from "react";
import { Button } from "reactstrap";
import autoBind from "react-autobind";

export class ServiceName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      className: "off"
    };
    autoBind(this);
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
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
          color="info"
          block
          // isOpen={this.state.dropdownOpen}
          // toggle={this.toggle}
          //   key={res.company_name + res.service_name + res.price}
          onClick={this.className}
        >
          {this.props.res_result_data.service_name} (
          {this.props.res_result_data.entries.length}) from: £
          {this.props.res_result_data.min_price_service_name.toFixed(2)}
        </Button>
        <div className="gridGap">
          {this.props.res_result_data.entries.map((res, i) => {
            return (
              <div
                className={this.state.className}
                key={i + res.company_name + res.price}
              >
                <Button color="secondary" block>
                  {res.company_name} from: £{res.price.toFixed(2)}
                </Button>
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}
