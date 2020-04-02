import React from "react";
import { Link } from "react-router-dom";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";

// material ui
import Grid from "@material-ui/core/Grid";

const groupLinks = [
  {
    title: "Explore",
    links: [
      { name: "For Sale", path: "/investment-property" },
      { name: "Community", path: "/area" },
      { name: "Find Companies", path: "/find-companies" },
      { name: "Find Members", path: "/find-members" },
      { name: "Real Estate Forum", path: "/forum" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "Leadership", path: "/team/leadership" },
      { name: "Contact", path: "/team/contact" },
      { name: "Terms of Use", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" }
    ]
  },
  {
    title: "Insight",
    links: [
      { name: "Articles", path: "/resources/articles" },
      { name: "Webinars", path: "/resources/webinars" },
      { name: "Show", path: "/resources/show" },
      { name: "Podcast", path: "/resources/podcast" }
    ]
  },
  {
    title: "Funding",
    links: [
      { name: "Private Funding", path: "/private-funding" },
      { name: "Lenders Sign Up", path: "/lenders-sign-up" },
      { name: "Affliates", path: "/affiliates" }
    ]
  }
];

const socialLinks = [
  { name: "Facebook", icon: faFacebookSquare, url: "https://facebook.com" },
  { name: "Instagram", icon: faInstagramSquare, url: "https://instagram.com" },
  { name: "Twitter", icon: faTwitterSquare, url: "https://twitter.com" },
  { name: "Youtube", icon: faYoutubeSquare, url: "https://youtube.com" }
];

const LinkGroup = ({ title, links }) => (
  <div>
    <h4>{title}</h4>
    <ul>
      {links.map((val, key) => (
        <li key={key}>
          <Link to={val.path}>{val.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const JoinUs = () => (
  <div className="join-us">
    <h4>Join Us</h4>
    <ul>
      {socialLinks.map((value, key) => (
        <li key={key}>
          <i>
            <FontAwesomeIcon icon={value.icon} />
          </i>
          <a href={value.url} target="_default">
            {value.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <Grid item xs={12}>
      <footer>
        <section className="footer-top">
          <div className="container">
            <Grid container>
              {groupLinks.map((value, key) => (
                <Grid key={key} item xs>
                  <LinkGroup {...value} />
                </Grid>
              ))}
              <Grid item xs>
                <JoinUs />
              </Grid>
              <Grid item xs>
                <div className="footer-app">
                  <Link to="/web1">
                    <img
                      src="https://via.placeholder.com/180x360.png?text=Your%20Image%20Here"
                      title="Placeholder"
                      alt="Placeholder"
                    />
                  </Link>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
        <section className="footer-bottom">
          <div className="container">
            <Grid container>
              <Grid item xs>
                <div className="footer-bottom-left">
                  <img
                    src="https://via.placeholder.com/50x50.png?text=Logo"
                    alt="Your Logo"
                  />
                  <div>
                    Copyright &copy; Your Company {new Date().getFullYear()} All
                    rights reserved.
                    <br />
                    123 Main Street | City, State 00000
                  </div>
                </div>
              </Grid>
              <Grid item xs>
                <div className="footer-bottom-right">
                  <div className="phone-number">123-555-6789</div>
                  <div>Open Weekdays 8am - 6pm EST</div>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
      </footer>
    </Grid>
  );
};

export default Footer;
