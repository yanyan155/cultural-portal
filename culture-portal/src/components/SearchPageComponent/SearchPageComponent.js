import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import'./SearchPageComponent.css';
import LanguageSelectionComponent from '../LanguageSelectionComponent';
import SeacrhComponent from '../SeacrhComponent';
import ListOfArchitectsComponent from '../ListOfArchitectsComponent';


const SearchPageComponent = (props) => {
  
  return (
    <div className="container">
      <LanguageSelectionComponent />
      <SeacrhComponent />
      <ListOfArchitectsComponent />
    </div>
  )
}

export default SearchPageComponent;
