import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { messageEvent } from './messageEvent';
import { messageStore } from './messageStore';
import MessagingScreen from './MessagingScreen';

const MessaginContainer = observer(() => {
    useEffect(() => {
        if (!messageStore.roomList) {
            messageStore.getRooms();
        }
        messageEvent.connect();
    }, []);

    return <MessagingScreen />;
});

export default MessaginContainer;
