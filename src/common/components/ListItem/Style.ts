import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 280,
      backgroundColor: theme.palette.background.paper,
    },
    popover: {
      transitionDuration: "0.2s",
      fontSize: "15px",
      marginRight: "5%",
    },
    listAva: {
      minWidth: "40px",
    },
  })
);
