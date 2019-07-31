import React from "react";
import { Link } from "react-router-dom";
import "./LinkToTheArchitectPageComponent.css";
import i18next from 'i18next';

const LinkToTheArchitectPageComponent = props => {
  return (
    <div className="card">
      <p>
        <img className="card-img-top" src={props.img} alt="Архитектор дня" />
      </p>
      <div className="card-body">
        <h5 className="card-title">
          {i18next.t(`${props.link}:${props.name}`)}
          <br />  {i18next.t(`${props.link}:${props.date}`)}
        </h5>
        <p className="card-text"> {i18next.t(`${props.link}:${props.description}`)}</p>
        <Link to={`/architects/${props.link}`}>
          <button className="btn btn-primary">Больше информации</button>
        </Link>
      </div>
    </div>
  );
};

export default LinkToTheArchitectPageComponent;
