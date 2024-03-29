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

    paperListOrganization: {
        borderRadius: 10,
        marginTop: 10
    },

    box: { minHeight: '100%' },

    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '40px'
    },

    iconButton: {
        padding: 10
    },

    btn_post: {
        border: '2px solid #0a66c2',
        color: '#0a66c2',
        borderRadius: '1.5rem',
        height: '35px',
        // margin: 10
        // width: "100%",
        margin: '20px 24px 10px'
    },

    organizationAvatar: {
        marginRight: 8,
        width: 25
    }
}));
