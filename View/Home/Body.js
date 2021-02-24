import React, { useEffect } from "react";
import {
  withStyles,
  makeStyles,
  Grid,
  Card,
  InputLabel,
  FormControl,
  Select,
  Divider,
} from "@material-ui/core";
import EventCalendar from "../../Component/Calender/EventCalendar";
import {
  Timeline,
  TimelineItem as MuiTimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import { getTimeHHMM } from "../../config/Function";
import { connect } from "react-redux";

const TimelineItem = withStyles({
  missingOppositeContent: {
    "&:before": {
      display: "none",
    },
  },
})(MuiTimelineItem);

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 286,
  },
}));

const Body = (props) => {
  const classes = useStyles();

  const {
    rows,
    calendar,
    listOffice,
    listRoom,
    listDepartment,
    listType,
    listLevel,
    listStatus,
    listColors,
    OfficeSelected,
    RoomSelected,
    DepartmentSelected,
    TypeSelected,
    LevelSelected,
    StatusSelected,
    onSelectedOffice,
    onSelectedRoom,
    onSelectedDepartment,
    onSelectedType,
    onSelectedLevel,
    onSelectedStatus,
    getOfficeFilter,
    setStartDate,
    setEndDate,
  } = props;

  const onClickOffice = (id) => {
    onSelectedOffice(id);
  };

  const onClickRoom = (id) => {
    console.log("---", id);
    onSelectedRoom(id);
  };

  const onClickDepartment = (id) => {
    onSelectedDepartment(id);
  };

  const onClickType = (id) => {
    onSelectedType(id);
  };

  const onClickLevel = (id) => {
    onSelectedLevel(id);
  };

  const onClickStatus = (id) => {
    onSelectedStatus(id);
  };

  useEffect(() => {
    getOfficeFilter(OfficeSelected);
  }, [OfficeSelected]);

  useEffect(() => {
    getOfficeFilter(RoomSelected);
  }, [RoomSelected]);

  useEffect(() => {
    getOfficeFilter(DepartmentSelected);
  }, [DepartmentSelected]);

  useEffect(() => {
    getOfficeFilter(TypeSelected);
  }, [TypeSelected]);

  useEffect(() => {
    getOfficeFilter(LevelSelected);
  }, [LevelSelected]);

  useEffect(() => {
    getOfficeFilter(StatusSelected);
  }, [StatusSelected]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={9}>
        <Card style={{ border: "1px solid #a27c7c" }}>
          <EventCalendar
            calendar={calendar}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card
          style={{
            border: "1px solid rgb(169, 152, 152)",
            height: "260px",
            overflowY: "scroll",
          }}
        >
          <div style={{ margin: "14px 0px 0px 14px" }}>Cuộc họp hôm nay: </div>
          <Grid container direction="column" alignItems="flex-start">
            <Timeline align="left" style={{ marginTop: "0px" }}>
              {rows.map((e, index) => (
                <TimelineItem>
                  <TimelineSeparator style={{ marginBottom: "8px" }}>
                    <TimelineDot
                      style={{ backgroundColor: listColors[index] }}
                    />
                    {rows.length > 1 && index != rows.length - 1 ? (
                      <TimelineConnector />
                    ) : (
                      ""
                    )}
                  </TimelineSeparator>
                  <TimelineContent
                    style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      width: "220px",
                    }}
                  >
                    {getTimeHHMM(e.start_time)} - {e.name}
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Grid>
        </Card>

        <Grid container justify="center" alignItems="center">
          <h3>Tìm kiếm</h3>
        </Grid>

        <Divider style={{ backgroundColor: "#333333", height: "3px" }} />

        <Grid item style={{ marginTop: "5px" }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">
              - Văn phòng/Chi nhánh -
            </InputLabel>
            <Select
              native
              fullWidth
              onChange={(e) => onClickOffice(e.target.value)}
              inputProps={{
                name: "age",
                id: "age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              {listOffice.map((e) => (
                <option value={e._id}>{e.name}</option>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item style={{ marginTop: "5px" }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">- Phòng họp -</InputLabel>
            <Select
              native
              fullWidth
              onChange={(e) => onClickRoom(e.target.value)}
              inputProps={{
                name: "age",
                id: "age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              {listRoom.map((e) => (
                <option value={e._id}>{e.name}</option>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item style={{ marginTop: "5px" }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">
              - Phòng/Ban chủ trì -
            </InputLabel>
            <Select
              native
              fullWidth
              onChange={(e) => onClickDepartment(e.target.value)}
              inputProps={{
                name: "age",
                id: "age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              {listDepartment.map((e) => (
                <option value={e._id}>{e.name}</option>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item style={{ marginTop: "5px" }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">
              - Loại cuộc họp -
            </InputLabel>
            <Select
              native
              fullWidth
              onChange={(e) => onClickType(e.target.value)}
              inputProps={{
                name: "age",
                id: "age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              {listType.map((e) => (
                <option value={e._id}>{e.name}</option>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item style={{ marginTop: "5px" }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">- Mức độ -</InputLabel>
            <Select
              native
              fullWidth
              onChange={(e) => onClickLevel(e.target.value)}
              inputProps={{
                name: "age",
                id: "age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              {listLevel.map((e) => (
                <option value={e._id}>{e.name}</option>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item style={{ marginTop: "5px" }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">- Trạng thái -</InputLabel>
            <Select
              native
              fullWidth
              onChange={(e) => onClickStatus(e.target.value)}
              inputProps={{
                name: "age",
                id: "age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              {listStatus
                .filter(
                  (e) =>
                    e.value == 2 || e.value == 3 || e.value == 4 || e.value == 5
                )
                .map((e) => (
                  <option value={e.value}>{e.text}</option>
                ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStatetoProps = (state) => {
  return {
    colors: state.colorsReducer,
  };
};

export default connect(mapStatetoProps, {})(Body);
