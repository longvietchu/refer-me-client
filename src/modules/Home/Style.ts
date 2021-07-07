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
        marginTop: 10,
        marginBottom: 50
    },

    body__sidebar: {
        minWidth: 150,
        maxWidth: 220,
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

    body__widgets: {
        minWidth: 225,
        maxWidth: 300
    },
    imageItem: {
        borderRadius: 24,
        padding: '0 2px 2px 8px',
        border: '1px solid #546e7a',
        marginRight: 8
    },
    preview_image: {
        height: 100
    },
    closeIcon: {
        width: 16,
        height: 16,
        backgroundColor: '#fff',
        borderRadius: '50%',
        position: 'absolute',
        top: 8,
        right: 8
    },
    btn_post: {
        backgroundColor: '#0a66c2',
        color: '#FFFFFF'
    },
    textArea: {
        border: 'none',
        outline: 'none',
        fontFamily: 'Roboto',
        fontSize: 16,
        lineHeight: '18px',
        width: '100%',
        '&::-webkit-resizer': {
            display: 'none'
        }
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        '& > label': {
            padding: '8px 16px'
        }
    }
}));
