import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: 10,
    borderRadius: 10,
  },
  card: { display: "flex", flexDirection: "column", height: "100%" },
  box: { display: "flex", justifyContent: "center" },

  ava_top: {
    height: "50px",
    width: "50px",
  },

  name: {
    fontSize: "16px",
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    textTransform: "capitalize",
  },
  occupation: {
    color: "#00000099",
    fontSize: "14px",
    height: "42px",
    marginBottom: "20px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    textTransform: "capitalize",
  },
  logo: {
    height: "26px",
    width: "26px",
  },
  education: {
    color: "#00000099",
    fontSize: "12px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "70%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    textTransform: "capitalize",
    textAlign: "left",
    height: "32px",
  },
  time: {
    color: "#00000099",
    fontSize: "12px",
    marginTop: "50px",
  },
  btn: {
    height: "32px",
    width: "100%",
    border: "1.5px solid #0a66c2",
    color: "#0a66c2",
    fontWeight: "bold",
    borderRadius: "1.5rem",
    textTransform: "capitalize",
    marginTop: 8,
  },
}));
