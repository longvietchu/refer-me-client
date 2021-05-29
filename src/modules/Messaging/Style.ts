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

    app__body: {
        display: 'flex',
        minHeight: 'calc(100vh - 50px)',
        justifyContent: 'center',
        paddingTop: 50,
        // paddingBottom: 50,
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
        height: '100%'
    },

    body__widgets: {
        minWidth: 225,
        maxWidth: 300
    },

    input: {
        marginLeft: theme.spacing(3),
        flex: 1
    },
    iconButton: {
        padding: 10
    },

    header__info: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10,
        '& > h4': {
            fontSize: 15,
            fontWeight: 500,
            marginBottom: 3
        },
        '& > p': {
            color: 'grey',
            fontSize: 12
        }
    },

    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '1'
    },
    typo: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2
    }
}));
