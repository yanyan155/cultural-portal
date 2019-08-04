import React, { Component } from 'react';
import i18next from 'i18next';
import { Link } from 'react-router-dom';

import './AuthorOfTheDayComponent.css';
import ArchitectsApi from '../../ArchitectsAPI';

class AuthorOfTheDayComponent extends Component {
  constructor() {
    super();
    this.author = ArchitectsApi.random();
  }

  render() {
    return (
      <div className="architect-day">
        <h3>{i18next.t(`Architect-of-day`)}</h3>
        <div className="architect-day-image">
          {console.log(this.author)}
          <img
            src={this.author.img}
            alt="author"
          />
        </div>
        <h4>{i18next.t(`${this.author.path}:${this.author.name}`)}</h4>
        <h5>{i18next.t(`${this.author.path}:${this.author.date}`)}</h5>
        <p>{i18next.t(`${this.author.path}:${this.author.vita}`)}</p>
        <Link to={`/architects/${this.author.path}`}>
          <button type="button" className="btn btn-primary">
            {i18next.t(`More`)}
          </button>
        </Link>
      </div>
    );
  }
}

export default AuthorOfTheDayComponent;
