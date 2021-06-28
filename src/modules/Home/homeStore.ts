import { makeAutoObservable } from 'mobx';
import { IMetaData, IUserInfo } from '../../common/constants/CommonInterface';
import { homeService } from './homeService';
import HttpStatusCode from '../../common/constants/HttpErrorCode';

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
    created_at: Date;
    updated_at: Date;
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
}

export interface IComment {
    _id: string;
    content: string;
    post_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
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

    inputPost = {
        description: '',
        post_image: []
    };

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
        if (result.status < HttpStatusCode.CODE_300) {
            this.commentList = result.body.data;
        }
    }

    async createPost() {
        const result = await homeService.createPost(this.inputPost);
        if (result.status < HttpStatusCode.CODE_300) {
            console.log(result.body.data);
        }
    }
}

export const homeStore = new HomeStore();
