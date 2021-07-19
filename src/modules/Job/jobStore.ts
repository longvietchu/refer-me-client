/* eslint-disable */

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
    organization_info: IOrganizationInfo;
    user_id: string;
    user_info: IUserInfo;
    created_at: string;
}

interface IMyApplyJob {
    _id: string;
    greeting: string;
    user_id: string;
    job_id: string;
    created_at: string;
    updated_at: string;
    job_info: IJob;
}

interface IApplicants {
    _id: string;
    greeting: string;
    user_id: string;
    job_id: string;
    created_at: string;
    updated_at: string;
    user_info: IUserInfo;
}

export enum IEmploymentType {
    NONE = 'None',
    FULL_TIME = 'Full-time',
    PART_TIME = 'Part-time',
    CONTRACT = 'Contract',
    TEMPORARY = 'Temporary',
    INTERNSHIP = 'Internship'
}

export enum JobTab {
    POSTED = 'POSTED',
    APPLIED = 'APPLIED'
}

class JobStore {
    constructor() {
        makeAutoObservable(this);
    }

    jobList?: IJob[];
    myJobList?: IJob[];
    applicantsList?: IApplicants[];
    myApplyJobList?: IMyApplyJob[];
    detailJob?: IJob;
    jobPage: number = 0;
    jobLimit: number = 10;
    jobMeta?: IMetaData;
    searchResult: IOrganizationInfo[] = [];

    searchJobResult: IJob[] = [];

    searchKeyWord: string = '';

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
    selectedJob?: IJob;

    inputKeyword: string = '';

    validateInput = {
        title: '',
        company: '',
        location: '',
        employment_type: ''
    };

    greeting: string = '';
    applyJobModal: boolean = false;

    isAppliedJob: boolean = false;

    modalJob: boolean = false;
    isLoading: boolean = false;
    isSearching: boolean = false;
    modalDeleteJob: boolean = false;
    modalEditJob: boolean = false;

    jobTab: string = JobTab.POSTED;

    async getJobs() {
        const result = await jobService.getJobs(this.jobPage, this.jobLimit);
        if (result.status < HttpStatusCode.CODE_300) {
            this.jobList = result.body.data;
            this.jobMeta = result.body.meta;
        }
    }

    async getOneJob(_id: any) {
        const result = await jobService.getOneJob(_id);
        if (result.status < HttpStatusCode.CODE_300) {
            this.detailJob = result.body.data;
        }
    }

    async getJobOfUser(user_id: string) {
        const result = await jobService.getJobOfUser(user_id);
        if (result.status < HttpStatusCode.CODE_300) {
            this.myJobList = result.body.data;
        }
    }

    async getApplyJob() {
        const result = await jobService.getApplyJob();
        if (result.status < HttpStatusCode.CODE_300) {
            this.myApplyJobList = result.body.data;
        }
    }

    async searchOrganization(keyword: string) {
        this.isSearching = true;
        const result = await jobService.searchOrganization(keyword);
        if (result.status < HttpStatusCode.CODE_300) {
            this.searchResult = result.body.data;
        }
        this.isSearching = false;
    }

    async createJob() {
        let data = {
            title: this.inputJob.title.trim(),
            location: this.inputJob.location,
            organization_id: this.inputJob.organization_id,
            employment_type: this.inputJob.employment_type,
            description: this.inputJob.description.trim(),
            company: this.inputJob.company
        };
        if (data.title === '') {
            this.validateInput.title = 'This infomation is required!';
            this.isLoading = false;
            return;
        }
        if (data.location === '') {
            this.validateInput.location = 'This infomation is required!';
            this.isLoading = false;
            return;
        }
        this.isLoading = true;
        const result = await jobService.createJob(data);
        if (result.status < HttpStatusCode.CODE_300 && this.jobList) {
            // console.log('result+++', result);
            // this.jobList = [result.body.data, ...this.jobList];
            await this.getJobs();
        }
        this.isLoading = false;
        this.modalJob = false;
    }

    async deleteJob(job_id: string) {
        this.isLoading = true;
        const result = await jobService.deleteJob(job_id);
        if (result.status < HttpStatusCode.CODE_300) {
            jobStore.modalDeleteJob = false;
            return true;
        }
        this.isLoading = false;
        return false;
    }

    async applyJob(_id: any) {
        this.isLoading = true;
        const data = {
            greeting: this.greeting
        };
        const result = await jobService.applyJob(_id, data);
        if (result.status < HttpStatusCode.CODE_300) {
            // console.log('result----', result);
            this.applyJobModal = false;
        }
        this.isLoading = false;
    }

    async unApplyJob(job_id: string) {
        this.isLoading = true;
        const result = await jobService.unApplyJob(job_id);
        if (result.status < HttpStatusCode.CODE_300) {
        }
        this.isLoading = false;
    }

    async isApplied(job_id: string) {
        this.isLoading = true;
        const result = await jobService.isApplied(job_id);
        if (result.status < HttpStatusCode.CODE_300) {
            this.isAppliedJob = result.body.is_applied;
        }
        this.isLoading = false;
    }

    async searchJob() {
        this.isLoading = true;
        const result = await jobService.searchJob(this.inputKeyword);
        if (result.status < HttpStatusCode.CODE_300) {
            this.jobList = result.body.data;
        }
    }

    async getAllApplicants(job_id: string) {
        this.isLoading = true;
        const result = await jobService.getAllApplicants(job_id);
        if (result.status < HttpStatusCode.CODE_300) {
            this.applicantsList = result.body.data;
        }
        this.isLoading = false;
    }
}

export const jobStore = new JobStore();
