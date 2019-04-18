import React, { Fragment } from "react";
import { Collapse, Button } from "reactstrap";
import autoBind from "react-autobind";

export class SingleCourier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    autoBind(this);
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render() {
    return (
      <Fragment>
        <Button color="primary" onClick={this.toggle}>
          <div className="test">
            <p>
              {this.props.result.courier} ({this.props.result.data.length})
              from: £{this.props.resultPrice}
            </p>
            <p>&#8595;</p>
          </div>
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <div className="app_singleRespond">
            {this.props.result.data.map(res => {
              //res is object this.state.quotes.one_day[2].data, this.state.quotes.two_days[2].data...
              //example: {company_name: "interparcel", id: 17, price: "21.11"}.
              //converting numbers to have always 2 numbers after dot
              const resPrice = res.price.toFixed(2);
              return (
                <div
                  key={res.company_name + res.service_name + res.price}
                  className="app_singleRespond--eachCourier"
                >
                  <p>{res.company_name}</p>
                  <p>Service: {res.service_name}</p>
                  <p>Price: £{resPrice} inc VAT</p>
                </div>
              );
            })}
          </div>
        </Collapse>
      </Fragment>
    );
  }
}
