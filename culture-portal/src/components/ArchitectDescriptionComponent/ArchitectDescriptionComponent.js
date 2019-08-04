import React from 'react';
import i18next from 'i18next';
import './ArchitectDescriptionComponent.css';

const ArchitectDescriptionComponent = props => {
  const { author } = props;
  return (
    <div className="container description-container">
      <p>
        <img
          src={`${window.location.origin}/${author.img}`}
          alt="author"
          className="description-img"
        />
      </p>
      <h1>{i18next.t(`${author.path}:${author.name}`)}</h1>
      <h4>{i18next.t(`${author.path}:${author.date}`)}</h4>
      <p>{i18next.t(`${author.path}:${author.vita}`)}</p>
    </div>
  );
};

export default ArchitectDescriptionComponent;
