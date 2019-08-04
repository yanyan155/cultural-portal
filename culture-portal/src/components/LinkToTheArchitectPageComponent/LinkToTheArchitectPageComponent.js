import React from 'react';
import { Link } from 'react-router-dom';
import i18next from 'i18next';

import './LinkToTheArchitectPageComponent.css';

const LinkToTheArchitectPageComponent = props => {
  const { img, name, date, link, description } = props;
  return (
    <div className="card">
      <p>
        <img className="card-img-top" src={img} alt={i18next.t(`Architect`)} />
      </p>
      <div className="card-body">
        <h5 className="card-title">
          {i18next.t(`${link}:${name}`)}
          <br /> {i18next.t(`${link}:${date}`)}
        </h5>
        <p className="card-text"> {i18next.t(`${link}:${description}`)}</p>
        <Link to={`/architects/${link}`}>
          <button type="button" className="btn btn-primary">
            {i18next.t('More')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LinkToTheArchitectPageComponent;
