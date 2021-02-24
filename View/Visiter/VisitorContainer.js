import React, { useEffect, useState } from "react";

import {
  getListVistitor,
  createVisitor,
  deleteVisitor,
  editVisitor,
  filterVisitor,
  acceptVisitor,
  rejectVisitor
} from "../../apis/Functions/visitor";
import VisitorView from "./VisitorView";
import { getTime, getDate, formatDateYYYY } from "../../config/Function";
import { useSnackbar } from "notistack";

function createData(
  id,
  date,
  startTime,
  endTime,
  name,
  sdt,
  status,
  employee,
  sdtEmployee
) {
  return {
    id,
    date,
    startTime,
    endTime,
    name,
    sdt,
    status,
    employee,
    sdtEmployee,
  };
}

const VisitorContainer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [numberPage, setNumberPage] = useState(2);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [listVisitor, setListVisitor] = useState([]);
  const [rows, setRows] = useState([]);

  const [text, setText] = useState("");

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

  const [itemSelected, setItemSelected] = useState({});

  const onSelectItem = (item) => {
    console.log("------------item", item);
    console.log(listVisitor);
    const selected = listVisitor.find((e) => e._id == item.id);
    setItemSelected(selected);
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalAccept, setModalAccept] = useState(false);
  const [modalReject, setModalReject] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
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
  }, [pageCurrent]);

  useEffect(() => {
    const newList = listVisitor.map((e) =>
      createData(
        e._id,
        getDate(e.created_at),
        getTime(e.arrived_at),
        getTime(e.leave_at),
        e.visitor,
        e.mobile,
        e.status_name,
        e.contact_point,
        e.contact_point_mobile
      )
    );
    setRows(newList);
  }, [listVisitor]);

  const getData = async () => {
    const res = await getListVistitor({
      api_name: "api.v1.features.visitor.list",
      page_index: pageCurrent,
      from_date: formatDateYYYY(startDate),
      to_date: formatDateYYYY(endDate),
    });
    console.log("res tra ve ne", res);
    if (res.data) {
      setListVisitor(res.data.data);
      setNumberPage(res.data.meta.total_page);
    }
  };

  const changePageCurrent = (page) => {
    setPageCurrent(page);
  };

  const onSubmitCreate = async (obj) => {
    if (obj) {
      console.log(obj);
      const res = await createVisitor(obj);
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

  const deleteItem = async (obj) => {
    console.log("in delete", itemSelected);
    const res = await deleteVisitor(obj);
    if (res.data.code == 400) {
      enqueueSnackbar(res.data.message, { variant: "error" });
    } else if (res.data.code == 200) {
      enqueueSnackbar("Xóa mới thành công!", { variant: "success" });
      getData();
      closeUpdateModal();
    }
  };

  const submitUpdateVisitor = async (obj) => {
    if (obj) {
      console.log(obj);
      const res = await editVisitor(obj);
      console.log("day la res", res);
      if (res.data.code == 400) {
        enqueueSnackbar(res.data.message, { variant: "error" });
      } else if (res.data && res.data.code == 200) {
        enqueueSnackbar("Chỉnh sửa thành công!", { variant: "success" });
        getData();
        closeUpdateModal();
      }
    }
  };

  const getKeyWordFilter = async () => {
    const res = await filterVisitor({
      api_name: "api.v1.features.visitor.list",
      keyword: text,
      from_date: formatDateYYYY(startDate),
      to_date: formatDateYYYY(endDate),
    });
    console.log("res===", res);
    if (res.data.data) {
      setListVisitor(res.data.data);
      setNumberPage(res.data.meta.total_page);
    }
  };

  const submitAcceptVisitor = async (obj) => {
    if (obj) {
      const res = await acceptVisitor(obj);
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

  const submitRejectVisitor = async (obj) => {
    if (obj) {
      const res = await rejectVisitor(obj);
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

  return (
    <VisitorView
      rows={rows}
      pageCurrent={pageCurrent}
      numberPage={numberPage}
      changePageCurrent={changePageCurrent}
      onSubmitCreate={onSubmitCreate}
      openModal={openModal}
      closeModal={closeModal}
      modalUpdate={modalUpdate}
      modalIsOpen={modalIsOpen}
      closeModalDelete={closeModalDelete}
      openModalDelete={openModalDelete}
      closeUpdateModal={closeUpdateModal}
      openUpdateModal={openUpdateModal}
      modalDelete={modalDelete}
      deleteItem={deleteItem}
      submitUpdateVisitor={submitUpdateVisitor}
      onSelectItem={onSelectItem}
      itemSelected={itemSelected}
      getKeyWordFilter={getKeyWordFilter}
      startDate={startDate}
      endDate={endDate}
      onChangeDate={onChangeDate}
      onSelectedText={onSelectedText}
      text={text}
      submitAcceptVisitor={submitAcceptVisitor}
      openAcceptModal={openAcceptModal}
      closeAcceptModal={closeAcceptModal}
      modalAccept={modalAccept}
      submitRejectVisitor={submitRejectVisitor}
      openRejectModal={openRejectModal}
      closeRejectModal={closeRejectModal}
      modalReject={modalReject}
    />
  );
};

export default VisitorContainer;
