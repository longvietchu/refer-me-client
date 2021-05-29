import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Hidden } from "@material-ui/core";
import Style from "./Style";

interface props {
  Icon: any;
  title: string;
  arrow?: boolean;
  onClick?: any;
}

const MenuItem = (props: props) => {
  const classes = Style();
  return (
    <div className={classes.menuItem} onClick={props.onClick}>
      {props.Icon}
      <Hidden mdDown>
        <div className={classes.title}>
          <p>{props.title}</p>
          {props.arrow && <ArrowDropDownIcon />}
        </div>
      </Hidden>
      <Hidden smUp>
        <div className={classes.title}>
          <p>{props.title}</p>
        </div>
      </Hidden>
    </div>
  );
};

export default MenuItem;
