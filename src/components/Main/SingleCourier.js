import React, { useState, useEffect } from "react";
import ServiceName from "./ServiceName";
import "./SingleCourier.scss";

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
    <div className="singleCourier">
      <div className="singleCourier__label">
        <p>
          {props.result.courier} ({counter})
        </p>
        <p>from: £{props.result.min_price_in_courier.toFixed(2)}</p>
      </div>
      <div className="singleCourier__details displayNone">
        {props.result.data.map((res_result_data, i) => {
          // eslint-disable-next-line
          {
            /* console.log("props.result.data.", res_result_data); */
          }
          // eslint-disable-next-line
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
    </div>
  );
};
