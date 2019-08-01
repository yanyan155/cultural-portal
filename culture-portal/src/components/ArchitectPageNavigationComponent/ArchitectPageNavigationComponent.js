import React from "react";
import "./ArchitectPageNavigationComponent.css";
import LinkComponent from "../LinkComponent";
import { Link } from "react-router-dom";

const ArchitectPageNavigationComponent = props => {
  const classNames = [
    "fa fa-calendar-o",
    "fa fa-table",
    "fa fa-camera",
    "fa fa-youtube",
    "fa fa-globe"
  ];
  const linksForNavigation = [
    "#timeline",
    "#works-of-author",
    "#gallery",
    "#youtube-video",
    "#map"
  ];
  return (
    <div className="container navigation-menu">
      <div className="const_menu">
        <div className="btn-group-vertical">
          <Link to="/" className="link-to-homepage">
            <button className="btn btn-danger">
              <i className="fa fa-home" aria-hidden="true" />
            </button>
          </Link>
          {classNames.map((item, index) => {
            return (
              <LinkComponent
                className={item}
                key={index}
                link={linksForNavigation[index]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArchitectPageNavigationComponent;
