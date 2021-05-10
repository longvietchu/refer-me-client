import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: { display: "flex", flexDirection: "column", height: "100%" },
  box: { display: "flex", justifyContent: "space-between" },
  title: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    fontSize: "24px",
  },
  company: {
    color: "#00000099",
    fontSize: "15px",
    paddingTop: "4px",
  },
  location: {
    color: "#00000099",
    fontSize: "15px",
  },
  time: {
    color: "#00000099",
    fontSize: "12px",
    marginTop: "50px",
  },
}));
