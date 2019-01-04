import React, { Component } from "react";
import * as contentful from "contentful";
import { Header } from "./components/Header/Header";
import { Section } from "./data/Section";
import "./App.css";

class App extends Component {
  state = {
    sections: {}
  };

  componentDidMount() {
    const client = contentful.createClient({
      space: process.env.ROBDONN_CONTENTFUL_SPACE,
      accessToken: process.env.ROBDONN_CONTENTFUL_ACCESS_KEY
    });

    client
      .getEntries({
        content_type: "section",
        order: "fields.order"
      })
      .then(entries => {
        const sections = entries.items.map(entry => new Section(entry));
        this.setState({ sections });
      });
  }
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
