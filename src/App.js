import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Draggable from "react-draggable";

class App extends Component {
  state = {
    activeDrags: 0
  };

  onStart = () => {
    console.log(1);
    this.setState({ activeDrags: 1 });
  };

  onStop = () => {
    this.setState({ activeDrags: 0 });
  };

  render() {
    const dragHandlers = {
      onStart: this.onStart,
      onStop: this.onStop
    };
    return (
      <div className="App">
        <div className="App-header">

          <h2>React Draggable Test</h2>
        </div>

        <Draggable {...dragHandlers}>
          <div className="box">I can be dragged anywhere</div>
        </Draggable>
      </div>
    );
  }
}

export default App;
