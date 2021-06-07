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
    box: { minHeight: '100%' },

    btn: {
        width: '20%',
        height: '40px',
        border: '1.5px solid #0a66c2',
        color: '#0a66c2',
        fontWeight: 'bold',
        borderRadius: '1.5rem',
        marginBottom: '1rem',
        marginLeft: 12,
        textTransform: 'capitalize'
    }
}));
