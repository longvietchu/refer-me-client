import React, { useEffect } from 'react';
import RootView from './modules/RootView';
import { configure } from 'mobx';
import { observer } from 'mobx-react-lite';
import { loginStore } from './modules/Login/loginStore';
import { organizationStore } from './modules/Organization/organizationStore';
import { networkStore } from './modules/Network/networkStore';
configure({ useProxies: 'never', enforceActions: 'never' });

const App = observer(() => {
    useEffect(() => {
        loginStore.getUserInfo();
        organizationStore.getAllOrganization();
        networkStore.getInvitations();
        networkStore.getNetworks();
    }, []);
    return <RootView />;
});
export default App;
