import { makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  app: {
    backgroundColor: "rgb(243, 242, 239)",
  },

  app_body: {
    padding: "10px 100px",
    display: "flex",
    flexDirection: "column",
  },

  paper_post: {
    margin: "20px 25px",
    borderRadius: 10,
  },

  paper_search: {
    backgroundColor: "#dce6f1",
    margin: "20px 25px",
    borderRadius: 10,
  },

  paper_suggest: {
    borderRadius: 10,
    margin: "20px 25px 0",
  },

  paper_job: {
    borderRadius: 10,
    margin: "20px 25px 0",
  },

  box: { minHeight: "100%" },

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

  btn_post: {
    border: "2px solid #0a66c2",
    color: "#0a66c2",
    borderRadius: "1.5rem",
    height: "35px",
    margin: 10,
  },
}));
