import React from "react";
import WrapView from "../WrapView";
import { columns } from "./Data";
import {
  makeStyles,
  Container,
  Typography,
  TextField,
  Grid,
  Card,
  InputLabel,
  Select,
  FormControl,
  Paper,
} from "@material-ui/core";
import TableSystemRole from "./TableSystemRole";
import Header from "./Header";

const SystemRoleView = (props) => {
  const { rows, totalPage, changePage } = props;
  return (
    <WrapView>
      <Container>
        <Typography style={{ marginTop: 10, marginBottom: 25 }} variant={"h5"}>
          Danh sách nhóm quyền
        </Typography>
        <Paper elevation={2}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Header />
            </Grid>
            <Grid xs={12} item>
              <TableSystemRole
                rows={rows}
                columns={columns}
                totalPage={totalPage}
                changePage={changePage}
              ></TableSystemRole>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </WrapView>
  );
};

export default SystemRoleView;
