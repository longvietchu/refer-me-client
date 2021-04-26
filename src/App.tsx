import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginScreen from "./screen/Login/LoginScreen";
import HomeContainer from "./screen/Home/HomeContainer";
import ProfileContainer from "./screen/Profile/ProfileContainer";
import NotificationsContainer from "./screen/Notifications/NotificationsContainer";
function App() {
  return (
    <div>
      <NotificationsContainer />
    </div>
  );
}

export default App;
