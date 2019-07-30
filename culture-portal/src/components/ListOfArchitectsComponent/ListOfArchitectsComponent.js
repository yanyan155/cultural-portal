import React from "react";
import "./ListOfArchitectsComponent.css";
import LinkToTheArchitectPageComponent from "../LinkToTheArchitectPageComponent/index";

const ListOfArchitectsComponent = props => {
  return (
    <div className="architect-page">
      {props.authors.map((item, index) => {
        return (
          <LinkToTheArchitectPageComponent
            key={index}
            id={item.id}
            name={item.name}
            date={item.date}
            img={item.img}
            description={item.vita}
          />
        );
      })}
    </div>
  );
};

export default ListOfArchitectsComponent;
