import React from "react";
import WrapView from "../WrapView";
import { columns } from "./Data";
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
import TableListRoom from "./TableListRoom";
import Header from "./Header";
import ModalRoom from "./ModalRoom";
import ModalDelete from "../../Component/Modal/ModalDelete";
import UpdateRoom from "./UpdateRoom";

const SystemListRoomView = (props) => {
  const {
    rows,
    totalPage,
    changePage,
    name,
    code,
    office,
    submitUpdateRoom,
    submitCreateRoom,
    modalIsOpen,
    openModal,
    closeModal,
    modalDelete,
    closeUpdateModal,
    closeModalDelete,
    deleteItem,
    onSelectItem,
    onSelectedName,
    onSelectedCode,
    modalUpdate,
    itemSelected,
    getOfficeFilter,
    listOffice,
    officeSelected,
    onSelectedOffice,
    onfilterOffice,
    openUpdateModal,
    openModalDelete,
  } = props;

  return (
    <WrapView>
      <Container>
        <Typography style={{ marginTop: 10, marginBottom: 25 }} variant={"h5"}>
          Danh sách phòng họp
        </Typography>
        <Paper elevation={2}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Header
                openModal={openModal}
                listOffice={listOffice}
                office={office}
                onfilterOffice={onfilterOffice}
                getOfficeFilter={getOfficeFilter}
              />
            </Grid>
            <Grid xs={12} item>
              <TableListRoom
                rows={rows}
                columns={columns}
                totalPage={totalPage}
                changePage={changePage}
                onSelectItem={onSelectItem}
                openModalDelete={openModalDelete}
                openUpdateModal={openUpdateModal}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <ModalRoom
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        openModal={openModal}
        listOffice={listOffice}
        submitCreateRoom={submitCreateRoom}
        officeSelected={officeSelected}
        onSelectedOffice={onSelectedOffice}
        name={name}
        code={code}
        onSelectedName={onSelectedName}
        onSelectedCode={onSelectedCode}
      />
      <UpdateRoom
        rows={rows}
        modalIsOpen={modalUpdate}
        closeModal={closeUpdateModal}
        openUpdateModal={openUpdateModal}
        submitUpdateRoom={submitUpdateRoom}
        itemSelected={itemSelected}
        onSelectItem={onSelectItem}
        onSelectedOffice={onSelectedOffice}
        onSelectedName={onSelectedName}
        onSelectedCode={onSelectedCode}
        listOffice={listOffice}
        officeSelected={officeSelected}
        name={name}
        code={code}
      />
      <ModalDelete
        modalIsOpen={modalDelete}
        closeModal={closeModalDelete}
        deleteItem={deleteItem}
      />
    </WrapView>
  );
};

export default SystemListRoomView;
