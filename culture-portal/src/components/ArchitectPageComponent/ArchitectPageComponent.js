import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import'./ArchitectPageComponent.css';
import LanguageSelectionComponent from '../LanguageSelectionComponent';
import ArchitectPageNavigationComponent from '../ArchitectPageNavigationComponent';
import ArchitectDescriptionComponent from '../ArchitectDescriptionComponent';
import TimeLineComponent from '../TimeLineComponent';
import ListOfWorksComponent from '../ListOfWorksComponent';
import YoutubeVideoComponent from '../YoutubeVideoComponent';
import WorksOfArchotectOnMapComponent from '../WorksOfArchotectOnMapComponent';
import GalleryOfWorksComponent from '../GalleryOfWorksComponent';

const ArchitectPageComponent = (props) => {
  
  return (
    <div className="container">
      ArchitectPageComponent
      <LanguageSelectionComponent />
      <ArchitectPageNavigationComponent />
      <ArchitectDescriptionComponent />
      <TimeLineComponent />
      <ListOfWorksComponent />
      <YoutubeVideoComponent />
      <WorksOfArchotectOnMapComponent />
      <GalleryOfWorksComponent />
    </div>
  )
}

export default ArchitectPageComponent;
