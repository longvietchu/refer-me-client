import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    app: {
        backgroundColor: 'rgb(243, 242, 239)'
    },

    app__header: {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: 50,
        display: 'flex',
        justifyContent: 'center'
    },

    app__body: {
        display: 'flex',
        minHeight: 'calc(100vh - 50px)',
        justifyContent: 'center',
        paddingTop: 50,
        paddingBottom: 50,
        [theme.breakpoints.down('xs')]: {
            paddingTop: 10,
            paddingBottom: 55
        }
    },

    body__sidebar: {
        minWidth: 150,
        maxWidth: 300,
        height: 'auto'
    },

    body__feed: {
        minWidth: 500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 25px',
        paddingBottom: 25,
        [theme.breakpoints.down('xs')]: {
            minWidth: 0,
            padding: 0
        }
    },

    feed__form: {
        width: '100%',
        height: 'auto'
    },

    feed__posts: {
        width: '100%',
        height: 'auto'
    },

    paper: {
        marginTop: 16,
        borderRadius: 10
    },

    body__widgets: {
        minWidth: 225,
        maxWidth: 300
    },

    card: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    btn_container: { display: 'flex', flexDirection: 'column', height: '100%' },

    box: {
        display: 'flex',
        justifyContent: 'space-between'
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
        fontSize: '12px'
        // marginTop: '100px'
    }
}));
