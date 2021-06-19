import {
    getRequest,
    IApiResponse,
    postRequest
} from '../../common/helpers/RequestHelper';
import { uploadFile } from '../../common/helpers/UploadHelper';

class ProfileService {
    public getProfile(user_id: string): Promise<IApiResponse> {
        return getRequest(`/v1/profile/user/${user_id}`);
    }
    public updateProfile(data: any): Promise<IApiResponse> {
        return postRequest('/v1/profile', data);
    }
    public uploadCoverImage(file: any): Promise<IApiResponse> {
        return uploadFile('/v1/profile/background-image', file);
    }
    public getOrganization(): Promise<IApiResponse> {
        return getRequest(`/v1/organization/search`);
    }
}
export const profileService = new ProfileService();
