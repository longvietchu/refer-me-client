import React, { useState, useEffect } from "react";
import SystemOfficeView from "./SystemOfficeView";
import { getListEmployee } from "../../apis/Functions/system";
import { useSnackbar } from "notistack";
import { getOffcie, editOffcie } from "../../apis/Functions/office";

function createData(id, name, contact_point) {
  return { id, name, contact_point };
}

const SystemContainer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [listOffice, setListOffice] = useState([]);
  const [rowOffice, setRowOffice] = useState([]);
  const [listAdmin, setListAdmin] = useState([]);
  const [listEmployee, setListEmployee] = useState([]);
  const [rowEmployee, setRowEmployee] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [adminSelected, setAdminSelected] = useState({});
  const [employeeSelected, setEmployeeSelected] = useState({});

  const onSelectedAdmin = (item) => {
    const selected = listOffice.find((e) => e._id == item.id);
    setAdminSelected(selected);
  };

  const onSelectedEmployee = (item) => {
    const selected = listEmployee.find((e) => e._id == item.id);
    setEmployeeSelected(selected);
  };

  const [officeSelected, setOfficeSelected] = useState("");
  const [adminName, setAdminName] = useState("");
  const [employeeName, setEmployeeName] = useState("");

  const onSelectedOffice = (id) => {
    console.log("id++++", id);
    setOfficeSelected(id);
  };

  const onSelectedAdminName = (name) => {
    setAdminName(name);
  };

  const onSelectedEmployeeName = (name) => {
    setEmployeeName(name);
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [adminUpdate, setAdminUpdate] = useState(false);
  const [employeeUpdate, setEmployeeUpdate] = useState(false);

  const closeUpdateAdmin = () => {
    setAdminUpdate(false);
  };

  const openUpdateAdmin = () => {
    setAdminUpdate(true);
  };

  const closeUpdateEmployee = () => {
    setEmployeeUpdate(false);
  };

  const openUpdateEmployee = () => {
    setEmployeeUpdate(true);
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

  useEffect(() => {
    const list = listOffice.map((e) =>
      createData(e._id, e.name, e.contact_point ? e.contact_point.fullname : "")
    );
    setRowOffice(list);
  }, [listOffice]);

  const getListAdmin = () => {
    if (listEmployee) {
      const newList = listEmployee.filter(
        (e) => e.office._id == officeSelected
      );
      setListAdmin(newList);
    }
  };

  useEffect(() => {
    console.log("-------Selected", officeSelected);
    if (listEmployee) {
      const newList = listEmployee
        .filter((e) => e.office._id == officeSelected)
        .map((e) => createData(e._id, e.fullname));
      console.log("rowEmployee++++", newList);
      setRowEmployee(newList);
    }
  }, [officeSelected]);

  useEffect(() => {
    getListAdmin();
  }, [officeSelected]);

  useEffect(() => {
    const listEmp = listEmployee.map((e) => createData(e._id, e.fullname));
    setRowEmployee(listEmp);
  }, [listEmployee]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const [res, res2] = await Promise.all([
      getOffcie({
        api_name: "api.v1.category.office.list",
      }),
      getListEmployee({
        api_name: "api.v1.employee.list",
        page_index: page,
        page_size: 10,
      }),
    ]);

    if (res.data.code == 400) {
      enqueueSnackbar(res.data.message, { variant: "error" });
    } else if (res.data.code == 200) {
      setListOffice(res.data.data);
      setListEmployee(res2.data.data);
    }
  };

  const submitUpdateAdmin = async (obj) => {
    if (obj) {
      const res = await editOffcie(obj);
      if (res.data.code == 400)
        enqueueSnackbar(res.data.message, { variant: "error" });
      else if (res.data.data && res.data.code == 200) {
        enqueueSnackbar("Chỉnh sửa thành công!", { variant: "success" });
        getData();
        closeUpdateAdmin();
      }
    }
  };

  const submitUpdateEmployee = async (obj) => {
    if (obj) {
      const res = await editOffcie(obj);
      console.log("resss", res);
      if (res.data.code == 400)
        enqueueSnackbar(res.data.message, { variant: "error" });
      else if (res.data.data && res.data.code == 200) {
        enqueueSnackbar("Chỉnh sửa thành công!", { variant: "success" });
        getData();
        closeUpdateEmployee();
      }
    }
  };

  return (
    <SystemOfficeView
      rowOffice={rowOffice}
      rowEmployee={rowEmployee}
      adminName={adminName}
      employeeName={employeeName}
      listOffice={listOffice}
      listEmployee={listEmployee}
      listAdmin={listAdmin}
      officeSelected={officeSelected}
      onSelectedOffice={onSelectedOffice}
      onSelectedAdminName={onSelectedAdminName}
      onSelectedEmployeeName={onSelectedEmployeeName}
      onSelectedEmployee={onSelectedEmployee}
      modalIsOpen={modalIsOpen}
      openModal={openModal}
      closeModal={closeModal}
      openUpdateAdmin={openUpdateAdmin}
      openUpdateEmployee={openUpdateEmployee}
      closeUpdateAdmin={closeUpdateAdmin}
      closeUpdateEmployee={closeUpdateEmployee}
      modalDelete={modalDelete}
      openModalDelete={openModalDelete}
      closeModalDelete={closeModalDelete}
      adminUpdate={adminUpdate}
      employeeUpdate={employeeUpdate}
      onSelectedAdmin={onSelectedAdmin}
      adminSelected={adminSelected}
      employeeSelected={employeeSelected}
      submitUpdateAdmin={submitUpdateAdmin}
      submitUpdateEmployee={submitUpdateEmployee}
    />
  );
};

export default SystemContainer;
