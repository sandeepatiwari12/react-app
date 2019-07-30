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

  markComplete = () => {
    console.log('hello');
  };
  render() {
    return (
      <div>
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
