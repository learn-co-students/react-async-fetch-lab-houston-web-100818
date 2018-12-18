import React, { Component } from "react";
import Greeting from "./components/Greeting";

export default class App extends Component {
  fetchData() {
    fetch("http://api.open-notify.org/astros.json").then(response => {
      return response.json();
    });
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return <Greeting />;
  }
}
