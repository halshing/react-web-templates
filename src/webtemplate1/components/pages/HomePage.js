import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

// components
import Header from "../common/Header";
import Footer from "../common/Footer";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs>
          <div className="hero-header-text">
            <h1>Your Company</h1>
            <h2>Delivering tailored solutions to meet your needs</h2>
          </div>
        </Grid>
        <Grid item xs>
          <div>Info Cards</div>
        </Grid>
        <Grid item xs>
          <div className="hero-header-subtext">12,345 members worldwide</div>
        </Grid>
        <Grid item xs>
          <Link component={RouterLink} to="/" className="btnHeaderAction">
            Join Us Today
          </Link>
        </Grid>
      </Grid>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="homepage">
      <Grid container>
        <Header />
        <Grid item xs={12}>
          <HeroBanner />
        </Grid>
        <Footer />
      </Grid>
    </div>
  );
};

export default HomePage;
