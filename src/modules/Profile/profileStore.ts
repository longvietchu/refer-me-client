import { makeAutoObservable } from 'mobx';
import HttpStatusCode from '../../common/constants/HttpErrorCode';
import { loginStore } from '../Login/loginStore';
import { profileService } from './profileService';

export interface IProfile {
    _id: string;
    dob: string;
    background_image: string;
    about: string;
    headline: string;
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

    profile: IProfile = {
        _id: '',
        dob: '',
        background_image: '',
        about: '',
        headline: '',
        gender: 0,
        user_id: ''
    };
    isLoading: boolean = false;

    async getProfile(user_id: string) {
        const result = await profileService.getProfile(user_id);
        if (result.status === HttpStatusCode.OK) {
            console.log(result.body.data);
            this.profile = result.body.data;
        }
    }

    async updateProfile() {
        const data = {
            dob: this.profile.dob,
            about: this.profile.about.trim(),
            gender: this.profile.gender,
            headline: this.profile.headline.trim(),
            background_image: this.profile.background_image
        };
        this.isLoading = true;
        const result = await profileService.updateProfile(data);
        if (result.status === HttpStatusCode.OK) {
            console.log(result.body);
        }
        this.isLoading = false;
    }

    async uploadCoverImage(file: any) {
        var formData = new FormData();
        formData.append('file', file);
        const result = await profileService.uploadCoverImage(formData);
        if (result.status < HttpStatusCode.CODE_300) {
            // this.profile.background_image = result.body.url;
        }
        console.log(result);
    }
}

export const profileStore = new ProfileStore();
