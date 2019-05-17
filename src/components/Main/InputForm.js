import React from "react";

const InputForm = props => {
  return (
    <div
    // className={props.nameClass}
    >
      <label>
        {props.labelName}
        <input
          value={props.val}
          onChange={event => props.setValue(event.target.value)}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  );
};

export default InputForm;
