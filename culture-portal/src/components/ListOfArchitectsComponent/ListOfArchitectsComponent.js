import React from 'react';
import idGenerator from 'react-id-generator';
import './ListOfArchitectsComponent.css';
import LinkToTheArchitectPageComponent from '../LinkToTheArchitectPageComponent/index';

const ListOfArchitectsComponent = props => {
  const { authors } = props;
  return (
    <div className="architect-page">
      {authors.map(item => {
        return (
          <LinkToTheArchitectPageComponent
            key={idGenerator()}
            link={item.path}
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
