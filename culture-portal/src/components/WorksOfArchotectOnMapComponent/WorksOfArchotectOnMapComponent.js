import React from 'react';
import'./WorksOfArchotectOnMapComponent.css';

const WorksOfArchotectOnMapComponent = (props) => {
  let path = `https://www.google.com/maps/d/embed?${props.author.geovidgetLink}&hl=en`
  return (
    <div className="container text-center mb-4">
      <iframe title="geovidget"  src={path} width="640" height="480"></iframe>
    </div>
  )
}

export default WorksOfArchotectOnMapComponent;
