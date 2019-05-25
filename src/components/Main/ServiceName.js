// eslint-disable-next-line
import React from "react";
import "./ServiceName.scss";
// import { Button, Badge } from "reactstrap";

const ServiceName = props => {
  return (
    <div className="serviceName">
      <div className="serviceName__details">
        <div className="serviceName__details__summary">
          {props.res_result_data.service_name} (
          {props.res_result_data.entries.length}) from: £
          {props.res_result_data.min_price_service_name.toFixed(2)}
        </div>
        <div className="serviceName__details__submenu">
          {props.res_result_data.entries.map(res => {
            return (
              <div
                key={res.id}
                className="serviceName__details__submenu__buttons"
              >
                <button className="serviceName__details__submenu__buttons__button">
                  {res.company_name} from: £{res.price.toFixed(2)}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceName;
