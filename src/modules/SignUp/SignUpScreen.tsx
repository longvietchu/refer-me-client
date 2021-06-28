import { makeStyles } from '@material-ui/core/styles';
import SignupCard from './SignupCard/SignupCard';
import LottieRelaxing from '../../common/assets/images/relaxing.json';
import { Helmet } from 'react-helmet';
import Animation from '../../common/components/animations/Animation';

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
            height: '80%'
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
                <title>Refer Me | Sign up</title>
            </Helmet>
            <div className={classes.banner}>
                {/* <Animation src={LottieRelaxing} /> */}
                <img src="/images/recruitment.jpg" alt="Refer Me" />
            </div>
            <div className={classes.signupCard}>
                <SignupCard />
            </div>
        </div>
    );
};

export default SignUpScreen;
