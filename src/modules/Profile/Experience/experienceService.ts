import { getRequest, IApiResponse } from '../../../common/helpers/RequestHelper';

class ExperienceService {
    public getExperienceOfUser(user_id: string): Promise<IApiResponse> {
        return getRequest(`/v1/experience/user?user_id=${user_id}`);
    }
}
export const experienceService = new ExperienceService();
