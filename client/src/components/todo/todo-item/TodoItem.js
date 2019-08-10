import React, { Component } from 'react';
import PropTypes from 'prop-types';
// for Icon Button
import IconButton from '@material-ui/core/IconButton';
// for icons
import DeleteIcon from '@material-ui/icons/Delete';

import Checkbox from '@material-ui/core/Checkbox';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      display: 'flow-root',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <Checkbox
            checked={this.props.todo.completed}
            onChange={this.props.markComplete.bind(this, id)}
            value={this.props.todo.completed}
            color="primary"
          />
          {title}
          <IconButton
            variant="extended"
            color="secondary"
            className="float-right"
            onClick={this.props.delTodo.bind(this, id)}
          >
            <DeleteIcon />
          </IconButton>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};
export default TodoItem;
