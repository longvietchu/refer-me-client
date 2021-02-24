import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Divider, Grid, Typography, TextField, Button, InputLabel, Select, FormControl, FormControlLabel, Checkbox } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    TimePicker
} from '@material-ui/pickers';
import Colors from '../../assets/Color'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: 360,
        paddingBottom: 5,
        paddingTop: 10
    }
};


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    picker: {
        marginTop: 20,
        width: 205,
        paddingLeft: 20,
        marginRight: 20
    },
    mulltiline: {
        width: 445
    },
    line3: {
        width: 230,
        paddingLeft: 20,
        marginRight: 20
    },
}));


export default function UpdateType(props) {
    const classes = useStyles()
    const {
        modalIsOpen,
        closeModal,
        submitUpdateType,
        itemSelected,
        name,
        code,
        onSelectedName,
        onSelectedCode,
    } = props



    const updateForm = () => {
        submitUpdateType({
            api_name: "api.v1.category.type.update",
            _id: itemSelected._id,
            name,
            code,
        })
    }


    useEffect(() => {
        if (itemSelected.name)
            onSelectedName(itemSelected.name)
        if (itemSelected.code)
            onSelectedCode(itemSelected.code)
    }, [itemSelected])


    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container direction={'column'} spacing={3}>
                    <Grid item>
                        <Typography variant={'h6'} >Chỉnh sửa</Typography>
                    </Grid>
                    <Divider />
                    <Grid item>
                        <Grid container direction={'row'}>
                            <Grid style={{ width: "100%" }} item>
                                <TextField
                                    label="Tên phòng họp"
                                    variant="outlined"
                                    required={true}
                                    value={name}
                                    onChange={event => onSelectedName(event.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction={'row'}>
                            <Grid style={{ width: "100%" }} item>
                                <TextField
                                    label="Mã"
                                    variant="outlined"
                                    required={true}
                                    value={code}
                                    onChange={event => onSelectedCode(event.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Divider style={{ marginTop: 10 }} />

                    <Grid item >
                        <Grid container direction={'row'} alignItems={'center'} justify={'flex-end'}  >
                            <Button onClick={closeModal} variant={'contained'} style={{ backgroundColor: Colors.red, color: Colors.white, marginRight: 20 }} >
                                Hủy
                            </Button>
                            <Button onClick={updateForm} variant={'contained'} style={{ backgroundColor: Colors.green, color: Colors.white }} >
                                Cập nhật
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>

        </Modal >
    );
}
