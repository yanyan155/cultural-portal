import React from 'react';
import './LinkComponent.css';

const LinkComponent = props => {
  const { link, className } = props;
  return (
    <a href={link} className="btn btn-primary">
      <i className={className} aria-hidden="true" />
    </a>
  );
};

export default LinkComponent;
