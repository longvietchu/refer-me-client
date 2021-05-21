import { makeStyles } from "@material-ui/core/styles";
import {
  darkSecondary,
  LinkedInBlue,
  LinkedInLightBlue,
} from "../../../../assets/Colors";

export default makeStyles((theme) => ({
  upload__header: {
    height: "auto",
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
  },

  header__form: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    [theme.breakpoints.down("xs")]: {
      height: 42,
    },
    display: "flex",
    alignItems: "center",
    borderRadius: 999,
    border: "1px solid",
    borderColor:
      theme.palette.type === "dark"
        ? "rgba(225,225,225,0.1)"
        : "rgba(0,0,0,0.15)",
    overflow: "hidden",
    "& > .MuiSvgIcon-root": {
      marginLeft: 10,
    },
    "& > input": {
      height: "100%",
      flex: 1,
      border: 0,
      outlineWidth: 0,
      paddingLeft: 10,
      color: theme.palette.type === "dark" && "lightgrey",
      fontSize: 14,
      fontWeight: 600,
      backgroundColor: "transparent",
      "&::placeholder": {
        color: theme.palette.type === "dark" && "grey",
      },
    },
    "& > button": {
      height: "100%",
      display: "flex",
      alignItems: "center",
      padding: "0 15px",
      border: 0,
      outlineWidth: 0,
      backgroundColor:
        theme.palette.type === "dark" ? LinkedInLightBlue : LinkedInBlue,
      color: "white",
      cursor: "pointer",
      fontWeight: 600,
      transition: "all 0.4s ease",
      "&:hover": {
        backgroundColor:
          theme.palette.type === "dark" ? LinkedInBlue : LinkedInLightBlue,
      },
    },
  },

  comment_container: {
    display: "flex",
    margin: "0 12px",
    overflow: "hidden",
    "& > span": {
      padding: "0px 10px",
    },
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },

  post_button: {
    color: "rgb(1, 150, 199)",
    transition: "all 80ms ease-out",
    height: 38,
    border: "1.5px solid #0a66c2",
    fontWeight: "bold",
    borderRadius: "1.5rem",
    textTransform: "capitalize",
    marginLeft: 10,
  },

  all_comment: {
    marginTop: "10px",
  },
  username: {
    fontSize: "16px",
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
  },

  comment: {
    fontSize: "14px",
  },

  created_at: {
    fontSize: 12,
    lineHeight: "12px",
    marginLeft: 60,
    marginBottom: 10,
  },
}));
