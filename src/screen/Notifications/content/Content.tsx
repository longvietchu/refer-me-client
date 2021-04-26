import React from "react";
import {
  Card,
  Grid,
  Button,
  Typography,
  Link,
  Divider,
  Avatar,
} from "@material-ui/core";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import Styles from "./Style";
const Content = () => {
  const classes = Styles();
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
          <Link href="#" color="inherit" underline="none">
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
          <Button style={{ minWidth: "0", padding: "8px 0" }}>
            <MoreHorizOutlinedIcon style={{ color: "#00000099" }} />
          </Button>
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
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              width: "430px",
            }}
            underline="none"
          >
            <div style={{ marginTop: "10px" }}>
              <strong>Tung Nguyen </strong>
              <Typography variant="inherit">has 10 new connections</Typography>
            </div>
          </Link>
          <Button className={classes.btn}>
            <Typography variant="subtitle1">expand your network</Typography>
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
          <Button style={{ minWidth: "0", padding: "8px 0" }}>
            <MoreHorizOutlinedIcon style={{ color: "#00000099" }} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Content;
