import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import "./App.css";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
  };

  handleChange = ({ traget: { value, firstname } }) =>
    this.setState({ [firstname]: value });

  downloadPdf = () => {
    axios.post("/create-pdf", this.state);
  };
  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          onChange={this.handleChange}
        />
        <button onClick={this.downloadPdf}>Dowload PDF</button>
      </div>
    );
  }
}

export default App;
