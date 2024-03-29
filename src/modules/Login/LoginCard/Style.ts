import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
        width: 360,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            border: 0,
            borderRadius: 0,
            boxShadow: 'none'
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 24px'
    },

    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '16px 0',
        '& > img': {
            width: 56,
            marginRight: 8
        }
    },

    form: {
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        '& > input': {
            outlineWidth: 0,
            height: 35,
            border: '1px solid lightgrey',
            borderRadius: 2,
            padding: '0 10px'
        }
    },

    btn: {
        height: 30,
        borderRadius: 4,
        fontSize: 14,
        fontWeight: 600,
        backgroundColor: '#0a66c2',
        color: '#fff'
    },

    google: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& > section': {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 10px',
            '& > div': {
                flex: 1,
                height: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightgrey',
                opacity: 0.5
            },
            '& > p': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 10px',
                fontSize: 12,
                color: 'grey'
            }
        }
    },

    about: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > section': {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 10px',
            marginBottom: 5,
            '& > div': {
                flex: 1,
                height: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightgrey',
                opacity: 0.5
            },
            '& > p': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 10px',
                fontSize: 10,
                color: 'grey'
            }
        }
    },

    social__links: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: '4px 0',
        '& > a': {
            color: 'grey',
            '& > .MuiSvgIcon-root': {
                fontSize: 18
            }
        }
    }
}));
