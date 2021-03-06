import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SimpleTableBody from "../../../shared/tables/default-table/SimpleTableBody";

// Exercise
const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link className="btn btn-link" to={"/edit/" + props.exercise._id}>
        edit
      </Link>{" "}
      |{" "}
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </button>
    </td>
  </tr>
);

export default class Exercises extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/exercises/")
      .then(response => {
        if (response && response.data && response.data.exercises) {
          if (response.data.exercises.length > 0) {
            console.log('this is final body', response.data.exercises)
            this.setState({ exercises: response.data.exercises });
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteExercise(id) {
    axios.delete("http://localhost:4000/exercises/" + id).then(response => {
      //   console.log(response.data);
    });

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    });
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h3 className="p-10">
            Logged Exercises
            <Link to="/create" className="float-right">
              Add New
            </Link>
          </h3>
          <SimpleTableBody  data= {this.state.exercises} />
        </div>
      </React.Fragment>
    );
  }
}
