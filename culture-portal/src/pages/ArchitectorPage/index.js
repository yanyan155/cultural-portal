import React, { Component } from 'react';

import TimeLineComponent from '../../components/TimeLineComponent/index';
import ArchitectPageNavigationComponent from '../../components/ArchitectPageNavigationComponent/index';
import ListOfWorksComponent from '../../components/ListOfWorksComponent';
import YoutubeVideoComponent from '../../components/YoutubeVideoComponent';
import WorksOfArchotectOnMapComponent from '../../components/WorksOfArchotectOnMapComponent';
import ArchitectDescriptionComponent from '../../components/ArchitectDescriptionComponent/index';
import ArchitectsAPI from '../../ArchitectsAPI';
import GalleryOfWorksComponent from '../../components/GalleryOfWorksComponent';

class Architect extends Component {
  constructor(props) {
    super();
    this.author = ArchitectsAPI.get(props.match.params.name);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    if (!this.author) {
      return <div>404. Такого архитектора нет</div>;
    }
    return (
      <div>
        <ArchitectDescriptionComponent author={this.author} />
        <TimeLineComponent author={this.author} />
        <ListOfWorksComponent author={this.author} />
        <ArchitectPageNavigationComponent />
        <YoutubeVideoComponent
          videoId={this.author.videoId}
          author={this.author}
        />
        <GalleryOfWorksComponent author={this.author} />
        <WorksOfArchotectOnMapComponent author={this.author} />
      </div>
    );
  }
}

export default Architect;
