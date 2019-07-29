import React from "react";
import { Switch, Route } from "react-router-dom";

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

const App = () => (
  <div>
    <Header />
    <Main />
    <FooterComponent />
  </div>
);

export default App;
