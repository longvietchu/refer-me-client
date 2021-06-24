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

    async uploadImage(file: any) {
        let formData = new FormData();
        formData.append('image', file);
        const result = await organizationService.uploadSingleImage(formData);
        if (result.status < HttpStatusCode.CODE_300) {
            // loginStore.userInfo.avatar = result.body.url;
            console.log(result);
            // this.organization?.avatar;
        }
    }

    async getAnOrganization(_id: any) {
        const result = await organizationService.getAnOrganization(_id);
        if (result.status < HttpStatusCode.CODE_300) {
            // this.organization = result.body.data;
            console.log('result', result);
        }
    }

    async getMyOrganization() {
        const result = await organizationService.getAllOrganization(
            this.organizationPage,
            this.organizationLimit
        );
        if (result.status < HttpStatusCode.CODE_300) {
            this.myOrganization = result.body.data.filter((e: any) => {
                if (loginStore.userInfo) {
                    return e.user_id === loginStore.userInfo.id;
                }
            });
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
}

export const organizationStore = new OrganizationStore();
