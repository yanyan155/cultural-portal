import React from "react";
import i18next from "i18next";
import "./ArchitectDescriptionComponent.css";

const ArchitectDescriptionComponent = props => {
  return (
    <div className="container">
      <p>
        <img
          src={`${window.location.origin}/${props.author.img}`}
          alt="author"
        />
      </p>
      <h1>{i18next.t(`${props.author.path}:${props.author.name}`)}</h1>
      <h4>{i18next.t(`${props.author.path}:${props.author.date}`)}</h4>
      <p>{i18next.t(`${props.author.path}:${props.author.vita}`)}</p>
    </div>
  );
};

export default ArchitectDescriptionComponent;
