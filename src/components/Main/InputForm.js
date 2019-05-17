import React, { useState, useEffect } from "react";

const InputForm = props => {
  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // });
  return (
    <div
    // className={props.nameClass}
    >
      <label>
        {props.labelName}
        <input
          type={props.inputType}
          value={props.val}
          onChange={event => props.setValue(event.target.value)}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  );
};

export default InputForm;
