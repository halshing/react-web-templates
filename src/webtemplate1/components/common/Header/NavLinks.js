import React from "react";
import { useHistory } from "react-router-dom";

// material ui
import Button from "@material-ui/core/Button";

// components
import ForumNav from "./ForumNav";
import ResourcesNav from "./ResourcesNav";

const NavLinks = () => {
  const history = useHistory();
  const goToPage = page => history.push(`/web1/${page}`);

  return (
    <div className="navlinks">
      <ForumNav />
      <Button onClick={() => goToPage("properties")}>Properties</Button>
      <ResourcesNav />
      <Button onClick={() => goToPage("login")}>Login</Button>
      <Button className="btn-signup" onClick={() => goToPage("signup")}>
        Sign Up
      </Button>
    </div>
  );
};

export default NavLinks;
