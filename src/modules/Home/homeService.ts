import {
    deleteRequest,
    getRequest,
    IApiResponse,
    postRequest,
    putRequest
} from '../../common/helpers/RequestHelper';
import { uploadFile } from '../../common/helpers/UploadHelper';

class HomeService {
    public getFriendPost(page: number, limit: number): Promise<IApiResponse> {
        return getRequest(`/v1/post/feed?page=${page}&limit=${limit}`, true);
    }
    public getCommentOfPost(post_id: string): Promise<IApiResponse> {
        return getRequest(`/v1/post/comment?post_id=${post_id}`);
    }
    public getReactionOfPost(post_id: string): Promise<IApiResponse> {
        return getRequest(`/v1/post/reaction?post_id=${post_id}`);
    }
    public updatePost(post_id: string, data: any): Promise<IApiResponse> {
        return putRequest(`/v1/post/${post_id}`, data);
    }
    public createPost(data: any): Promise<IApiResponse> {
        return postRequest(`/v1/post`, data);
    }
    public createReaction(post_id: string): Promise<IApiResponse> {
        return postRequest(`/v1/post/reaction/like?post_id=${post_id}`, {});
    }
    public createComment(post_id: string, data: any): Promise<IApiResponse> {
        return postRequest(`/v1/post/comment?post_id=${post_id}`, data);
    }
    public uploadMultipleImages(files: any): Promise<IApiResponse> {
        return uploadFile('/v1/file/upload-multiple', files);
    }
    public deletePost(post_id: string): Promise<IApiResponse> {
        return deleteRequest(`v1/post/${post_id}`, {});
    }
}

export const homeService = new HomeService();
