import React from "react";
import { Paper } from "@material-ui/core";
import Logo from "../../../assets/images/text_logo.png";
import Style from "./Style";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const LoginCard = () => {
  const classes = Style();
  return (
    <Paper elevation={3} className={classes.card}>
      <header className={classes.header}>
        <img src={Logo} alt="logo" />
      </header>

      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <input disabled type="email" value="" placeholder="email" />
        <input disabled type="password" value="" placeholder="password" />
        <button disabled>Log In</button>
      </form>

      <div className={classes.google}>
        <section>
          <div></div>
          <p>OR</p>
          <div></div>
        </section>
        {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
      </div>
    </Paper>
  );
};

export default LoginCard;
