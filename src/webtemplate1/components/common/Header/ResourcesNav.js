import React from "react";
import { Link } from "react-router-dom";

// components
import MenuItem from "./MenuItem";

const PopoutMenu = () => {
  return (
    <ul>
      <li>
        <Link to="/web1/resources/articles">Articles</Link>
      </li>
      <li>
        <Link to="/web1/resources/find-investors">Find Investors</Link>
      </li>
      <li>
        <Link to="/web1/resources/calculators">Calculators</Link>
      </li>
      <li>
        <Link to="/web1/resources/webinars">Webinars</Link>
      </li>
    </ul>
  );
};

const ResourcesNav = () => {
  return <MenuItem title="Resources" menu={PopoutMenu} />;
};

export default ResourcesNav;
