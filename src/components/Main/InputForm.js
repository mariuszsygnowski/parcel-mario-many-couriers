import React, { useState, useEffect } from "react";

const InputForm = props => {
  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // });
  const [inputValue, setinputValue] = useState("");
  const handleChange = e => {
    props.setValue(e);
    setinputValue(e);
  };
  return (
    <div
    // className={props.nameClass}
    >
      <label>
        {props.labelName}
        <input
          type={props.inputType}
          value={inputValue}
          onChange={event => handleChange(event.target.value)}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  );
};

export default InputForm;
