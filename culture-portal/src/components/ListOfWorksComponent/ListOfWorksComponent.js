import React from "react";
import "./ListOfWorksComponent.css";

const ListOfWorksComponent = props => {
  return (
    <div className="container">
      <h3>Значимые работы архитектора</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Наименование объекта</th>
            <th>Дата создания</th>
          </tr>
        </thead>
        <tbody>
          {props.works.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.title}</td>
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
