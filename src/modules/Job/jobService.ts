import {
    deleteRequest,
    getRequest,
    IApiResponse,
    postRequest,
    putRequest
} from '../../common/helpers/RequestHelper';

class JobService {
    public getJobs(page: number, limit: number): Promise<IApiResponse> {
        return getRequest(`/v1/job?page=${page}&limit=${limit}`);
    }

    public getOneJob(_id: any): Promise<IApiResponse> {
        return getRequest(`/v1/job/detail/${_id}`);
    }

    public getJobOfUser(user_id: string): Promise<IApiResponse> {
        return getRequest(`/v1/job/user?user_id=${user_id}`);
    }

    public getApplyJob(): Promise<IApiResponse> {
        return getRequest(`/v1/job/applied-jobs`, true);
    }

    public searchOrganization(keyword: string): Promise<IApiResponse> {
        return getRequest(`/v1/organization/search?keyword=${keyword}`);
    }

    public createJob(data: any): Promise<IApiResponse> {
        return postRequest(`/v1/job`, data);
    }

    public deleteJob(job_id: string): Promise<IApiResponse> {
        return deleteRequest(`/v1/job/${job_id}`, {});
    }

    public applyJob(_id: any, data: any): Promise<IApiResponse> {
        return postRequest(`/v1/job/apply/${_id}`, data);
    }

    public unApplyJob(job_id: string): Promise<IApiResponse> {
        return deleteRequest(`/v1/job/un-apply/${job_id}`, {});
    }

    public isApplied(job_id: string): Promise<IApiResponse> {
        return getRequest(`/v1/job/is-applied?job_id=${job_id}`, true);
    }

    public searchJob(keyword: string): Promise<IApiResponse> {
        return getRequest(`/v1/job/search?keyword=${keyword}`);
    }

    public getAllApplicants(job_id: string): Promise<IApiResponse> {
        return getRequest(`/v1/job/applicants?job_id=${job_id}`, true);
    }
}

export const jobService = new JobService();
