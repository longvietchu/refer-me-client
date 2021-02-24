import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Paper } from "@material-ui/core";

import Header from "./Header";
import TableMeeting from "./TableMeeting";
import { columns } from "./Data";
import ModalDelete from "../../Component/Modal/ModalDelete";
import ModalMeeting from "./ModalMeeting";
import UpdateMeeting from "./UpdateMeeting";
import WrapView from "../WrapView";
import AcceptMeeting from "./AcceptMeeting";
import RejectMeeting from "./RejectMeeting";

const MeetingView = (props) => {
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
    submitCreateMeeting,
    submitUpdateMeeting,
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
    onSelectedRoom,
    onSelectedStatus,
    roomSelected,
    statusSelected,
    text,
    onSelectedText,
    submitAcceptMeeting,
    openAcceptModal,
    closeAcceptModal,
    modalAccept,
    submitRejectMeeting,
    openRejectModal,
    closeRejectModal,
    modalReject,
  } = props;

  return (
    <WrapView>
      <Container>
        <Typography style={{ marginTop: 10, marginBottom: 10 }} variant={"h5"}>
          Danh sách cuộc họp
        </Typography>
        <Paper elevation={2}>
          <Grid container>
            <Grid xs={12} item>
              <Header
                openModal={openModal}
                listRooms={listRooms}
                listStatus={listStatus}
                getKeyWordFilter={getKeyWordFilter}
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
              <TableMeeting
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
      <ModalMeeting
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        openModal={openModal}
        listRooms={listRooms}
        listStatus={listStatus}
        listDepartment={listDepartment}
        listTypes={listTypes}
        listLevel={listLevel}
        listEmployee={listEmployee}
        listOption={listOption}
        submitCreateMeeting={submitCreateMeeting}
      />
      <UpdateMeeting
        rows={rows}
        modalIsOpen={modalUpdate}
        closeModal={closeUpdateModal}
        openUpdateModal={openUpdateModal}
        listRooms={listRooms}
        listDepartment={listDepartment}
        listTypes={listTypes}
        listLevel={listLevel}
        listEmployee={listEmployee}
        listOption={listOption}
        submitUpdateMeeting={submitUpdateMeeting}
        itemSelected={itemSelected}
        onSelectItem={onSelectItem}
        openModalDelete={openModalDelete}
        deleteItem={deleteItem}
      />
      <ModalDelete
        modalIsOpen={modalDelete}
        closeModal={closeModalDelete}
        deleteItem={deleteItem}
      />
      <AcceptMeeting
        modalIsOpen={modalAccept}
        openUpdateModal={openAcceptModal}
        submitAcceptMeeting={submitAcceptMeeting}
        itemSelected={itemSelected}
        onSelectItem={onSelectItem}
        closeModal={closeAcceptModal}
      />
      <RejectMeeting
        modalIsOpen={modalReject}
        openUpdateModal={openRejectModal}
        submitRejectMeeting={submitRejectMeeting}
        itemSelected={itemSelected}
        onSelectItem={onSelectItem}
        closeModal={closeRejectModal}
      />
    </WrapView>
  );
};

export default MeetingView;
