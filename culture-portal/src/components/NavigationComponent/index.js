import React from 'react';
import { Link } from 'react-router-dom';
import byFlag from '../../assets/images/by.png';
import ruFlag from '../../assets/images/ru.png';
import enFlag from '../../assets/images/uk.png';

const Navigation = () => (
    <header>
        <h1>Архитекторы Беларуси</h1>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/">Главная</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/architects">Список архитекторов</Link>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true"
                    aria-expanded="false">Язык</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/"><img src={byFlag} width="25" height="25" alt="Belarus" /></a>
                    <a className="dropdown-item" href="/"><img src={ruFlag} width="25" height="25" alt="Russia" /></a>
                    <a className="dropdown-item" href="/"><img src={enFlag} width="25" height="25"
                        alt="United Kingdom" /></a>
                </div>
            </li>
        </ul>
    </header>
)

export default Navigation;