import React, { useState, useEffect } from "react";
import SystemRoleView from "./SystemRoleView";
import { getListRole } from "../../apis/Functions/system";
import { useSnackbar } from "notistack";

function createData(id, name, code) {
  return { id, name, code };
}

const SystemContainer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [listRole, setListRole] = useState([]);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const list = listRole.map((e) => createData(e._id, e.name, e.code));
    setRows(list);
  }, [listRole]);

  useEffect(() => {
    getData();
  }, [page]);

  const changePage = (page) => {
    setPage(page);
  };

  const getData = async () => {
    const res = await getListRole({
      api_name: "api.v1.core.role.list",
      page_index: page,
      page_size: 10,
    });
    console.log("res----", res);
    if (res.data.code == 400) {
      enqueueSnackbar(res.data.message, { variant: "error" });
    } else if (res.data.code == 200) {
      setListRole(res.data.data);
      setTotalPage(res.data.meta.total_page);
    }
  };

  return (
    <SystemRoleView
      rows={rows}
      totalPage={totalPage}
      changePage={changePage}
    ></SystemRoleView>
  );
};

export default SystemContainer;
