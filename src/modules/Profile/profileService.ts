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
    // Education services
    public createEducation(data: any): Promise<IApiResponse> {
        return postRequest('/v1/education', data);
    }
    public getEducation(user_id: string): Promise<IApiResponse> {
        return getRequest(`/v1/education/user?user_id=${user_id}`);
    }
    public updateEducation(
        education_id: string,
        data: any
    ): Promise<IApiResponse> {
        return putRequest(`/v1/education/${education_id}`, data);
    }
    // Experience services
    public createExperience(data: any): Promise<IApiResponse> {
        return postRequest('/v1/experience', data);
    }
    public getExperience(user_id: string): Promise<IApiResponse> {
        return getRequest(`/v1/experience/user?user_id=${user_id}`);
    }
    public updateExperience(
        experience_id: string,
        data: any
    ): Promise<IApiResponse> {
        return putRequest(`/v1/experience/${experience_id}`, data);
    }
}
export const profileService = new ProfileService();
