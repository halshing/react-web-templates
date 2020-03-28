import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

// components
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

// styles
import "../styles/App.scss";

const App = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <HomePage />
      </Route>
      <Route path={`${path}/about`}>
        <AboutPage />
      </Route>
      <Redirect to={path} />
    </Switch>
  );
};

export default App;
