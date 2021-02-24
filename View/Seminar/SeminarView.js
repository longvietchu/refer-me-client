import React, { useState } from "react";
import {
  makeStyles,
  Container,
  Typography,
  TextField,
  Grid,
  Card,
  InputLabel,
  Select,
  FormControl,
  Paper,
} from "@material-ui/core";

import Header from "./Header";
import TableSeminar from "./TableSeminar";
import { columns } from "./Data";
import ModalDelete from "../../Component/Modal/ModalDelete";
import ModalSeminar from "./ModalSeminar";
import WrapView from "../WrapView";
import UpdateSeminar from "./UpdateSeminar";
import AcceptSeminar from "./AcceptSeminar"
import RejectSeminar from "./RejectSeminar"

const SeminarView = (props) => {
  const {
    numberPage,
    pageCurrent,
    changePageCurrent,
    rows,
    listStatus,
    listRooms,
    listDepartment,
    listTypes,
    listLevel,
    listEmployee,
    listOption,
    submitCreateSeminar,
    submitUpdateSeminar,
    modalIsOpen,
    openModal,
    closeModal,
    deleteItem,
    onSelectItem,
    modalDelete,
    closeModalDelete,
    openModalDelete,
    openUpdateModal,
    closeUpdateModal,
    modalUpdate,
    itemSelected,
    getKeyWordFilter,
    startDate,
    endDate,
    onChangeDate,
    getDateFilter,
    onSelectedRoom,
    onSelectedStatus,
    roomSelected,
    statusSelected,
    text,
    onSelectedText,
    submitAcceptSeminar,
    openAcceptModal,
    closeAcceptModal,
    modalAccept,
    submitRejectSeminar,
    openRejectModal,
    closeRejectModal,
    modalReject,
  } = props;

  return (
    <WrapView>
      <Container>
        <Typography style={{ marginTop: 10, marginBottom: 10 }} variant={"h5"}>
          Danh sách Seminar
        </Typography>
        <Paper elevation={2}>
          <Grid container>
            <Grid xs={12} item>
              <Header
                openModal={openModal}
                listRooms={listRooms}
                listStatus={listStatus}
                getKeyWordFilter={getKeyWordFilter}
                // getDateFilter={getDateFilter}
                startDate={startDate}
                endDate={endDate}
                onChangeDate={onChangeDate}
                onSelectedRoom={onSelectedRoom}
                onSelectedText={onSelectedText}
                onSelectedStatus={onSelectedStatus}
                roomSelected={roomSelected}
                statusSelected={statusSelected}
                text={text}
              />
            </Grid>
            <Grid xs={12} item>
              <TableSeminar
                rows={rows}
                columns={columns}
                openModal={openModal}
                openUpdateModal={openUpdateModal}
                openModalDelete={openModalDelete}
                onSelectItem={onSelectItem}
                numberPage={numberPage}
                pageCurrent={pageCurrent}
                changePageCurrent={changePageCurrent}
                openAcceptModal={openAcceptModal}
                openRejectModal={openRejectModal}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <ModalSeminar
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        openModal={openModal}
        listRooms={listRooms}
        listDepartment={listDepartment}
        listTypes={listTypes}
        listLevel={listLevel}
        listEmployee={listEmployee}
        listOption={listOption}
        submitCreateSeminar={submitCreateSeminar}
      />
      <UpdateSeminar
        modalIsOpen={modalUpdate}
        closeModal={closeUpdateModal}
        openUpdateModal={openUpdateModal}
        listRooms={listRooms}
        listDepartment={listDepartment}
        listTypes={listTypes}
        listLevel={listLevel}
        listEmployee={listEmployee}
        listOption={listOption}
        submitUpdateSeminar={submitUpdateSeminar}
        itemSelected={itemSelected}
        deleteItem={deleteItem}
      />
      <ModalDelete
        modalIsOpen={modalDelete}
        closeModal={closeModalDelete}
        deleteItem={deleteItem}
      />
      <AcceptSeminar
        modalIsOpen={modalAccept}
        openUpdateModal={openAcceptModal}
        submitAcceptSeminar={submitAcceptSeminar}
        itemSelected={itemSelected}
        onSelectItem={onSelectItem}
        closeModal={closeAcceptModal}
      />
      <RejectSeminar
        modalIsOpen={modalReject}
        openUpdateModal={openRejectModal}
        submitRejectSeminar={submitRejectSeminar}
        itemSelected={itemSelected}
        onSelectItem={onSelectItem}
        closeModal={closeRejectModal}
      />
    </WrapView>
  );
};

export default SeminarView;
