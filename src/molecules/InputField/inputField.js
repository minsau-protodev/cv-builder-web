import React, { useCallback } from 'react';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';

import './styles.css';

const InputField = ({ id, name, type, onChange, label, ...rest }) => {
  const toggleInputContainer = useCallback((evt) => {
    const input = evt.target;
    if (input.value != '') {
      input.classList.add('filled');
    } else {
      input.classList.remove('filled');
    }
    if (onChange) {
      onChange(input);
    }
  });

  const handleClickLabel = useCallback((evt) => {
    evt.target.previousElementSibling.focus();
  });

  return (
    <div className="relative">
      <Input
        id={id}
        type={type}
        name={name}
        {...rest}
        onChange={toggleInputContainer}
      />
      <Label htmlFor={id} onClick={handleClickLabel}>
        {label}
      </Label>
    </div>
  );
};
export default InputField;
