import React, { Component } from "react";
import "./ReservationForm.css";

class ReservationForm extends Component {
  constructor( props) {
    super(props);
    this.state = {
      id: "",
      number: "",
      name: "",
      date: "",
      time: "",
    };
  }

  handleChange = (event) => {
      const {name, value} = event.target
      this.setState({[name]: value})
      this.convertNumber(event);
  };

  convertNumber = (event) => {
      if (event.target.name === 'number') {
          this.setState({number: parseInt(event.target.value)})
        }
    }

  submitForm = (event) => {
      event.preventDefault();
      const {makeReservation} = this.props
      //will need to use makereservation function here
      this.setState({id: Math.round(Math.random() * 100000)})
      makeReservation(this.state);
  };

  render() {
    return (
      <section className="form">
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={this.handleChange}
            value={this.state.name}
          ></input>
          <label htmlFor="time">Time</label>
          <input
            type="text"
            name="time"
            id="time"
            required
            onChange={this.handleChange} value={this.state.time}
          ></input>
          <label htmlFor="date">Date</label>
          <input
            type="text"
            name="date"
            id="date"
            required
            onChange={this.handleChange}
            value={this.state.date}
            placeholder="date(mm/dd)"
          ></input>
          <label htmlFor="number">Number of People</label>
          <input
            type="number"
            name="number"
            id="number"
            required
            onChange={this.handleChange}
            value={this.state.number}
          ></input>
          <button type="submit" onClick={this.submitForm}>Make Reservation</button>
        </form>
      </section>
    );
  }
}

export default ReservationForm;
