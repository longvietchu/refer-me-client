import { CircularProgress } from '@material-ui/core';
import React from 'react';

const LoadingCard = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20
            }}>
            <CircularProgress size={24} />
        </div>
    );
};

export default LoadingCard;
