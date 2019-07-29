import React from "react";
import "./ListOfArchitectsComponent.css";
import LinkToTheArchitectPageComponent from "../LinkToTheArchitectPageComponent/index";

const ListOfArchitectsComponent = props => {
  return props.authors.map((item, index) => {
    return (
      <LinkToTheArchitectPageComponent
        key={index}
        name={item.name}
        date={item.date}
        img={item.img}
        description={item.vita}
      />
    );
  });
};

export default ListOfArchitectsComponent;
