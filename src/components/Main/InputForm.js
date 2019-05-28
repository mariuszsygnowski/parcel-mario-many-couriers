import React, { useState, useEffect } from "react";

const InputForm = props => {
  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // });
  const [inputValue, setinputValue] = useState(props.val);

  const handleChange = e => {
    props.setValue(e);
    setinputValue(e);
  };

  useEffect(() => {
    if (props.labelName === "from" || props.labelName === "to") {
      setinputValue("");
    }
  }, [props.labelName]);

  return (
    <div className={props.className}>
      <label>{props.labelName}</label>
      <input
        type={props.inputType}
        value={inputValue}
        onChange={event => handleChange(event.target.value)}
        placeholder={props.placeholder}
      />
      <p>{props.units}</p>
    </div>
  );
};

export default InputForm;
