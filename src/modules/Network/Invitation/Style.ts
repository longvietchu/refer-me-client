import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: { borderRadius: 10 },
    ava: { height: 56, width: 56 },
    name: {
        marginLeft: 10,
        fontWeight: 'bold',
        '& > span': {
            fontSize: 14,
            color: '#00000099'
        }
    },
    major: { marginLeft: 10, fontSize: 14, color: '#00000099' },
    btn_ignore: {
        marginRight: 8,
        textTransform: 'capitalize',
        color: '#00000099',
        fontWeight: 'bold'
    },
    btn_accept: {
        height: '32px',
        border: '1px solid #0a66c2',
        color: '#0a66c2',
        fontWeight: 'bold',
        borderRadius: '1.5rem',
        textTransform: 'capitalize'
    },
    link: {
        display: 'flex',
        textDecoration: 'none',
        color: '#333',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    invitationList: {},
    invitationItem: {
        borderBottom: '1px solid #ebebeb'
    }
}));
