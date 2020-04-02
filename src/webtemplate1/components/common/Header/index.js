import React from "react";

// material ui
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// components
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <Grid item xs={12} className="header-override">
      <AppBar position="static" className="appbar">
        <Toolbar>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={3}>
              <Logo />
            </Grid>
            <Grid item xs>
              <NavLinks />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
