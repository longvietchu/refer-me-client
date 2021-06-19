import { makeAutoObservable, runInAction, observable } from 'mobx';

import { experienceService } from './experienceService';

import HttpStatusCode from '../../../common/constants/HttpErrorCode';
import { formatMMMYYYY } from '../../../common/config/Function';

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
    organization_info: any;
}

interface IEmployments {
    value: string;
    label: string;
}

class ExperienceStore {
    constructor() {
        makeAutoObservable(this);
    }

    userExp?: IExperience[];

    job_title: string = '';
    job_description: string = '';
    company: string = '';
    location: string = '';
    employment_type: string = '';
    joined_at: string = '';
    left_at: string = '';

    organization_id: string = '';

    selectedExperience?: IExperience;
    searchResult: any;

    organization: any;
    modalEditExperience: boolean = false;

    modalCreateExperience: boolean = false;

    openModalEditExperience = () => {
        this.modalEditExperience = true;
    };

    closeModalEditExperience = () => {
        this.modalEditExperience = false;
    };

    openModalCreateExperience = () => {
        this.modalCreateExperience = true;
    };

    closeModalCreateExperience = () => {
        this.modalCreateExperience = false;
    };

    async getExperienceOfUser(user_id: string) {
        const result = await experienceService.getExperienceOfUser(user_id);
        if (result.status === HttpStatusCode.OK) {
            this.userExp = result.body.data;
            await this.getOrganization();
        }
    }

    async createExperienceOfuser() {
        let data;
        if (this.organization && this.organization_id !== '') {
            data = {
                job_title: this.job_title,
                job_description: this.job_description,
                company: this.company,
                location: this.location,
                employment_type: this.employment_type,
                joined_at: formatMMMYYYY(this.joined_at),
                left_at: formatMMMYYYY(this.left_at),
                organization_id: this.organization_id
            };
        } else {
            data = {
                job_title: this.job_title,
                job_description: this.job_description,
                company: this.company,
                location: this.location,
                employment_type: this.employment_type,
                joined_at: formatMMMYYYY(this.joined_at),
                left_at: formatMMMYYYY(this.left_at)
            };
        }
        const result = await experienceService.createExperienceOfUser(data);

        if (result.status < HttpStatusCode.CODE_300) {
            await this.getExperienceOfUser(result.body.data.user_id);
            return this.closeModalCreateExperience;
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

    async deleteExperienceOfUser(_id: string) {
        if (this.selectedExperience) {
            const result = await experienceService.deleteExperienceOfUser(
                this.selectedExperience._id
            );
            if (result.status < HttpStatusCode.CODE_300) {
                console.log('delete', result);
                this.closeModalEditExperience();
                await this.getExperienceOfUser(this.selectedExperience.user_id);
                return true;
            }
        }
        return false;
    }

    async getOrganization() {
        if (this.userExp) {
            const result = await experienceService.getOrganization();
            if (result.status < HttpStatusCode.CODE_300) {
                console.log('result++++', result);
                this.organization = result.body.data;
            }
        }
    }

    async searchOrganization(keyword: string) {
        const result = await experienceService.searchOrganization(keyword);
        if (result.status < HttpStatusCode.CODE_300) {
            console.log(result.body.data);
            this.searchResult = result.body.data;
        }
    }
}

export const experienceStore = new ExperienceStore();
