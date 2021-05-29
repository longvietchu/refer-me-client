import { makeStyles } from '@material-ui/core/styles';
import { darkSecondary } from '../../../common/assets/Colors';

export default makeStyles((theme) => ({
    content: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10,
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
    img: {
        height: '56px',
        width: '56px',
        marginBottom: '16px'
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
    typo: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '95%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        margin: '10px 0'
    },
    btn: {
        width: '42%',
        height: '32px',
        border: '1.5px solid #0a66c2',
        color: '#0a66c2',
        fontWeight: 'bold',
        borderRadius: '1.5rem',
        marginTop: '0.5rem',
        marginRight: '1rem',
        marginBottom: '1rem',
        textTransform: 'capitalize'
    }
    //   post__body: {
    //     width: "100%",
    //     display: "flex",
    //     flexDirection: "column",
    //   },
    //   body__description: {
    //     display: "flex",
    //     alignItems: "center",
    //     padding: 10,
    //     paddingTop: 5,
    //     "& > p": {
    //       fontSize: 14,
    //     },
    //   },
    //   body__image: {
    //     width: "100%",
    //     display: "flex",
    //     alignItems: "center",
    //     overflow: "hidden",
    //     "& > img": {
    //       width: "100%",
    //       height: "auto",
    //       objectFit: "contain",
    //       transition: "all 0.5s ease",
    //       "&:hover": {
    //         //transform: "scale(1.1)",
    //       },
    //     },
    //     "& > div": {
    //       height: "auto",
    //     },
    //   },
    //   post__footer: {
    //     width: "100%",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     padding: 10,
    //     paddingBottom: 0,
    //   },
    //   footer__stats: {
    //     display: "flex",
    //     alignItems: "center",
    //     paddingBottom: 10,
    //     borderBottom: `1px solid ${
    //       theme.palette.type === "dark" ? darkSecondary : "lightgrey"
    //     }`,
    //     "& > div": {
    //       display: "flex",
    //       "& > .MuiSvgIcon-root": {
    //         fontSize: 16,
    //       },
    //     },
    //     "& > h4": {
    //       fontSize: 12,
    //       fontWeight: 400,
    //       color: "grey",
    //       marginLeft: 4,
    //     },
    //   },
    //   footer__actions: {
    //     display: "flex",
    //     justifyContent: "space-evenly",
    //     alignItems: "center",
    //     padding: 4,
    //     [theme.breakpoints.down("xs")]: {
    //       padding: 0,
    //     },
    //   },
    //   action__icons: {
    //     flex: 1,
    //     display: "flex",
    //     [theme.breakpoints.down("sm")]: {
    //       flexDirection: "column",
    //       padding: "5px 0",
    //     },
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginRight: 2,
    //     padding: "10px 0",
    //     borderRadius: 4,
    //     cursor: "pointer",
    //     transition: "all 0.3s ease",
    //     color: theme.palette.type === "dark" ? "lightgrey" : darkSecondary,
    //     "&:hover": {
    //       backgroundColor:
    //         theme.palette.type === "dark" ? darkSecondary : "lightgrey",
    //     },
    //     [theme.breakpoints.down("xs")]: {
    //       "&:hover": {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     "& > .MuiSvgIcon-root": {
    //       fontSize: 18,
    //       fontWeight: 500,
    //       color: theme.palette.type === "dark" ? "lightgrey" : "grey",
    //       [theme.breakpoints.down("xs")]: {
    //         fontSize: 14,
    //       },
    //     },
    //     "& > h4": {
    //       fontSize: 12,
    //       fontWeight: 400,
    //       color: theme.palette.type === "dark" ? "lightgrey" : "grey",
    //       marginLeft: 4,
    //       [theme.breakpoints.down("xs")]: {
    //         fontSize: 12,
    //       },
    //     },
    //   },
}));
