import {
    IApiResponse,
    postRequest,
    putRequest
} from '../../common/helpers/RequestHelper';

class SignupService {
    public singup(data: any): Promise<IApiResponse> {
        return postRequest('/v1/auth/register', data);
    }

    public changePassword(data: any): Promise<IApiResponse> {
        return putRequest('/v1/user/change-password', data);
    }
}

export const signupService = new SignupService();
