import { makeAutoObservable, runInAction, observable } from 'mobx';
import { organizationService } from './organizationService';

import HttpStatusCode from '../../common/constants/HttpErrorCode';

// import { formatYYYYMMDD } from '../../common/config/Function';

export interface IOrganization {
    name: string;
    avatar: string;
    background_image: string;
    description: string;
    website: string;
    industry: string;
    company_size: string;
    founded: string;
}

class OrganizationStore {
    constructor() {
        makeAutoObservable(this);
    }

    name: string = '';
    avatar: string | undefined = '';
    background_image: string = '';
    description: string = '';
    website: string = '';
    industry: string = '';
    company_size: string = '';
    founded: string = '';

    selectImage: any;

    async createOrganization() {
        const data = {
            name: this.name,
            avatar: this.avatar,
            background_image: this.background_image,
            description: this.description,
            website: this.website,
            industry: this.industry,
            company_size: this.company_size,
            founded: this.founded
        };
        const result = await organizationService.createOrganization(data);
        console.log('request', data);

        if (result.status < HttpStatusCode.CODE_300) {
            console.log('result', result.body);
        }
    }
}

export const organizationStore = new OrganizationStore();
