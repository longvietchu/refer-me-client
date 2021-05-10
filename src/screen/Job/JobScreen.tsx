import React from "react";
import { Helmet } from "react-helmet";

import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Avatar,
  IconButton,
  Paper,
  InputBase,
  Button,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import jobs from "./jobs";
import JobCard from "../../components/jobs/JobCard";
import Styles from "./Style";
const JobScreen = () => {
  const classes = Styles();
  return (
    <div className={classes.app}>
      <Helmet>
        <title>Jobs | RefMe</title>
      </Helmet>
      <div
        style={{
          padding: "10px 100px",
        }}
      >
        <Paper className={classes.paperHeader}>
          <Typography align="center" variant="h5" style={{ padding: "14px" }}>
            Search for your next job
          </Typography>

          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={5}
          >
            <Grid item xs={12} sm={5}>
              <Paper component="form" className={classes.root}>
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <InputBase
                  className={classes.input}
                  placeholder="Search by title, skill, or company"
                />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={5}>
              <Paper component="form" className={classes.root}>
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  <LocationOnIcon />
                </IconButton>
                <InputBase
                  className={classes.input}
                  placeholder="City, state, or zip code"
                />
              </Paper>
            </Grid>

            <Grid item>
              <Button variant="contained" className={classes.btn}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <Box py={3} className={classes.box}>
          <Container maxWidth={false}>
            <Box pt={3}>
              <Grid container spacing={5}>
                {jobs.map((job) => (
                  <Grid item key={job.id} lg={3} md={6} xs={12}>
                    <JobCard job={job} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default JobScreen;
