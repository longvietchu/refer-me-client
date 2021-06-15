import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: { borderRadius: 10 },
    ava: { height: 70, width: 70 },
    name: {
        marginLeft: 10,
        fontWeight: 'bold'
    },
    major: { marginLeft: 10, textTransform: 'capitalize' },
    btn_ignore: {
        marginRight: 8,
        textTransform: 'capitalize',
        color: '#00000099',
        fontWeight: 'bold'
    },
    btn_accept: {
        height: '32px',
        border: '1.5px solid #0a66c2',
        color: '#0a66c2',
        fontWeight: 'bold',
        borderRadius: '1.5rem',
        textTransform: 'capitalize'
    }
}));
