import {deleteRequest, postRequest, putRequest, IApiResponse, getRequest} from "../helpers/RequestHelper";

class AccountService {
    public login(username: string, password: string): Promise<IApiResponse> {
        return postRequest(`/v1/auth/login`, {username, password});
    }
    public signUp(fullName: string, username: string, password: string, confirmedPassword: string): Promise<IApiResponse> {
        return postRequest(`/v1/auth/register`, {fullName, username, password, confirmedPassword});
    }

    public logOut(): Promise<IApiResponse> {
        const url: string = '/v1/auth/logout';
        return deleteRequest(url, {});
    }

    public resendCode(username:string):Promise<IApiResponse>{
        return postRequest(`/v1/auth/resend_register_code`, {username})
    }

    public checkOtp(username: string, code: string):Promise<IApiResponse>{
        return putRequest(`/v1/auth/verify`,{username, code})
    }

    public getProfile():Promise<IApiResponse>{
        return getRequest(`/v1/users/_me`)
    }
}

export const accountService =  new AccountService();
