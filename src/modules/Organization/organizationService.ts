import {
    postRequest,
    getRequest,
    IApiResponse
} from '../../common/helpers/RequestHelper';
import { uploadFile } from '../../common/helpers/UploadHelper';

class OrganizationService {
    public getAllOrganization(
        page: number,
        limit: number
    ): Promise<IApiResponse> {
        return getRequest(
            `/v1/organization?page=${page}&limit=${limit}`,
            false
        );
    }
    public createOrganization(data: any): Promise<IApiResponse> {
        return postRequest(`/v1/organization`, data);
    }

    public getAnOrganization(_id: any): Promise<IApiResponse> {
        return getRequest(`/v1/organization/detail/${_id}`, false);
    }

    public uploadSingleImage(file: any): Promise<IApiResponse> {
        return uploadFile('/v1/file/upload-single', file);
    }
}
export const organizationService = new OrganizationService();
