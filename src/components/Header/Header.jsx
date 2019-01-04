import React from "react";
import { SectionConsumer } from "../../Context/SectionContext/SectionContext";
import "./Header.css";

export const Header = () => (
  <SectionConsumer>
    {({ sections, currentSection, setCurrentSection, resetCurrentSection }) => (
      <header className={`Header ${currentSection ? "selected" : ""}`}>
        <ul className="Header-list">
          {Object.values(sections).map(({ name, svg: { markup } }) => (
            <li
              key={name}
              data-section={name}
              onClick={() => setCurrentSection(name)}
              className={`Header-list-item ${name} ${
                name === currentSection ? "selected" : ""
              }`}
              dangerouslySetInnerHTML={{ __html: markup }}
            />
          ))}
        </ul>
        <button onClick={resetCurrentSection} className="Header-close-button">
          Close
        </button>
      </header>
    )}
  </SectionConsumer>
);
