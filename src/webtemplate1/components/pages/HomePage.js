import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardConent from "@material-ui/core/CardContent";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faHouseUser,
  faSearchDollar,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";

// components
import Header from "../common/Header";
import Footer from "../common/Footer";

const InfoCard = ({ path, icon: Icon, title, subtext }) => (
  <Link component={RouterLink} to={path} className="info-card-link">
    <Card className="info-card">
      <CardConent className="info-card-content">
        <Box display="flex">
          <i>
            <Icon />
          </i>
        </Box>
        <Box display="flex">
          <h3>{title}</h3>
        </Box>
        <Box display="flex">
          <div>{subtext}</div>
        </Box>
        <Box
          display="flex"
          alignItems="flex-end"
          justifyContent="flex-end"
          height="100%"
        >
          <div className="info-card-gobtn">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </Box>
      </CardConent>
    </Card>
  </Link>
);

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <div className="hero-header-text">
              <h1>Your Company</h1>
              <h2>Delivering tailored solutions that meet your needs</h2>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="info-card-container">
            <Grid item xs>
              <InfoCard
                icon={() => <FontAwesomeIcon icon={faHouseUser} />}
                title="Private Lenders"
                subtext="A marketplace for private non-bank lenders"
                path="./web1"
              />
            </Grid>
            <Grid item xs>
              <InfoCard
                icon={() => <FontAwesomeIcon icon={faSearchDollar} />}
                title="Pre-MLS"
                subtext="Properties not available to the masses"
                path="./web1"
              />
            </Grid>
            <Grid item xs>
              <InfoCard
                icon={() => <FontAwesomeIcon icon={faHandHoldingUsd} />}
                title="Real Estate Investors"
                subtext="Connect with Real Estate Investors"
                path="./web1"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <div className="hero-header-subtext">
              <b>12,345</b> members worldwide
            </div>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <Link component={RouterLink} to="./web1" className="btnHeaderAction">
              Join Us Today
            </Link>
          </Box>
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
