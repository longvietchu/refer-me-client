import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Tab,
  Tabs,
  Button,
  Paper,
  Avatar,
  Box,
  Hidden,
  Divider,
  Card,
  Link,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  Edit,
  FiberManualRecordOutlined,
  Add,
  NavigateBefore,
  NavigateNext,
} from "@material-ui/icons";
// import TweetCard from "../HomePage/TweetsCard/TweetsCard";
// import Media from "./Media";
import EditProfile from "./EditProfile/EditProfile";
// import "roboto-fontface";
import Widgets from "../../components/widgets/Widgets";
import Styles from "./Style";

const ProfileScreen = () => {
  const classes = Styles();
  const history = useHistory();

  const [value, setValue] = useState(0);
  const [editProfile, setEditProfile] = useState(false);
  const [tab, setTab] = useState("Home");

  const openProfileEditor = () => {
    setEditProfile(true);
  };

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  const handleNextTab = () => {
    let newValue = value;
    if (newValue !== 3) {
      newValue = newValue + 1;
      setValue(newValue);
    }
  };

  const handleBackTab = () => {
    let newValue = value;
    if (newValue !== 0) {
      newValue = newValue - 1;
      setValue(newValue);
    }
  };

  return (
    <Grid container className={classes.app}>
      <Grid item container className={classes.app__body}>
        <Grid item className={classes.body__feed} xs={12} md={7}>
          <Card>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {" "}
                <div className={classes.avatarBox}>
                  <Box>
                    <Avatar
                      className={classes.avatar}
                      src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/121083834_1699921320175513_6807580545774400741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hfVRPKiVyaAAX-_QYhQ&_nc_ht=scontent.fhan4-1.fna&oh=fb6798aedb06700257a6b62a9815e721&oe=608BA140"
                    />
                  </Box>
                </div>
              </Paper>
            </Grid>
            <Grid style={{ marginLeft: "1rem" }} item xs={12}>
              <div
                style={{ justifyContent: "space-between" }}
                className={classes.horizontalDiv}
              >
                <div></div>
                <Button onClick={openProfileEditor} className={classes.btn}>
                  <Edit />
                </Button>
              </div>
              <div>
                <div
                  style={{ marginTop: "1rem" }}
                  className={classes.horizontalDiv}
                >
                  <Typography
                    className={classes.nameTypo}
                    variant="h6"
                    id="name"
                  >
                    Tùng Nguyễn
                  </Typography>
                </div>
                <span>
                  <Typography id="username">
                    <small>@TungNguyen</small>
                  </Typography>
                </span>
              </div>
              <div>
                <span>
                  <Typography id="status" style={{ fontSize: "1.2rem" }}>
                    Student at Hanoi University of Science and Technology
                  </Typography>
                </span>
              </div>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <span>
                    <Typography id="location">Hanoi, Hanoi, Vietnam</Typography>
                  </span>
                </Grid>
                <FiberManualRecordOutlined style={{ fontSize: "0.5rem" }} />
                <Grid item>
                  <span>
                    <Typography id="location" style={{ color: "#0a66c2" }}>
                      1 connection
                    </Typography>
                  </span>
                </Grid>
                <FiberManualRecordOutlined style={{ fontSize: "0.5rem" }} />
                <Grid item>
                  <span>
                    <Typography id="location" style={{ color: "#0a66c2" }}>
                      Contact info
                    </Typography>
                  </span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid style={{ flexGrow: 1 }} item xs={12}>
                <div>
                  <Hidden smUp>
                    <Button onClick={handleBackTab}>
                      <NavigateBefore className={classes.backArrow} />
                    </Button>
                  </Hidden>
                  <Tabs
                    variant="fullWidth"
                    component="nav"
                    className={classes.tabs}
                    value={value}
                    indicatorColor="primary"
                    onChange={handleChange}
                  >
                    <Tab
                      tabIndex={0}
                      label="Home"
                      onClick={() => setTab("Homes")}
                      className={classes.tab}
                    />
                    <Tab
                      tabIndex={1}
                      label="About"
                      onClick={() => setTab("About")}
                      className={classes.tab}
                    />
                    <Tab
                      tabIndex={2}
                      label="Posts"
                      onClick={() => setTab("Posts")}
                      className={classes.tab}
                    />
                    <Tab
                      tabIndex={3}
                      label="Jobs"
                      onClick={() => setTab("Jobs")}
                      className={classes.tab}
                    />
                  </Tabs>
                  <Divider />
                  <Hidden smUp>
                    <Button onClick={handleNextTab}>
                      <NavigateNext className={classes.backArrow} />
                    </Button>
                  </Hidden>
                </div>
              </Grid>
            </Grid>
          </Card>
          <Grid item xs={12}>
            {/* {tab === "Tweets" && <TweetCard />}
            {tab === "Tweets & replies" && <TweetCard />}
            {tab === "Media" && <Media onClick={props.openTweet} />} */}
            {tab === "Jobs" && (
              <Typography style={{ textAlign: "center" }} variant="subtitle1">
                Jobs
              </Typography>
            )}
          </Grid>

          <Card style={{ marginTop: "16px" }}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item style={{ margin: "24px 24px 0" }}>
                <Typography id="status" style={{ fontSize: "1.2rem" }}>
                  Experience
                </Typography>
              </Grid>
              <Grid item style={{ margin: "24px 10px 0" }}>
                <Button onClick={openProfileEditor}>
                  <Add style={{ color: "#0a66c2" }} />
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              style={{ padding: "0 0 24px" }}
            >
              <Link
                href="#"
                color="inherit"
                style={{ padding: "20px 5px 0px 24px" }}
              >
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="flex-start"
                  style={{ marginRight: "14px" }}
                >
                  <div>
                    <img
                      style={{ height: "56px", width: "56px" }}
                      src="https://media-exp1.licdn.com/dms/image/C510BAQGVaXAZYQ2QwA/company-logo_100_100/0/1519908097940?e=1626912000&v=beta&t=BDOR_4ZLvK8VlPVH7oZhPAvZaKadju4eytvOOVie8AA"
                    />
                  </div>
                  <div>
                    <h3>Student</h3>
                    <p style={{ fontSize: "14px", margin: "2px 0px" }}>
                      Hanoi University of Science and Technology
                    </p>
                    <div
                      style={{
                        color: "#00000099",
                        fontSize: "14px",
                        margin: "2px 0px",
                      }}
                    >
                      <span>Sep 2017 - Present</span>
                      <FiberManualRecordOutlined
                        style={{ fontSize: "0.5rem", margin: "0px 4px" }}
                      />
                      <span>3 yrs 8 mos</span>
                    </div>
                    <div
                      style={{
                        color: "#00000099",
                        fontSize: "14px",
                        margin: "2px 0px",
                      }}
                    >
                      <span>Vietnam</span>
                    </div>
                  </div>
                </Grid>
              </Link>

              <Grid item style={{ margin: "20px 10px 0" }}>
                <Button onClick={openProfileEditor}>
                  <Edit style={{ color: "#0a66c2" }} />
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Hidden smDown>
          <Grid item className={classes.body__widgets} md={3}>
            {/* Widgets */}
            <Widgets />
          </Grid>
        </Hidden>

        <EditProfile
          open={editProfile}
          onClose={() => setEditProfile(false)}
          closeModal={() => setEditProfile(false)}
        />
      </Grid>
    </Grid>
  );
};

export default ProfileScreen;
