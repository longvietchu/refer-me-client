import React from "react";
import WrapView from "../WrapView";
import { columns } from "./Data";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  Paper,
} from "@material-ui/core";
import TableOption from "./TableOption";
import Header from "./Header";
import ModalOption from "./ModalOption";
import ModalDelete from "../../Component/Modal/ModalDelete";
import UpdateOption from "./UpdateOption";

const SystemOptionView = (props) => {
  const {
    rows,
    totalPage,
    changePage,
    name,
    code,
    text,
    submitUpdateOption,
    submitCreateOption,
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
          Danh sách tùy chọn
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
              <TableOption
                rows={rows}
                columns={columns}
                totalPage={totalPage}
                changePage={changePage}
                onSelectItem={onSelectItem}
                openModalDelete={openModalDelete}
                openUpdateModal={openUpdateModal}
              ></TableOption>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <ModalOption
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        openModal={openModal}
        submitCreateOption={submitCreateOption}
        name={name}
        code={code}
        onSelectedName={onSelectedName}
        onSelectedCode={onSelectedCode}
      />
      <UpdateOption
        rows={rows}
        modalIsOpen={modalUpdate}
        closeModal={closeUpdateModal}
        openUpdateModal={openUpdateModal}
        submitUpdateOption={submitUpdateOption}
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

export default SystemOptionView;
