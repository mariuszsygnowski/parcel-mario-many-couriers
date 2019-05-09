import React from "react";

const InputForm = props => {
  return (
    <div
    // className={props.nameClass}
    >
      <label>
        {props.labelName}
        <input
          type="text"
          value={props.value}
          onChange={event => props.sendValue(event.target.value)}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  );
};

export default InputForm;
