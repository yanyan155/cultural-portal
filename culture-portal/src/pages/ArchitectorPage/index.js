import React, { Component } from "react";

import TimeLineComponent from "../../components/TimeLineComponent/index";
import ArchitectPageNavigationComponent from "../../components/ArchitectPageNavigationComponent/index";
import ListOfWorksComponent from "../../components/ListOfWorksComponent/";
import YoutubeVideoComponent from "../../components/YoutubeVideoComponent";
import WorksOfArchotectOnMapComponent from "../../components/WorksOfArchotectOnMapComponent";
import ArchitectDescriptionComponent from "../../components/ArchitectDescriptionComponent/index";
import ArchitectsAPI from "../../ArchitectsAPI";

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
      // сюда заимпортить страницу 404 вместо строчки ниже.
      return <div>404. Такого архитектора нет</div>;
    } else
      return (
        // Компонент навигации по странице архитекторов
        // Компонент Описания Архитектора
        // Компонент TimeLine
        // Компонент Список работ
        // Компонент Видео с ютуба
        // Компонент Карта
        // Компонент Галерея
        // Верстка примерная - убрать этот комментарий когда прикрутим наш сайт.
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
          <WorksOfArchotectOnMapComponent link={this.geovidgetLink} />
        </div>
      );
  }
}

export default Architect;
