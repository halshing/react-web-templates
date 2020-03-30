import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

// material ui
import Grid from "@material-ui/core/Grid";

// components
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Articles from "./Articles";
import UnderConstruction from "../UnderConstruction";

const ResourcesPage = () => {
  const { path } = useRouteMatch();

  return (
    <div className="resourcespage">
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Route exact path={`${path}/articles`}>
              <Articles />
            </Route>
            <Route exact path={`${path}/find-investors`}>
              <UnderConstruction />
            </Route>
            <Route exact path={`${path}/calculators`}>
              <UnderConstruction />
            </Route>
            <Route exact path={`${path}/webinars`}>
              <UnderConstruction />
            </Route>
            <Redirect to="/web1" />
          </Switch>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default ResourcesPage;
