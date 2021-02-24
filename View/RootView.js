import { Switch, Route, Link, Redirect } from "react-router-dom";
import React, { useEffect } from "react";

import { connect } from "react-redux";
import HomeContainer from "./Home/HomeContainer";
import MeetingContainer from "./Meeting/MeetingContainer";
import ReportContainer from "./Report/ReportContainer";
import SeminarContainer from "./Seminar/SeminarContainer";
import SettingContainer from "./Setting/SettingContainer";
import VisitorContainer from "./Visiter/VisitorContainer";
import LoginScreen from "./Login/LoginScreen";
import SystemOfficeContainer from "./SystemOffice/SystemOfficeContainer";
import SystemOfficeDepartment from "./SystemDepartment/SystemDepartmentContainer";
import SystemTypeMeeting from "./SystemTypeMeeting/SystemTypeMeetingContainer";
import SystemListRoomContainer from "./SystemListRoom/SystemListRoomContainer";
import SystemLevelContainer from "./SystemLevel/SystemLevelContainer";
import SystemOptionContainer from "./SystemOption/SystemOptionContainer";
import SystemRoleContainer from "./SystemRole/SystemRoleContainer";
import PageNotFound from "./Page404/404page";
import { CircularProgress } from "@material-ui/core";
import AppBar from "./../Component/AppBar/Appbar";
import KEY from "../assets/AsynStorage";

const RootView = (props) => {
  function PrivateRoute({ children, ...rest }) {
    let accessToken = localStorage.getItem(KEY.API_TOKEN);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          accessToken ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ children, ...rest }) {
    let accessToken = localStorage.getItem(KEY.API_TOKEN);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          !accessToken ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/home",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }

  return (
    <Switch>
      <PrivateRoute path="/home">
        <HomeContainer />
      </PrivateRoute>
      <PrivateRoute path="/meeting">
        <MeetingContainer />
      </PrivateRoute>
      {/* <PrivateRoute path="/report">
        <ReportContainer />
      </PrivateRoute> */}
      <PrivateRoute path="/seminar">
        <SeminarContainer />
      </PrivateRoute>
      {/* <PrivateRoute path="/setting">
        <SettingContainer />
      </PrivateRoute> */}
      <PrivateRoute path="/visiter">
        <VisitorContainer />
      </PrivateRoute>
      <PrivateRoute path="/systemoffice">
        <SystemOfficeContainer />
      </PrivateRoute>
      <PrivateRoute path="/systemrole">
        <SystemRoleContainer />
      </PrivateRoute>
      <PrivateRoute path="/systemdepartment">
        <SystemOfficeDepartment />
      </PrivateRoute>
      <PrivateRoute path="/systemtypemeeting">
        <SystemTypeMeeting />
      </PrivateRoute>
      <PrivateRoute path="/systemlistroom">
        <SystemListRoomContainer />
      </PrivateRoute>
      <PrivateRoute path="/systemlevelmeeting">
        <SystemLevelContainer />
      </PrivateRoute>
      <PrivateRoute path="/systemoptionmeeting">
        <SystemOptionContainer />
      </PrivateRoute>

      <PublicRoute path="/" exact={true}>
        <LoginScreen />
      </PublicRoute>

      <Route path="/404" component={PageNotFound} />
      <Redirect from="*" to="/404" />
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(RootView);
