import React, { useState } from "react";
import "./accordion.scss";
import Arrow from "./arrow.svg";

const Accordion = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState("close");
  const toggle = () => {
    setExpanded(!expanded);
    setOpen(open === "close" ? "open" : "close");
  };

  return (
    <div id="accordionGroup" className="accordion">
      {/* h3 element serves as an accordion header.
      accordion header element contains a button
      that controls the visibility of its content panel. */}
      <h3>
        <button
          type="button"
          // on a button element, set to true when the Accordion panel
          // is expanded, otherwise set to false.
          aria-expanded={expanded}
          className="accordion-trigger"
          // aria-controls="ID" : points to the ID of the panel which the header controls.
          aria-controls="sect1"
          id="accordion1id"
          onClick={toggle}
        >
          <span className="accordion-title">
            {props.title}
            <span className="accordion-icon ">
              <img src={Arrow} alt="Arrow to open and close accordion" />
            </span>
          </span>
        </button>
      </h3>
      <div
        id="sect1"
        // role="region" creates a landmark region that contains
        // the currently expanded accordion panel.
        role="region"
        // - aria-labelledby="IDREF : defines the accessible name for the region element
        // - References the accordion header button that expands
        // and collapses the region.
        // - region element is required to have an accessible name
        // to be identified as a landmark.
        aria-labelledby="accordion1id"
        className={`accordion-panel ${open}`}
      >
        <ul className="content">
          {/* looks if props.content is array => map on it else display description */}
          {props.content instanceof Array ? (
            props.content.map((item) => (
              <li className="item" key={item}>
                {item}
              </li>
            ))
          ) : (
            <li className="item">{props.content}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
