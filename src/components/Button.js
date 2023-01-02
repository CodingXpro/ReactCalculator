// importing all libraries and files
import React, { Component } from "react";
import "../calc.css";

// creating a class components for all buttons
class Buttons extends Component {
  // handling clicks over there
  handleclicks = (event) => {
    this.props.Buttonclicked(event.target.value);
  };

  render() {
    return (
      <div className="buttons">
        {/* All the buttons in row one */}
        <div className="row1">
          <button
            className="btn btn-action"
            onClick={this.handleclicks}
            value="c"
          >
            C
          </button>
          <button
            className="btn btn-action"
            onClick={this.handleclicks}
            value="+/-"
          >
            +/-
          </button>
          <button
            className="btn btn-action"
            onClick={this.handleclicks}
            value="%"
          >
            %
          </button>
          <button
            className="btn btn-calc"
            onClick={this.handleclicks}
            value="/"
          >
            ÷
          </button>
        </div>
        {/* All the buttons in row 2 */}
        <div className="row2">
          <button className="btn" onClick={this.handleclicks} value="7">
            7
          </button>
          <button className="btn" onClick={this.handleclicks} value="8">
            8
          </button>
          <button className="btn" onClick={this.handleclicks} value="9">
            9
          </button>
          <button
            className="btn btn-calc"
            onClick={this.handleclicks}
            value="*"
          >
            x
          </button>
        </div>
        {/* All the buttons in row 3 */}
        <div className="row3">
          <button className="btn" onClick={this.handleclicks} value="4">
            4
          </button>
          <button className="btn" onClick={this.handleclicks} value="5">
            5
          </button>
          <button className="btn" onClick={this.handleclicks} value="6">
            6
          </button>
          <button
            className="btn btn-calc"
            onClick={this.handleclicks}
            value="-"
          >
            -
          </button>
        </div>
        {/* all the buttons in row 4 */}
        <div className="row4">
          <button className="btn" onClick={this.handleclicks} value="1">
            1
          </button>
          <button className="btn" onClick={this.handleclicks} value="2">
            2
          </button>
          <button className="btn" onClick={this.handleclicks} value="3">
            3
          </button>
          <button
            className="btn btn-calc"
            onClick={this.handleclicks}
            value="+"
          >
            +
          </button>
        </div>
        {/* All the buttons in row 5 */}
        <div className="row5">
          <button className=" btn-0" onClick={this.handleclicks} value="0">
            0
          </button>
          <button className="btn" onClick={this.handleclicks} value=".">
            .
          </button>
          <button
            className="btn btn-calc"
            onClick={this.handleclicks}
            value="="
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Buttons;
