import React from 'react';
import { Link } from 'react-router-dom';

// Верстка примерная - убрать этот комментарий когда прикрутим наш сайт.
const Header = () => (
    // Компонент навигации 
    // Компонент выбора языка
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/architects'>Архитекторы</Link></li>
                <li><Link to='/somepage'>Страница</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header;