import React from "react";
import { Link } from "react-router-dom";
import TimeLineComponent from "../../components/TimeLineComponent/index";
import ListOfWorksComponent from "../../components/ListOfWorksComponent/index";
import ArchitectDescriptionComponent from "../../components/ArchitectDescriptionComponent/index";

import ArchitectsAPI from "../../ArchitectsAPI";

const Arhitect = props => {
  const player = ArchitectsAPI.get(parseInt(props.match.params.number, 10));
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
      <ArchitectDescriptionComponent player={player} />
      <TimeLineComponent timeline={player.timelineData} />
      <ListOfWorksComponent works={player.work} />
    </div>
  );
};

export default Arhitect;
