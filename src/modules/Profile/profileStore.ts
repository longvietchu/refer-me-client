import { makeAutoObservable } from 'mobx';
import {
    IUserInfo,
    IOrganizationInfo
} from '../../common/constants/CommonInterface';
import HttpStatusCode from '../../common/constants/HttpErrorCode';
import { loginStore } from '../Login/loginStore';
import { profileService } from './profileService';

export interface IProfile {
    _id: string;
    dob: string;
    background_image: any;
    about: string;
    gender: number;
    user_id: string;
    user_info: IUserInfo;
}

export interface IEducation {
    _id: string;
    title: string;
    description: string;
    joined_at: string;
    graduated_at: string;
    user_id: string;
    organization_id: string;
    created_at: string;
    updated_at: string;
    organization_info: IOrganizationInfo;
}

export interface IExperience {
    _id: string;
    job_title: string;
    job_description: string;
    company: string;
    location: string;
    employment_type: string;
    joined_at: string;
    left_at: string;
    user_id: string;
    organization_id: string;
    created_at: string;
    updated_at: string;
    organization_info: IOrganizationInfo;
}

export interface ISkill {
    _id: string;
    votes: number;
    name: string;
    user_id: string;
    created_at: string;
    updated_at: string;
}

export enum IEmploymentType {
    NONE = 'None',
    FULL_TIME = 'Full-time',
    PART_TIME = 'Part-time',
    CONTRACT = 'Contract',
    TEMPORARY = 'Temporary',
    INTERNSHIP = 'Internship'
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
    educationList?: IEducation[];
    experienceList?: IExperience[];
    skillList?: ISkill[];

    inputProfile = {
        dob: new Date(),
        background_image: '',
        about: '',
        gender: ''
    };
    inputEducation = {
        title: '',
        description: '',
        joined_at: new Date(),
        graduated_at: new Date(),
        organization_id: ''
    };
    inputExperience = {
        job_title: '',
        job_description: '',
        company: '',
        location: '',
        employment_type: '',
        joined_at: new Date(),
        left_at: new Date(),
        organization_id: ''
    };
    inputSkillName: string = '';
    inputSkillList: string[] = [];
    selectedEducation?: IEducation;
    selectedExperience?: IExperience;
    selectedSkill?: ISkill;
    searchResult: IOrganizationInfo[] = [];
    validateInput = { title: '', job_title: '', company: '', location: '' };

