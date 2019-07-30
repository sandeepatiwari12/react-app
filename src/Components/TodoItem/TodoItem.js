import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

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
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title}
          <button
            className="btn btn-danger float-right"
            onClick={this.props.delTodo.bind(this, id)}
          >
            {' '}
            <FaTrash />
          </button>
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
