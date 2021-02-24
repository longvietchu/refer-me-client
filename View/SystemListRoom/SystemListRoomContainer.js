import React, { useState, useEffect } from "react";
import SystemListRoomView from "./SystemListRoomView";
import { getListRoomMeeting } from "../../apis/Functions/system";
import { useSnackbar } from "notistack";
import { getOption } from "../../apis/Functions/option";
import {
  createRoom,
  deleteRoom,
  editRoom,
  filterRoom,
} from "../../apis/Functions/room";

function createData(id, name, code, capacity, officename) {
  return { id, name, code, capacity, officename };
}

const SystemContainer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [listRoomMeeting, setListRoomMeeting] = useState([]);
  const [listOffice, setListOffice] = useState([]);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [itemSelected, setItemSelected] = useState({});

  const [officeSelected, setOfficeSelected] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [office, setOffice] = useState("");

  const onSelectedOffice = (id) => {
    console.log("id----", id);
    setOfficeSelected(id);
  };

  const onSelectedName = (name) => {
    setName(name);
  };

  const onSelectedCode = (code) => {
    setCode(code);
  };

  const onfilterOffice = (id) => {
    console.log("id----", id);
    setOffice(id);
  };

  const onSelectItem = (item) => {
    const selected = listRoomMeeting.find((e) => e._id == item.id);
    setItemSelected(selected);
  };

  useEffect(() => {
    const list = listRoomMeeting.map((e) =>
      createData(e._id, e.name, e.code, e.capacity, e.office_name)
    );
    setRows(list);
    console.log("listsss", list);
  }, [listRoomMeeting]);

  const changePage = (page) => {
    setPage(page);
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);

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

  const getData = async () => {
    const res = await getListRoomMeeting({
      api_name: "api.v1.category.room.list",
      page_index: page,
      page_size: 10,
    });
    if (res.data.code == 400) {
      enqueueSnackbar(res.data.message, { variant: "error" });
    } else if (res.data.code == 200) {
      setListRoomMeeting(res.data.data);
      setTotalPage(res.data.meta.total_page);
    }
  };

  const submitCreateRoom = async (obj) => {
    if (obj) {
      const res = await createRoom(obj);
      console.log("res ne", res);
      if (res.data.code == 400)
        enqueueSnackbar(res.data.message, { variant: "error" });
      else if (res.data.data && res.data.code == 200) {
        enqueueSnackbar("Thêm mới thành công!", { variant: "success" });
        getData();
        closeModal();
      }
    }
  };

  const submitUpdateRoom = async (obj) => {
    if (obj) {
      console.log(obj);
      const res = await editRoom(obj);
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

  const deleteItem = async (obj) => {
    const res = await deleteRoom({
      api_name: "api.v1.category.room.lock",
      _id: itemSelected._id,
    });
    if (res.data.code == 400) {
      enqueueSnackbar(res.data.message, { variant: "error" });
    } else if (res.data.code == 200) {
      enqueueSnackbar(res.data.message, { variant: "success" });
      getData();
      closeModalDelete();
    }
    console.log("in delete", res);
  };

  const getOfficeFilter = async () => {
    const res = await filterRoom({
      api_name: "api.v1.category.room.list",
      office: office,
    });
    if (res.data.data) {
      setListRoomMeeting(res.data.data);
      setTotalPage(res.data.meta.total_page);
    }
  };

  const getAllOption = async () => {
    let res;
    res = await getOption({ api_name: "api.v1.category.office.list" });
    if (res.data.data) {
      setListOffice(res.data.data);
    }
  };

  useEffect(() => {
    getData();
    getAllOption();
  }, [page]);

  return (
    <SystemListRoomView
      rows={rows}
      totalPage={totalPage}
      modalIsOpen={modalIsOpen}
      openModal={openModal}
      closeModal={closeModal}
      changePage={changePage}
      listOffice={listOffice}
      openUpdateModal={openUpdateModal}
      closeUpdateModal={closeUpdateModal}
      submitCreateRoom={submitCreateRoom}
      submitUpdateRoom={submitUpdateRoom}
      officeSelected={officeSelected}
      modalDelete={modalDelete}
      itemSelected={itemSelected}
      openModalDelete={openModalDelete}
      closeModalDelete={closeModalDelete}
      deleteItem={deleteItem}
      onSelectItem={onSelectItem}
      name={name}
      code={code}
      office={office}
      onSelectedName={onSelectedName}
      onSelectedCode={onSelectedCode}
      onSelectedOffice={onSelectedOffice}
      onfilterOffice={onfilterOffice}
      modalUpdate={modalUpdate}
      getOfficeFilter={getOfficeFilter}
    />
  );
};

export default SystemContainer;
