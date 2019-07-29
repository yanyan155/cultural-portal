import React from 'react';
import'./AuthorOfTheDayComponent.css';
import authorOfTheDay from '../../assets/images/Yury_Ananich.jpg';

const AuthorOfTheDayComponent = (props) => {
  
  return (
      <div className="col-12 col-lg-4">
        <h3> Архитектор дня </h3>
        <p><img src={authorOfTheDay} alt="Художник дня" /></p>
        <h4>Юрий Степанович Ананич</h4>
        <h5>(23 ноября 1955 — 28 февраля 2015)</h5>
        <p>Белорусский архитектор, внёсший вклад в формирование архитектурного облика современного Минска и
          других белорусских городов. Член Белорусского союза архитекторов.</p>
        <button type="button" className="btn btn-primary">Больше информации</button>
      </div>
  )
}

export default AuthorOfTheDayComponent;
