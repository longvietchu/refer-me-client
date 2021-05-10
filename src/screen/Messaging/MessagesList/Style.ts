import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0",
    marginLeft: "auto",
  },
  chatFooter: {
    padding: "0.5em 1em",
    display: "flex",
    alignItems: "center",
    borderTop: "1px solid rgba(190, 190, 190, 0.1)",
  },
  form: {
    flex: "1",
    display: "flex",
  },
  input: {
    flex: 1,
    padding: "0em 0.8em 0em 1.2em",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    background: "#868e991a",
    color: "#000000",
  },
  button: { marginLeft: "0.5em" },
  chatButtonIcon: {
    color: "rgb(1, 150, 199)",
    transition: "all 80ms ease-out",
  },

  flipMove: {
    minHeight: "500px",
    maxHeight: "500px",
    overflowY: "scroll",
  },

  cardUser: {
    backgroundColor: "#0b81ff",
    textAlign: "right",
    maxWidth: "80%",
    borderRadius: "20",
  },

  cardGuest: {
    backgroundColor: "#cccccc",
    maxWidth: "80%",
    borderRadius: "20",
  },

  timeRight: {
    fontSize: "10px",
    lineHeight: "12px",
    textAlign: "right",
    marginRight: "18px",
  },
  timeLeft: {
    fontSize: "10px",
    lineHeight: "12px",
    marginTop: " 5px",
    marginRight: "18px",
  },
  tick: {
    marginRight: "10px",
    alignSelf: "flex-end",
  },
  menu: {
    marginTop: 10,
  },
}));
