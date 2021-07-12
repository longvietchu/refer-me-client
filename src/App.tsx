import React, { useEffect } from 'react';
import RootView from './modules/RootView';
import { configure } from 'mobx';
import { observer } from 'mobx-react-lite';
import { loginStore } from './modules/Login/loginStore';
import { organizationStore } from './modules/Organization/organizationStore';
configure({ useProxies: 'never', enforceActions: 'never' });

const App = observer(() => {
    useEffect(() => {
        loginStore.getUserInfo();
        organizationStore.getAllOrganization();
    }, []);
    return <RootView />;
});
export default App;
