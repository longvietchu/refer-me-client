import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import RangeDatePicker from '../Datepicker/RangeDatePicker';
import Colors from '../../assets/Color.js'
import { formatDateTimeDDMM } from '../../config/Function'

import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles((theme) => ({
    paper: {
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
    container: {
        marginTop: 20,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        float: 'left'
    },

}));

export default function TransitionsPopper(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'transitions-popper' : undefined;


    return (
        <div style={{ flexDirection: 'row' }} >
            <button className={classes.container} aria-describedby={id} type="button" onClick={handleClick}>
                <div>
                    {formatDateTimeDDMM(props.rangeTime.startDate)} - {formatDateTimeDDMM(props.rangeTime.endDate)}
                </div>
            </button>
            <div style={{ float: 'left', marginTop: 20, marginLeft: 10 }}>
                <DateRangeIcon />
            </div>



            <Popper id={id} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <RangeDatePicker handleClick={handleClick} onChangeDate={props.onChangeDate} />
                    </Fade>
                )}
            </Popper>
        </div>
    );
}
