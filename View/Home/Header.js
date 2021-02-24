import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Button, Grid, Paper, Card, Typography } from "@material-ui/core";

import PeopleIcon from "@material-ui/icons/People";
import DomainIcon from "@material-ui/icons/Domain";
import AssessmentIcon from "@material-ui/icons/Assessment";
import EmailIcon from "@material-ui/icons/Email";
import EventIcon from "@material-ui/icons/Event";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";

const HomeHeader = (props) => {

  const { totalToday, totalTomorrow, totalThisWeek, totalByMe } = props



  return (
    <Grid container style={{ marginTop: 20 }}>
      <Grid container direction="row" spacing={3}>
        <Grid item lg={3} md={6} sm={12}>
          <Card
            style={{
              backgroundColor: "#dd4b39",
              paddingTop: 20,
            }}
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              style={{
                color: "white",
                paddingLeft: 10,
                paddingRight: 10,
                position: "relative",
              }}
            >
              <Grid item>
                <Typography variant="h3">{totalToday}</Typography>
                <Typography variant="p">Hôm nay</Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <CalendarViewDayIcon
                    style={{
                      width: 68,
                      height: 68,
                      color: "rgba(0,0,0,0.15)",
                    }}
                  />
                  {/* <Button style={{ color: "white" }}>Chi tiết</Button> */}
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item lg={3} md={6} sm={12}>
          <Card
            style={{
              backgroundColor: "#f39c12",
              paddingTop: 20,
            }}
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              style={{
                color: "white",
                paddingLeft: 10,
                paddingRight: 10,
                position: "relative",
              }}
            >
              <Grid item>
                <Typography variant="h3">{totalTomorrow}</Typography>
                <Typography variant="p">Ngày mai</Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <ArrowRightAltIcon
                    style={{
                      width: 68,
                      height: 68,
                      color: "rgba(0,0,0,0.15)",
                    }}
                  />
                  {/* <Button style={{ color: "white" }}>Chi tiết</Button> */}
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item lg={3} md={6} sm={12}>
          <Card
            style={{
              backgroundColor: "#00c0ef",
              paddingTop: 20,
            }}
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              style={{
                color: "white",
                paddingLeft: 10,
                paddingRight: 10,
                position: "relative",
              }}
            >
              <Grid item>
                <Typography variant="h3">{totalThisWeek}</Typography>
                <Typography variant="p">Tuần này</Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <DateRangeIcon
                    style={{
                      width: 68,
                      height: 68,
                      color: "rgba(0,0,0,0.15)",
                    }}
                  />
                  {/* <Button style={{ color: "white" }}>Chi tiết</Button> */}
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item lg={3} md={6} sm={12}>
          <Card
            style={{
              backgroundColor: "#00a65a",
              paddingTop: 20,
            }}
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              style={{
                color: "white",
                paddingLeft: 10,
                paddingRight: 10,
                position: "relative",
              }}
            >
              <Grid item>
                <Typography variant="h3">{totalByMe}</Typography>
                <Typography variant="p">Tạo bởi tôi</Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <PersonIcon
                    style={{
                      width: 68,
                      height: 68,
                      color: "rgba(0,0,0,0.15)",
                      marginRight: "10px",
                    }}
                  />
                  {/* <Button style={{ color: "white" }}>Chi tiết</Button> */}
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeHeader;
