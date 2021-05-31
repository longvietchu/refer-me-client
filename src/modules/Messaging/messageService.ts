import {
    getRequest,
    IApiResponse,
    postRequest
} from '../../common/helpers/RequestHelper';

class MessageService {
    public getRooms(user_id: string): Promise<IApiResponse> {
        return getRequest(`/v1/room/conversations?user_id=${user_id}`);
    }
    public getMessages(room_id: string): Promise<IApiResponse> {
        return getRequest(`/v1/room/messages?room_id=${room_id}`);
    }
    public createRoom(user_id: string): Promise<IApiResponse> {
        return postRequest(`/v1/room?user_id=${user_id}`, {});
    }
}

export const messageService = new MessageService();
