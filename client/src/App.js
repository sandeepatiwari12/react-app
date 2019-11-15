import React, { Component } from 'react';
// import react router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import axios for API call
import axios from 'axios';
// import layout component here
import Header from './components/layout/Header';
// import add todo component here
import AddTodo from './components/todo/add-todo/AddTodo';
// import the components here
import Todos from './components/todo/todos/Todos';
// import UUID to generate the random id
// import uuid from "uuid";
// import about App component
import About from './components/pages/about/About';
// To Show all Exercises
import Exercises from './components/exercise/exercises/Exercises';
// to edit the exercise
import EditExercise from './components/exercise/edit-exercise/EditExercise';
import CreateExercise from './components/exercise/create-exercise/CreateExercise';
import CreateUser from './components/user/create-user/CreateUser';

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
