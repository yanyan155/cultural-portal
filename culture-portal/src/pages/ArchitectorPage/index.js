import React from "react";
import i18next from "i18next";

import TimeLineComponent from "../../components/TimeLineComponent/index";
import ArchitectPageNavigationComponent from "../../components/ArchitectPageNavigationComponent/index";
import ListOfWorksComponent from "../../components/ListOfWorksComponent/";
import YoutubeVideoComponent from "../../components/YoutubeVideoComponent";
import ArchitectsAPI from "../../ArchitectsAPI";

const Arhitect = props => {
  console.log(props.match.params.name);
  const player = ArchitectsAPI.get(props.match.params.name);
  if (!player) {
    // сюда заимпортить страницу 404 вместо строчки ниже.
    return <div>404. Такого архитектора нет</div>;
  }
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
      <h1>{i18next.t(`${player.path}:${player.name}`)}</h1>
      <TimeLineComponent author={player} />
      <ListOfWorksComponent author={player} />
      <ArchitectPageNavigationComponent />
      <YoutubeVideoComponent videoId={player.videoId} name={player.name} />
    </div>
  );
};

export default Arhitect;
