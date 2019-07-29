import React from "react";
import "./LinkToTheArchitectPageComponent.css";

const LinkToTheArchitectPageComponent = props => {
  return (
    <div className="col-sm-6">
      <div className="card">
        <p>
          <img
            className="card-img-top"
            src={`./assets/images/${props.img}`}
            alt="Архитектор дня"
          />
        </p>
        <div className="card-body">
          <h5 className="card-title">
            {props.name}
            <br /> {props.date}
          </h5>
          <p className="card-text">{props.description} </p>
          <p>
            <button className="btn btn-primary">Больше информации</button>
            <b />
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinkToTheArchitectPageComponent;
