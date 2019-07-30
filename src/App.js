import React, { Component } from 'react';
// import react router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Layout component here
import Header from './Components/Layout/Header';
// import add todo component here
import AddTodo from './Components/AddTodo/AddTodo';
// import the components here
import Todos from './Components/Todos/Todos';

// import UUID to generate the random id
import uuid from 'uuid';
import About from './Components/Pages/About/About';
export class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'This is the first task',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'This is the Second task',
        completed: true
      },
      {
        id: uuid.v4(),
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

  // to add new todo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
