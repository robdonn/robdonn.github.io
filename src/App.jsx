import React, { Component } from "react";
import * as contentful from "contentful";
import { Header } from "./components/Header/Header";
import { SectionProvider } from "./Context/SectionContext/SectionContext";
import { Section } from "./data/Section";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.getSections();
  }
  state = {
    sections: {},
    currentSection: null
  };
  client = contentful.createClient({
    space: process.env.ROBDONN_CONTENTFUL_SPACE,
    accessToken: process.env.ROBDONN_CONTENTFUL_ACCESS_KEY
  });

  getSections = () =>
    this.client
      .getEntries({
        content_type: "section",
        order: "fields.order"
      })
      .then(entries => {
        const sections = entries.items.map(entry => new Section(entry));
        this.setState({ sections });
      });

  setCurrentSection = currentSection => {
    this.setState({ currentSection });
  };

  resetCurrentSection = () => {
    this.setState({ currentSection: null });
  };

  render() {
    return (
      <div className="App">
        <SectionProvider
          value={{
            ...this.state,
            client: this.client,
            getSections: this.getSections,
            setCurrentSection: this.setCurrentSection,
            resetCurrentSection: this.resetCurrentSection
          }}
        >
          <Header />
        </SectionProvider>
      </div>
    );
  }
}

export default App;
