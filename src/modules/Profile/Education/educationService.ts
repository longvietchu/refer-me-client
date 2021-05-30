import {
    getRequest,
    IApiResponse
} from '../../../common/helpers/RequestHelper';

class EducationService {
    public getEducationOfUser(user_id: string): Promise<IApiResponse> {
        return getRequest(`/v1/education/user?user_id=${user_id}`);
    }
}
export const educationService = new EducationService();
