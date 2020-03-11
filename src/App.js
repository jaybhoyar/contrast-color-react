import React, { Component } from "react";
import randomColor from "./randomColor.js";
import "./App.scss";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pColor: randomColor()
		};
		console.log(this.state.pColor);
	}
	render() {
		return (
			<>
				<div
					style={{ backgroundColor: this.state.pColor }}
					className="container"
				>
					<p style={{ color: this.state.pColor }}>vbej</p>
				</div>
			</>
		);
	}
}

export default App;
