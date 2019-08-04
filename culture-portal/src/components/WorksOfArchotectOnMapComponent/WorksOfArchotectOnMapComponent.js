import React from 'react';
import i18next from "i18next";
import'./WorksOfArchotectOnMapComponent.css';

const WorksOfArchotectOnMapComponent = (props) => {
  let path = `https://www.google.com/maps/d/embed?${props.author.geovidgetLink}&hl=en`
  return (
    <div className="container text-center mb-4 pt-4 geowidget-wrap" id="map">
    	<h3 className="mb-3">{i18next.t('Map-title')}</h3>
    	<iframe title="geowidget"  src={path}></iframe>
    </div>
  )
}

export default WorksOfArchotectOnMapComponent;
