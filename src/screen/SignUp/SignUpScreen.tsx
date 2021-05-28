import { makeStyles } from '@material-ui/core/styles';
import SignupCard from './SignupCard/SignupCard';
import Animation from '../../components/animations/Animation';
import LottieRelaxing from '../../assets/images/relaxing.json';
import { Helmet } from 'react-helmet';

const Style = makeStyles((theme: any) => ({
    signup: {
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
    signupCard: {
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

const SignUpScreen = () => {
    const classes = Style();
    return (
        <div className={classes.signup}>
            <Helmet>
                <title>Sign up | RefMe</title>
            </Helmet>
            <div className={classes.banner}>
                <Animation src={LottieRelaxing} />
            </div>
            <div className={classes.signupCard}>
                <SignupCard />
            </div>
        </div>
    );
};

export default SignUpScreen;
