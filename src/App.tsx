import React from 'react';
import logo from './logo.svg';
import './App.css';

import RootView from './screen/RootView';

import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/index';

//redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';


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

const mapStateToProps = (state: any) => {
    return {
        user: state.userReducer
    };
};

export default App;
