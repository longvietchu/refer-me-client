import { makeAutoObservable } from 'mobx';
import HttpStatusCode from '../../common/constants/HttpErrorCode';
import { signupService } from './signupService';

export interface ISignupInfo {
    name: string;
    email: string;
    password: string;
}

class SignupStore {
    constructor() {
        makeAutoObservable(this);
    }

    signupInfo: ISignupInfo = { name: '', email: '', password: '' };
    isLoading: boolean = false;

    async signup() {
        this.isLoading = true;
        const result = await signupService.singup(this.signupInfo);
        if (result.status === HttpStatusCode.OK) {
            console.log(result.body);
            return true;
        }
        this.isLoading = false;
        return false;
    }
}

export const signupStore = new SignupStore();
