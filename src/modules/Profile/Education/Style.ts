import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
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

    app_body: {
        display: 'flex',
        minHeight: 'calc(100vh - 50px)',
        justifyContent: 'center',
        padding: '20px 0',
        [theme.breakpoints.down('xs')]: {
            paddingTop: 10,
            paddingBottom: 55
        }
    },

    body__feed: {
        minWidth: 500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 150px',
        paddingBottom: 25,
        [theme.breakpoints.down('xs')]: {
            minWidth: 0,
            padding: 10
        }
    },

    feed__form: {
        width: '100%',
        height: 'auto'
    },

    paper: {
        borderRadius: 10
    },

    paper_search: {
        backgroundColor: '#dce6f1',
        borderRadius: 10
    },

    box: { minHeight: '100%' },

    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '40px'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    iconButton: {
        padding: 10
    },
    btn: {
        height: '32px',
        border: '1px solid #0a66c2',
        color: '#ffffff',
        backgroundColor: '#0a66c2',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },

    btn_post: {
        border: '1px solid #0a66c2',
        color: '#0a66c2',
        width: '100px',
        height: '35px',
        margin: 10
    },
    link: {
        textDecoration: 'none',
        color: '#333',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    organizationAvatar: {
        marginRight: 8,
        width: 25,
        height: 25
    },
    btnCancel: {
        border: '2px solid #0a66c2',
        color: '#0a66c2',
        width: '100px',
        height: '35px',
        margin: 10
    },
    btnDelete: {
        width: '100px',
        height: '35px',
        margin: 10
    },
    noItem: {
        padding: 16,
        color: '#00000099'
    }
}));
