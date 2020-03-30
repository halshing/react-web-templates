import React from "react";
import Grid from "@material-ui/core/Grid";

// components
import Header from "../common/Header";
import Footer from "../common/Footer";

const LoginPage = () => {
  return (
    <div className="loginpage">
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <div>Login page content</div>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
