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
    body__feed: {
        minWidth: 500,
        alignItems: 'center',
        padding: '0 25px',
        paddingBottom: 25,
        [theme.breakpoints.down('xs')]: {
            minWidth: 0,
            padding: 0
        }
    },
    tab: {
        minWidth: '100px',
        textTransform: 'capitalize',
        borderBottomColor: 'rgb(29, 161, 242)',
        '&:hover': {
            backgroundColor: 'rgb(206,233,234)',
            color: 'rgba(29,161,242,1.00)'
        },
        '&:focus': {
            backgroundColor: 'rgb(206,233,234)',
            color: 'rgba(29,161,242,1.00)'
        }
    },
    tabs: {
        flexGrow: 1,
        display: 'flex',
        fontSize: '15px',
        width: '100%',
        '& .MuiTabs-indicator': {
            backgroundColor: 'rgba(29,161,242,1.00)'
        },
        [theme.breakpoints.down('xs')]: {
            minWidth: '80px'
        }
    },
    paper: {
        backgroundColor: 'rgb(204, 214, 221)',
        height: '11rem',
        top: '0rem',
        marginTop: '-7rem',
        position: 'relative'
    },
    horizontalDiv: {
        display: 'flex',
        flexDirection: 'row'
    },
    backArrow: {
        color: 'rgba(29,161,242,1.00)'
    },
    btn: {
        alignSelf: 'flex-end',
        marginBottom: '12px',
        color: '#0000008a',
        fontWeight: 'bold',
        borderRadius: '1.5rem',
        textTransform: 'capitalize'
    },

    btn_vis: {
        border: '1.5px solid rgba(29,161,242,1.00)',
        color: 'rgba(29,161,242,1.00)',
        fontWeight: 'bold',
        borderRadius: '1.5rem',
        marginTop: '0.7rem',
        marginBottom: '0.7rem',
        marginRight: '1rem',
        textTransform: 'capitalize',
        width: '30%'
    },

    btn_details: {
        color: '#00000099',
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'capitalize',
        width: '100%',
        height: 50
    },

    avatarBox: {
        position: 'relative',
        bottom: '1rem',
        top: '7rem',
        marginLeft: '0.7rem'
    },
    avatar: {
        border: '4px solid white',
        height: '8rem',
        width: '8rem',
        marginTop: '7rem'
    },
    nameTypo: {
        color: 'black',
        font: 'inherit',
        fontWeight: 'bold',
        fontSize: '20px'
    },
    body__widgets: {
        minWidth: 225,
        maxWidth: 300
    },
    hidden: {
        display: '-webkit-box',
        WebkitLineClamp: 4,
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical'
    },
    input: {
        display: 'none'
    },
    labelCover: {
        position: 'absolute',
        top: 10,
        right: 10,
        '& > svg': {
            borderRadius: '50%',
            backgroundColor: '#fff',
            padding: 4,
            width: 30,
            height: 30,
            border: '1px solid #1da1f2',
            color: '#1da1f2'
        }
    },
    labelAvatar: {
        position: 'absolute',
        top: 90,
        left: 96,
        '& > svg': {
            borderRadius: '50%',
            backgroundColor: '#fff',
            padding: 4,
            width: 26,
            height: 26,
            border: '1px solid #1da1f2',
            color: '#1da1f2'
        }
    },
    userInfo: {
        marginTop: 45,
        marginRight: 20,
        flex: '2 2'
    },
    careerInfo: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1'
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
    }
}));
