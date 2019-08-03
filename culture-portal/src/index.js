import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import App from './App';
import './assets/styles/style.css';
//  <BrowserRouter basename="/НАЗВАНИЕ РЕПОЗИТОРИЯ КОНЕЧНОГО ПОСЛЕ ЗАГРУЗКИ">, а также поменять homepage в packages.json

ReactDOM.render((
    <BrowserRouter>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </BrowserRouter>
), document.getElementById('root'))
