import React, { Component } from "react";
import InputRenderer from "./inputRenderer";

class InputPasser extends Component {
  state = {
    inputFalsy: 0, // falsy or undefined input
    inputArray: [0, 1, 2, 3], // array input
    inputElse: "anything else" // anything else than above
  };

  render() {
    return (
      <div>
        <InputRenderer input={this.state.inputFalsy} />
        <InputRenderer input={this.state.inputArray} />
        <InputRenderer input={this.state.inputElse} />
      </div>
    );
  }
}

export default InputPasser;

// test by updating the appropriate state elements
