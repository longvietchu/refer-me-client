import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from './Login/LoginScreen';
import SignUpScreen from './SignUp/SignUpScreen';
import HomeContainer from './Home/HomeContainer';
import ProfileContainer from './Profile/ProfileContainer';
import NotificationsContainer from './Notifications/NotificationsContainer';
import MessagingContainer from './Messaging/MessagingContainer';
import JobContainer from './Job/JobContainer';
import NetworkContainer from './Network/NetworkContainer';
import CreateOrganizationContainer from './Organization/CreateOrganization/CreateOrganizationContainer';
import ProfileOrgContainer from './Organization/ProfileOrganization/ProfileOrgContainer';
import ChangePasswordScreen from './ChangePassword/ChangePasswordScreen';
import StorageService from '../common/service/StorageService';
import CreateProfile from './Profile/CreateProfile/CreateProfile';
import DetailJob from './Job/DetailJob/DetailJob';
import MyJob from './Job/MyJob/MyJob';
import PostedJob from './Job/MyJob/Posted/PostedJob';
import MyOrganization from './Organization/MyOrganization/MyOrganization';
import UnavailableOrg from './Organization/UnavailableOrg';

const RootView = () => {
    const PrivateRoute = ({ children, ...rest }: any) => {
        let accessToken = StorageService.isTokenExits();
        return (
            <Route
                {...rest}
                render={() => (accessToken ? children : <Redirect to="/" />)}
            />
        );
    };

    return (
        <Switch>
            <PrivateRoute exact path="/home">
                <HomeContainer />
            </PrivateRoute>

            <PrivateRoute exact path="/create/profile">
                <CreateProfile />
            </PrivateRoute>

            <Route path="/profile/:user_id">
                <ProfileContainer />
            </Route>

            <PrivateRoute exact path="/notifications">
                <NotificationsContainer />
            </PrivateRoute>

            <PrivateRoute exact path="/messaging">
                <MessagingContainer />
            </PrivateRoute>

            <Route exact path="/jobs">
                <JobContainer />
            </Route>

            <Route path="/jobs/:_id">
                <DetailJob />
            </Route>

            <PrivateRoute exact path="/myjob">
                <MyJob />
            </PrivateRoute>

            <PrivateRoute path="/hiring/jobs/:_id">
                <PostedJob />
            </PrivateRoute>

            <PrivateRoute exact path="/mynetwork">
                <NetworkContainer />
            </PrivateRoute>

            <PrivateRoute exact path="/change-password">
                <ChangePasswordScreen />
            </PrivateRoute>

            <PrivateRoute exact path="/organization/new">
                <CreateOrganizationContainer />
            </PrivateRoute>

            <Route path="/organization/profile/:organization_id">
                <ProfileOrgContainer />
            </Route>

            <Route path="/organization/unavailable">
                <UnavailableOrg />
            </Route>

            <PrivateRoute exact path="/myorganization">
                <MyOrganization />
            </PrivateRoute>

            <Route exact path="/">
                {StorageService.isTokenExits() ? (
                    <Redirect to="/home" />
                ) : (
                    <LoginScreen />
                )}
            </Route>

            <Route exact path="/signup">
                {StorageService.isTokenExits() ? (
                    <Redirect to="/home" />
                ) : (
                    <SignUpScreen />
                )}
            </Route>
        </Switch>
    );
};

export default RootView;
