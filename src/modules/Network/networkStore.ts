import { makeAutoObservable } from 'mobx';
import { IMetaData, IUserInfo } from '../../common/constants/CommonInterface';
import HttpStatusCode from '../../common/constants/HttpErrorCode';
import { networkService } from './networkService';

export interface IConnection {
    _id: string;
    people: string[];
    is_connected: boolean;
    receiver_id: string;
    sender_id: string;
    greeting: string;
    created_at: Date;
    updated_at: Date;
    user_info: IUserInfo;
}

export interface INetwork {
    _id: string;
    people: string[];
    is_connected: boolean;
    receiver_id: string;
    sender_id: string;
    greeting: string;
    created_at: Date;
    updated_at: Date;
    people_info: IUserInfo[];
}

export enum NetworkTab {
    CONTACT = 'CONTACT',
    CONNECTION = 'CONNECTION'
}

class NetworkStore {
    constructor() {
        makeAutoObservable(this);
    }
    recommendList?: IUserInfo[];
    recommendPage: number = 0;
    recommendLimit: number = 10;
    recommendMeta?: IMetaData;

    invitationList?: IConnection[];
    invitationPage: number = 0;
    invitationLimit: number = 10;
    invitationMeta?: IMetaData;

    networkList?: INetwork[];
    networkPage: number = 0;
    networkLimit: number = 10;
    networkMeta?: IMetaData;

    greeting: string = '';
    createConnectionModal: boolean = false;
    selectedUser?: IUserInfo;
    isLoading: boolean = false;
    networkTab: string = NetworkTab.CONTACT;

    async getRecommend() {
        const result = await networkService.getRecommend(
            this.recommendPage,
            this.recommendLimit
        );
        if (result.status < HttpStatusCode.CODE_300) {
            // console.log(result);
            this.recommendList = result.body.data;
            this.recommendMeta = result.body.meta;
        }
    }

    async getInvitations() {
        const result = await networkService.getInvitations(
            this.invitationPage,
            this.invitationLimit
        );
        if (result.status < HttpStatusCode.CODE_300) {
            this.invitationList = result.body.data;
            this.invitationMeta = result.body.meta;
        }
    }

    async getNetworks() {
        const result = await networkService.getNetworks(
            this.networkPage,
            this.networkLimit
        );
        if (result.status < HttpStatusCode.CODE_300) {
            this.networkList = result.body.data;
            this.networkMeta = result.body.meta;
        }
    }

    async createConnection(receiver_id: string) {
        this.isLoading = true;
        const data = {
            receiver_id,
            greeting: this.greeting
        };
        const result = await networkService.createConnection(data);
        if (result.status < HttpStatusCode.CODE_300) {
            console.log(result.body.data);
            this.createConnectionModal = false;
        }
        this.isLoading = false;
    }

    async acceptInvitation(invitation_id: string) {
        const result = await networkService.acceptInvitation(invitation_id);
        if (result.status < HttpStatusCode.CODE_300 && this.invitationList) {
            console.log(result.body.data);
            this.invitationList = this.invitationList.filter(
                (item) => item._id !== invitation_id
            );
            this.getNetworks();
        }
    }
}

export const networkStore = new NetworkStore();
