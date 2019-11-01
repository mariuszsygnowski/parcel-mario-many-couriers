import React, {useState, useEffect, useRef} from 'react';

export const SingleCourier = props => {
  useEffect(() => {
    let c = 0;
    props.result.data.forEach(res_result_data => {
      c = c + res_result_data.entries.length;
    });
    setCounter(c);
  }, [props]);

  const [counter, setCounter] = useState(0);

  const handleClick = e => {
    e.preventDefault();
    props.click(props.result);
  };

  return (
    <div className={props.className} onClick={handleClick}>
      <div className={`${props.className}__label`}>
        <p>
          {props.result.courier} ({counter})
        </p>
        <p>from: £{props.result.min_price_in_courier.toFixed(2)}</p>
      </div>
    </div>
  );
};
