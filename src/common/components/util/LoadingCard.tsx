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
            <i
                className="fas fa-circle-notch fa-spin"
                style={{
                    fontSize: '25px',
                    color: '#0a66c2'
                }}></i>
        </div>
    );
};

export default LoadingCard;
