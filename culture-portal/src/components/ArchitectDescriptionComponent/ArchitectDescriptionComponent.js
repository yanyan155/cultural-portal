import React from 'react';
import'./ArchitectDescriptionComponent.css';
import authorOfTheDay from "../../assets/images/Yury_Ananich.jpg";

const ArchitectDescriptionComponent = (props) => {
  const path = '../../assets/' + props.player.img;
  console.log(path);
  return (
    <div className="container">
      <p><img src={ authorOfTheDay} /></p>
        <h1>{props.player.name}</h1>
        <h4>{props.player.date}</h4>
        <p>{props.player.vita}</p>
    </div>
  )
}

export default ArchitectDescriptionComponent;
