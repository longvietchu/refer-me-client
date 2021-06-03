import { makeAutoObservable, runInAction, observable } from 'mobx';

import { educationService } from './educationService';

import HttpStatusCode from '../../../common/constants/HttpErrorCode';

import { formatYear } from '../../../common/config/Function';

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

    userEdu?: IEducation[];

    title: string = '';
    description: string = '';
    joined_at: string = '';
    graduated_at: string = '';
    organization_id: string = '';
    
    selectedEducation?: IEducation;
    searchResult: any;

    organization: any;
    modalEditEducation: boolean = false;

    modalCreateEducation: boolean = false;

    openModalEditEducation = () => {
        this.modalEditEducation = true;
    };

    closeModalEditEducation = () => {
        this.modalEditEducation = false;
    };

    openModalCreateEducation = () => {
        this.modalCreateEducation = true;
    };

    closeModalCreateEducation = () => {
        this.modalCreateEducation = false;
    };

    async getEducationOfUser(user_id: string) {
        const result = await educationService.getEducationOfUser(user_id);
        if (result.status === HttpStatusCode.OK) {
            this.userEdu = result.body.data;
            await this.getOrganization();
        }
    }

    async createEducationOfuser() {
        let data;
        if (this.organization && this.organization_id !== '') {
            data = {
                title: this.title,
                description: this.description,
                joined_at: formatYear(this.joined_at),
                graduated_at: formatYear(this.graduated_at),
                organization_id: this.organization_id
            };
        } else {
            data = {
                title: this.title,
                description: this.description,
                joined_at: formatYear(this.joined_at),
                graduated_at: formatYear(this.graduated_at)
            };
        }
        const result = await educationService.createEducationOfUser(data);

        if (result.status < HttpStatusCode.CODE_300) {
            await this.getEducationOfUser(result.body.data.user_id);
            return this.closeModalCreateEducation;
        }
    }

    async updateEducationOfUser(_id: string) {
        if (this.selectedEducation) {
            const result = await educationService.updateEducationOfUser(
                this.selectedEducation._id,
                this.selectedEducation
            );
            if (result.status < HttpStatusCode.CODE_300) {
                this.closeModalEditEducation();
                return true;
            }
        }
        return false;
    }

    async deleteEducationOfUser(_id: string) {
        if (this.selectedEducation) {
            const result = await educationService.deleteEducationOfUser(
                this.selectedEducation._id
            );
            if (result.status < HttpStatusCode.CODE_300) {
                console.log('delete', result);
                this.closeModalEditEducation();
                await this.getEducationOfUser(this.selectedEducation.user_id);
                return true;
            }
        }
        return false;
    }

    async getOrganization() {
        if (this.userEdu) {
            const result = await educationService.getOrganization();
            if (result.status < HttpStatusCode.CODE_300) {
                console.log('result++++', result);
                this.organization = result.body.data;
            }
        }
    }

    async searchOrganization(keyword: string) {
        const result = await educationService.searchOrganization(keyword);
        if (result.status < HttpStatusCode.CODE_300) {
            console.log(result.body.data);
            this.searchResult = result.body.data;
        }
    }
}

export const educationStore = new EducationStore();
