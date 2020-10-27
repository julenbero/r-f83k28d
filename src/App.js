import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter : 0
		};
	}

	IncrementCounter = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	render() {
		return (
			<div>
				<span className="value">{this.state.counter}</span>
				<button onClick={this.IncrementCounter} id="inc">
					Incrementa
				</button>
			</div>
		);
	}
}

export default App;
