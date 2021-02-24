import React from "react";
import WrapView from "../WrapView";
import { columns } from "./Data";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Paper,
} from "@material-ui/core";
import TableSystemLevel from "./TableSystemLevel";
import Header from "./Header";
import ModalLevel from "./ModalLevel";
import ModalDelete from "../../Component/Modal/ModalDelete";
import UpdateLevel from "./UpdateLevel";

const SystemLevelView = (props) => {
  const {
    rows,
    totalPage,
    changePage,
    name,
    code,
    text,
    submitUpdateLevel,
    submitCreateLevel,
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
          Danh sách mức độ quan trọng
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
              <TableSystemLevel
                rows={rows}
                columns={columns}
                totalPage={totalPage}
                changePage={changePage}
                onSelectItem={onSelectItem}
                openModalDelete={openModalDelete}
                openUpdateModal={openUpdateModal}
              ></TableSystemLevel>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <ModalLevel
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        openModal={openModal}
        submitCreateLevel={submitCreateLevel}
        name={name}
        code={code}
        onSelectedName={onSelectedName}
        onSelectedCode={onSelectedCode}
      />
      <UpdateLevel
        rows={rows}
        modalIsOpen={modalUpdate}
        closeModal={closeUpdateModal}
        openUpdateModal={openUpdateModal}
        submitUpdateLevel={submitUpdateLevel}
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

export default SystemLevelView;
