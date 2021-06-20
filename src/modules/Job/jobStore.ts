import { makeAutoObservable } from 'mobx';
import HttpStatusCode from '../../common/constants/HttpErrorCode';
import {
    IMetaData,
    IUserInfo,
    IOrganizationInfo
} from '../../common/constants/CommonInterface';

import { jobService } from './jobService';

interface IJob {
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
    user_id: string;
    user_info: IUserInfo;
    created_at: string;
}

export enum IEmploymentType {
    NONE = 'None',
    FULL_TIME = 'Full-time',
    PART_TIME = 'Part-time',
    CONTRACT = 'Contract',
    TEMPORARY = 'Temporary',
    INTERNSHIP = 'Internship'
}

class JobStore {
    constructor() {
        makeAutoObservable(this);
    }

    jobList?: IJob[];
    jobPage: number = 0;
    jobLimit: number = 10;
    jobMeta?: IMetaData;
    searchResult: IOrganizationInfo[] = [];

    inputJob = {
        title: '',
        location: '',
        company: '',
        description: '',
        seniority_level: '',
        employment_type: '',
        industry: '',
        job_functions: '',
        organization_id: '',
        user_id: ''
    };

    validateInput = {
        title: '',
        company: '',
        location: '',
        employment_type: ''
    };

    modalJob: boolean = false;
    isLoading: boolean = false;
    isSearching: boolean = false;

    async getJobs() {
        const result = await jobService.getJobs(this.jobPage, this.jobLimit);
        if (result.status < HttpStatusCode.CODE_300) {
            this.jobList = result.body.data;
            this.jobMeta = result.body.meta;
        }
    }

    async searchOrganization(keyword: string) {
        this.isSearching = true;
        const result = await jobService.searchOrganization(keyword);
        if (result.status < HttpStatusCode.CODE_300) {
            this.searchResult = result.body.data;
            console.log(result.body.data);
        }
        this.isSearching = false;
    }

    async createJob() {
        this.isLoading = true;
        let data: any = {};
        if (this.inputJob.organization_id !== '') {
            data = {
                title: this.inputJob.title.trim(),
                location: this.inputJob.location,
                organization_id: this.inputJob.organization_id,
                employment_type: this.inputJob.employment_type,
                description: this.inputJob.description.trim()
            };
        } else {
            data = {
                title: this.inputJob.title.trim(),
                location: this.inputJob.location,

                description: this.inputJob.description.trim()
            };
        }
        if (data.title === '') {
            this.validateInput.title = 'Thông tin này là bắt buộc!';
            this.isLoading = false;
            return;
        }
        if (data.location === '') {
            this.validateInput.location = 'Thông tin này là bắt buộc!';
            this.isLoading = false;
            return;
        }
        const result = await jobService.createJob(data);
        if (result.status < HttpStatusCode.CODE_300 && this.jobList) {
            console.log(result);
            this.jobList = [result.body.data, ...this.jobList];
        }
        this.isLoading = false;
        this.modalJob = false;
    }
}

export const jobStore = new JobStore();
