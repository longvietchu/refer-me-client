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
import TableSystemDepartment from "./TableSystemDepartment";
import Header from "./Header";

const SystemDepartmentView = (props) => {
  const {
    rowDepartment,
    totalPage,
    changePage,
    getDepartmentFilter,
    onSelectedKeyWord,
    keyword,
  } = props;

  return (
    <WrapView>
      <Container>
        <Typography style={{ marginTop: 10, marginBottom: 25 }} variant={"h5"}>
          Danh sách phòng ban
        </Typography>
        <Paper elevation={2}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Header
                onSelectedKeyWord={onSelectedKeyWord}
                getDepartmentFilter={getDepartmentFilter}
                keyword={keyword}
              />
            </Grid>
            <Grid xs={12} item>
              <TableSystemDepartment
                rows={rowDepartment}
                columns={columns}
                totalPage={totalPage}
                changePage={changePage}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </WrapView>
  );
};

export default SystemDepartmentView;
