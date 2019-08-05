import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function InputField(props) {
  const { label, placeholder, name, fullWidth, value } = props;
  function onChange(e) {
    const { onChange } = props;
    if (onChange) onChange(e.target.value);
  }
  return (
    <React.Fragment>
      <TextField
        id={name}
        label={label}
        placeholder={placeholder}
        name={name}
        fullWidth={fullWidth}
        value={value}
        onChange={onChange}
        variant="outlined"
      />
    </React.Fragment>
  );
}
