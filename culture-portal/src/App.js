import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import i18n from './i18n';

import Home from "./pages/MainPage";
import AllArchitects from "./pages/ArchitectsPage";
import Architect from "./pages/ArchitectorPage";
import Page404 from "./pages/Page404";
import Header from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent/index";

const architects = () => (
  <Switch>
    <Route exact path="/architects" component={AllArchitects} />
    <Route path="/architects/:name" component={Architect} />
  </Switch>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/architects" component={architects} />
      <Route component={Page404} />
    </Switch>
  </main>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.state = { value: 'ru' };
  }

  componentWillMount() {
    const { value } = this.state;
    const language = localStorage.getItem('language');
    if (language && value !== language) {
      this.setState({ value: language });
      i18n.changeLanguage(language);
      localStorage.setItem('language', value);
    }
  }

  changeLanguage = event => {
    let { target } = event;
    if (event.target.classList.contains('flag-image')) {
      target = event.target.parentNode;
    }
    const newlang = target.value;
    this.setState({ value: newlang });
    i18n.changeLanguage(newlang);
    localStorage.clear();
    localStorage.setItem('language', newlang);
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
