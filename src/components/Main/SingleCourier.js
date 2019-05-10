import React, { Fragment, useState, useEffect } from "react";
// import { Button, Badge } from "reactstrap";
import ServiceName from "./ServiceName";

export const SingleCourier = props => {
  useEffect(() => {
    let c = 0;
    props.result.data.forEach(res_result_data => {
      c = c + res_result_data.entries.length;
    });
    setcounter(c);
  }, [props]);

  const [counter, setcounter] = useState(0);

  return (
    <details>
      <summary>
        {props.result.courier} ({counter}) from: £
        {props.result.min_price_in_courier.toFixed(2)}
      </summary>
      <div
      // className={state.className}
      >
        <span>Service:</span>
        {props.result.data.map((res_result_data, i) => {
          {
            /* console.log("props.result.data.", res_result_data); */
          }
          {
            /* console.log(res_result_data.service_name); */
          }
          //res is object this.state.quotes.one_day[2].data, this.state.quotes.two_days[2].data...
          //example: {company_name: "interparcel", id: 17, price: "21.11"}.
          //converting numbers to have always 2 numbers after dot
          return (
            <ServiceName
              key={res_result_data.service_name}
              res_result_data={res_result_data}
            />
          );
        })}
      </div>
    </details>
  );
};
