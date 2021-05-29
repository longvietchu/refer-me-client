import { makeAutoObservable, runInAction } from 'mobx';
import HttpStatusCode from '../../common/constants/HttpErrorCode';
import StorageService from '../../common/service/StorageService';
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

    async signup() {
        const result = await signupService.singup(this.signupInfo);
        if (result.status === HttpStatusCode.OK) {
            // StorageService.setLocalStore()
            console.log(result.body);
        }
    }
}

export const signupStore = new SignupStore();
