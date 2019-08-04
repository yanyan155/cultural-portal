import React from 'react';
import i18next from 'i18next';
import idGenerator from 'react-id-generator';
import './MemberOfTheTeamComponent.css';
import { frontmatter } from '../../authors';

const MemberOfTheTeamComponent = () => {
  const listOfDevelopers = frontmatter.authors;

  return (
    <div className="member">
      <h3>{i18next.t('Authors')}</h3>
      <div className="cub">
        <div className="cubspinner">
          {listOfDevelopers.map((item, index) => {
            return (
              <div className={`size${index + 1}`} key={idGenerator()}>
                <a
                  href={item.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.imgPath} alt="Member of The Team" />
                  <p className="developer-info">
                    {item.name}
                    {`(${item.nickname})`}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MemberOfTheTeamComponent;
