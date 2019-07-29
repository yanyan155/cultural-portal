import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./MainPageComponent.css";
import LanguageSelectionComponent from "../LanguageSelectionComponent";
import NavigationComponent from "../NavigationComponent";
import PortalDescriptionComponent from "../PortalDescriptionComponent";
import AuthorOfTheDayComponent from "../AuthorOfTheDayComponent";
import DeveloperTeamComponent from "../DeveloperTeamComponent";

const MainPageComponent = props => {
  return (
    <div className="container main-page">
      <LanguageSelectionComponent />
      <NavigationComponent />
      <PortalDescriptionComponent />
      <AuthorOfTheDayComponent />
      <DeveloperTeamComponent />
    </div>
  );
};

export default MainPageComponent;
