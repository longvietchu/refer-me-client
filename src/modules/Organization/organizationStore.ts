import { makeAutoObservable, runInAction, observable } from 'mobx';
import { organizationService } from './organizationService';

import HttpStatusCode from '../../common/constants/HttpErrorCode';
import {
    IUserInfo,
    IMetaData,
    IOrganizationInfo
} from '../../common/constants/CommonInterface';

import { loginStore } from '../Login/loginStore';

interface IOrgJob {
    _id: string;
    title: string;
    location: string;
    company: string;
    description: string;
    seniority_level: string;
    employment_type: string;
    industry: string;
    job_functions: string;
    organization_id: string;
    organization_info: IOrganizationInfo;
    user_id: string;
    user_info: IUserInfo;
    created_at: string;
}

class OrganizationStore {
    constructor() {
        makeAutoObservable(this);
    }

    organization?: IOrganizationInfo;

    organizationList?: IOrganizationInfo[];
    organizationPage: number = 0;
    organizationLimit: number = 10;
    organizationMeta?: IMetaData;

    myOrganization?: IOrganizationInfo[];
    myOrganizationPage: number = 0;
    myOrganizationLimit: number = 15;
    myOrganizationMeta?: IMetaData;

    listJobOfOrg?: IOrgJob[];

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

    inputSearchOrg: string = '';
    avatar: string = '';
    isLoading: boolean = false;

    modalOrganization = {
        edit: false,
        delete: false
    };

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
                await this.updateOrganization();
            }
        }
    }

    async getAllOrganization() {
        const result = await organizationService.getAllOrganization(
            this.organizationPage,
            this.organizationLimit
        );
        if (result.status < HttpStatusCode.CODE_300) {
            this.organizationList = result.body.data;
            this.organizationMeta = result.body.meta;
        }
    }

    async getAnOrganization(_id: any) {
        const result = await organizationService.getAnOrganization(_id);
        if (result.status < HttpStatusCode.CODE_300) {
            this.organization = result.body.data;
            console.log('result', result);
        }
    }

    async getMyOrganization(user_id: string) {
        const result = await organizationService.getOrganizationOfUser(
            user_id,
            this.myOrganizationPage,
            this.myOrganizationLimit
        );
        if (result.status < HttpStatusCode.CODE_300) {
            this.myOrganization = result.body.data;
            this.myOrganizationMeta = result.body.meta;
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
                avatar: this.organization.avatar,
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
                this.modalOrganization.edit = false;
            }
        }
    }

    async deleteOrganization(organization_id: string) {
        this.isLoading = true;
        const result = await organizationService.deleteOrganization(
            organization_id
        );
        if (result.status < HttpStatusCode.CODE_300) {
            console.log(result);
            this.modalOrganization.delete = false;
            return true;
        }
        this.isLoading = false;
        return false;
    }

    async getJobOfOrganization(organization_id: string) {
        this.isLoading = true;
        const result = await organizationService.getJobOfOrganization(
            organization_id
        );
        if (result.status < HttpStatusCode.CODE_300) {
            console.log('result-----', result);
            this.listJobOfOrg = result.body.data;
        }
        this.isLoading = false;
    }
}

export const organizationStore = new OrganizationStore();
