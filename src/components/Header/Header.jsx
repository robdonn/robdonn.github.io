import React, { Component } from "react";
import "./Header.css";

export class Header extends Component {
  state = {
    selected: null
  };

  handleClick = e => {
    this.setState({ selected: e.target.dataset.section });
  };

  handleClose = e => {
    e.preventDefault();
    this.setState({ selected: null });
  };

  render() {
    const { sections } = this.props;
    const { selected } = this.state;
    return (
      <header className={`Header ${selected ? "selected" : ""}`}>
        <ul className="Header-list">
          {sections.map(section => (
            <li
              key={section}
              data-section={section}
              onClick={this.handleClick}
              className={`Header-list-item ${section.toLowerCase()} ${
                section === selected ? "selected" : ""
              }`}
            >
              {section}
            </li>
          ))}
        </ul>
        <button onClick={this.handleClose} className="Header-close-button">
          Close
        </button>
      </header>
    );
  }
}
