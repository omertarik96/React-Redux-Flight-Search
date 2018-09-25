import React, { Component } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Form from "./components/Form";
import FlightList from "./components/List";

class App extends Component {
	render() {
		return (
			<div className="App">
				<AppHeader />
				<Form />
				<FlightList />
				{/* <header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p> */}
			</div>
		);
	}
}

export default App;
