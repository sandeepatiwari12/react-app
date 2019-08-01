import React, { Component } from 'react';
// import react router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import axios for API call
import axios from 'axios';
// import Layout component here
import Header from './Components/Layout/Header';
// import add todo component here
import AddTodo from './Components/Todo/AddTodo/AddTodo';
// import the components here
import Todos from './Components/Todo/Todos/Todos';
// import UUID to generate the random id
// import uuid from "uuid";
// import about App component
import About from './Components/Pages/About/About';
// To Show all Exercises
import Exercises from './Components/Exercise/Exercises/Exercises';
// to edit the exercise
import EditExercise from './Components/Exercise/Edit-Exercise/EditExercise';
import CreateExercise from './Components/Exercise/Create-Exercise/CreateExercise';
import CreateUser from './Components/User/Create-User/CreateUser';

export class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then(res => {
        this.setState({ todos: res.data });
      });
  }
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
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
      });
  };

  // to add new todo
  addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => {
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };

  render(props) {
    return (
      <Router>
        <div className="main-body-wrapper">
          <Header />
          <main className="mt-main">
            <div className="mt-toolbar" />
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
            <Route path="/exercises" exact component={Exercises} />
            <Route path="/edit/:id" component={EditExercise} />
            <Route path="/create" component={CreateExercise} />
            <Route path="/user" component={CreateUser} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
