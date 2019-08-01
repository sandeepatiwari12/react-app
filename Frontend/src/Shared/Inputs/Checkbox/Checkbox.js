import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export class CheckBox extends Component {
  onChange = event => {
    const { onChange } = this.props;
    if (onChange) onChange(event.target.checked);
  };
  render() {
    const { checked } = this.props;

    return (
      <React.Fragment>
        <Checkbox
          checked={checked}
          onChange={this.onChange(checked)}
          value={checked}
          color="primary"
        />
      </React.Fragment>
    );
  }
}

export default Checkbox;
