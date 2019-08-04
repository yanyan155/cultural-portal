import React from 'react';
import i18next from 'i18next';
import idGenerator from 'react-id-generator';
import './ListOfWorksComponent.css';

const ListOfWorksComponent = props => {
  const { author } = props;
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
          {author.work.map(item => {
            return (
              <tr key={idGenerator()}>
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
