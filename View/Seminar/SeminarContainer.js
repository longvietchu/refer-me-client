import React, { useEffect, useState } from "react";

import {
  getListSeminar,
  createSeminar,
  deleteSeminar,
  editSeminar,
  filterSeminar,
  acceptSeminar,
  rejectSeminar
} from "../../apis/Functions/seminar";
import SeminarView from "./SeminarView";
import { getDate, getTime, getDateOfMonth, formatDateYYYY } from "../../config";
import { getOption } from "../../apis/Functions/option";
import { useSnackbar } from "notistack";

function createData(
  id,
  name,
  date,
  timeStart,
  timeEnd,
  location,
  speaker,
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
    speaker,
    creator,
    status,
    dateCreate,
  };
}

const SeminarContainer = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [numberPage, setNumberPage] = useState(1);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [listSeminar, setListSeminar] = useState([]);
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
    console.log("------------", item);
    console.log(listSeminar);
    const selected = listSeminar.find((e) => e._id == item.id);
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

  useEffect(() => {
    getData();
    getAllOption();
  }, [pageCurrent]);

  useEffect(() => {
    const newList = listSeminar.map((e) =>
      createData(
        e._id,
        e.name,
        getDateOfMonth(e.start_time),
        getTime(e.start_time),
        getTime(e.end_time),
        e.room_name,
        e.speaker,
        e.created_by,
        e.status_name,
        getDate(e.created_at)
      )
    );
    setRows(newList);
  }, [listSeminar]);

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
    res = await getOption({ api_name: "api.v1.category.status.list" });
    if (res.data.data) {
      setListStatus(res.data.data.SEMINARS);
    }
    res = await getOption({ api_name: "api.v1.category.option.list" });
    if (res.data.data) {
      setListOption(res.data.data);
    }
  };

  const getData = async () => {
    const res = await getListSeminar({
      api_name: "api.v1.features.seminar.list",
      page_index: pageCurrent,
      from_date: formatDateYYYY(startDate),
      to_date: formatDateYYYY(endDate),
    });
    if (res.data.data) {
      setListSeminar(res.data.data);
      setNumberPage(res.data.meta.total_page);
    }
  };

  const deleteItem = async (obj) => {
    console.log("in delete", itemSelected);
    const res = await deleteSeminar(obj);
    if (res.data.code == 400) {
      enqueueSnackbar(res.data.message, { variant: "error" });
    } else if (res.data.code == 200) {
      enqueueSnackbar("Xóa mới thành công!", { variant: "success" });
      getData();
      closeUpdateModal();
    }
  };

  const submitCreateSeminar = async (obj) => {
    if (obj) {
      console.log(obj);
      const res = await createSeminar(obj);
      console.log(res);
      if (res.data.code == 400)
        enqueueSnackbar(res.data.message, { variant: "error" });
      else if (res.data.data && res.data.code == 200) {
        enqueueSnackbar("Thêm mới thành công!", { variant: "success" });
        getData();
        closeModal();
      }
    }
  };

  const submitUpdateSeminar = async (obj) => {
    if (obj) {
      console.log(obj);
      const res = await editSeminar(obj);
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
    const res = await filterSeminar({
      api_name: "api.v1.features.seminar.list",
      keyword: text,
      room: roomSelected,
      status: statusSelected,
      from_date: formatDateYYYY(startDate),
      to_date: formatDateYYYY(endDate),
    });
    console.log("res===", res);
    if (res.data.data) {
      setListSeminar(res.data.data);
      setNumberPage(res.data.meta.total_page);
    }
  };

  const submitAcceptSeminar = async (obj) => {
    if (obj) {
      const res = await acceptSeminar(obj);
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

  const submitRejectSeminar = async (obj) => {
    if (obj) {
      const res = await rejectSeminar(obj);
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
    <SeminarView
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
      submitCreateSeminar={submitCreateSeminar}
      submitUpdateSeminar={submitUpdateSeminar}
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
      submitAcceptSeminar={submitAcceptSeminar}
      openAcceptModal={openAcceptModal}
      closeAcceptModal={closeAcceptModal}
      modalAccept={modalAccept}
      submitRejectSeminar={submitRejectSeminar}
      openRejectModal={openRejectModal}
      closeRejectModal={closeRejectModal}
      modalReject={modalReject}
    />
  );
};

export default SeminarContainer;
