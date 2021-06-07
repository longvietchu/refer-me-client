import { IconButton } from '@material-ui/core';
import { Close as IconClose } from '@material-ui/icons';
import { SnackbarProvider, useSnackbar } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

function SnackbarCloseButton({ key }: any) {
    const { closeSnackbar } = useSnackbar();

    return (
        <IconButton onClick={() => closeSnackbar(key)}>
            <IconClose />
        </IconButton>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <SnackbarProvider
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                maxSnack={1}
                action={(key) => <SnackbarCloseButton key={key} />}>
                <App />
            </SnackbarProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
