import React, { useState, useEffect } from "react";
import WrapView from "../WrapView";
import { columns } from "./Data";
import { columnsEnterprise } from "./DataEnterprise";
import { columnsEmployee } from "./DataEmployee";
import { Container, Typography, Grid, Paper } from "@material-ui/core";
import TableSystemOffice from "./TableSystemOffice";
import TableSystemEnterprise from "./TableSystemEnterprise";
import TableSystemEmployee from "./TableSystemEmployee";
import UpdateAdminOffice from "./UpdateAdminOffice";
import UpdateEmployeeOffice from "./UpdateEmployeeOffice";

const SystemOfficeView = (props) => {
  const {
    rowOffice,
    rowEmployee,
    adminName,
    employeeName,
    listOffice,
    listEmployee,
    listAdmin,
    officeSelected,
    onSelectedOffice,
    onSelectedAdminName,
    onSelectedEmployeeName,
    submitUpdateAdmin,
    submitUpdateEmployee,
    submitCreateRoom,
    modalIsOpen,
    openModal,
    closeModal,
    modalDelete,
    closeUpdateAdmin,
    closeModalDelete,
    deleteItem,
    onSelectItem,
    adminUpdate,
    itemSelected,
    openUpdateAdmin,
    openModalDelete,
    onSelectedAdmin,
    onSelectedEmployee,
    adminSelected,
    employeeSelected,
    employeeUpdate,
    closeUpdateEmployee,
    openUpdateEmployee,
  } = props;

  const [rowCompany, setRowCompany] = useState([]);

  useEffect(() => {
    setRowCompany([
      {
        id: JSON.parse(localStorage.getItem("company")).id,
        name: JSON.parse(localStorage.getItem("company")).name,
      },
    ]);
  }, []);

  return (
    <WrapView>
      <Container>
        <Typography style={{ marginTop: 10, marginBottom: 25 }} variant={"h5"}>
          Quản lý văn phòng
        </Typography>
        <Paper elevation={2}>
          <Grid container spacing={2}>
            <Grid xs={4} item>
              <TableSystemEnterprise
                rows={rowCompany}
                columns={columnsEnterprise}
              />
            </Grid>
            <Grid xs={4} item>
              <TableSystemOffice
                rows={rowOffice}
                columns={columns}
                officeSelected={officeSelected}
                onSelectedOffice={onSelectedOffice}
                onSelectedAdmin={onSelectedAdmin}
                openUpdateAdmin={openUpdateAdmin}
                openModalDelete={openModalDelete}
              />
            </Grid>
            <Grid xs={4} item>
              <TableSystemEmployee
                rows={rowEmployee}
                columns={columnsEmployee}
                onSelectedEmployee={onSelectedEmployee}
                openUpdateEmployee={openUpdateEmployee}
                openModalDelete={openModalDelete}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <UpdateAdminOffice
        rows={rowOffice}
        modalIsOpen={adminUpdate}
        closeModal={closeUpdateAdmin}
        openUpdateModal={openUpdateAdmin}
        submitUpdateAdmin={submitUpdateAdmin}
        adminSelected={adminSelected}
        onSelectedAdmin={onSelectedAdmin}
        onSelectedOffice={onSelectedOffice}
        onSelectedAdminName={onSelectedAdminName}
        listOffice={listOffice}
        listEmployee={listEmployee}
        listAdmin={listAdmin}
        officeSelected={officeSelected}
        adminName={adminName}
      />
      <UpdateEmployeeOffice
        rows={rowEmployee}
        modalIsOpen={employeeUpdate}
        closeModal={closeUpdateEmployee}
        openUpdateModal={openUpdateEmployee}
        submitUpdateEmployee={submitUpdateEmployee}
        onSelectedOffice={onSelectedOffice}
        onSelectedEmployeeName={onSelectedEmployeeName}
        onSelectedEmployee={onSelectedEmployee}
        listOffice={listOffice}
        listEmployee={listEmployee}
        officeSelected={officeSelected}
        employeeName={employeeName}
        employeeSelected={employeeSelected}
      />
    </WrapView>
  );
};

export default SystemOfficeView;