    isLoading: boolean = false;
    isSearching: boolean = false;
    isUploadAvatar: boolean = false;
    isUploadCoverImage: boolean = false;
    modalEducation = {
        create: false,
        edit: false,
        delete: false
    };
    modalExperience = {
        create: false,
        edit: false,
        presentJob: true,
        delete: false
    };
    modalSkill = {
        create: false,
        delete: false
    };
    modalProfileOpen: boolean = false;

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
        }
    }

    async getEducation(user_id: string) {
        const result = await profileService.getEducation(user_id);
        if (result.status < HttpStatusCode.CODE_300) {
            this.educationList = result.body.data;
        }
    }

    async getExperience(user_id: string) {
        const result = await profileService.getExperience(user_id);
        if (result.status < HttpStatusCode.CODE_300) {
            this.experienceList = result.body.data;
        }
    }

    async getSkill(user_id: string) {
        const result = await profileService.getSkill(user_id);
        if (result.status < HttpStatusCode.CODE_300) {
            this.skillList = result.body.data;
        }
    }

    async searchOrganization(keyword: string) {
        this.isSearching = true;
        const result = await profileService.searchOrganization(keyword);
        if (result.status < HttpStatusCode.CODE_300) {
            this.searchResult = result.body.data;
            // console.log(result.body.data);
        }
        this.isSearching = false;
    }

    async createProfile() {
        this.isLoading = true;
        const result = await profileService.createProfile(this.inputProfile);
        if (result.status < HttpStatusCode.CODE_300) {
            console.log(result);
            return true;
        }
        this.isLoading = false;
        return false;
    }

    async createEducation() {
        let data: any = {};
        if (this.inputEducation.organization_id !== '') {
            data = {
                title: this.inputEducation.title.trim(),
                description: this.inputEducation.description.trim(),
                joined_at: new Date(
                    this.inputEducation.joined_at
                ).toISOString(),
                graduated_at: new Date(
                    this.inputEducation.graduated_at
                ).toISOString(),
                organization_id: this.inputEducation.organization_id
            };
        } else {
            data = {
                title: this.inputEducation.title.trim(),
                description: this.inputEducation.description.trim(),
                joined_at: new Date(
                    this.inputEducation.joined_at
                ).toISOString(),
                graduated_at: new Date(
                    this.inputEducation.graduated_at
                ).toISOString()
            };
        }
        if (data.title === '') {
            this.validateInput.title = 'This infomation is required!';
            this.isLoading = false;
            return;
        }
        this.isLoading = true;
        const result = await profileService.createEducation(data);
        if (result.status < HttpStatusCode.CODE_300 && this.educationList) {
            // this.educationList = [result.body.data, ...this.educationList];
            await this.getEducation(result.body.data.user_id);
            this.modalEducation.create = false;
        }
        // console.log(data);
        this.isLoading = false;
    }

    async createExpericence() {
        let data: any = {};
        if (this.inputExperience.organization_id.length > 0) {
            data = {
                job_title: this.inputExperience.job_title.trim(),
                job_description: this.inputExperience.job_description.trim(),
                company: this.inputExperience.company.trim(),
                location: this.inputExperience.location.trim(),
                employment_type: this.inputExperience.employment_type,
                joined_at: new Date(
                    this.inputExperience.joined_at
                ).toISOString(),
                left_at: new Date(this.inputExperience.left_at).toISOString(),
                organization_id: this.inputExperience.organization_id
            };
        } else {
            data = {
                job_title: this.inputExperience.job_title.trim(),
                job_description: this.inputExperience.job_description.trim(),
                company: this.inputExperience.company.trim(),
                location: this.inputExperience.location.trim(),
                employment_type: this.inputExperience.employment_type,
                joined_at: new Date(
                    this.inputExperience.joined_at
                ).toISOString(),
                left_at: new Date(this.inputExperience.left_at).toISOString()
            };
        }
        console.log(data);
        if (data.job_title === '') {
            this.validateInput.job_title = 'This infomation is required!';
            this.isLoading = false;
            return;
        }
        if (data.company === '') {
            this.validateInput.company = 'This infomation is required!';
            this.isLoading = false;
            return;
        }
        if (data.location === '') {
            this.validateInput.location = 'This infomation is required!';
            this.isLoading = false;
            return;
        }
        if (profileStore.modalExperience.presentJob) {
            data.left_at = '';
        }
        this.isLoading = true;
        const result = await profileService.createExperience(data);
        if (result.status < HttpStatusCode.CODE_300 && this.experienceList) {
            // this.experienceList = [result.body.data, ...this.experienceList];
            await this.getExperience(result.body.data.user_id);
            this.modalExperience.create = false;
        }
        this.isLoading = false;
    }

    async createSkill() {
        const data = {
            name: this.inputSkillList
        };
        this.isLoading = true;
        const result = await profileService.createSkill(data);
        if (result.status < HttpStatusCode.CODE_300 && this.skillList) {
            this.skillList = [...result.body.data, ...this.skillList];
            this.modalSkill.create = false;
            // await this.getSkill(result.body.data.user_id);
        }
        this.isLoading = false;
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
            if (result.status < HttpStatusCode.CODE_300 && this.profile) {
                this.profile.dob = result.body.data.dob;
                this.profile.about = result.body.data.about;
                this.profile.gender = result.body.data.gender;
            }
            this.isLoading = false;
        }
    }

    async updateUserInfo() {
        if (loginStore.userInfo) {
            const data = {
                name: loginStore.userInfo.name.trim(),
                avatar: loginStore.userInfo.avatar,
                headline: loginStore.userInfo.headline.trim()
            };
            const result = await profileService.updateUserInfo(data);
            if (result.status < HttpStatusCode.CODE_300) {
                loginStore.userInfo.name = result.body.data.name;
                loginStore.userInfo.headline = result.body.data.headline;
                if (this.profile && this.profile.user_info.headline) {
                    this.profile.user_info.headline = result.body.data.headline;
                }
                this.modalProfileOpen = false;
            }
        }
    }

    async uploadCoverImage(file: any) {
        if (this.profile) {
            var formData = new FormData();
            formData.append('image', file);
            this.isUploadCoverImage = true;
            const result = await profileService.uploadSingleImage(formData);
            if (result.status < HttpStatusCode.CODE_300) {
                this.profile.background_image = result.body.url;
                this.isUploadCoverImage = false;
                await this.updateProfile();
            }
        }
    }

    async uploadAvatar(file: any) {
        if (loginStore.userInfo) {
            var formData = new FormData();
            formData.append('image', file);
            this.isUploadAvatar = true;
            const result = await profileService.uploadSingleImage(formData);
            if (result.status < HttpStatusCode.CODE_300 && this.profile) {
                loginStore.userInfo.avatar = result.body.url;
                this.profile.user_info.avatar = result.body.url;
                this.isUploadAvatar = false;
                await this.updateUserInfo();
            }
        }
    }

    async updateEducation() {
        if (this.selectedEducation) {
            let data = {
                title: this.selectedEducation.title.trim(),
                description: this.selectedEducation.description.trim(),
                joined_at: this.selectedEducation.joined_at,
                graduated_at: this.selectedEducation.graduated_at,
                organization_id: this.selectedEducation.organization_id
            };
            if (data.title === '') {
                this.validateInput.title = 'This infomation is required!';
                this.isLoading = false;
                return;
            }
            this.isLoading = true;
            const result = await profileService.updateEducation(
                this.selectedEducation._id,
                data
            );
            if (result.status < HttpStatusCode.CODE_300 && this.educationList) {
                // console.log(result);
                // this.educationList = this.educationList.map((item) =>
                //     item._id !== result.body.data._id ? item : result.body.data
                // );
                await this.getEducation(result.body.data.user_id);
                this.modalEducation.edit = false;
            }
            this.isLoading = false;
        }
    }

    async updateExperience() {
        if (this.selectedExperience) {
            this.isLoading = true;
            let data = {
                job_title: this.selectedExperience.job_title.trim(),
                job_description: this.selectedExperience.job_description.trim(),
                company: this.selectedExperience.company.trim(),
                location: this.selectedExperience.location.trim(),
                employment_type: this.selectedExperience.employment_type,
                joined_at: this.selectedExperience.joined_at,
                left_at: this.selectedExperience.left_at,
                organization_id: this.selectedExperience.organization_id
            };
            if (data.job_title === '') {
                this.validateInput.job_title = 'This infomation is required!';
                this.isLoading = false;
                return;
            }
            if (data.company === '') {
                this.validateInput.company = 'This infomation is required!';
                this.isLoading = false;
                return;
            }
            if (data.location === '') {
                this.validateInput.location = 'This infomation is required!';
                this.isLoading = false;
                return;
            }
            if (profileStore.modalExperience.presentJob) {
                data.left_at = '';
            }
            const result = await profileService.updateExperience(
                this.selectedExperience._id,
                data
            );
            if (
                result.status < HttpStatusCode.CODE_300 &&
                this.experienceList
            ) {
                // console.log(result);
                // this.experienceList = this.experienceList.map((item) =>
                //     item._id !== result.body.data._id ? item : result.body.data
                // );
                await this.getExperience(result.body.data.user_id);
                this.modalExperience.edit = false;
            }
            this.isLoading = false;
        }
    }

    async deleteEducation(education_id: string) {
        this.isLoading = true;
        const result = await profileService.deleteEducation(education_id);
        if (result.status < HttpStatusCode.CODE_300 && this.educationList) {
            // console.log(result);
            this.educationList = this.educationList.filter(
                (item) => item._id !== education_id
            );
            this.modalEducation.delete = false;
            this.modalEducation.edit = false;
        }
        this.isLoading = false;
    }

    async deleteExperience(experience_id: string) {
        this.isLoading = true;
        const result = await profileService.deleteExperience(experience_id);
        if (result.status < HttpStatusCode.CODE_300 && this.experienceList) {
            // console.log(result);
            this.experienceList = this.experienceList.filter(
                (item) => item._id !== experience_id
            );
            this.modalExperience.delete = false;
            this.modalExperience.edit = false;
        }
        this.isLoading = false;
    }

    async deleteSkill(skill_id: string) {
        this.isLoading = true;
        const result = await profileService.deleteSkill(skill_id);
        if (result.status < HttpStatusCode.CODE_300 && this.skillList) {
            // console.log(result);
            this.modalSkill.delete = false;
            this.skillList = this.skillList.filter(
                (skill) => skill._id !== skill_id
            );
        }
        this.isLoading = false;
    }

    async upvoteSkill(skill_id: string) {
        if (this.skillList) {
            this.skillList = this.skillList.map((item) => {
                if (item._id === skill_id) {
                    item.votes++;
                }
                return item;
            });
        }
        const result = await profileService.upvoteSkill(skill_id);
        if (result.status < HttpStatusCode.CODE_300) {
            // console.log(result);
        }
    }
}

export const profileStore = new ProfileStore();
