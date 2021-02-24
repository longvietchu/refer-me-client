import React, { useState } from 'react';
import Modal from 'react-modal';
import { Divider, Grid, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardTimePicker
} from '@material-ui/pickers';
import Colors from '../../assets/Color'
import { getDateVisitor, formatTimeDDSS } from "../../config";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: 480,
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
        marginRight: 0
    },
    mulltiline: {
        width: 445
    },
    txtInput: {
        width: 200,
        marginTop: 0,

    }

}));


function ModalVisitor(props) {


    const classes = useStyles()
    const { modalIsOpen, openModal, closeModal, onSubmitCreate } = props
    const [visitor, setVisitor] = useState({
        name: "",
        mobile: "",
        passport: "",
        organization: "",
    })

    const [employee, setEmployee] = useState({
        name: "",
        phone: ""
    })
    const [selectTimeStart, setSelectTimeStart] = useState(new Date());
    const [selectTimeEnd, setSelectTimeEnd] = useState(new Date());
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const submitCreate = () => {
        onSubmitCreate({
            api_name: "api.v1.features.visitor.store",
            visitor: visitor.name,
            mobile: visitor.mobile,
            passport: visitor.passport,
            organization: visitor.passport,
            contact_point: employee.name,
            contact_point_mobile: employee.phone,
            date_issue: getDateVisitor(selectedDate),
            arrived_at: formatTimeDDSS(selectTimeStart),
            leave_at: formatTimeDDSS(selectTimeEnd)
        })
    }



    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


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
                        <Typography variant={'h6'}>Tạo mới</Typography>
                    </Grid>
                    <Divider />

                    <Grid item>
                        <Grid container direction={'row'} spacing={5}>
                            <Grid item>
                                <TextField
                                    className={classes.txtInput}
                                    label={"Họ và tên đối tác"}
                                    onChange={event => setVisitor({ ...visitor, name: event.target.value })}
                                    required={true}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    className={classes.txtInput}
                                    label={"Số điện thoại"}
                                    onChange={event => setVisitor({ ...visitor, mobile: event.target.value })}
                                    required={true}
                                />

                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={'row'} spacing={5}>
                            <Grid item>
                                <TextField
                                    className={classes.txtInput}
                                    label={"Số CMT"}
                                    required={true}
                                    onChange={event => setVisitor({ ...visitor, passport: event.target.value })}
                                />
                            </Grid>
                            <div className={classes.picker}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    id="date-picker-inline"
                                    label="Ngày cấp"

                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />

                            </div>

                        </Grid>
                    </Grid>
                    <Grid item>
                        <TextField
                            id="outlined-multiline-static"
                            label="Tên cơ quan/Đơn vị"
                            multiline
                            onChange={event => setVisitor({ ...visitor, organization: event.target.value })}
                            rows={2}
                            value={visitor.organization}
                            variant="outlined"
                            className={classes.mulltiline}
                        />
                    </Grid>

                    <Grid item>
                        <Grid container direction={'row'} spacing={5}>
                            <div className={classes.picker}>
                                <KeyboardTimePicker
                                    label="Giờ vào"
                                    mask="__:__ _M"
                                    value={selectTimeStart}
                                    onChange={date => setSelectTimeStart(date)}
                                />
                            </div>
                            <div className={classes.picker}>
                                <KeyboardTimePicker
                                    label="Giờ ra"
                                    mask="__:__ _M"
                                    value={selectTimeEnd}
                                    onChange={date => setSelectTimeEnd(date)}
                                />

                            </div>

                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={'row'} spacing={5}>
                            <Grid item>
                                <TextField
                                    className={classes.txtInput}
                                    label={"Họ và tên đầu mối"}
                                    required={true}
                                    onChange={event => setEmployee({ ...employee, name: event.target.value })}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    className={classes.txtInput}
                                    label={"SĐT đầu mối"}
                                    required={true}
                                    onChange={event => setEmployee({ ...employee, phone: event.target.value })}
                                />
                            </Grid>

                        </Grid>
                    </Grid>
                    <Divider style={{ marginTop: 10 }} />
                    <Grid item>
                        <Grid container direction={'row'} alignItems={'center'} justify={'flex-end'}>
                            <Button onClick={closeModal} variant={'contained'}
                                style={{ backgroundColor: Colors.red, color: Colors.white, marginRight: 20 }}>
                                Hủy
                            </Button>
                            <Button onClick={submitCreate} variant={'contained'} style={{ backgroundColor: Colors.green, color: Colors.white }}>
                                Tạo
                            </Button>
                        </Grid>

                    </Grid>


                </Grid>
            </MuiPickersUtilsProvider>

        </Modal>
    );
}

export default ModalVisitor
