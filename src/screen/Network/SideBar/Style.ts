import { makeStyles } from "@material-ui/core";
import { darkSecondary } from "../../../assets/Colors";

export default makeStyles((theme) => ({
  root: {
    borderRadius: 10,
  },
  title: {
    marginLeft: "-10px",
    color: "#00000099",
  },
  amount: {
    color: "#00000099",
  },
  expand: {
    width: "100%",
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    color: "grey",
    transition: "all 0.4s ease",
    "& > h4": {
      fontSize: 13,
      fontWeight: 600,
    },
    "&:hover": {
      backgroundColor:
        theme.palette.type === "dark" ? darkSecondary : "lightgrey",
    },
  },
  sidebar__bottom: {
    position: "sticky",
    top: "8vh",
    marginTop: 10,
  },
}));
