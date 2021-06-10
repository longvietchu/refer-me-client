import React, { useEffect } from 'react';
import RootView from './modules/RootView';
import { configure } from 'mobx';
import { observer } from 'mobx-react-lite';
import { loginStore } from './modules/Login/loginStore';
configure({ useProxies: 'never', enforceActions: 'never' });

const App = observer(() => {
    useEffect(() => {
        loginStore.getUserInfo();
    }, []);
    return <RootView />;
});
export default App;
