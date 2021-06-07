import { makeAutoObservable, runInAction } from 'mobx';
import HttpStatusCode from '../../common/constants/HttpErrorCode';
import StorageService from '../../common/service/StorageService';
import { loginService } from './loginService';

export interface IUserInfo {
    id: string;
    name: string;
    email: string;
    avatar: string;
    headline: string;
}

export interface ILogin {
    email: string;
    password: string;
}

class LoginStore {
    constructor() {
        makeAutoObservable(this);
    }
    userInfo?: IUserInfo;
    email: string = '';
    password: string = '';
    validateError: string = '';
    isLoading: boolean = false;

    async getUserInfo() {
        const result = await loginService.getUserInfo();
        if (result.status === HttpStatusCode.OK) {
            console.log(result.body.data);
            this.userInfo = result.body.data;
        }
    }

    async login() {
        let filter_email: RegExp =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let email = this.email.trim();
        let password = this.password.trim();
        if (email === '' || password == '') {
            this.validateError = 'Email and password is required!';
            return false;
        }
        if (!filter_email.test(email)) {
            this.validateError = 'Invalid email form!';
            return false;
        }
        let loginInfo: ILogin = {
            email,
            password
        };
        this.isLoading = true;
        const result = await loginService.login(loginInfo);
        if (result.status === HttpStatusCode.OK) {
            // console.log(result.body);
            StorageService.setToken(result.body.token);
            this.getUserInfo();
            return true;
        } else {
            this.validateError = result.body.message;
        }
        this.isLoading = false;
        return false;
    }
}

export const loginStore = new LoginStore();
