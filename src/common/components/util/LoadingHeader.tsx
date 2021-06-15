import { Grid, LinearProgress } from '@material-ui/core';
import React from 'react';
import Header from '../header/Header';

const LoadingHeader = () => {
    return (
        <Grid
            container
            style={{
                backgroundColor: 'rgb(243, 242, 239)'
            }}>
            <Grid
                item
                container
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                    height: 50,
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <LinearProgress
                    style={{
                        width: '100%',
                        position: 'absolute',
                        top: '0',
                        left: '0'
                    }}
                />
                <Header />
            </Grid>
        </Grid>
    );
};

export default LoadingHeader;
