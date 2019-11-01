import React, {useState, useEffect} from 'react';

const InputForm = props => {
  const [inputValue, setInputValue] = useState(props.val);

  const handleChange = e => {
    props.setValue(e);
    setInputValue(e);
  };

  useEffect(() => {
    if (props.labelName === 'from' || props.labelName === 'to') {
      setInputValue('');
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
