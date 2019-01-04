import React, { Component } from "react";
import { Header } from "./components/Header/Header";
import "./App.css";

class App extends Component {
  state = {
    sections: ["Code", "Vids", "Blog"]
  };
  render() {
    const { sections } = this.state;
    return (
      <div className="App">
        <Header sections={sections} />
      </div>
    );
  }
}

export default App;
