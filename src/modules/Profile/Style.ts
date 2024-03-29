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
        paddingTop: 10,
        paddingBottom: 20,
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
    camera: {
        backgroundColor: '#fff',
        marginTop: 8,
        marginLeft: 8
    },
    icon: {
        color: 'rgba(29,161,242,1.00)',
        height: '2rem',
        width: '2rem'
    },
    input: {
        display: 'none'
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
        },
        '& > div': {
            borderRadius: '50%',
            backgroundColor: '#fff',
            padding: 4,
            width: 26,
            height: 26,
            border: '1px solid #1da1f2',
            color: '#1da1f2'
        }
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
        },
        '& > div': {
            borderRadius: '50%',
            backgroundColor: '#fff',
            padding: 4,
            width: 30,
            height: 30,
            border: '1px solid #1da1f2',
            color: '#1da1f2'
        }
    },
    summarizeInfo: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '12px'
    }
}));
