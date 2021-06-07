import { makeAutoObservable } from 'mobx';
import HttpStatusCode from '../../common/constants/HttpErrorCode';
import { loginStore } from '../Login/loginStore';
import { messageService } from './messageService';

export interface IRoom {
    user_info: {
        _id: string;
        name: string;
        avatar: string;
        headline: string;
    };
    _id: string;
    creator_id: string;
    receiver_id: string;
    created_at: string;
    updated_at: string;
    lastest_message: IMessage;
}

export interface IMessage {
    is_seen: boolean;
    type: string;
    _id: string;
    room_id: string;
    from: string;
    to: string;
    content: string;
    created_at: string;
    updated_at: string;
}

class MessageStore {
    constructor() {
        makeAutoObservable(this);
    }
    roomList?: IRoom[];
    messageList?: IMessage[];
    selectedRoom?: IRoom;
    messageContent: string = '';

    async getRooms() {
        if (loginStore.userInfo) {
            const result = await messageService.getRooms(
                loginStore.userInfo.id
            );
            if (result.status < HttpStatusCode.CODE_300) {
                // console.log(result.body.data);
                this.roomList = result.body.data;
                this.selectedRoom = result.body.data[0];
                await this.getMessages();
            }
        }
    }

    async getMessages() {
        if (this.selectedRoom) {
            const result = await messageService.getMessages(
                this.selectedRoom._id
            );
            if (result.status < HttpStatusCode.CODE_300) {
                // console.log(result.body.data);
                this.messageList = result.body.data;
            }
        }
    }

    onNewMessage(data: any) {
        const { room_id, from, to, type, content, _id, created_at } = data;
        let tempData: IMessage = {
            is_seen: false,
            _id,
            room_id,
            from,
            to,
            type,
            content,
            created_at,
            updated_at: created_at
        };
        if (
            this.messageList &&
            this.selectedRoom &&
            room_id === this.selectedRoom._id
        ) {
            this.messageList = [tempData, ...this.messageList];
        }
    }

    async onSeenMessage(data: any) {
        const { room_id, to, from, last_message_created_at } = data;
        if (this.messageList) {
            let seenRoomList = this.messageList.map((item) => {
                if (item.to === to) {
                    item.is_seen = true;
                }
                return item;
            });
            this.messageList = seenRoomList;
        }
    }
}

export const messageStore = new MessageStore();
