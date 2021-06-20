import { makeAutoObservable } from 'mobx';
import HttpStatusCode from '../../common/constants/HttpErrorCode';
import { IMetaData, IUserInfo } from '../../common/constants/CommonInterface';

import { jobService } from './jobService';

interface IJob {
    _id: string;
    title: string;
    location: string;
    description: string;
    seniority_level: string;
    employment_type: string;
    industry: string;
    job_functions: string;
    organization_id: string;
    user_id: string;
    user_info: IUserInfo;
}

class JobStore {
    constructor() {
        makeAutoObservable(this);
    }

    jobList?: IJob[];
    jobPage: number = 0;
    jobLimit: number = 10;
    jobMeta?: IMetaData;

    async getJobs() {
        const result = await jobService.getJobs(this.jobPage, this.jobLimit);
        if (result.status < HttpStatusCode.CODE_300) {
            this.jobList = result.body.data;
            this.jobMeta = result.body.meta;

            // console.log('result', result);
            // console.log('list job', this.jobList);
        }
    }
}

export const jobStore = new JobStore();
