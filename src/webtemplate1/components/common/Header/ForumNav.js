import React from "react";
import { Link } from "react-router-dom";

// components
import MenuItem from "./MenuItem";

const PopoutMenu = () => {
  return (
    <ul>
      <li>
        <Link to="/web1/forum/product-reviews">Product Reviews</Link>
      </li>
      <li>
        <Link to="/web1/forum/tax-lien-investing">Tax Lien Investing</Link>
      </li>
      <li>
        <Link to="/web1/forum/general-rei">General REI</Link>
      </li>
      <li>
        <Link to="/web1/forum/training">Training</Link>
      </li>
      <li>
        <Link to="/web1/forum/private-money">Private Money</Link>
      </li>
      <li>
        <Link to="/web1/forum/finding-deals">Finding Deals</Link>
      </li>
    </ul>
  );
};

const ForumNav = () => {
  return <MenuItem title="Forum" menu={PopoutMenu} />;
};

export default ForumNav;
