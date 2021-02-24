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
import { getOption } from '../../apis/Functions/option'
import { formatDatetime } from '../../config/Function'

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
        marginRight: 20
    },
    mulltiline: {
        width: 445
    },
    line3: {
        marginTop: 38,
        width: 205,
        paddingLeft: 20,
        marginRight: 20
    },
    line4: {
        marginTop: 38,
        marginBottom: 10,
        width: 205,
        paddingLeft: 20,
        marginRight: 20
    },
    Option: {
        marginBottom: 10,
        paddingLeft: 16,
        marginRight: 20
    },
    txtInput: {
        width: 200,
        marginTop: 0,
    }
}));


export default function ModalMeeting(props) {
    const classes = useStyles()
    const { modalIsOpen, openModal, closeModal, listRooms, listEmployee, listOption, submitCreateSeminar } = props
    const [OPT01, setOPT01] = useState(false)
    const [OPT02, setOPT02] = useState(false)
    const [OPT03, setOPT03] = useState(false)
    const [OPT04, setOPT04] = useState(false)


    const [startTime, setStartTime] = useState(new Date())
    const [endTime, setEndTime] = useState(new Date())
    const [roomSelected, setRomSelected] = useState();
    const [typeSelected, setTypeSelected] = useState();
    const [levelSelected, setLevelSelected] = useState();
    const [employeeSelected, setEmployeeSelected] = useState()
    const [selectedDate, setSelectedDate] = useState(new Date());



    const [speaker, setSeaker] = useState("")
    const [name, setName] = useState("")
    const [count, setCount] = useState()
    const [note, setNote] = useState();





    const submitForm = () => {
        submitCreateSeminar({
            api_name: "api.v1.features.seminar.store",
            notes: note,
            name,
            participant_number: parseInt(count),
            speaker,
            start_time: formatDatetime(selectedDate, startTime),
            end_time: formatDatetime(selectedDate, endTime),
            room: roomSelected,
            secretary: employeeSelected
        })
    }


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
                        <Typography variant={'h6'} >Tạo mới</Typography>
                    </Grid>
                    <Divider />

                    <Grid item>
                        <Grid container direction={'row'}>
                            <Grid style={{ width: "100%" }} item>
                                <TextField
                                    label="Tên seminar"
                                    variant="outlined"
                                    required={true}
                                    value={name}
                                    onChange={event => setName(event.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction={'row'} spacing={5}>
                            <div className={classes.picker}>
                                <KeyboardDatePicker
                                    view={["day", "time"]}
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    id="date-picker-inline"
                                    label="Ngày"

                                    value={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </div>
                            <div className={classes.picker}>
                                <Grid container direction={'row'} spacing={2}>
                                    <Grid item>
                                        <TimePicker
                                            variant="inline"
                                            label="Start"
                                            onChange={(date) => setStartTime(date)}
                                            value={startTime}
                                            style={{ width: 80 }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TimePicker
                                            variant="inline"
                                            label="End"
                                            value={endTime}
                                            onChange={(date) => setEndTime(date)}
                                            style={{ width: 80 }}
                                        />
                                    </Grid>
                                </Grid>


                            </div>

                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction={'row'} spacing={5}>
                            <div className={classes.line3}>
                                <FormControl fullWidth className={classes.formControl}>
                                    <InputLabel htmlFor="age-native-simple">- Địa điểm -</InputLabel>
                                    <Select
                                        native
                                        value={roomSelected}
                                        onChange={(event) => setRomSelected(event.target.value)}
                                        inputProps={{
                                            name: 'age',
                                            id: 'age-native-simple',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        {listRooms.map(e => <option value={e._id}>{e.name}</option>)}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className={classes.line3}>
                                <TextField
                                    label="Số người tham gia"
                                    value={count}
                                    onChange={event => setCount(event.target.value)}

                                    type={'numbers'}
                                    fullWidth
                                />
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction={'row'} spacing={5}>
                            <div className={classes.line4}>
                                <TextField
                                    label="Diễn giả"
                                    value={speaker}
                                    onChange={event => setSeaker(event.target.value)}
                                    type={'numbers'}
                                    fullWidth
                                />
                            </div>
                            <div className={classes.line4}>
                                <FormControl fullWidth className={classes.formControl}>
                                    <InputLabel htmlFor="age-native-simple">- Thư ký -</InputLabel>
                                    <Select
                                        native
                                        value={employeeSelected}
                                        onChange={(event) => setEmployeeSelected(event.target.value)}
                                        inputProps={{
                                            name: 'age',
                                            id: 'age-native-simple',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        {listEmployee.map(e => <option value={e._id}>{e.username}</option>)}
                                    </Select>
                                </FormControl>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction={'row'}>
                            <Grid style={{ width: "100%" }} item>
                                <TextField
                                    label="Ghi chú"
                                    required={true}

                                    variant="outlined"
                                    value={note}
                                    onChange={event => setNote(event.target.value)}
                                    multiline={true}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <div className={classes.Option}>
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            <Typography variant={'h6'}>Tùy chọn khác</Typography>
                            <FormControlLabel
                                control={<Checkbox checked={OPT01} onChange={(event) => setOPT01(event.target.checked)} />}
                                label="Có khách mời"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={OPT02} onChange={(event) => setOPT02(event.target.checked)} />}
                                label="Gửi email cho người tham dự"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={OPT03} onChange={(event) => setOPT03(event.target.checked)} />}
                                label="Sử dụng máy chiếu"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={OPT04} onChange={(event) => setOPT04(event.target.checked)} />}
                                label="Sử dụng bảng"
                            />
                        </Grid>
                    </div>

                    <Divider style={{ marginTop: 5 }} />

                    <Grid item >
                        <Grid container direction={'row'} alignItems={'center'} justify={'flex-end'}  >
                            <Button onClick={closeModal} variant={'contained'} style={{ backgroundColor: Colors.red, color: Colors.white, marginRight: 20 }} >
                                Hủy
                            </Button>
                            <Button onClick={submitForm} variant={'contained'} style={{ backgroundColor: Colors.green, color: Colors.white }} >
                                Tạo
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>

        </Modal >
    );
}
