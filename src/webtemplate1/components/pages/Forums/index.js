import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

// material ui
import Grid from "@material-ui/core/Grid";

// components
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import ProductReviews from "./ProductReviews";
import TaxLienInvesting from "./TaxLienInvesting";
import UnderConstruction from "../UnderConstruction";

const ForumPage = () => {
  const { path } = useRouteMatch();

  return (
    <div className="forumpage">
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Route exact path={`${path}/product-reviews`}>
              <ProductReviews />
            </Route>
            <Route exact path={`${path}/tax-lien-investing`}>
              <TaxLienInvesting />
            </Route>
            <Route exact path={`${path}/general-rei`}>
              <UnderConstruction />
            </Route>
            <Route exact path={`${path}/training`}>
              <UnderConstruction />
            </Route>
            <Route exact path={`${path}/private-money`}>
              <UnderConstruction />
            </Route>
            <Route exact path={`${path}/finding-deals`}>
              <UnderConstruction />
            </Route>
            <Redirect to="./web1" />
          </Switch>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default ForumPage;
