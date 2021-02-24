import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import {
    Divider,
    Grid,
    Typography,
    Button,

} from "@material-ui/core";

import Colors from "../../assets/Color";


const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%)",
    },
};



export default function RejectVisitor(props) {
    const { modalIsOpen, closeModal, submitRejectVisitor, itemSelected } = props;

    const [status, setStatus] = useState();

    useEffect(() => {
        if (itemSelected.status) setStatus(itemSelected.status);
    }, [itemSelected]);

    console.log("itemSelected++", itemSelected);

    const rejectForm = () => {
        submitRejectVisitor({
            api_name: "api.v1.features.visitor.update_status",
            _id: itemSelected._id,
            status: 0,
        });
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Grid container direction={"column"} spacing={3}>
                <Grid item>
                    <Typography>Hủy duyệt!</Typography>
                </Grid>
                <Divider />
                <Grid item style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <Typography style={{ marginTop: 20, marginBottom: 20 }}>
                        Bạn có muốn hủy duyệt không?
          </Typography>
                </Grid>
                <Divider />
                <Grid item>
                    <Grid
                        container
                        direction={"row"}
                        alignItems={"center"}
                        justify={"flex-end"}
                    >
                        <Button
                            onClick={closeModal}
                            variant={"contained"}
                            style={{
                                backgroundColor: Colors.red,
                                color: Colors.white,
                                marginRight: 20,
                            }}
                        >
                            Hủy bỏ
                        </Button>
                        <Button
                            onClick={rejectForm}
                            variant={"contained"}
                            style={{ backgroundColor: Colors.green, color: Colors.white }}
                        >
                            Đồng ý
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Modal>
    );
}
