import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import LoginCard from './LoginCard/LoginCard';

const Style = makeStyles((theme: any) => ({
    login: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    banner: {
        flex: 3,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        '& > img': {
            height: '80%'
        }
    },
    loginCard: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginRight: '4rem',
        marginLeft: '2rem',
        [theme.breakpoints.down('sm')]: {
            margin: 0
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        }
    }
}));

const LoginScreen = () => {
    const classes = Style();
    return (
        <div className={classes.login}>
            <Helmet>
                <title>Refer Me | Sign in</title>
            </Helmet>
            <div className={classes.banner}>
                <img src="/images/recruitment.jpg" alt="Refer Me" />
            </div>
            <div className={classes.loginCard}>
                <LoginCard />
            </div>
        </div>
    );
};

export default LoginScreen;
