import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import App from './App';
import './assets/styles/style.css';

ReactDOM.render((
    <BrowserRouter>
        <I18nextProvider basename="/cultural-portal" i18n={i18n}>
            <App />
        </I18nextProvider>
    </BrowserRouter>
), document.getElementById('root'))
