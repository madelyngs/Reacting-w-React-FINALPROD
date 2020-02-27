import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
      people: [],
      loadFilms: false,
      loadPeople: false
    };
    this.loadPeople = this.loadPeople.bind(this);
    this.loadFilms = this.loadFilms.bind(this);
  }
  loadFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(films =>
        this.setState({
          films: films,
          loadFilms: true,
          loadPeople: false
        })
      )
      .catch(err => console.log(err));
  }
  loadPeople() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => res.json())
      .then(people =>
        this.setState({
          people: people,
          loadPeople: true,
          loadFilms: false
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.loadFilms) {
      return (
        <div>
          <Navbar loadPeople={this.loadPeople} loadFilms={this.loadFilms} />
          {this.state.films.map(film => {
            return (
              <div key={film.id}>
                <h1> {film.title} </h1>
                <p> {film.description} </p>
              </div>
            );
          })}
        </div>
      );
    } else if (this.state.loadPeople) {
      return (
        <div>
          <Navbar loadPeople={this.loadPeople} loadFilms={this.loadFilms} />
          {this.state.people.map(person => {
            return (
              <div key={person.id}>
                <h1> {person.name} </h1>
                <p> {person.age} </p>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <Navbar loadPeople={this.loadPeople} loadFilms={this.loadFilms} />;
    }
  }
}

export default App;
