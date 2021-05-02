import React from "react";
import { Link } from "@material-ui/core";
import Styles from "./Style";

const Footer = () => {
  const classes = Styles();
  return (
    <div className={classes.about}>
      <footer className={classes.footer}>
        <Link target="_blank" rel="noopener" href="#">
          About
        </Link>
        <Link target="_blank" rel="noopener" href="#">
          Privacy & Term
        </Link>
        <Link target="_blank" rel="noopener" href="#">
          Advertising
        </Link>
        <Link target="_blank" rel="noopener" href="#">
          More
        </Link>
        RefMe Corporation &copy;{new Date().getUTCFullYear()}
      </footer>
    </div>
  );
};

export default Footer;
