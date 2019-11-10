import React, {useState, useEffect} from 'react';

const InputForm = props => {
  const initialInputVal = props.labelName === 'from' || props.labelName === 'to' ? '' : props.val;
  const [inputValue, setInputValue] = useState(initialInputVal);

  const handleChange = e => {
    props.setValue(e);
    setInputValue(e);
  };

  const handleFocusLeave = e => {
    if (props.labelName === 'from' || props.labelName === 'to') {
      return;
    } else {
      e === '' ? setInputValue(0) : setInputValue(props.val);
    }
  };

  return (
    <div className={props.className}>
      <label>{props.labelName}</label>
      <input
        type={props.inputType}
        value={inputValue}
        onChange={e => handleChange(e.target.value)}
        placeholder={props.placeholder}
        onBlur={e => handleFocusLeave(e.target.value)}
      />
      <p>{props.units}</p>
    </div>
  );
};

export default InputForm;
