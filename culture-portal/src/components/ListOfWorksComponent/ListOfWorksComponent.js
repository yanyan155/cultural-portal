import React from "react";
import i18next from "i18next";

import "./ListOfWorksComponent.css";

const ListOfWorksComponent = props => {
  return (
    <div className="container" id="works-of-author">
      <h3>{i18next.t('Important-works')}</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>{i18next.t('Building-name')}</th>
            <th>{i18next.t('Built date')}</th>
          </tr>
        </thead>
        <tbody>
          {props.author.work.map((item, index) => {
            return (
              <tr key={index}>
                <td>{i18next.t(`${props.author.path}:${item.title}`)}</td>
                <td>{item.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfWorksComponent;
