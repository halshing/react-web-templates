import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

// components
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Forums from "./pages/Forums";
import Resources from "./pages/Resources";

// styles
import "../styles/App.scss";

const App = () => {
  const { path } = useRouteMatch();

  return (
    <div className="app">
      <Switch>
        <Route exact path={path}>
          <HomePage />
        </Route>
        <Route path={`${path}/forum`}>
          <Forums />
        </Route>
        <Route path={`${path}/resources`}>
          <Resources />
        </Route>
        <Route path={`${path}/login`}>
          <LoginPage />
        </Route>
        <Redirect to={path} />
      </Switch>
    </div>
  );
};

export default App;
