import React from 'react';
import'./ArchitectDescriptionComponent.css';

const ArchitectDescriptionComponent = (props) => {

  return (
    <div className="container">
     {/* <p><img src="assets/Yury_Ananich.jpg" alt="Художник дня"></p>*/}
      <div className="container">
        <h1>{props.player.name}</h1>
        <h4>{props.player.date}</h4>
        <p>{props.player.vita}</p>
      </div>
    </div>
  )
}

export default ArchitectDescriptionComponent;
