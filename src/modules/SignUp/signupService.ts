import {
    deleteRequest,
    getRequest,
    postRequest
} from '../../common/helpers/RequestHelper';
import { IApiResponse } from '../../common/helpers/UploadHelper';

class SignupService {
    public singup(data: any): Promise<IApiResponse> {
        return postRequest('/v1/auth/register', data);
    }
}

export const signupService = new SignupService();
