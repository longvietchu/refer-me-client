import React, { useState, useEffect } from "react";
import SystemTypeMeetingView from "./SystemTypeMeetingView";
import { getListTypeMeeting } from "../../apis/Functions/system";
import { useSnackbar } from "notistack";
import {
  createType,
  deleteType,
  editType,
  filterType,
} from "../../apis/Functions/type";

function createData(id, name, code) {
  return { id, name, code };
}

const SystemContainer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [listTypeMeeting, setListTypeMeeting] = useState([]);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [itemSelected, setItemSelected] = useState({});
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [text, setText] = useState("");

  const onSelectedName = (name) => {
    setName(name);
  };

  const onSelectedText = (text) => {
    setText(text);
  };

  const onSelectedCode = (code) => {
    setCode(code);
  };
  const onSelectItem = (item) => {
    const selected = listTypeMeeting.find((e) => e._id == item.id);
    setItemSelected(selected);
  };

  useEffect(() => {
    const list = listTypeMeeting.map((e) => createData(e._id, e.name, e.code));
    setRows(list);
  }, [listTypeMeeting]);

  useEffect(() => {
    getData();
  }, [page]);

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
    const res = await getListTypeMeeting({
      api_name: "api.v1.category.type.list",
      page_index: page,
      page_size: 10,
    });
    if (res.data.code == 400) {
      enqueueSnackbar(res.data.message, { variant: "error" });
    } else if (res.data.code == 200) {
      setListTypeMeeting(res.data.data);
      setTotalPage(res.data.meta.total_page);
    }
  };

  const submitCreateType = async (obj) => {
    if (obj) {
      const res = await createType(obj);
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

  const submitUpdateType = async (obj) => {
    if (obj) {
      console.log(obj);
      const res = await editType(obj);
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
    const res = await deleteType({
      api_name: "api.v1.category.type.lock",
      _id: itemSelected._id,
    });
    if (res.data.code == 400) {
      enqueueSnackbar(res.data.message, { variant: "error" });
    } else if (res.data.code == 200) {
      enqueueSnackbar(res.data.message, { variant: "success" });
      getData();
      closeModalDelete();
    }
  };

  const getKeywordFilter = async () => {
    const res = await filterType({
      api_name: "api.v1.category.type.list",
      keyword: text,
    });
    if (res.data.data) {
      setListTypeMeeting(res.data.data);
      setTotalPage(res.data.meta.total_page);
    }
  };

  return (
    <SystemTypeMeetingView
      rows={rows}
      totalPage={totalPage}
      modalIsOpen={modalIsOpen}
      openModal={openModal}
      closeModal={closeModal}
      changePage={changePage}
      openUpdateModal={openUpdateModal}
      closeUpdateModal={closeUpdateModal}
      submitCreateType={submitCreateType}
      submitUpdateType={submitUpdateType}
      modalDelete={modalDelete}
      itemSelected={itemSelected}
      openModalDelete={openModalDelete}
      closeModalDelete={closeModalDelete}
      deleteItem={deleteItem}
      onSelectItem={onSelectItem}
      name={name}
      code={code}
      text={text}
      onSelectedName={onSelectedName}
      onSelectedCode={onSelectedCode}
      onSelectedText={onSelectedText}
      modalUpdate={modalUpdate}
      getKeywordFilter={getKeywordFilter}
    />
  );
};

export default SystemContainer;
