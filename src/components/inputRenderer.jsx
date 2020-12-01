import React, { Component } from "react";

class InputRenderer extends Component {
  state = {
    date: new Date().toLocaleDateString(), // get date and time inside
    time: new Date().toLocaleTimeString() // component upon creation
  };

  render() {
    return this.handleInput(this.props.input);
  }

  styles = {
    listStyleType: "none"
  };

  // helper function to handle all input types
  handleInput(input) {
    if (typeof input === "undefined" || !input) {
      return this.handleTime();
    } else if (input instanceof Array) {
      return (
        <div>
          <ol>
            {input.map((index) => (
              <li style={this.styles} key={index}>
                <div> {index} </div>
              </li>
            ))}
          </ol>
        </div>
      );
    } else {
      return <div> {input} </div>;
    }
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    ); //Date().toLocaleTimeString()
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // handle time separatley
  handleTime() {
    return (
      <div>
        {this.state.date} {this.state.time}
      </div>
    );
  }

  /*
  ## alternatively use react-datetime
  ##
  ## IN TERMINAL
  ## npm install react-datetime
  ## 
  ## AT TOP OF FILE
  ## import Datetime from 'react-datetime';
  ## 
  ## INSIDE handleTime() 
  ## return <Datetime />;
  */
}

export default InputRenderer;
