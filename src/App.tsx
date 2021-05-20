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

import RootView from "./screen/RootView";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers/index";

//redux saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <RootView />
    </Provider>
  );
}

export default App;
