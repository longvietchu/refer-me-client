import React, { useState, MouseEvent } from "react";
import {
  Card,
  Grid,
  Button,
  Typography,
  Link,
  Divider,
  Avatar,
  IconButton,
} from "@material-ui/core";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import Styles from "./Style";
import PopupList from "../../../components/ListItem/ListItem";

const Content = () => {
  const classes = Styles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Card className={classes.content}>
      <div className={classes.post__header}>
        <Link href="#" color="inherit" underline="none">
          <img
            className={classes.img}
            src="https://media-exp1.licdn.com/dms/image/C510BAQFdNUkdQtNukA/company-logo_100_100/0/1550638555833?e=1627516800&v=beta&t=WXrCwRaNrfh5wZfEFhn9LolFN2KGOR7gQFeocyr8dxc"
          />
        </Link>
        <div className={classes.header__info}>
          <Link
            href="#"
            color="inherit"
            underline="none"
            style={{ width: "95%" }}
          >
            <Typography variant="body2" className={classes.typo}>
              FPT Software, shared a post you may be interested in: We are glad
              to announce the new partnership with Japanese conglomerate Mitsui
              & Co., Ltd. in a bid to address the surging demand for
              #cybersecurity services in Japan. 🇯🇵 🇻🇳
            </Typography>
          </Link>
        </div>
        <div
          style={{
            textAlign: "right",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <p
            style={{
              justifyContent: "right",
              whiteSpace: "nowrap",
              margin: "4px 3px 0 0",
              color: "#00000099",
              fontSize: "12px",
            }}
          >
            3d
          </p>
          <IconButton style={{ minWidth: "0", padding: "8px 0" }}>
            <MoreHorizOutlinedIcon style={{ color: "#00000099" }} />
          </IconButton>
        </div>
      </div>

      <Divider style={{ width: "100%" }} />

      <div className={classes.post__header}>
        <Avatar
          className={classes.img}
          src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/121083834_1699921320175513_6807580545774400741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hfVRPKiVyaAAX-_QYhQ&_nc_ht=scontent.fhan4-1.fna&oh=fb6798aedb06700257a6b62a9815e721&oe=608BA140"
        />
        <div className={classes.header__info}>
          <Link
            href="#"
            color="inherit"
            underline="none"
            style={{ marginTop: "10px", width: "64%" }}
          >
            <strong>Tung Nguyen </strong>
            <Typography variant="inherit">has 10 new connections</Typography>
          </Link>
          <Button className={classes.btn}>expand your network</Button>
        </div>
        <div
          style={{
            textAlign: "right",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <p
            style={{
              justifyContent: "right",
              whiteSpace: "nowrap",
              margin: "4px 3px 0 0",
              color: "#00000099",
              fontSize: "12px",
            }}
          >
            3d
          </p>
          <IconButton
            onClick={handleClick}
            style={{ minWidth: "0", padding: "8px 0" }}
          >
            <MoreHorizOutlinedIcon style={{ color: "#00000099" }} />
          </IconButton>
          <PopupList open={open} anchorEl={anchorEl} onClose={handleClose} />
        </div>
      </div>

      <Divider style={{ width: "100%" }} />

      <div className={classes.post__header}>
        <Avatar
          className={classes.img}
          src="https://media-exp1.licdn.com/dms/image/C4E0BAQEUM1lhHo_mEA/company-logo_100_100/0/1580373010266?e=1628121600&v=beta&t=5aKjcbduqfDDu8dK8_ggBROvYhmuMPcxrQRRqJZh600"
        />
        <div className={classes.header__info}>
          <Link href="#" color="inherit" underline="none">
            <div style={{ marginTop: "12px", width: "90%" }}>
              <strong>YP Consultancy </strong>
              <Typography variant="inherit">
                is looking for:
                <strong> Intern. </strong>
                {/* <Typography variant="inherit">See this and </Typography>
                <strong>9 </strong>
                <Typography variant="inherit">
                  other job recommendations.
                </Typography> */}
              </Typography>
            </div>
          </Link>
          <Button variant="outlined" className={classes.btn}>
            View Jobs
          </Button>
        </div>
        <div
          style={{
            textAlign: "right",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <p
            style={{
              justifyContent: "right",
              whiteSpace: "nowrap",
              margin: "4px 3px 0 0",
              color: "#00000099",
              fontSize: "12px",
            }}
          >
            3d
          </p>
          <IconButton style={{ minWidth: "0", padding: "8px 0" }}>
            <MoreHorizOutlinedIcon style={{ color: "#00000099" }} />
          </IconButton>
        </div>
      </div>

      <Divider style={{ width: "100%" }} />

      <div className={classes.post__header}>
        <Avatar
          className={classes.img}
          src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/121083834_1699921320175513_6807580545774400741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hfVRPKiVyaAAX-_QYhQ&_nc_ht=scontent.fhan4-1.fna&oh=fb6798aedb06700257a6b62a9815e721&oe=608BA140"
        />
        <div className={classes.header__info}>
          <Link href="#" color="inherit" underline="none">
            <div style={{ marginTop: "12px", width: "90%" }}>
              <Typography variant="inherit">Tung Nguyen </Typography>
              <strong>viewed your profile</strong>
            </div>
          </Link>
          <Button variant="outlined" className={classes.btn}>
            See all views
          </Button>
        </div>
        <div
          style={{
            textAlign: "right",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <p
            style={{
              justifyContent: "right",
              whiteSpace: "nowrap",
              margin: "4px 3px 0 0",
              color: "#00000099",
              fontSize: "12px",
            }}
          >
            3d
          </p>
          <IconButton style={{ minWidth: "0", padding: "8px 0" }}>
            <MoreHorizOutlinedIcon style={{ color: "#00000099" }} />
          </IconButton>
        </div>
      </div>

      <Divider style={{ width: "100%" }} />

      <div className={classes.post__header}>
        <Avatar
          className={classes.img}
          src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/121083834_1699921320175513_6807580545774400741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hfVRPKiVyaAAX-_QYhQ&_nc_ht=scontent.fhan4-1.fna&oh=fb6798aedb06700257a6b62a9815e721&oe=608BA140"
        />
        <div className={classes.header__info}>
          <Link href="#" color="inherit" underline="none">
            <div style={{ marginTop: "12px", width: "90%" }}>
              <Typography variant="inherit">Tung Nguyen </Typography>
              <strong>viewed your profile</strong>
            </div>
          </Link>
          <Button variant="outlined" className={classes.btn}>
            See all views
          </Button>
        </div>
        <div
          style={{
            textAlign: "right",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <p
            style={{
              justifyContent: "right",
              whiteSpace: "nowrap",
              margin: "4px 3px 0 0",
              color: "#00000099",
              fontSize: "12px",
            }}
          >
            3d
          </p>
          <IconButton style={{ minWidth: "0", padding: "8px 0" }}>
            <MoreHorizOutlinedIcon style={{ color: "#00000099" }} />
          </IconButton>
        </div>
      </div>

      <Divider style={{ width: "100%" }} />

      <div className={classes.post__header}>
        <Avatar
          className={classes.img}
          src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/121083834_1699921320175513_6807580545774400741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hfVRPKiVyaAAX-_QYhQ&_nc_ht=scontent.fhan4-1.fna&oh=fb6798aedb06700257a6b62a9815e721&oe=608BA140"
        />
        <div className={classes.header__info}>
          <Link href="#" color="inherit" underline="none">
            <div style={{ marginTop: "12px", width: "90%" }}>
              <Typography variant="inherit">Tung Nguyen </Typography>
              <strong>viewed your profile</strong>
            </div>
          </Link>
          <Button variant="outlined" className={classes.btn}>
            See all views
          </Button>
        </div>
        <div
          style={{
            textAlign: "right",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <p
            style={{
              justifyContent: "right",
              whiteSpace: "nowrap",
              margin: "4px 3px 0 0",
              color: "#00000099",
              fontSize: "12px",
            }}
          >
            3d
          </p>
          <IconButton style={{ minWidth: "0", padding: "8px 0" }}>
            <MoreHorizOutlinedIcon style={{ color: "#00000099" }} />
          </IconButton>
        </div>
      </div>

      <Divider style={{ width: "100%" }} />

      <div className={classes.post__header}>
        <Avatar
          className={classes.img}
          src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/121083834_1699921320175513_6807580545774400741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hfVRPKiVyaAAX-_QYhQ&_nc_ht=scontent.fhan4-1.fna&oh=fb6798aedb06700257a6b62a9815e721&oe=608BA140"
        />
        <div className={classes.header__info}>
          <Link href="#" color="inherit" underline="none">
            <div style={{ marginTop: "12px", width: "90%" }}>
              <Typography variant="inherit">Tung Nguyen </Typography>
              <strong>viewed your profile</strong>
            </div>
          </Link>
          <Button variant="outlined" className={classes.btn}>
            See all views
          </Button>
        </div>
        <div
          style={{
            textAlign: "right",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <p
            style={{
              justifyContent: "right",
              whiteSpace: "nowrap",
              margin: "4px 3px 0 0",
              color: "#00000099",
              fontSize: "12px",
            }}
          >
            3d
          </p>
          <IconButton style={{ minWidth: "0", padding: "8px 0" }}>
            <MoreHorizOutlinedIcon style={{ color: "#00000099" }} />
          </IconButton>
        </div>
      </div>

      <Divider style={{ width: "100%" }} />

      <div className={classes.post__header}>
        <Avatar
          className={classes.img}
          src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/121083834_1699921320175513_6807580545774400741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hfVRPKiVyaAAX-_QYhQ&_nc_ht=scontent.fhan4-1.fna&oh=fb6798aedb06700257a6b62a9815e721&oe=608BA140"
        />
        <div className={classes.header__info}>
          <Link href="#" color="inherit" underline="none">
            <div style={{ marginTop: "12px", width: "90%" }}>
              <Typography variant="inherit">Tung Nguyen </Typography>
              <strong>viewed your profile</strong>
            </div>
          </Link>
          <Button variant="outlined" className={classes.btn}>
            See all views
          </Button>
        </div>
        <div
          style={{
            textAlign: "right",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <p
            style={{
              justifyContent: "right",
              whiteSpace: "nowrap",
              margin: "4px 3px 0 0",
              color: "#00000099",
              fontSize: "12px",
            }}
          >
            3d
          </p>
          <IconButton style={{ minWidth: "0", padding: "8px 0" }}>
            <MoreHorizOutlinedIcon style={{ color: "#00000099" }} />
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default Content;
