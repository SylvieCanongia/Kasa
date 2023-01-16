import React, { useState } from "react";
import "./collapse.scss";
import Arrow from "./arrow.svg";

const Collapse = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState("close");
  const toggle = () => {
    setExpanded(!expanded);
    setOpen(open === "close" ? "open" : "close");
  };

  return (
    <div id="collapseGroup" className="collapse">
      {/* h3 element serves as an collapse header.
      collapse header element contains a button
      that controls the visibility of its content panel. */}
      <h3>
        <button
          type="button"
          // on a button element, set to true when the collapse panel
          // is expanded, otherwise set to false.
          aria-expanded={expanded}
          className="collapse-trigger"
          // aria-controls="ID" : points to the ID of the panel which the header controls.
          aria-controls="sect1"
          id="collapse1id"
          onClick={toggle}
        >
          <span className="collapse-title">
            {props.title}
            <span className="collapse-icon ">
              <img src={Arrow} alt="Flèche pour afficher ou cacher la description" />
            </span>
          </span>
        </button>
      </h3>
      <div
        id="sect1"
        // role="region" creates a landmark region that contains
        // the currently expanded collapse panel.
        role="region"
        // - aria-labelledby="IDREF : defines the accessible name for the region element
        // - References the collapse header button that expands
        // and collapses the region.
        // - region element is required to have an accessible name
        // to be identified as a landmark.
        aria-labelledby="collapse1id"
        className={`collapse-panel ${open}`}
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

export default Collapse;
