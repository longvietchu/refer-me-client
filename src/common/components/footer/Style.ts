import { makeStyles } from "@material-ui/core/styles";
import {
  LinkedInBlue,
  LinkedInLightBlue,
  darkSecondary,
  darkPrimary,
} from "../../assets/Colors";

export default makeStyles((theme) => ({
  footer: {
    color: "rgb(101, 119, 134)",
    fontSize: "13px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    lineHeight: "calc(19.6875px)",
    fontWeight: 400,
    "& .MuiTypography-colorPrimary": {
      color: "rgb(101, 119, 134)",
    },
  },
  about: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
    "& > h4": {
      color: theme.palette.type === "dark" ? LinkedInLightBlue : LinkedInBlue,
    },
    "& > div": {
      flex: 1,
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: 10,
      "& > a": {
        color: "grey",
        transition: "all 0.4s ease",
        "&:hover": {
          color: theme.palette.type === "dark" ? darkSecondary : darkPrimary,
        },
      },
    },
  },
}));
