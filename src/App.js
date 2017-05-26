import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Draggable from "react-draggable";

class App extends Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    clientPosition: {
      x: 0,
      y: 0
    }
  };

  onStart = () => {
    this.setState({ activeDrags: 1 });
  };

  onStop = () => {
    this.setState({ activeDrags: 0 });
  };

  handleDrag = (event, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
    console.log(event);
    this.setState({
      clientPosition: {
        x: event.clientX,
        y: event.clientY
      }
    });
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

        <Draggable>
          <div className="box">I can be dragged anywhere</div>
        </Draggable>
        <Draggable axis="x">
          <div className="box">I can only be dragged on x axis</div>
        </Draggable>
        <Draggable axis="y">
          <div className="box">I can only be dragged on y axis</div>
        </Draggable>
        <Draggable onStart={() => false}>
          <div className="box">I can't be dragged</div>
        </Draggable>

        <Draggable onDrag={this.handleDrag}>
          <div className="box">
            <div>my deltas:</div>
            <div>
              x:
              {" "}
              {this.state.deltaPosition.x}
              , y:
              {this.state.deltaPosition.y}
            </div>
            <div>my position:</div>
            <div>
              x: {this.state.clientPosition.x}, y: {this.state.clientPosition.y}
            </div>
          </div>
        </Draggable>

      </div>
    );
  }
}

export default App;
