import React from 'react';
import { Link } from 'react-router-dom';
import idGenerator from 'react-id-generator';
import LinkComponent from '../LinkComponent';

import './ArchitectPageNavigationComponent.css';

const ArchitectPageNavigationComponent = () => {
  const classNames = [
    'fa fa-calendar-o',
    'fa fa-table',
    'fa fa-camera',
    'fa fa-youtube',
    'fa fa-globe'
  ];
  const linksForNavigation = [
    '#timeline',
    '#works-of-author',
    '#gallery',
    '#youtube-video',
    '#map'
  ];
  return (
    <div className="container navigation-menu">
      <div className="const_menu">
        <div className="btn-group-vertical">
          <Link to="/" className="link-to-homepage">
            <button type="button" className="btn btn-danger">
              <i className="fa fa-home" aria-hidden="true" />
            </button>
          </Link>
          {classNames.map((item, index) => {
            return (
              <LinkComponent
                className={item}
                key={idGenerator()}
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
