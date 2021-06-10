import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    form: {
        width: '100%',
        marginTop: '2rem',
        marginBottom: '2rem'
    },
    paper: {
        flexGrow: 1
    },
    avatarBox: {
        position: 'relative',
        bottom: '1rem',
        top: '0rem',
        marginLeft: '0.7rem',
        marginTop: '5rem'
    },
    avatar: {
        border: '4px solid white',
        height: '8rem',
        width: '8rem',
        marginTop: '0rem',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    input: {
        display: 'none'
    },
    darkArea: {
        backgroundColor: 'rgb(204, 214, 221)',
        height: '12rem',
        marginTop: '1rem',
        opacity: '0.75',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    icon: {
        color: 'rgba(29,161,242,1.00)',
        height: '2rem',
        width: '2rem'
    },
    btnDiv: {
        width: '5rem'
    },
    btn: {
        backgroundColor: 'rgba(29,161,242,1.00)',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '15px',
        marginTop: '0.7rem',
        marginRight: '1rem',
        textTransform: 'capitalize',
        borderRadius: 8,
        '&:hover': {
            backgroundColor: 'rgba(29,161,242,1.00)'
        },
        '&:focus': {
            backgroundColor: 'rgba(29,161,242,1.00)'
        }
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    typo: {
        font: 'inherit',
        fontSize: '25px',
        marginTop: '1rem',
        fontWeight: 'bold'
    },
    textField: {
        width: '90%',
        marginLeft: '5%',
        height: '15%'
    },
    camera: {
        backgroundColor: '#fff',
        marginTop: 8,
        marginLeft: 8
    }
}));
