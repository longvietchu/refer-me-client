import {
    deleteRequest,
    getRequest,
    postRequest
} from '../../common/helpers/RequestHelper';
import { IApiResponse } from '../../common/helpers/UploadHelper';

class LoginService {
    public login(data: any): Promise<IApiResponse> {
        return postRequest('/v1/auth/login', data);
    }
    public getUserInfo(): Promise<IApiResponse> {
        return getRequest('/v1/user/current', true);
    }
}

export const loginService = new LoginService();
