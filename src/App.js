import React, { Component } from "react";
import randomColorPair from "./randomColor.js";
import "./App.scss";
import Header from "./Header";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pColor: randomColorPair()
    };
  }
  render() {
    return (
      <>
        <Header {...this.state.pColor} />
        <div
          style={{ backgroundColor: this.state.pColor[0] }}
          className="container"
        >
          <h4 style={{ borderColor: this.state.pColor[1], color: this.state.pColor[1] }}>{this.state.pColor[2]}  Contrast {this.state.pColor[3]}</h4>
          <p style={{ color: this.state.pColor[1] }}>
            Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</p>
        </div>
      </>
    );
  }
}

export default App;
