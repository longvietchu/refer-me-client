import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    btn_container: { display: 'flex', flexDirection: 'column', height: '100%' },

    box: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 130
    },
    title: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        fontSize: '24px'
    },
    company: {
        color: '#00000099',
        fontSize: '15px',
        paddingTop: '4px',
        width: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    location: {
        color: '#00000099',
        fontSize: '15px',
        width: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    time: {
        color: '#00000099',
        fontSize: '12px',
        marginTop: '50px'
    }
}));
