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
} from "@material-ui/core";

import AccessTimeIcon from "@material-ui/icons/AccessTime";
import GetAppIcon from "@material-ui/icons/GetApp";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import jobs from "./jobs";
import JobCard from "../../components/jobs/JobCard";
import Styles from "./Style";
const JobScreen = () => {
  const classes = Styles();
  return (
    <div>
      <Helmet>
        <title>Jobs | RefMe</title>
      </Helmet>
      <Box py={3} className={classes.box}>
        <Container maxWidth={false}>
          <Box pt={3}>
            <Grid container spacing={4}>
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
  );
};

export default JobScreen;
