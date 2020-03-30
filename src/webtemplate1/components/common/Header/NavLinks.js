import React from "react";
import { useHistory } from "react-router-dom";

// material ui
import Button from "@material-ui/core/Button";

// components
import MenuItem from "./MenuItem";

const NavLinks = () => {
  const history = useHistory();
  const goToPage = page => history.push(`/web1/${page}`);

  return (
    <div className="navlinks">
      <MenuItem title="Forum" menu={() => <div>Forum menu</div>} />
      <Button onClick={() => goToPage("properties")}>Properties</Button>
      <MenuItem title="Resources" menu={() => <div>Resources menu</div>} />
      <Button onClick={() => goToPage("login")}>Login</Button>
      <Button className="btn-signup" onClick={() => goToPage("signup")}>
        Sign Up
      </Button>
    </div>
  );
};

export default NavLinks;
