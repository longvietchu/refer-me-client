import { makeAutoObservable } from 'mobx';
import HttpStatusCode from '../../common/constants/HttpErrorCode';
import { networkService } from './networkService';

export interface IRecommend {
    _id: string;
    name: string;
    email: string;
    avatar: string;
    headline: string;
    created_at: string;
    updated_at: string;
}

class NetworkStore {
    constructor() {
        makeAutoObservable(this);
    }
    recommendList?: IRecommend[];
    recommendPage: number = 0;
    recommnedLimit: number = 10;

    async getRecommend() {
        const result = await networkService.getRecommend(
            this.recommendPage,
            this.recommnedLimit
        );
        if (result.status < HttpStatusCode.CODE_300) {
            this.recommendList = result.body.data;
        }
        console.log(result);
    }
}

export const networkStore = new NetworkStore();
