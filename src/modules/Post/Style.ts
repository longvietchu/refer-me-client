import { makeStyles } from '@material-ui/core/styles';
import {
    darkSecondary,
    LinkedInBlue,
    LinkedInLightBlue
} from '../../common/assets/Colors';

export default makeStyles((theme) => ({
    post: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 8,
        [theme.breakpoints.down('xs')]: {
            borderRadius: 0,
            border: 0,
            boxShadow: 'none'
        }
    },
    post__header: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        '& > .MuiAvatar-root': {
            cursor: 'pointer'
        },
        '& > .MuiSvgIcon-root': {
            color: 'grey',
            cursor: 'pointer',
            borderRadius: 999,
            transition: 'all 0.3s ease',
            '&:hover': {
                backgroundColor:
                    theme.palette.type === 'dark' ? darkSecondary : 'lightgrey'
            }
        }
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
    post__body: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    body__description: {
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        paddingTop: 5,
        '& > p': {
            fontSize: 14
        }
    },
    body__image: {
        '& > img': {
            maxWidth: '100%',
            objectFit: 'cover'
        }
    },
    post__footer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        paddingBottom: 0
    },
    footer__stats: {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottom: `1px solid ${
            theme.palette.type === 'dark' ? darkSecondary : 'lightgrey'
        }`,
        '& > div': {
            display: 'flex',
            '& > .MuiSvgIcon-root': {
                fontSize: 16
            }
        },
        '& > h4': {
            fontSize: 12,
            fontWeight: 400,
            color: 'grey',
            marginLeft: 4
        }
    },
    footer__actions: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 4,
        [theme.breakpoints.down('xs')]: {
            padding: 0
        }
    },
    action__icons: {
        flex: 1,
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: '5px 0'
        },
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 2,
        padding: '10px 0',
        borderRadius: 4,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        color: theme.palette.type === 'dark' ? 'lightgrey' : darkSecondary,
        '&:hover': {
            backgroundColor:
                theme.palette.type === 'dark' ? darkSecondary : 'lightgrey'
        },
        [theme.breakpoints.down('xs')]: {
            '&:hover': {
                backgroundColor: 'transparent'
            }
        },
        '& > .MuiSvgIcon-root': {
            fontSize: 18,
            [theme.breakpoints.down('xs')]: {
                fontSize: 14
            }
        },
        '& > h4': {
            fontSize: 14,
            marginLeft: 4,
            [theme.breakpoints.down('xs')]: {
                fontSize: 12
            }
        }
    },
    likeIcon: {
        transform: 'scaleX(-1)'
    },
    likeIconActive: {
        transform: 'scaleX(-1)',
        color: '#1485bd'
    },
    likeTxtActive: {
        color: '#1485bd'
    },
    likeTxt: {
        color: 'grey'
    },
    postMenu: {
        borderRadius: 10
    },
    upload__header: {
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        padding: '10px 0'
    },

    header__form: {
        flex: 1,
        height: 40,
        marginLeft: 10,
        [theme.breakpoints.down('xs')]: {
            height: 42
        },
        display: 'flex',
        alignItems: 'center',
        borderRadius: 999,
        border: '1px solid',
        borderColor:
            theme.palette.type === 'dark'
                ? 'rgba(225,225,225,0.1)'
                : 'rgba(0,0,0,0.15)',
        overflow: 'hidden',
        '& > .MuiSvgIcon-root': {
            marginLeft: 10
        },
        '& > input': {
            height: '100%',
            flex: 1,
            border: 0,
            outlineWidth: 0,
            paddingLeft: 10,
            color: theme.palette.type === 'dark' && 'lightgrey',
            fontSize: 14,
            fontWeight: 600,
            backgroundColor: 'transparent',
            '&::placeholder': {
                color: theme.palette.type === 'dark' && 'grey'
            }
        },
        '& > button': {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '0 15px',
            border: 0,
            outlineWidth: 0,
            backgroundColor:
                theme.palette.type === 'dark'
                    ? LinkedInLightBlue
                    : LinkedInBlue,
            color: 'white',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'all 0.4s ease',
            '&:hover': {
                backgroundColor:
                    theme.palette.type === 'dark'
                        ? LinkedInBlue
                        : LinkedInLightBlue
            }
        }
    },

    comment_container: {
        display: 'flex',
        margin: '0 14px 0 8px',
        overflow: 'hidden',
        '& > span': {
            padding: '0px 10px'
        },
        backgroundColor: '#f2f2f2',
        borderRadius: 10
    },

    post_button: {
        color: 'rgb(1, 150, 199)',
        transition: 'all 80ms ease-out',
        height: 38,
        border: '1.5px solid #0a66c2',
        fontWeight: 'bold',
        borderRadius: '1.5rem',
        textTransform: 'capitalize',
        marginLeft: 10
    },

    all_comment: {
        marginTop: '10px'
    },
    headerComment: {
        display: 'flex',
        justifyContent: 'space-between',
        '& > .action-container': {
            display: 'flex',
            alignItems: 'flex-start'
        }
    }
}));
