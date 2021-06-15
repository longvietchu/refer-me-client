import {
    deleteRequest,
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
    // Skill services
    public createSkill(data: any): Promise<IApiResponse> {
        return postRequest('/v1/skill', data);
    }
    public getSkill(user_id: string): Promise<IApiResponse> {
        return getRequest(`/v1/skill/user/${user_id}`);
    }
    public upvoteSkill(skill_id: string): Promise<IApiResponse> {
        return putRequest(`/v1/skill/upvote/${skill_id}`, {});
    }
    public updateSkillName(skill_id: string, data: any): Promise<IApiResponse> {
        return putRequest(`/v1/skill/${skill_id}`, data);
    }
    public deleteSkill(skill_id: string): Promise<IApiResponse> {
        return deleteRequest(`/v1/skill/${skill_id}`, {});
    }

    // Search organization
    public searchOrganization(keyword: string): Promise<IApiResponse> {
        return getRequest(`/v1/organization/search?keyword=${keyword}`);
    }
}
export const profileService = new ProfileService();
