import React from 'react';
import'./ArchitectDescriptionComponent.css';

const ArchitectDescriptionComponent = (props) => {
  return (
    <div className="container">
      <p><img src={props.player.img} /></p>
        <h1>{props.player.name}</h1>
        <h4>{props.player.date}</h4>
        <p>{props.player.vita}</p>
    </div>
  )
}

export default ArchitectDescriptionComponent;
