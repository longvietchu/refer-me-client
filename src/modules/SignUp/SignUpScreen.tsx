import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import SignupCard from './SignupCard/SignupCard';

const Style = makeStyles((theme: any) => ({
    signup: {
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
    signupCard: {
        flex: 1,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '4rem',
        marginLeft: '2rem',
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
                <img src="/images/recruitment.jpg" alt="Refer Me" />
            </div>
            <div className={classes.signupCard}>
                <SignupCard />
            </div>
        </div>
    );
};

export default SignUpScreen;
