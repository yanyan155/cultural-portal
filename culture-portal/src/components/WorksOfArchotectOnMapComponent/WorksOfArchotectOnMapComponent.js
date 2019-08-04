import React from 'react';
import './WorksOfArchotectOnMapComponent.css';

const WorksOfArchotectOnMapComponent = props => {
  const { author } = props;
  const path = `https://www.google.com/maps/d/embed?${author.geovidgetLink}&hl=en`;
  return (
    <div className="container text-center mb-4" id="map">
      <iframe title="geowidget" src={path} />
    </div>
  );
};

export default WorksOfArchotectOnMapComponent;
