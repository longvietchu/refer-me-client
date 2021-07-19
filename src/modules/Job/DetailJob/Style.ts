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
        fontSize: '30px',
        fontWeight: 500
    },
    company: {
        fontSize: 16,
        lineHeight: '18px',
        paddingTop: '4px',
        width: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10
    },
    icon: {
        fontSize: '24px',
        marginRight: 6,
        color: '#6e6e6e'
    },
    btn: {
        height: 40,
        border: '1px solid #0a66c2',
        color: '#0a66c2',
        fontSize: 18,
        fontWeight: 500,
        borderRadius: '2rem',
        textTransform: 'capitalize',
        padding: 16
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
    },
    jobHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12
    }
}));
