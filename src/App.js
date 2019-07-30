import React, { Component } from 'react';

// import the components here
import Todos from './Components/Todos/Todos';
export class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'This is the first task',
        completed: false
      },
      {
        id: 2,
        title: 'This is the Second task',
        completed: true
      },
      {
        id: 3,
        title: 'This is the Third task',
        completed: false
      }
    ]
  };

  // toggle complete to todo
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // delete todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
