import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkbox(props) {
  const { checked } = props;
  function onChange(event) {
    const { onChange } = this.props;
    if (onChange) onChange(event.target.checked);
  }
  return (
    <React.Fragment>
      <Checkbox
        checked={checked}
        onChange={onChange}
        value={checked}
        color="primary"
      />
    </React.Fragment>
  );
}
