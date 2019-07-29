import React from "react";
import SearchField from "react-search-field";

import "./SeacrhComponent.css";

class SeacrhComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <SearchField
          placeholder="Enter the name of the architect"
          onChange={this.props.onChange}
          classNames="search-form"
        />
      </div>
    );
  }
}

export default SeacrhComponent;
