import { CircularProgress } from '@material-ui/core';
import React from 'react';

const LoadingCard = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10
            }}>
            <CircularProgress />
        </div>
    );
};

export default LoadingCard;
