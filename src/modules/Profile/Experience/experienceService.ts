import {
    getRequest,
    IApiResponse,
    postRequest,
    putRequest
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
}
export const experienceService = new ExperienceService();
