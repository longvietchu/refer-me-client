import React from "react";
import Header from "./Header";
import { Grid, Container, Paper } from "@material-ui/core";
import Body from "./Body";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import WrapView from "../WrapView";

const HomeView = (props) => {
  const {
    totalToday,
    totalTomorrow,
    totalThisWeek,
    totalByMe,
    listMeeting,
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
    getRoomFilter,
    setStartDate,
    setEndDate,
  } = props;

  return (
    <WrapView>
      <Container>
        <div style={{ flexGrow: 1, padding: "15px" }}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Header
                totalToday={totalToday}
                totalTomorrow={totalTomorrow}
                totalThisWeek={totalThisWeek}
                totalByMe={totalByMe}
              />
              <br />
            </Grid>
            <Grid item sm={12}>
              <Body
                listMeeting={listMeeting}
                calendar={calendar}
                rows={rows}
                listOffice={listOffice}
                listRoom={listRoom}
                listDepartment={listDepartment}
                listType={listType}
                listLevel={listLevel}
                listStatus={listStatus}
                listColors={listColors}
                OfficeSelected={OfficeSelected}
                RoomSelected={RoomSelected}
                DepartmentSelected={DepartmentSelected}
                TypeSelected={TypeSelected}
                LevelSelected={LevelSelected}
                StatusSelected={StatusSelected}
                onSelectedOffice={onSelectedOffice}
                onSelectedRoom={onSelectedRoom}
                onSelectedDepartment={onSelectedDepartment}
                onSelectedType={onSelectedType}
                onSelectedLevel={onSelectedLevel}
                onSelectedStatus={onSelectedStatus}
                getOfficeFilter={getOfficeFilter}
                getRoomFilter={getRoomFilter}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </WrapView>
  );
};

export default HomeView;
