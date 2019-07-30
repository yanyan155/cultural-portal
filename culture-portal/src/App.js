import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import i18n from "./i18n";

import Home from "./pages/MainPage";
import AllArchitects from "./pages/ArchitectsPage";
import Architect from "./pages/ArchitectorPage";
import Page404 from "./pages/Page404";
import SomePage from "./pages/SomePage";
import Header from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent/index";

const architects = () => (
  <Switch>
    <Route exact path="/architects" component={AllArchitects} />
    <Route path="/architects/:number" component={Architect} />
  </Switch>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/architects" component={architects} />
      <Route path="/somepage" component={SomePage} />
      <Route component={Page404} />
    </Switch>
  </main>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.state = { value: "ru" };
  }

  changeLanguage = function (event) {
    let target = event.target;
    if (event.target.classList.contains('flag-image')) {
      target = event.target.parentNode;
    }
    console.log("selected val is ", target.value);
    let newlang = target.value;
    this.setState({ value: newlang });
    console.log("state value is", newlang);
    i18n.changeLanguage(newlang);
  };

  render() {
    return (
      <div>
        <Header langChange={this.changeLanguage} />
        <Main />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
