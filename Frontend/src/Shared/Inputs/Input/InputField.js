import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export class InputField extends Component {
  onChange = e => {
    const { onChange } = this.props;
    if (onChange) onChange(e.target.value);
  };

  render() {
    const { label, placeholder, name, fullWidth, value } = this.props;
    return (
      <React.Fragment>
        <TextField
          id={name}
          label={label}
          placeholder={placeholder}
          name={name}
          fullWidth={fullWidth}
          value={value}
          onChange={this.onChange}
          variant="outlined"
        />
      </React.Fragment>
    );
  }
}

export default InputField;
