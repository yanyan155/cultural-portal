import React from "react";
import SearchField from "react-search-field";

import "./SeacrhComponent.css";
import i18next from "i18next";

class SeacrhComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <SearchField
          placeholder={i18next.t('Search-area')}
          onChange={this.props.onChange}
          classNames="search-form"
        />
      </div>
    );
  }
}

export default SeacrhComponent;
