import { makeStyles } from "@material-ui/core/styles";

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
  container: {
    textAlign: "center",
    padding: "16px",
  },
  notifi: {
    fontSize: "16px",
    lineHeight: "1.5",
  },
  txt: {
    marginTop: "8px",
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#00000099",
  },
}));
