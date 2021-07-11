import { observer } from 'mobx-react-lite';
import React from 'react';
import { useEffect } from 'react';
import { organizationStore } from '../Organization/organizationStore';
import HomeScreen from './HomeScreen';
import { homeStore } from './homeStore';

const HomeContainer = observer(() => {
    useEffect(() => {
        homeStore.getPost();
        organizationStore.getAllOrganization();
    }, []);
    return <HomeScreen />;
});

export default HomeContainer;
