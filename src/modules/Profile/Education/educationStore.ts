import { makeAutoObservable, runInAction, observable } from 'mobx';

import { educationService } from './educationService';

import HttpStatusCode from '../../../common/constants/HttpErrorCode';

export interface IEducation {
    _id: string;
    title: string;
    description: string;
    joined_at: string;
    graduated_at: string;
    user_id: string;
    organization_id: string;
}

class EducationStore {
    constructor() {
        makeAutoObservable(this);
    }

    userEdu?: Array<IEducation>;

    async getEducationOfUser(user_id: string) {
        const result = await educationService.getEducationOfUser(user_id);
        if (result.status === HttpStatusCode.OK) {
            console.log('edu', result.body.data);
            this.userEdu = result.body.data;
        }
    }
}

export const educationStore = new EducationStore();
