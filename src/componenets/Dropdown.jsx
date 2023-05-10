import React, { useState } from 'react';

function Dropdown(props) {
  const [selectedOption, setSelectedOption] = useState(props.options[0]);

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
    if (props.onOptionChange) {
      props.onOptionChange(event.target.value);
    }
  }

  return (
    <select value={selectedOption} onChange={handleOptionChange} className='select'>
      {props.options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;