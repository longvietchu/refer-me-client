import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginScreen from "./screen/Login/LoginScreen";
import HomeContainer from "./screen/Home/HomeContainer";
import ProfileContainer from "./screen/Profile/ProfileContainer";
import NotificationsContainer from "./screen/Notifications/NotificationsContainer";
import MessagingContainer from "./screen/Messaging/MessagingContainer";
import JobContainer from "./screen/Job/JobContainer";
import NetworkContainer from "./screen/Network/NetworkContainer";

function App() {
  return (
    <div>
      <JobContainer />
    </div>
  );
}

export default App;
