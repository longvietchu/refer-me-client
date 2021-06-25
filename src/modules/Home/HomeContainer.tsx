import { observer } from 'mobx-react-lite';
import React from 'react';
import { useEffect } from 'react';
import HomeScreen from './HomeScreen';
import { homeStore } from './homeStore';

const HomeContainer = observer(() => {
    useEffect(() => {
        homeStore.getPost();
    }, []);
    return <HomeScreen />;
});

export default HomeContainer;
