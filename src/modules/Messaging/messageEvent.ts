import io from 'socket.io-client';
import Constants from '../../common/constants/Constants';
import StorageService from '../../common/service/StorageService';
import { loginStore } from '../Login/loginStore';
import { messageStore } from './messageStore';

class MessageEvent {
    isSendTokenSuccess = false;
    socket: any;
    disconect: boolean = false;

    public async connect() {
        if (this.socket !== undefined && this.socket.connected) return;
        const token = StorageService.getToken();

        if (loginStore.userInfo) {
            this.socket = io(Constants.API_URL, {
                query: {
                    token: token,
                    user_id: loginStore.userInfo.id
                }
            });
        }

        this.socket.addEventListener('disconnect', () => {
            // console.log('===disconnected===');
            this.disconect = true;
            this.isSendTokenSuccess = false;
        });

        this.socket.on('connect', () => {
            // console.log('===connected===');
        });

        this.socket.addEventListener(
            'reconnect_attempt',
            (attempts: number) => {
                console.log('Try to reconnect at ' + attempts + ' attempt(s).');
            }
        );

        this.socket.on('new_message', (data: any) => {
            // console.log('socket on new message', data);
            messageStore.onNewMessage(data);
        });

        this.socket.on('seen_message', (data: any) => {
            // console.log('socket on seen message', data);
            messageStore.onSeenMessage(data);
        });
    }

    public emitSeen(data: any) {
        this.socket.emit('seen_message', data);
    }

    public emitMessage(data: any) {
        this.socket.emit('new_message', data);
    }

    public disconnect() {
        if (this.socket !== undefined) {
            this.socket.removeAllListeners();
            this.socket.disconnect();
            console.log('===close connection===');
        }
    }
}

export const messageEvent = new MessageEvent();
