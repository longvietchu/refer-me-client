import React, { useState, useEffect } from "react";
import SystemDepartmentView from "./SystemDepartmentView";
import {
  getDepartment,
  filterDepartment,
} from "../../apis/Functions/department";
import { useSnackbar } from "notistack";

function createData(id, name, code) {
  return { id, name, code };
}

const SystemContainer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [listDepartment, setListDepartment] = useState([]);
  const [rowDepartment, setRowDepartment] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [keyword, setKeyWord] = useState("");

  const onSelectedKeyWord = (keyword) => {
    console.log("keyword--", keyword);
    setKeyWord(keyword);
  };

  useEffect(() => {
    const list = listDepartment.map((e) => createData(e._id, e.name, e.code));
    setRowDepartment(list);
  }, [listDepartment]);

  useEffect(() => {
    getData();
  }, [page]);

  const changePage = (page) => {
    setPage(page);
  };

  const getData = async () => {
    const res = await getDepartment({
      api_name: "api.v1.category.department.list",
      page_index: page,
      page_size: 10,
    });
    if (res.data.code == 400) {
      enqueueSnackbar(res.data.message, { variant: "error" });
    } else if (res.data.code == 200) {
      setListDepartment(res.data.data);
      setTotalPage(res.data.meta.total_page);
    }
  };

  const getDepartmentFilter = async () => {
    const res = await filterDepartment({
      api_name: "api.v1.category.department.list",
      keyword: keyword,
    });
    console.log("ressss", res);
    if (res.data.data) {
      setListDepartment(res.data.data);
      setTotalPage(res.data.meta.total_page);
    }
  };

  return (
    <SystemDepartmentView
      rowDepartment={rowDepartment}
      totalPage={totalPage}
      changePage={changePage}
      onSelectedKeyWord={onSelectedKeyWord}
      getDepartmentFilter={getDepartmentFilter}
      keyword={keyword}
    />
  );
};

export default SystemContainer;
