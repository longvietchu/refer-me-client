import { makeAutoObservable } from 'mobx';
import HttpStatusCode from '../../common/constants/HttpErrorCode';
import { loginStore } from '../Login/loginStore';
import { profileService } from './profileService';

export interface IProfile {
    _id: string;
    dob: string;
    background_image: string;
    about: string;
    gender: number;
    user_id: string;
}

export enum Gender {
    UNKNOWN = 'Unknown',
    MALE = 'Male',
    FEMALE = 'Female'
}

class ProfileStore {
    constructor() {
        makeAutoObservable(this);
    }

    profile?: IProfile;
    inputProfile = {
        dob: '',
        background_image: '',
        about: '',
        gender: ''
    };
    isLoading: boolean = false;

    async createProfile() {
        const result = await profileService.createProfile(this.inputProfile);
        if (result.status < HttpStatusCode.CODE_300) {
            console.log(result);
        }
    }

    async getProfile(user_id: string) {
        const result = await profileService.getProfile(user_id);
        if (result.status === HttpStatusCode.OK) {
            // console.log(result.body.data);
            this.profile = result.body.data;
        }
    }

    async updateProfile() {
        if (this.profile) {
            const data = {
                dob: this.profile.dob,
                about: this.profile.about.trim(),
                gender: this.profile.gender,
                background_image: this.profile.background_image
            };
            this.isLoading = true;
            const result = await profileService.updateProfile(data);
            if (result.status < HttpStatusCode.CODE_300) {
                console.log(result.body);
                return true;
            }
            this.isLoading = false;
        }
        return false;
    }

    async updateUserInfo() {
        if (loginStore.userInfo) {
            const data = {
                name: loginStore.userInfo.name,
                avatar: loginStore.userInfo.avatar,
                headline: loginStore.userInfo.headline
            };
            const result = await profileService.updateUserInfo(data);
            if (result.status < HttpStatusCode.CODE_300) {
                console.log(result.body);
            }
        }
    }

    async uploadCoverImage(file: any) {
        if (this.profile) {
            var formData = new FormData();
            formData.append('image', file);
            const result = await profileService.uploadSingleImage(formData);
            if (result.status < HttpStatusCode.CODE_300) {
                this.profile.background_image = result.body.url;
            }
            // console.log(result);
        }
    }

    async uploadAvatar(file: any) {
        if (loginStore.userInfo) {
            var formData = new FormData();
            formData.append('image', file);
            const result = await profileService.uploadSingleImage(formData);
            if (result.status < HttpStatusCode.CODE_300) {
                loginStore.userInfo.avatar = result.body.url;
            }
            // console.log(result);
        }
    }
}

export const profileStore = new ProfileStore();
