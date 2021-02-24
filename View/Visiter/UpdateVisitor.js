import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { IconButton, Divider, Grid, Typography, TextField, Button, InputLabel, Select, FormControl, FormControlLabel, Checkbox } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import Colors from '../../assets/Color'
import { getDateVisitor, formatTimeDDSS } from "../../config";
import CloseIcon from '@material-ui/icons/Close';


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


export default function UpdateVisitor(props) {

  const classes = useStyles();

  const { modalIsOpen, closeModal, submitUpdateVisitor, itemSelected, deleteItem } = props

  const [visitorName, setVisitorName] = useState("")
  const [visitorMobile, setVisitorMobile] = useState("")
  const [visitorPassport, setVisitorPassport] = useState("")
  const [visitorOrganization, setVisitorOrganization] = useState("")

  const [employeeName, setEmployeeName] = useState("")
  const [employeeMobile, setEmployeeMobile] = useState("")

  const [selectTimeStart, setSelectTimeStart] = useState(new Date());
  const [selectTimeEnd, setSelectTimeEnd] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    setVisitorName(itemSelected.visitor)
    setVisitorMobile(itemSelected.mobile)
    setVisitorPassport(itemSelected.passport)
    setVisitorOrganization(itemSelected.organization)

    setEmployeeName(itemSelected.contact_point)
    setEmployeeMobile(itemSelected.contact_point_mobile)

    setSelectTimeStart(itemSelected.arrived_at)
    setSelectTimeEnd(itemSelected.leave_at)
    setSelectedDate(itemSelected.date_issue)
  }, [itemSelected])




  const updateForm = () => {
    submitUpdateVisitor({
      api_name: "api.v1.features.visitor.update",
      id: itemSelected._id,
      visitor: visitorName,
      mobile: visitorMobile,
      passport: visitorPassport,
      organization: visitorOrganization,
      contact_point: employeeName,
      contact_point_mobile: employeeMobile,
      date_issue: getDateVisitor(selectedDate),
      arrived_at: formatTimeDDSS(selectTimeStart),
      leave_at: formatTimeDDSS(selectTimeEnd)
    })
  }


  const deleteForm = () => {
    deleteItem({
      api_name: "api.v1.features.visitor.delete",
      _id: itemSelected._id
    });
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
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant={'h6'}>Chỉnh sửa</Typography>
            <IconButton
              onClick={closeModal}
              aria-label="delete"
              size="large"
              color="secondary"
            >
              <CloseIcon fontSize="medium" />
            </IconButton>
          </Grid>

          <Divider />

          <Grid item>
            <Grid container direction={'row'} spacing={5}>
              <Grid item>
                <TextField
                  className={classes.txtInput}
                  label={"Họ và tên đối tác"}
                  value={visitorName}
                  onChange={event => setVisitorName(event.target.value)}
                  required={true}
                />
              </Grid>
              <Grid item>
                <TextField
                  className={classes.txtInput}
                  label={"Số điện thoại"}
                  value={visitorMobile}
                  onChange={event => setVisitorMobile(event.target.value)}
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
                  value={visitorPassport}
                  required={true}
                  onChange={event => setVisitorPassport(event.target.value)}
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
                  onChange={(date) => setSelectedDate(date)}
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
              onChange={event => setVisitorOrganization(event.target.value)}
              rows={2}
              value={visitorOrganization}
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
                  value={employeeName}
                  required={true}
                  onChange={event => setEmployeeName(event.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  className={classes.txtInput}
                  label={"SĐT đầu mối"}
                  value={employeeMobile}
                  required={true}
                  onChange={event => setEmployeeMobile(event.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>

          <Divider style={{ marginTop: 10 }} />

          <Grid item>
            <Grid container direction={'row'} alignItems={'center'} justify={'flex-end'}>
              <Button onClick={deleteForm} variant={'contained'}
                style={{ backgroundColor: Colors.red, color: Colors.white, marginRight: 20 }}>
                Xóa
              </Button>
              <Button onClick={updateForm} variant={'contained'} style={{ backgroundColor: Colors.green, color: Colors.white }}>
                Cập nhật
              </Button>
            </Grid>
          </Grid>

        </Grid>
      </MuiPickersUtilsProvider>

    </Modal>
  );
}
