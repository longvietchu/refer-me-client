import { observer } from 'mobx-react-lite';
import React from 'react';
import { useEffect } from 'react';
import NetworkScreen from './NetworkScreen';
import { networkStore } from './networkStore';

const NetWorkContainer = observer(() => {
    useEffect(() => {
        networkStore.getRecommend();
    }, []);
    return <NetworkScreen />;
});

export default NetWorkContainer;
