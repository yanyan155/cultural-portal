import React from "react";
import "./ListOfArchitectsComponent.css";
import LinkToTheArchitectPageComponent from "../LinkToTheArchitectPageComponent/index";

const ListOfArchitectsComponent = props => {
  return (
    <div className="row">
      {props.authors.map((item, index) => {
        return (
          <LinkToTheArchitectPageComponent
            key={index}
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
