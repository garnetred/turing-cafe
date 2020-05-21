import React, { Component } from "react";
import "./App.css";
import CardContainer from "../CardContainer/CardContainer";
import ReservationForm from "../ReservationForm/ReservationForm";
class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: "",
    };
  }

  componentDidMount = async () => {
    const info = await fetch("http://localhost:3001/api/v1/reservations");
    const data = await info
      .json()
      .then((data) => this.setState({ reservations: [...data] }))
      .catch((err) => this.setState({ error: err }));
    // fetch('http://localhost:3001/api/v1/reservations')
    // .then(response => response.json())
    // .then(data => this.setState({reservations: [...data]}))
    // .catch(err => this.setState({error: err}))
  };

  makeReservation = (reservation) => {
    this.setState({ reservations: [...this.state.reservations, reservation] });
  };

  cancelReservation = (reservation) => {
    //what would you pass in here?
    //figure out which reservation has been cancelled
    const newReservations = this.state.reservations.filter(
      (appt) => appt.id !== reservation.id
    );
    this.setState({ reservations: [...newReservations] });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <ReservationForm makeReservation={this.makeReservation} />
        </div>
        <div className="resy-container">
          {/* will pass reservations to the display container
          form will need to be rendered somewhere in here
          will pass data to cards*/}
          <CardContainer data={this.state.reservations} />
        </div>
      </div>
    );
  }
}

export default App;
