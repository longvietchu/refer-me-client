import React, { createRef } from "react";
import Styles from "./Style";

import { Container, Modal, Grid, Backdrop } from "@material-ui/core";
import ModalEdit from "./ModalEdit";
const EditProfile = (props: any) => {
  const classes = Styles();
  //   const ref = createRef();
  return (
    <Container className={classes.container} maxWidth="xs">
      <Grid item>
        <Modal
          //   ref={ref}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          //   className={classes.modal}
          open={props.open}
          onClose={props.onClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <ModalEdit closeModal={props.closeModal} />
        </Modal>
      </Grid>
    </Container>
  );
};

export default EditProfile;
