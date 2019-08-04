import React from 'react';
import i18next from "i18next";

import './WorksOfArchotectOnMapComponent.css';

// width="640" height="480"
const WorksOfArchotectOnMapComponent = (props) => {
  const { author } = props;
  const path = `https://www.google.com/maps/d/embed?${author.geovidgetLink}&hl=en`
  return (
    <div className="container text-center mb-4" id="map">
      <h3>{i18next.t('Map-of-works')}</h3>
      <iframe title="geowidget" src={path} />
    </div>
  );
};

export default WorksOfArchotectOnMapComponent;
