import {
    getRequest,
    IApiResponse,
    postRequest,
    putRequest,
    deleteRequest
} from '../../../common/helpers/RequestHelper';

class ExperienceService {
    public getExperienceOfUser(user_id: string): Promise<IApiResponse> {
        return getRequest(`/v1/experience/user?user_id=${user_id}`);
    }
    public updateExperienceOfUser(
        _id: string,
        data: any
    ): Promise<IApiResponse> {
        return putRequest(`/v1/experience/${_id}`, data);
    }

    public createExperienceOfUser(data: any): Promise<IApiResponse> {
        return postRequest(`/v1/experience`, data);
    }

    public deleteExperienceOfUser(_id: string): Promise<IApiResponse> {
        return deleteRequest(`/v1/experience/${_id}`, {});
    }

    public searchOrganization(keyword: string): Promise<IApiResponse> {
        return getRequest(`/v1/organization/search?keyword=${keyword}`);
    }

    public getOrganization(): Promise<IApiResponse> {
        return getRequest(`/v1/organization/search`);
    }
}
export const experienceService = new ExperienceService();
