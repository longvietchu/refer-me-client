import {
    getRequest,
    IApiResponse,
    postRequest,
    putRequest
} from '../../common/helpers/RequestHelper';
import { uploadFile } from '../../common/helpers/UploadHelper';

class ProfileService {
    public getProfile(user_id: string): Promise<IApiResponse> {
        return getRequest(`/v1/profile/user/${user_id}`);
    }
    public updateProfile(data: any): Promise<IApiResponse> {
        return postRequest('/v1/profile', data);
    }
    public uploadSingleImage(file: any): Promise<IApiResponse> {
        return uploadFile('/v1/file/upload-single', file);
    }
    public updateUserInfo(data: any): Promise<IApiResponse> {
        return putRequest('/v1/user/change-info', data);
    }
    public createProfile(data: any): Promise<IApiResponse> {
        return postRequest('/v1/profile', data);
    }
}
export const profileService = new ProfileService();
