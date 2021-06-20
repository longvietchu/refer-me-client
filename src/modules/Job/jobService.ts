import {
    getRequest,
    IApiResponse,
    postRequest,
    putRequest
} from '../../common/helpers/RequestHelper';

class JobService {
    public getJobs(page: number, limit: number): Promise<IApiResponse> {
        return getRequest(`/v1/job?page=${page}&limit=${limit}`, false);
    }

    public getOneJob(_id: any): Promise<IApiResponse> {
        return getRequest(`/v1/job/detail/${_id}`, false);
    }

    public searchOrganization(keyword: string): Promise<IApiResponse> {
        return getRequest(`/v1/organization/search?keyword=${keyword}`);
    }

    public createJob(data: any): Promise<IApiResponse> {
        return postRequest(`/v1/job`, data);
    }
}

export const jobService = new JobService();
