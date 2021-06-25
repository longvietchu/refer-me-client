import { makeAutoObservable, runInAction, observable } from 'mobx';
import { organizationService } from './organizationService';

import HttpStatusCode from '../../common/constants/HttpErrorCode';
import {
    IUserInfo,
    IMetaData,
    IOrganizationInfo
} from '../../common/constants/CommonInterface';

import { loginStore } from '../Login/loginStore';

class OrganizationStore {
    constructor() {
        makeAutoObservable(this);
    }

    organization?: IOrganizationInfo;

    myOrganization?: IOrganizationInfo[];

    inputOrganization = {
        name: '',
        avatar: '',
        background_image: '',
        description: '',
        website: '',
        industry: '',
        company_size: '',
        founded: ''
    };

    organizationPage: number = 0;
    organizationLimit: number = 10;
    organizationMeta?: IMetaData;

    avatar: string = '';

    isLoading: boolean = false;

    modalEditOrganization: boolean = false;

    async uploadImage(file: any) {
        if (this.organization) {
            let formData = new FormData();
            formData.append('image', file);
            const result = await organizationService.uploadSingleImage(
                formData
            );
            if (result.status < HttpStatusCode.CODE_300) {
                console.log(result);
                this.organization.avatar = result.body.url;
                await this.updateOrganization();
            }
        }
    }

    async uploadCoverImage(file: any) {
        if (this.organization) {
            var formData = new FormData();
            formData.append('image', file);
            const result = await organizationService.uploadSingleImage(
                formData
            );
            if (result.status < HttpStatusCode.CODE_300) {
                this.organization.background_image = result.body.url;
                this.organization.background_image = result.body.url;
                await this.updateOrganization();
            }
        }
    }

    async getAnOrganization(_id: any) {
        const result = await organizationService.getAnOrganization(_id);
        if (result.status < HttpStatusCode.CODE_300) {
            this.organization = result.body.data;
            console.log('result', result);
        }
    }

    // async getMyOrganization() {
    //     const result = await organizationService.getAllOrganization(
    //         this.organizationPage,
    //         this.organizationLimit
    //     );
    //     if (result.status < HttpStatusCode.CODE_300) {
    //         this.myOrganization = result.body.data.filter((e: any) => {
    //             if (loginStore.userInfo) {
    //                 console.log('result+++++', result);
    //                 return e.user_id === loginStore.userInfo.id;
    //             }
    //         });
    //         this.organizationMeta = result.body.meta;
    //     }
    // }

    async getMyOrganization() {
        const result = await organizationService.getAllOrganization(
            this.organizationPage,
            this.organizationLimit
        );
        if (result.status < HttpStatusCode.CODE_300) {
            this.myOrganization = result.body.data;
            this.organizationMeta = result.body.meta;
        }
    }

    async createOrganization() {
        this.isLoading = true;
        let data: any = {};
        const result = await organizationService.createOrganization(
            this.inputOrganization
        );
        if (result.status < HttpStatusCode.CODE_300) {
            console.log('result', result);
            data = {
                name: this.inputOrganization.name,
                description: this.inputOrganization.description,
                website: this.inputOrganization.website,
                industry: this.inputOrganization.industry,
                company_size: this.inputOrganization.company_size,
                founded: this.inputOrganization.founded
            };
            console.log('request', data);
            return true;
        }
        this.isLoading = false;
        return false;
    }

    async updateOrganization() {
        if (loginStore.userInfo && this.organization) {
            const data = {
                name: this.organization.name,
                avatar: this.organization.name,
                background_image: this.organization.background_image,
                description: this.organization.description,
                website: this.organization.website,
                industry: this.organization.industry,
                company_size: this.organization.company_size,
                founded: new Date(this.organization.founded).toISOString()
            };
            const result = await organizationService.updateOrganization(
                this.organization._id,
                data
            );
            if (result.status < HttpStatusCode.CODE_300) {
                console.log(result);
                this.modalEditOrganization = false;
            }
        }
    }
}

export const organizationStore = new OrganizationStore();
