import React, { Component } from "react";
import PortalDescriptionComponent from "../../components/PortalDescriptionComponent/index";

class Home extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <PortalDescriptionComponent />
      </div>
    );
  }
}

export default Home;
