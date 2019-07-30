import React from "react";
import { Link } from "react-router-dom";
import TimeLineComponent from "../../components/TimeLineComponent/index";

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
      <Link to="/architects">Назад</Link>
      <h1>
        {player.name} (#{player.id})
      </h1>
      <TimeLineComponent timeline={player.timelineData} />
    </div>
  );
};

export default Arhitect;
