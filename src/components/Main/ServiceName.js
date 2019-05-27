import React from "react";

const ServiceName = props => {
  return (
    <div className={props.className}>
      <div className={`${props.className}__label`}>
        <p>
          {props.res_result_data.service_name} (
          {props.res_result_data.entries.length})
        </p>
        <p>from: £{props.res_result_data.min_price_service_name.toFixed(2)}</p>
      </div>
      <div className={`${props.className}__buttons`}>
        {props.res_result_data.entries.map(res => {
          return (
            <button
              className={`${props.className}__buttons__buton`}
              key={res.id}
            >
              {res.company_name} from: £{res.price.toFixed(2)}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceName;
