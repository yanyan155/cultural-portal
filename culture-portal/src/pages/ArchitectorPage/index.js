import React from 'react';
import { Link } from 'react-router-dom';

import ArchitectsAPI from '../../ArchitectsAPI';

const Arhitect = (props) => {
    const player = ArchitectsAPI.get(
        parseInt(props.match.params.number, 10)
    )
    if (!player) {
        // сюда заимпортить страницу 404 вместо строчки ниже.
        return <div>404. Такого архитектора нет</div>
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
            <h1>{player.name} (#{player.number})</h1>
            <Link to='/architects'>Назад</Link>
        </div>
    )
}

export default Arhitect;
