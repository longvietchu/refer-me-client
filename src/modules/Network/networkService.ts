import {
    getRequest,
    IApiResponse,
    postRequest,
    putRequest
} from '../../common/helpers/RequestHelper';

class NetworkService {
    public getNetworks(): Promise<IApiResponse> {
        return getRequest(`/v1/connection/people`);
    }
    public getInvitations(): Promise<IApiResponse> {
        return getRequest(`/v1/connection/invitation`);
    }
    public acceptInvitation(invitation_id: string): Promise<IApiResponse> {
        return putRequest(`/v1/connection/${invitation_id}`, {});
    }
    public createNetwork(data: any): Promise<IApiResponse> {
        return postRequest(`/v1/connection`, data);
    }
}

export const networkService = new NetworkService();
