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
          {Object.values(sections).map(({ name, svg: { markup } }) => (
            <li
              key={name}
              data-section={name}
              onClick={this.handleClick}
              className={`Header-list-item ${name} ${
                name === selected ? "selected" : ""
              }`}
              dangerouslySetInnerHTML={{ __html: markup }}
            />
          ))}
        </ul>
        <button onClick={this.handleClose} className="Header-close-button">
          Close
        </button>
      </header>
    );
  }
}
