import React from 'react';
import { Link } from 'react-router-dom';
import i18next from 'i18next';

import Flagbutton from './FlagButton';
import byFlag from '../../assets/images/by.png';
import ruFlag from '../../assets/images/ru.png';
import enFlag from '../../assets/images/uk.png';
import './HeaderComponent.css';

const Header = props => {
  const { langChange } = props;
  return (
    <header>
      <h1>{i18next.t('h1')}</h1>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            {' '}
            {i18next.t('Home')}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/architects">
            {i18next.t('Arcchitects-list')}
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="/"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {i18next.t('language')}
          </a>
          <div className="dropdown-menu">
            <Flagbutton
              lang="by"
              callback={langChange}
              flag={byFlag}
              country="Belarus"
            />
            <Flagbutton
              lang="ru"
              callback={langChange}
              flag={ruFlag}
              country="Russia"
            />
            <Flagbutton
              lang="en"
              callback={langChange}
              flag={enFlag}
              country="Great Britain"
            />
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
