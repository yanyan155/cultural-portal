import React from "react";
import { Link } from "react-router-dom";
import "./LinkToTheArchitectPageComponent.css";

const LinkToTheArchitectPageComponent = props => {
  return (
    <div className="card">
      <p>
        <img className="card-img-top" src={props.img} alt="Архитектор дня" />
      </p>
      <div className="card-body">
        <h5 className="card-title">
          {props.name}
          <br /> {props.date}
        </h5>
        <p className="card-text">{props.description} </p>
        <Link to={`/architects/${props.id}`}>
          <button className="btn btn-primary">Больше информации</button>
        </Link>
      </div>
    </div>
  );
};

export default LinkToTheArchitectPageComponent;
