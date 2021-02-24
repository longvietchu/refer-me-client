import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import MeetingView from "./MeetingView";
import {
  getListMeeting,
  createMeeting,
  deleteMeeting,
  editMeeting,
  filterMeeting,
  acceptMeeting,
  rejectMeeting,
} from "../../apis/Functions/meeting";
import { getDate, getDateOfMonth, getTime, formatDateYYYY } from "../../config";
import { getOption } from "../../apis/Functions/option";

function createData(
  id,
  name,
  date,
  timeStart,
  timeEnd,
  location,
  level,
  creator,
  status,
  dateCreate
) {
  return {
    id,
    name,
    date,
    timeStart,
    timeEnd,
    location,
    level,
    creator,
    status,
    dateCreate,
  };
}

const MeetingContainer = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [numberPage, setNumberPage] = useState(1);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [listMeeting, setListMeeting] = useState([]);
  const [rows, setRows] = useState([]);
  const [listRooms, setListRoms] = useState([]);
  const [listDepartment, setListDepartment] = useState([]);
  const [listTypes, setListTypes] = useState([]);
  const [listLevel, setListLevel] = useState([]);
  const [listEmployee, setListEmployee] = useState([]);
  const [listOption, setListOption] = useState([]);
  const [listStatus, setListStatus] = useState([]);
  const [itemSelected, setItemSelected] = useState({});

  const [roomSelected, setRoomSelected] = useState("");
  const [statusSelected, setStatusSelected] = useState("");
  const [text, setText] = useState("");

  const onSelectedRoom = (id) => {
    setRoomSelected(id);
  };

  const onSelectedStatus = (id) => {
    setStatusSelected(id);
  };

  const onSelectedText = (text) => {
    console.log("text++++", text);
    setText(text);
  };

  let date = new Date();

  const [startDate, setStartDate] = useState(
    new Date(date.getFullYear(), date.getMonth(), 1)
  );
  const [endDate, setEndDate] = useState(new Date());

  const onChangeDate = (startDate, endDate) => {
    console.log(startDate + "----" + endDate);
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const onSelectItem = (item) => {
    const selected = listMeeting.find((e) => e._id == item.id);
    setItemSelected(selected);
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalAccept, setModalAccept] = useState(false);
  const [modalReject, setModalReject] = useState(false);

  const closeUpdateModal = () => {
    setModalUpdate(false);
  };
  const openUpdateModal = () => {
    setModalUpdate(true);
  };

  const closeModalDelete = () => {
    setModalDelete(false);
  };
  const openModalDelete = () => {
    setModalDelete(true);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeAcceptModal = () => {
    setModalAccept(false);
  };
  const openAcceptModal = () => {
    setModalAccept(true);
  };

  const closeRejectModal = () => {
    setModalReject(false);
  };
  const openRejectModal = () => {
    setModalReject(true);
  };

  const getAllOption = async () => {
    let res;
    res = await getOption({ api_name: "api.v1.category.room.list" });
    if (res.data.data) {
      setListRoms(res.data.data);
    }
    res = await getOption({ api_name: "api.v1.category.department.list" });
    if (res.data.data) {
      setListDepartment(res.data.data);
    }
    res = await getOption({ api_name: "api.v1.category.type.list" });
    if (res.data.data) {
      setListTypes(res.data.data);
    }
    res = await getOption({ api_name: "api.v1.category.level.list" });
    if (res.data.data) {
      setListLevel(res.data.data);
    }
    res = await getOption({ api_name: "api.v1.employee.list" });
    if (res.data.data) {
      setListEmployee(res.data.data);
    }
    res = await getOption({ api_name: "api.v1.category.option.list" });
    if (res.data.data) {
      setListOption(res.data.data);
    }
    res = await getOption({ api_name: "api.v1.category.status.list" });
    if (res.data.data) {
      setListStatus(res.data.data.MEETINGS);
    }
  };

  useEffect(() => {
    getData();
    getAllOption();
  }, [pageCurrent]);

  useEffect(() => {
    const newList = listMeeting.map((e) =>
      createData(
        e._id,
        e.name,
        getDateOfMonth(e.start_time),
        getTime(e.start_time),
        getTime(e.end_time),
        e.room_name,
        e.level_name,
        e.created_by ? e.created_by.username : "",
        e.status_name,
        getDate(e.created_at)
      )
    );
    setRows(newList);
  }, [listMeeting]);

  const getData = async () => {
    const res = await getListMeeting({
      api_name: "api.v1.features.meeting.list",
      page_size: 500,
      page_index: pageCurrent,
      from_date: formatDateYYYY(startDate),
      to_date: formatDateYYYY(endDate),
    });
    if (res.data.data) {
      setListMeeting(res.data.data);
      setNumberPage(res.data.meta.total_page);
    }
  };

  const submitCreateMeeting = async (obj) => {
    if (obj) {
      const res = await createMeeting(obj);
      if (res.data.code == 400)
        enqueueSnackbar(res.data.message, { variant: "error" });
      else if (res.data.data && res.data.code == 200) {
        enqueueSnackbar("Thêm mới thành công!", { variant: "success" });
        getData();
        closeModal();
      }
    }
  };

  const deleteItem = async (obj) => {
    console.log("in delete", itemSelected);
    const res = await deleteMeeting(obj);
    if (res.data.code == 400) {
      enqueueSnackbar(res.data.message, { variant: "error" });
    } else if (res.data.code == 200) {
      enqueueSnackbar("Xóa mới thành công!", { variant: "success" });
      getData();
      closeUpdateModal();
    }
  };

  const submitUpdateMeeting = async (obj) => {
    if (obj) {
      console.log(obj);
      const res = await editMeeting(obj);
      console.log(res);
      if (res.data.code == 400)
        enqueueSnackbar(res.data.message, { variant: "error" });
      else if (res.data.data && res.data.code == 200) {
        enqueueSnackbar("Chỉnh sửa thành công!", { variant: "success" });
        getData();
        closeUpdateModal();
      }
    }
  };

  const getKeyWordFilter = async () => {
    const res = await filterMeeting({
      api_name: "api.v1.features.meeting.list",
      // page_size: 500,
      keyword: text,
      room: roomSelected,
      status: statusSelected,
      from_date: formatDateYYYY(startDate),
      to_date: formatDateYYYY(endDate),
    });
    console.log("res===", res);
    if (res.data.data) {
      setListMeeting(res.data.data);
      setNumberPage(res.data.meta.total_page);
    }
  };

  const submitAcceptMeeting = async (obj) => {
    if (obj) {
      const res = await acceptMeeting(obj);
      console.log("res ne", res);
      if (res.data.code == 400)
        enqueueSnackbar(res.data.message, { variant: "error" });
      else if (res.data.data && res.data.code == 200) {
        enqueueSnackbar("Phê duyệt thành công!", { variant: "success" });
        getData();
        closeAcceptModal();
      }
    }
  };

  const submitRejectMeeting = async (obj) => {
    if (obj) {
      const res = await rejectMeeting(obj);
      console.log("res ne", res);
      if (res.data.code == 400)
        enqueueSnackbar(res.data.message, { variant: "error" });
      else if (res.data.data && res.data.code == 200) {
        enqueueSnackbar("Hủy phê duyệt!", { variant: "success" });
        getData();
        closeRejectModal();
      }
    }
  };

  const changePageCurrent = (page) => setPageCurrent(page);

  return (
    <MeetingView
      numberPage={numberPage}
      pageCurrent={pageCurrent}
      changePageCurrent={changePageCurrent}
      rows={rows}
      listStatus={listStatus}
      listRooms={listRooms}
      listDepartment={listDepartment}
      listTypes={listTypes}
      listLevel={listLevel}
      listEmployee={listEmployee}
      listOption={listOption}
      submitCreateMeeting={submitCreateMeeting}
      submitUpdateMeeting={submitUpdateMeeting}
      modalIsOpen={modalIsOpen}
      openModal={openModal}
      closeModal={closeModal}
      modalUpdate={modalUpdate}
      closeUpdateModal={closeUpdateModal}
      openUpdateModal={openUpdateModal}
      deleteItem={deleteItem}
      onSelectItem={onSelectItem}
      modalDelete={modalDelete}
      closeModalDelete={closeModalDelete}
      openModalDelete={openModalDelete}
      itemSelected={itemSelected}
      getKeyWordFilter={getKeyWordFilter}
      startDate={startDate}
      endDate={endDate}
      onChangeDate={onChangeDate}
      onSelectedRoom={onSelectedRoom}
      onSelectedStatus={onSelectedStatus}
      onSelectedText={onSelectedText}
      roomSelected={roomSelected}
      statusSelected={statusSelected}
      text={text}
      submitAcceptMeeting={submitAcceptMeeting}
      openAcceptModal={openAcceptModal}
      closeAcceptModal={closeAcceptModal}
      modalAccept={modalAccept}
      submitRejectMeeting={submitRejectMeeting}
      openRejectModal={openRejectModal}
      closeRejectModal={closeRejectModal}
      modalReject={modalReject}
    />
  );
};

export default MeetingContainer;
