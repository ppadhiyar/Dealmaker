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

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  downloadPdf = () => {
    axios
      .post("/create-pdf", this.state)
      .then(() => axios.get("/fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "dealmaker.pdf");
      });
  };
  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="First Name"
          name="firstname"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phonenumber"
          onChange={this.handleChange}
        />
        <button onClick={this.downloadPdf}>Dowload PDF</button>
      </div>
    );
  }
}

export default App;
