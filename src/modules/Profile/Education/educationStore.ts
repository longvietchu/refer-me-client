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
    modalEditEducation: boolean = false;

    modalCreateEducation: boolean = false;

    openModalEditEducation = () => {
        this.modalEditEducation = true;
    };

    closeModalEditEducation = () => {
        this.modalEditEducation = false;
    };

    openModalCreateEducation = () => {
        this.modalEditEducation = true;
    };

    closeModalCreateEducation = () => {
        this.modalCreateEducation = false;
    };

    async getEducationOfUser(user_id: string) {
        const result = await educationService.getEducationOfUser(user_id);
        if (result.status === HttpStatusCode.OK) {
            console.log('edu', result.body.data);
            this.userEdu = result.body.data;
        }
    }

    async createEducationOfuser() {
        let data;
        if(this.organization_id !== "") {
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
        console.log('result', result);
        console.log('data', data);

        // if (result.status < HttpStatusCode.CODE_300) {
        //     console.log('create', result.body);
        //     this.closeModalEducation;
        //     return true;
        // }
    }

    // mo mic t bao cai nay

    async updateEducationOfUser(_id: string) {
        if (this.selectedEducation) {
            const result = await educationService.updateEducationOfUser(
                this.selectedEducation._id,
                this.selectedEducation
            );
            if (result.status < HttpStatusCode.CODE_300) {
                console.log(result.body);
                this.closeModalEditEducation();
                return true;
            }
        }
        return false;
    }

    async searchOrganization(keyword: string) {
        const result = await educationService.searchOrganization(keyword);
        if(result.status < HttpStatusCode.CODE_300) {
            console.log(result.body.data);
            this.searchResult = result.body.data;
        }
    }
}

export const educationStore = new EducationStore();
