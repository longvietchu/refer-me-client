import { makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  app: {
    backgroundColor: "rgb(243, 242, 239)",
  },
  paperHeader: {
    backgroundColor: "#dce6f1",
    margin: "20px 25px",
    borderRadius: 10,
  },

  box: { backgroundColor: "background.default", minHeight: "100%" },

  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "40px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  btn: {
    height: "32px",
    border: "1.5px solid #0a66c2",
    color: "#ffffff",
    backgroundColor: "#0a66c2",
    fontWeight: "bold",
    borderRadius: "1.5rem",
    textTransform: "capitalize",
  },
}));
