import { makeAutoObservable } from 'mobx';
import HttpStatusCode from '../../common/constants/HttpErrorCode';
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
    isLoading: boolean = false;
    validateError: string = '';

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
            console.log(result.body);
            return true;
        } else {
            this.validateError = result.body.message;
        }
        this.isLoading = false;
        return false;
    }
}

export const signupStore = new SignupStore();
