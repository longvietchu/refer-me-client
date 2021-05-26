import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';

import LoginScreen from './Login/LoginScreen';
import SignUpScreen from './SignUp/SignUpScreen';
import HomeContainer from './Home/HomeContainer';
import ProfileContainer from './Profile/ProfileContainer';
import NotificationsContainer from './Notifications/NotificationsContainer';
import MessagingContainer from './Messaging/MessagingContainer';
import JobContainer from './Job/JobContainer';
import NetworkContainer from './Network/NetworkContainer';

import KEY from '../assets/AsynStorage';
import ChangePasswordScreen from './ChangePassword/ChangePasswordScreen';

const RootView = () => {
    const PrivateRoute = ({ children, ...rest }: any) => {
        let accessToken = localStorage.getItem(KEY.API_TOKEN);
        return (
            <Route
                {...rest}
                render={(location: any) =>
                    accessToken ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        );
    };

    const PublicRoute = ({ children, ...rest }: any) => {
        let accessToken = localStorage.getItem(KEY.API_TOKEN);
        return (
            <Route
                {...rest}
                render={(location: any) =>
                    !accessToken ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/home',
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        );
    };

    return (
        <Switch>
            <Route path="/home" exact>
                <HomeContainer />
            </Route>
            <Route path="/profile">
                <ProfileContainer />
            </Route>
            <Route path="/notifications">
                <NotificationsContainer />
            </Route>
            <Route path="/messaging">
                <MessagingContainer />
            </Route>
            <Route path="/jobs">
                <JobContainer />
            </Route>
            <Route path="/mynetwork">
                <NetworkContainer />
            </Route>
            <Route path="/change-password">
                <ChangePasswordScreen />
            </Route>

            <Route path="/" exact={true}>
                <LoginScreen />
            </Route>

            <Route path="/signup" exact={true}>
                <SignUpScreen />
            </Route>

            {/* <Route path="/home" component={HomeContainer} /> */}
        </Switch>
    );
};

export default RootView;
