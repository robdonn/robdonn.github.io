import React, { Component } from "react";
import "./Header.css";

import { ReactComponent as Code } from "./SVG/code.svg";
import { ReactComponent as Vids } from "./SVG/vids.svg";
import { ReactComponent as Health } from "./SVG/health.svg";

const icons = {
  Code,
  Vids,
  Health
};

export class Header extends Component {
  state = {
    selected: null,
    sections: this.props.sections.reduce(
      (acc, curr) => ({
        ...acc,
        [curr.toLowerCase()]: {
          name: curr,
          nameLower: curr.toLowerCase()
        }
      }),
      {}
    )
  };

  handleClick = e => {
    this.setState({ selected: e.target.dataset.section });
  };

  handleClose = e => {
    e.preventDefault();
    this.setState({ selected: null });
  };

  render() {
    const { sections, selected } = this.state;
    return (
      <header className={`Header ${selected ? "selected" : ""}`}>
        <ul className="Header-list">
          {Object.values(sections).map(({ name, nameLower }) => {
            const Icon = icons[name];
            return (
              <li
                key={nameLower}
                data-section={nameLower}
                onClick={this.handleClick}
                className={`Header-list-item ${nameLower} ${
                  nameLower === selected ? "selected" : ""
                }`}
              >
                <Icon className="Header-list-logo" />
              </li>
            );
          })}
        </ul>
        <button onClick={this.handleClose} className="Header-close-button">
          Close
        </button>
      </header>
    );
  }
}
