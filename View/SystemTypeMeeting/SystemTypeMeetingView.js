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
import TableSystemTypeMeeting from "./TableSystemTypeMeeting";
import Header from "./Header";
import ModalType from "./ModalType";
import ModalDelete from "../../Component/Modal/ModalDelete";
import UpdateType from "./UpdateType";

const SystemDepartmentView = (props) => {
  const {
    rows,
    totalPage,
    changePage,
    name,
    code,
    text,
    submitUpdateType,
    submitCreateType,
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
    onSelectedText,
    modalUpdate,
    itemSelected,
    openUpdateModal,
    openModalDelete,
    getKeywordFilter,
  } = props;

  return (
    <WrapView>
      <Container>
        <Typography style={{ marginTop: 10, marginBottom: 25 }} variant={"h5"}>
          Danh sách loại cuộc họp
        </Typography>
        <Paper elevation={2}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Header
                openModal={openModal}
                getKeywordFilter={getKeywordFilter}
                text={text}
                onSelectedText={onSelectedText}
              />
            </Grid>
            <Grid xs={12} item>
              <TableSystemTypeMeeting
                rows={rows}
                columns={columns}
                totalPage={totalPage}
                changePage={changePage}
                onSelectItem={onSelectItem}
                openModalDelete={openModalDelete}
                openUpdateModal={openUpdateModal}
              ></TableSystemTypeMeeting>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <ModalType
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        openModal={openModal}
        submitCreateType={submitCreateType}
        name={name}
        code={code}
        onSelectedName={onSelectedName}
        onSelectedCode={onSelectedCode}
      />
      <UpdateType
        rows={rows}
        modalIsOpen={modalUpdate}
        closeModal={closeUpdateModal}
        openUpdateModal={openUpdateModal}
        submitUpdateType={submitUpdateType}
        itemSelected={itemSelected}
        onSelectItem={onSelectItem}
        onSelectedName={onSelectedName}
        onSelectedCode={onSelectedCode}
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

export default SystemDepartmentView;
