import { makeStyles } from "@material-ui/core/styles";
import {
  LinkedInBlue,
  LinkedInLightBlue,
  darkSecondary,
  darkPrimary,
} from "../../../assets/Colors";
import { deepOrange } from "@material-ui/core/colors";
import { height } from "@material-ui/system";

export default makeStyles((theme) => ({
  sidebar: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    "& > .MuiAvatar-root": {
      width: "30%",
      height: "auto",
      marginTop: "-28px",
    },
    "& > h4": {
      margin: "10px 0",
    },
  },
  cover: {
    width: "100%",
    height: "60px",
    opacity: 0.75,
  },
  stats: {
    width: "100%",
    "& > *": { marginTop: 5 },
  },
  stat: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    color: "grey",
    padding: "5px 10px",
    cursor: "pointer",
    transition: "all 0.4s ease",
    "& > h4": {
      fontSize: 14,
      fontWeight: 400,
      color: "grey",
    },
    "& > p": {
      fontSize: 12,
      fontWeight: 600,
      color: theme.palette.type === "dark" ? LinkedInLightBlue : LinkedInBlue,
    },
    "&:hover": {
      backgroundColor:
        theme.palette.type === "dark" ? darkSecondary : "lightgrey",
    },
  },
  myItems: {
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    paddingLeft: 10,
    color: theme.palette.type === "light" ? darkPrimary : "lightgrey",
    transition: "all 0.4s ease",
    "& > h4": {
      fontSize: 14,
      fontWeight: 500,
      marginLeft: 10,
    },
    "& > .MuiSvgIcon-root": {
      fontSize: 20,
    },
    "&:hover": {
      backgroundColor:
        theme.palette.type === "dark" ? darkSecondary : "lightgrey",
    },
  },
  avatar: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    margin: "-50px auto 12px",
    border: "2px solid white",
    width: "72px",
    height: "72px",
  },
}));
