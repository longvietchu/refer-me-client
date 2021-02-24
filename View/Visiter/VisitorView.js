import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
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
import TableUser from "./TableVisitor";

import { columns } from "./Data";
import PopupDatePicker from "../../Component/Popup/PopupDatePicker.js";
import ModalDelete from "../../Component/Modal/ModalDelete";
import ModalVisitor from "./ModalVisitor";
import UpdateVisitor from "./UpdateVisitor";
import WrapView from "../WrapView";
import AcceptVisitor from "./AcceptVisitor"
import RejectVisitor from "./RejectVisitor";

const VisitorView = (props) => {
  const {
    rows,
    pageCurrent,
    numberPage,
    changePageCurrent,
    onSubmitCreate,
    modalIsOpen,
    closeModal,
    openModal,
    openModalDelete,
    closeModalDelete,
    deleteItem,
    modalDelete,
    openUpdateModal,
    closeUpdateModal,
    modalUpdate,
    itemSelected,
    submitUpdateVisitor,
    onSelectItem,
    getKeyWordFilter,
    getDateFilter,
    startDate,
    endDate,
    onChangeDate,
    onSelectedText,
    text,
    submitAcceptVisitor,
    openAcceptModal,
    closeAcceptModal,
    modalAccept,
    submitRejectVisitor,
    openRejectModal,
    closeRejectModal,
    modalReject,
  } = props;

  return (
    <WrapView>
      <Container>
        <Typography style={{ marginTop: 10, marginBottom: 10 }} variant={"h5"}>
          Danh sách khách liên hệ làm việc
        </Typography>
        <Paper elevation={2}>
          <Grid container>
            <Grid xs={12} item>
              <Header
                openModal={openModal}
                getKeyWordFilter={getKeyWordFilter}
                // getDateFilter={getDateFilter}
                startDate={startDate}
                endDate={endDate}
                onChangeDate={onChangeDate}
                onSelectedText={onSelectedText}
                text={text}
              />
            </Grid>
            <Grid xs={12} item>
              <TableUser
                rows={rows}
                columns={columns}
                openModal={openModal}
                openModalDelete={openModalDelete}
                openUpdateModal={openUpdateModal}
                onSelectItem={onSelectItem}
                pageCurrent={pageCurrent}
                numberPage={numberPage}
                changePageCurrent={changePageCurrent}
                openAcceptModal={openAcceptModal}
                openRejectModal={openRejectModal}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <ModalVisitor
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        openModal={openModal}
        onSubmitCreate={onSubmitCreate}
      />
      <UpdateVisitor
        modalIsOpen={modalUpdate}
        closeModal={closeUpdateModal}
        openUpdateModal={openUpdateModal}
        submitUpdateVisitor={submitUpdateVisitor}
        itemSelected={itemSelected}
        deleteItem={deleteItem}
      />
      <ModalDelete
        modalIsOpen={modalDelete}
        closeModal={closeModalDelete}
        deleteItem={deleteItem}
      />
      <AcceptVisitor
        modalIsOpen={modalAccept}
        openUpdateModal={openAcceptModal}
        submitAcceptVisitor={submitAcceptVisitor}
        itemSelected={itemSelected}
        onSelectItem={onSelectItem}
        closeModal={closeAcceptModal}
      />
      <RejectVisitor
        modalIsOpen={modalReject}
        openUpdateModal={openRejectModal}
        submitRejectVisitor={submitRejectVisitor}
        itemSelected={itemSelected}
        onSelectItem={onSelectItem}
        closeModal={closeRejectModal}
      />
    </WrapView>
  );
};

export default VisitorView;
