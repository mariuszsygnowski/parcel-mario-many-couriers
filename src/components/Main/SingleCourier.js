import React, { useState, useEffect, useRef } from "react";
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

  const [widt, setHeight] = useState(0);
  const [a, setWid] = useState(0);
  // const reff = useRef(null);
  const re = useRef(null);

  useEffect(() => {
    // setHeight(reff.current.clientWidth);
    setWid(re.current.clientWidth);
    // console.log(widt, a);
  });
  // useEffect(() => {
  //   if (a !== 0) {
  //     props.fun(a, props.result.courier, props.k);
  //     // console.log(props.result.courier);
  //   }
  // }, [a]);
  const handleClick = e => {
    e.preventDefault();
    props.click(props.result);
  };

  return (
    <div className={props.className} onClick={handleClick}>
      <div ref={re} className={`${props.className}__label`}>
        <p>
          {props.result.courier} ({counter})
        </p>
        <p>from: £{props.result.min_price_in_courier.toFixed(2)}</p>
      </div>
      {/* <div className="singleCourier__details displayNone" ref={reff}>
        {props.result.data.map((res_result_data, i) => {
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
      </div> */}
    </div>
  );
};
