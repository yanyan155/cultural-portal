import React from "react";
import { Link } from "react-router-dom";
import i18next from "i18next";

import TimeLineComponent from "../../components/TimeLineComponent/index";
import ListOfWorksComponent from "../../components/ListOfWorksComponent/index";
import ArchitectPageNavigationComponent from "../../components/ArchitectPageNavigationComponent/index";
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
      <Link to="/architects">Назад</Link>
      <h1>{i18next.t(`${player.path}:${player.name}`)}</h1>
      <TimeLineComponent author={player} />
      <ListOfWorksComponent author={player} />
      <ArchitectPageNavigationComponent />
    </div>
  );
};

export default Arhitect;
