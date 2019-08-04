import React from 'react';

import './WorksOfArchotectOnMapComponent.css';
import i18next from "i18next";
// width="640" height="480"
const WorksOfArchotectOnMapComponent = (props) => {
  let path = `https://www.google.com/maps/d/embed?${props.author.geovidgetLink}&hl=en`
  return (
    <div className="container text-center mb-4" id="map">
      <h3>{i18next.t('Map-of-works')}</h3>
      <iframe title="geowidget" src={path}></iframe>
    </div>
  )
}

export default WorksOfArchotectOnMapComponent;
