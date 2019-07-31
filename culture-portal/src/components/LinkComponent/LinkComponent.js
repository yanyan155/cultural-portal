import React from "react";
import "./LinkComponent.css";

const LinkComponent = props => {
  return (
    <a href={props.link} className="btn btn-primary">
      <i className={props.className} aria-hidden="true" />
    </a>
  );
};

export default LinkComponent;
