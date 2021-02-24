
import React from 'react';
import Modal from 'react-modal';
import { Divider, Grid, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Colors from "../../assets/Color";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
    }
};


function ModalDelete(props) {


    const { modalIsOpen, closeModal, deleteItem } = props

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Grid container direction={'column'} spacing={3}>
                <Grid item>
                    <Typography >Xác nhận xóa!</Typography>
                </Grid>
                <Divider />
                <Grid item style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <Typography style={{ marginTop: 20, marginBottom: 20 }} >Bạn có chắc chắn muốn xóa không?</Typography>
                </Grid>
                <Divider />
                <Grid item>
                    <Grid container direction={'row'} alignItems={'center'} justify={'flex-end'}  >
                        <Button onClick={closeModal} variant={'contained'} style={{ backgroundColor: Colors.red, color: Colors.white, marginRight: 20 }} >
                            Hủy bỏ
                       </Button>
                        <Button onClick={deleteItem} variant={'contained'} style={{ backgroundColor: Colors.green, color: Colors.white }} >
                            Đồng ý
                       </Button>
                    </Grid>
                </Grid>


            </Grid>

        </Modal>
    );
}
export default ModalDelete
