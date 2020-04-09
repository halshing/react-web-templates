import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// web templates
import WebTemplate1 from "./webtemplate1";

// components
import App from "./main/components/App";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="./web1">
          <WebTemplate1 />
        </Route>
        <Route exact path="./">
          <App />
        </Route>
        <Redirect to="./" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
