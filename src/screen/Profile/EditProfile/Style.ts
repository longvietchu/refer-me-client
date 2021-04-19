import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    width: "50%",
    height: "90%",
    marginTop: "2.5rem",
    borderRadius: "2rem",
    font: "inherit",
    marginLeft: "2.5rem",
    [theme.breakpoints.up("sm")]: {
      margin: "2.5rem auto",
    },
    [theme.breakpoints.up("md")]: {
      margin: "2.5rem auto",
    },
    overflowY: "scroll",
    overflowX: "hidden",
  },
  form: {
    width: "100%",
    marginTop: "6rem",
  },
  paper: {
    flexGrow: 1,
  },
  avatarBox: {
    position: "relative",
    bottom: "1rem",
    top: "0rem",
    marginLeft: "0.7rem",
  },
  avatar: {
    border: "4x solid white",
    height: "8rem",
    width: "8rem",
    marginTop: "0rem",
  },
  input: {
    display: "none",
  },
  darkArea: {
    backgroundColor: "rgb(204, 214, 221)",
    height: "12rem",
    marginTop: "1rem",
    opacity: "0.75",
  },
  icon: {
    color: "rgba(29,161,242,1.00)",
    height: "2rem",
    width: "2rem",
  },
  btnDiv: {
    width: "5rem",
  },
  btn: {
    backgroundColor: "rgba(29,161,242,1.00)",
    color: "white",
    fontWeight: "bold",
    fontSize: "15px",
    marginTop: "0.7rem",
    marginRight: "1rem",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "rgba(29,161,242,1.00)",
    },
    "&:focus": {
      backgroundColor: "rgba(29,161,242,1.00)",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  typo: {
    font: "inherit",
    fontSize: "25px",
    marginTop: "1rem",
    fontWeight: "bold",
  },
  textField: {
    width: "90%",
    marginLeft: "5%",
    height: "15%",
  },
  camera: {
    marginLeft: "50%",
    marginTop: "4rem",
  },
}));
