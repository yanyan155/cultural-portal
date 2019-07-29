import React from "react";
import SearchField from "react-search-field";

import "./SeacrhComponent.css";

const SeacrhComponent = props => {
  return (
    <div className="container">
      <SearchField
        placeholder="Enter the name of the architect"
        // onChange={onChange}
        classNames="search-form"
      />
    </div>
  );
};

export default SeacrhComponent;
