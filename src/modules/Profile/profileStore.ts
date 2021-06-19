import { makeAutoObservable } from 'mobx';
import HttpStatusCode from '../../common/constants/HttpErrorCode';
import { loginStore } from '../Login/loginStore';
import { educationStore } from './Education/educationStore';
import { experienceStore } from './Experience/experienceStore';
import { profileService } from './profileService';

export interface IProfile {
    _id: string;
    dob: string;
    background_image: any;
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

    profile?: IProfile;

    isLoading: boolean = false;

    modalEditProfile: boolean = false;

    openModalEditProfile() {
        this.modalEditProfile = true;
    }

    closeModalEditProfile() {
        this.modalEditProfile = false;
    }

    async getProfile(user_id: string) {
        const result = await profileService.getProfile(user_id);
        if (result.status === HttpStatusCode.OK) {
            this.profile = result.body.data;
            let userId = result.body.data.user_id;
            await educationStore.getEducationOfUser(userId);
            await experienceStore.getExperienceOfUser(userId);
        }
    }

    async updateProfile() {
        if (this.profile) {
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
            this.closeModalEditProfile();
        }
    }

    async uploadCoverImage(file: any) {
        var formData = new FormData();
        formData.append('file', file);
        if (this.profile) {
            const result = await profileService.uploadCoverImage(formData);
            if (result.status < HttpStatusCode.CODE_300) {
                this.profile.background_image = result.body.url;
            }
            console.log(result);
        }
    }
}

export const profileStore = new ProfileStore();
