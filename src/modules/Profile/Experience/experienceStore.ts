import { makeAutoObservable, runInAction } from 'mobx';

import { experienceService } from './experienceService';

import HttpStatusCode from '../../../common/constants/HttpErrorCode';

export interface IExperience {
    _id: string;
    job_title: string;
    job_description: string;
    company: string;
    location: string;
    employment_type: string;
    joined_at: string;
    left_at: string;
    user_id: string;
    organization_id: string;
}

class ExperienceStore {
    constructor() {
        makeAutoObservable(this);
    }
    userExp?: IExperience

    async getExperienceOfUser(user_id: string) {
        const result = await experienceService.getExperienceOfUser(user_id);
        if (result.status === HttpStatusCode.OK) {
            console.log('aaaa', result.body.data);
            this.userExp = result.body.data;
        }
    }
}

export const experienceStore = new ExperienceStore();
