import React from 'react';
import './FooterComponent.css';

const FooterComponent = () => {
  return (
    <div className="footer">
      <p className="first-row">
        <a
          href="https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/codejam-culture-portal.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by students of Group 7 according to the task
        </a>
      </p>
      <p>
        <a
          href="https://www.youtube.com/channel/UCUgmHbk1rTFaf4GGKQ1OXfQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by The Rolling Scopes
        </a>
      </p>
      <p>Copyright @ 2019</p>
    </div>
  );
};

export default FooterComponent;
