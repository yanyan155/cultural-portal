import React from 'react';
import { Link } from 'react-router-dom';
import i18next from 'i18next';

import logo from '../../assets/images/error.jpg';
import "../Page404Component/Page404Component.css"

const Page404 = () => (
    <div className="error-page">
        <img alt="404" src={logo} />
        <p>{i18next.t("Something-wrong")}</p>
        <p>{i18next.t("You-can-go-back")} <Link to="/">{i18next.t("Home")}</Link></p>
    </div>
)

export default Page404;