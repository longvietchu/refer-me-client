import { makeStyles } from '@material-ui/core/styles';
import LoginCard from './LoginCard/LoginCard';
import Animation from '../../common/components/animations/Animation';
import LottieRelaxing from '../../common/assets/images/relaxing.json';
import { Helmet } from 'react-helmet';

const Style = makeStyles((theme: any) => ({
    login: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    banner: {
        flex: 1,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        '& > *': {
            height: 550
        }
    },
    loginCard: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 50px',
        [theme.breakpoints.down('sm')]: {
            padding: 0
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
                <Animation src={LottieRelaxing} />
            </div>
            <div className={classes.loginCard}>
                <LoginCard />
            </div>
        </div>
    );
};

export default LoginScreen;
