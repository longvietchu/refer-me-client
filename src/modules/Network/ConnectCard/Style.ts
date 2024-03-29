import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        marginTop: 10,
        borderRadius: 10
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: 8
    },
    box: { display: 'flex', justifyContent: 'center' },

    ava_top: {
        height: '120px',
        width: '120px'
    },

    name: {
        fontSize: '16px',
        fontWeight: 'bold',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 1
    },
    occupation: {
        color: '#00000099',
        fontSize: '14px',
        height: '42px',
        marginBottom: '16px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2
    },
    time: {
        color: '#00000099',
        fontSize: '12px',
        marginTop: '50px'
    },
    btn: {
        height: '36px',
        width: '100%',
        border: '1px solid #0a66c2',
        color: '#0a66c2',
        fontWeight: 'bold',
        borderRadius: '1.5rem',
        textTransform: 'capitalize'
    },
    btnSend: {
        width: '100px',
        height: '35px',
        margin: 10
    },
    btnCancel: {
        border: '2px solid #0a66c2',
        color: '#0a66c2',
        width: '100px',
        height: '35px',
        margin: 10
    }
}));
