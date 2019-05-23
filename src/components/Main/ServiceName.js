// eslint-disable-next-line
import React from "react";
import "./ServiceName.scss";
// import { Button, Badge } from "reactstrap";

const ServiceName = props => {
  return (
    <details className="serviceName">
      <summary className="serviceName__summary">
        {props.res_result_data.service_name} (
        {props.res_result_data.entries.length}) from: £
        {props.res_result_data.min_price_service_name.toFixed(2)}
      </summary>
      <div className="serviceName__submenu">
        {props.res_result_data.entries.map(res => {
          return (
            <div key={res.id}>
              <button>
                {res.company_name} from: £{res.price.toFixed(2)}
              </button>
            </div>
          );
        })}
      </div>
    </details>
  );
};

export default ServiceName;
