import { makeAutoObservable } from 'mobx';
import { IMetaData, IUserInfo } from '../../common/constants/CommonInterface';
import { homeService } from './homeService';
import HttpStatusCode from '../../common/constants/HttpErrorCode';
import { loginStore } from '../Login/loginStore';

export interface IPostReaction {
    _id: string;
    post_id: string;
    user_id: string;
    created_at: string;
    updated_at: string;
}

export interface IReaction {
    _id: string;
    post_id: string;
    user_id: string;
    created_at: string;
    updated_at: string;
    user_info: IUserInfo;
}

export interface IPost {
    _id: string;
    post_image: string[];
    description: string;
    user_id: string;
    created_at: string;
    updated_at: string;
    user_info: IUserInfo;
    reactions: IPostReaction[];
    comments: IComment[];
}

export interface IComment {
    _id: string;
    content: string;
    post_id: string;
    user_id: string;
    created_at: string;
    updated_at: string;
    user_info: IUserInfo;
}

class HomeStore {
    constructor() {
        makeAutoObservable(this);
    }
    postList?: IPost[];
    postPage: number = 0;
    postLimit: number = 10;
    postMeta?: IMetaData;

    reactionList?: IReaction[];
    commentList?: IComment;

    inputPost: { description: string; post_image: string[] } = {
        description: '',
        post_image: []
    };
    createPostModal: boolean = false;
    isPosting: boolean = false;
    inputComment: string = '';

    async getPost() {
        const result = await homeService.getFriendPost(
            this.postPage,
            this.postLimit
        );
        if (result.status < HttpStatusCode.CODE_300) {
            this.postList = result.body.data;
            this.postMeta = result.body.meta;
        }
    }

    async getReaction(post_id: string) {
        const result = await homeService.getReactionOfPost(post_id);
        if (result.status < HttpStatusCode.CODE_300) {
            this.reactionList = result.body.data;
        }
    }

    async getComment(post_id: string) {
        const result = await homeService.getCommentOfPost(post_id);
        if (result.status < HttpStatusCode.CODE_300 && this.postList) {
            this.postList = this.postList.map((post) => {
                if (post._id === post_id) {
                    post.comments = result.body.data;
                }
                return post;
            });
        }
    }

    async createPost() {
        this.isPosting = true;
        let result = await homeService.createPost(this.inputPost);
        if (
            result.status < HttpStatusCode.CODE_300 &&
            this.postList &&
            loginStore.userInfo
        ) {
            result.body.data.user_info = loginStore.userInfo;
            this.postList = [result.body.data, ...this.postList];
            this.createPostModal = false;
            console.log(result.body.data);
        }
        this.isPosting = false;
    }

    async createComment(post_id: string, content: string) {
        let data = {
            content: content.trim()
        };
        let result = await homeService.createComment(post_id, data);
        if (result.status < HttpStatusCode.CODE_300 && this.postList) {
            this.postList = this.postList.map((post) => {
                if (post._id === post_id) {
                    post.comments = [result.body.data, ...post.comments];
                }
                return post;
            });
            console.log(result.body.data);
        }
    }

    async createReaction(post_id: string) {
        let result = await homeService.createReaction(post_id);
        if (
            result.status < HttpStatusCode.CODE_300 &&
            this.postList &&
            loginStore.userInfo
        ) {
            result.body.data.user_info = loginStore.userInfo;
            this.postList = this.postList.map((post) => {
                if (post._id === post_id) {
                    post.reactions = [result.body.data, ...post.reactions];
                }
                return post;
            });
            console.log(result.body.data);
        }
    }

    async uploadPostImages(files: any) {
        let formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('images', files[i]);
        }
        const result = await homeService.uploadMultipleImages(formData);
        if (result.status < HttpStatusCode.CODE_300) {
            this.inputPost.post_image = result.body.images;
            console.log(result);
        }
        // console.log(formData);
    }
}

export const homeStore = new HomeStore();
