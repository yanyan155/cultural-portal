import React from 'react';
import SearchField from 'react-search-field';
import i18next from "i18next";

import './SeacrhComponent.css';

const SeacrhComponent = props => {
  const { onChange } = props;
  return (
    <div className="container">
      <SearchField
        placeholder={i18next.t('Search-area')}
        onChange={onChange}
        classNames="search-form"
      />
    </div>
  );
};

export default SeacrhComponent;
