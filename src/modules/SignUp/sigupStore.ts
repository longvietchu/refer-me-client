import { makeAutoObservable } from 'mobx';
import HttpStatusCode from '../../common/constants/HttpErrorCode';
import StorageService from '../../common/service/StorageService';
import { loginStore } from '../Login/loginStore';
import { signupService } from './signupService';

export interface ISignupInfo {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

class SignupStore {
    constructor() {
        makeAutoObservable(this);
    }

    signupInfo: ISignupInfo = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    };
    changePasswordInput = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    };
    isLoading: boolean = false;
    validateError: string = '';
    validateChangePass: string = '';

    async signup() {
        let filter_email: RegExp =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const confirmPassword = this.signupInfo.confirmPassword.trim();
        const data = {
            name: this.signupInfo.name.trim(),
            email: this.signupInfo.email.trim(),
            password: this.signupInfo.password.trim()
        };
        if (
            data.email === '' ||
            data.password === '' ||
            data.name === '' ||
            confirmPassword === ''
        ) {
            this.validateError = 'Name, email and password is required!';
            return false;
        }
        if (!filter_email.test(data.email)) {
            this.validateError = 'Invalid email form!';
            return false;
        }
        if (confirmPassword !== data.password) {
            this.validateError = 'Confirm password does not correct';
            return false;
        }
        this.isLoading = true;
        const result = await signupService.singup(data);
        if (result.status === HttpStatusCode.OK) {
            // console.log(result.body);
            StorageService.setToken(result.body.token);
            await loginStore.getUserInfo();
            return true;
        } else {
            this.validateError = result.body.message;
        }
        this.isLoading = false;
        return false;
    }

    async changePassword() {
        const data = {
            currentPassword: this.changePasswordInput.currentPassword.trim(),
            newPassword: this.changePasswordInput.newPassword.trim(),
            confirmPassword: this.changePasswordInput.confirmPassword.trim()
        };
        if (
            data.currentPassword === '' ||
            data.newPassword === '' ||
            data.confirmPassword === ''
        ) {
            this.validateChangePass =
                'Current, new and confirm password is required!';
            return false;
        }
        if (data.confirmPassword !== data.newPassword) {
            this.validateChangePass = 'Confirm password does not correct!';
            return false;
        }
        this.isLoading = true;
        const result = await signupService.changePassword(data);
        if (result.status === HttpStatusCode.OK) {
            this.validateChangePass = '';
            StorageService.removeToken();
            window.location.reload();
        } else {
            this.validateChangePass = result.body.message;
        }
        this.isLoading = false;
    }
}

export const signupStore = new SignupStore();
