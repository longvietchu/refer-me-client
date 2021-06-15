import {
    getRequest,
    IApiResponse,
    postRequest,
    putRequest
} from '../../common/helpers/RequestHelper';

class NetworkService {
    public getNetworks(page: number, limit: number): Promise<IApiResponse> {
        return getRequest(
            `/v1/connection/people?page=${page}&limit=${limit}`,
            true
        );
    }
    public getInvitations(page: number, limit: number): Promise<IApiResponse> {
        return getRequest(
            `/v1/connection/invitation?page=${page}&limit=${limit}`,
            true
        );
    }
    public inConnection(user_id: string): Promise<IApiResponse> {
        return getRequest(
            `/v1/connection/in-connection?user_id=${user_id}`,
            true
        );
    }
    public getRecommend(page: number, limit: number): Promise<IApiResponse> {
        return getRequest(
            `/v1/connection/recommend?page=${page}&limit=${limit}`,
            true
        );
    }
    public acceptInvitation(invitation_id: string): Promise<IApiResponse> {
        return putRequest(`/v1/connection/${invitation_id}`, {});
    }
    public createConnection(data: any): Promise<IApiResponse> {
        return postRequest(`/v1/connection`, data);
    }
}

export const networkService = new NetworkService();
