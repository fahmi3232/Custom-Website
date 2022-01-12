import React, { Component } from "react";
import SubLifesycle from "./SubLifesycle";

class Lifesycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanan: "Bakso",
      data : {},
      tampilHalamanSUb: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
          this.setState({
              data : json
          })
      });
  }

  ubahMakanan(value) {
      this.setState({
          makanan: value
      })
  }

  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        {this.state.tampilHalamanSUb && <SubLifesycle ubahMakanan={(value) => this.ubahMakanan(value)}/>}
        <button onClick={() => this.setState({tampilHalamanSUb: !this.state.tampilHalamanSUb})}>Tampilkan halaman Sub</button>
      </div>
    );
  }
}

export default Lifesycle;
