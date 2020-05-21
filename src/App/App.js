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
  };

  makeReservation = (reservation) => {
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservation),
    };

    fetch("http://localhost:3001/api/v1/reservations", requestOptions)
      .then((response) => response.json())
      .then((result) =>
        this.setState({ reservations: [...this.state.reservations, result] })
      )
      .catch((error) => console.log("error", error));
  };

  cancelReservation = (event) => {
    const { id } = event.target;
    let requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => this.setState({ reservations: [...result] }))
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <main>
          <div className="resy-form">
            <ReservationForm makeReservation={this.makeReservation} />
          </div>
          <div className="resy-container">
            <CardContainer
              data={this.state.reservations}
              cancelReservation={this.cancelReservation}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
