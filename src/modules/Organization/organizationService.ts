import {
    postRequest,
    getRequest,
    IApiResponse
} from '../../common/helpers/RequestHelper';

class OrganizationService {
    public createOrganization(data: any): Promise<IApiResponse> {
        return postRequest(`/v1/organization`, data);
    }

    // public getProfile(user_id: string): Promise<IApiResponse> {
    //     return getRequest(`/v1/profile/user/${user_id}`);
    // }
    // public updateProfile(data: any): Promise<IApiResponse> {
    //     return postRequest('/v1/profile', data);
    // }
    // public uploadCoverImage(file: any): Promise<IApiResponse> {
    //     return uploadFile('/v1/profile/background-image', file);
    // }
}
export const organizationService = new OrganizationService();
