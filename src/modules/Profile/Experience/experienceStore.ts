import { makeAutoObservable, runInAction, observable } from 'mobx';

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

    userExp?: IExperience[];

    modalEditExperience: boolean = false;
    selectedExperience?: IExperience;

    openModalEditExperience = () => {
        this.modalEditExperience = true;
    };

    closeModalEditExperience = () => {
        this.modalEditExperience = false;
    };

    async getExperienceOfUser(user_id: string) {
        const result = await experienceService.getExperienceOfUser(user_id);
        if (result.status === HttpStatusCode.OK) {
            this.userExp = result.body.data;
        }
    }

    async updateExperienceOfUser(_id: string) {
        if (this.selectedExperience) {
            const result = await experienceService.updateExperienceOfUser(
                this.selectedExperience._id,
                this.selectedExperience
            );
            if (result.status < HttpStatusCode.CODE_300) {
                console.log(result.body);
                this.closeModalEditExperience();
                return true;
            }
        }
        return false;
    }
}

export const experienceStore = new ExperienceStore();
