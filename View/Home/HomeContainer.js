import React, { useState, useEffect } from "react";

import HomeView from "./HomeView";
import { getDashBoard, filterDashBoard } from "../../apis/Functions/dashboard";
import { getOption } from "../../apis/Functions/option";
import { getListMeeting, filterMeeting } from "../../apis/Functions/meeting";
import { formatDateYYYY } from "../../config/Function";
import { connect } from "react-redux";
import KEY from "../../assets/AsynStorage";

const HomeContainer = (props) => {
  const [totalToday, setTotalToday] = useState(0);
  const [totalTomorrow, setTotalTomorrow] = useState(0);
  const [totalThisWeek, setTotalThisWeek] = useState(0);
  const [totalByMe, setTotalByMe] = useState(0);
  const [rows, setRows] = useState([]);

  const getData = async (type) => {
    const res = await getDashBoard({
      api_name: "api.v1.features.dashboard.list",
    });
    if (res.data.data) {
      setTotalToday(res.data.data.total_today);
      setTotalTomorrow(res.data.data.total_tomorrow);
      setTotalThisWeek(res.data.data.total_this_week);
      setTotalByMe(res.data.data.total_by_me);
      setRows(res.data.data.list_by_today);
    }
  };

  const [listMeeting, setListMeeting] = useState([]);
  const [calendar, setListCalendar] = useState([]);
  const [pageCurrent, setPageCurrent] = useState(1);

  let date = new Date();

  const [startDate, setStartDate] = useState(
    new Date(date.getFullYear(), date.getMonth(), 1)
  );

  const [endDate, setEndDate] = useState(
    new Date(date.getFullYear(), date.getMonth() + 1, 0)
  );

  useEffect(() => {
    getAllMeeting();
  }, [startDate, endDate]);

  const getAllMeeting = async () => {
    const res = await getListMeeting({
      api_name: "api.v1.features.meeting.list",
      page_index: pageCurrent,
      page_size: 500,
      from_date: formatDateYYYY(startDate),
      to_date: formatDateYYYY(endDate),
      // status: [2, 3, 4, 5],
    });
    console.log(res.data.data);
    if (res.data.data && res.data.code == 200) {
      setListMeeting(res.data.data);
    }
  };

  useEffect(() => {
    if (listMeeting) {
      const newList = listMeeting
        .filter(
          (e) =>
            e.status == 2 || e.status == 3 || e.status == 4 || e.status == 5
        )
        .map((e) => {
          return {
            title: e.name,
            start: e.start_time,
            end: e.end_time,
          };
        });
      console.log("List calendar+++", newList);
      setListCalendar(newList);
    }
  }, [listMeeting]);

  const getOfficeFilter = async () => {
    const res = await filterMeeting({
      api_name: "api.v1.features.meeting.list",
      office: OfficeSelected,
      room: RoomSelected,
      department: DepartmentSelected,
      type: TypeSelected,
      level: LevelSelected,
      status: StatusSelected,
      from_date: formatDateYYYY(startDate),
      to_date: formatDateYYYY(endDate),
    });
    if (res.data.data) {
      const newList = res.data.data
        .filter(
          (e) =>
            e.status == 2 || e.status == 3 || e.status == 4 || e.status == 5
        )
        .map((e) => {
          return {
            title: e.name,
            start: e.start_time,
            end: e.end_time,
          };
        });
      setListCalendar(newList);
    }
  };

  const [dataInit, setDataInit] = useState();

  const [listOffice, setListOffcie] = useState([]);
  const [listRoom, setListRoom] = useState([]);
  const [listDepartment, setListDepartment] = useState([]);
  const [listType, setListType] = useState([]);
  const [listLevel, setListLevel] = useState([]);
  const [listStatus, setListStatus] = useState([]);
  const [listColors, setListColors] = useState([]);

  const [OfficeSelected, setOfficeSelected] = useState("");
  const [RoomSelected, setRoomSelected] = useState("");
  const [DepartmentSelected, setDepartmentSelected] = useState("");
  const [TypeSelected, setTypeSelected] = useState("");
  const [LevelSelected, setLevelSelected] = useState("");
  const [StatusSelected, setStatusSelected] = useState("");

  const getListColor = () => {
    const listColors = localStorage.getItem(KEY.API_COLLORS);
    setListColors(JSON.parse(listColors));
  };

  const getListRooms = () => {
    if (dataInit) {
      const newList = dataInit.room_options.filter(
        (e) => e.office != null && e.office._id == OfficeSelected
      );
      setListRoom(newList);
    }
  };

  useEffect(() => getListRooms(), [OfficeSelected]);

  useEffect(() => {
    if (dataInit) {
      setListOffcie(dataInit.office_options);
      setListDepartment(dataInit.department_options);
      setListType(dataInit.type_options);
      setListLevel(dataInit.level_options);
      setListStatus(dataInit.status_options);
    }
  }, [dataInit]);

  const getAllOption = async () => {
    const res = await getOption({
      api_name: "api.v1.features.meeting.filter_option",
    });
    if (res.data.data) {
      setDataInit(res.data.data);
    }
  };

  const onSelectedOffice = (id) => {
    setOfficeSelected(id);
  };

  const onSelectedRoom = (id) => {
    setRoomSelected(id);
  };

  const onSelectedDepartment = (id) => {
    setDepartmentSelected(id);
  };

  const onSelectedType = (id) => {
    setTypeSelected(id);
  };

  const onSelectedLevel = (id) => {
    setLevelSelected(id);
  };

  const onSelectedStatus = (id) => {
    setStatusSelected(id);
  };

  useEffect(() => {
    getData();
    getAllOption();
    getListColor();
  }, []);

  return (
    <HomeView
      totalToday={totalToday}
      totalTomorrow={totalTomorrow}
      totalThisWeek={totalThisWeek}
      totalByMe={totalByMe}
      listMeeting={listMeeting}
      rows={rows}
      calendar={calendar}
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
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
};

const mapStatetoProps = (state) => {
  return {
    colors: state.colorsReducer,
  };
};

export default connect(mapStatetoProps, {})(HomeContainer);
