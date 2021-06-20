import { makeStyles } from '@material-ui/core';
import { darkSecondary } from '../../../common/assets/Colors';

export default makeStyles((theme) => ({
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: '10vh'
    },
    root: {
        borderRadius: 10
    },
    title: {
        color: '#00000099'
    },
    titleActive: {
        color: '#00000099',
        fontWeight: 'bold'
    },
    amount: {
        color: '#00000099'
    },
    expand: {
        width: '100%',
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        color: 'grey',
        transition: 'all 0.4s ease',
        '& > h4': {
            fontSize: 13,
            fontWeight: 600
        },
        '&:hover': {
            backgroundColor:
                theme.palette.type === 'dark' ? darkSecondary : 'lightgrey'
        }
    },
    sidebar__bottom: {
        position: 'sticky',
        top: '8vh',
        marginTop: 10
    }
}));
