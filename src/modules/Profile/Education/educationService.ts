import {
    getRequest,
    IApiResponse,
    postRequest,
    putRequest
} from '../../../common/helpers/RequestHelper';

class EducationService {
    public getEducationOfUser(user_id: string): Promise<IApiResponse> {
        return getRequest(`/v1/education/user?user_id=${user_id}`);
    }

    public createEducationOfUser(data: any): Promise<IApiResponse> {
        return postRequest(`/v1/education`, data);
    }

    public updateEducationOfUser(
        _id: string,
        data: any
    ): Promise<IApiResponse> {
        return putRequest(`/v1/education/${_id}`, data);
    }

    public searchOrganization(keyword: string): Promise<IApiResponse> {
        return getRequest(`/v1/organization/search?keyword=${keyword}`);
    }

    public getOrganization(): Promise<IApiResponse> {
        return getRequest(`/v1/organization/search`);
    }
}
export const educationService = new EducationService();
