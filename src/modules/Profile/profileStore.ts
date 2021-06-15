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
    user_info: {
        _id: string;
        name: string;
        email: string;
        avatar: string;
        headline: string;
    };
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
    organization_info: {
        _id: string;
        name: string;
        avatar: string;
        background_image: string;
        description: string;
        website: string;
        industry: string;
        company_size: number;
        founded: string;
        created_at: string;
        updated_at: string;
    };
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
    organization_info: {
        _id: string;
        name: string;
        avatar: string;
        background_image: string;
        description: string;
        website: string;
        industry: string;
        company_size: number;
        founded: string;
        created_at: string;
        updated_at: string;
    };
}

export interface IOrganization {
    _id: string;
    name: string;
    avatar: string;
    background_image: string;
    description: string;
    website: string;
    industry: string;
    company_size: number;
    founded: string;
    created_at: string;
    updated_at: string;
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
    searchResult: IOrganization[] = [];
    validateInput = { title: '', job_title: '', company: '', location: '' };

    isLoading: boolean = false;
    isSearching: boolean = false;
    modalEducation = {
        create: false,
        edit: false
    };
    modalExperience = {
        create: false,
        edit: false,
        presentJob: true
    };
    modalSkill = {
        create: false,
        delete: false
    };
    modalProfileOpen: boolean = false;

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
            console.log(result.body.data);
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
        this.isLoading = true;
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
            this.validateInput.title = 'Thông tin này là bắt buộc!';
            this.isLoading = false;
            return;
        }
        const result = await profileService.createEducation(data);
        if (result.status < HttpStatusCode.CODE_300 && this.educationList) {
            console.log(result);
            this.educationList = [result.body.data, ...this.educationList];
        }
        // console.log(data);
        this.isLoading = false;
        this.modalEducation.create = false;
    }

    async createExpericence() {
        this.isLoading = true;
        let data: any = {};
        if (this.inputExperience.organization_id !== '') {
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
        if (data.job_title === '') {
            this.validateInput.job_title = 'Thông tin này là bắt buộc!';
            this.isLoading = false;
            return;
        }
        if (data.company === '') {
            this.validateInput.company = 'Thông tin này là bắt buộc!';
            this.isLoading = false;
            return;
        }
        if (data.location === '') {
            this.validateInput.location = 'Thông tin này là bắt buộc!';
            this.isLoading = false;
            return;
        }
        if (profileStore.modalExperience.presentJob) {
            data.left_at = '';
        }
        const result = await profileService.createExperience(data);
        if (result.status < HttpStatusCode.CODE_300 && this.experienceList) {
            // console.log(result);
            this.experienceList = [result.body.data, ...this.experienceList];
        }
        // console.log(data);
        this.isLoading = false;
        this.modalExperience.create = false;
    }

    async createSkill() {
        this.isLoading = true;
        const data = {
            name: this.inputSkillList
        };
        const result = await profileService.createSkill(data);
        if (result.status < HttpStatusCode.CODE_300) {
            this.skillList = result.body.data;
        }
        this.isLoading = false;
        this.modalSkill.create = false;
    }

    async updateProfile() {
        if (this.profile) {
            const data = {
                dob: new Date(this.profile.dob).toISOString(),
                about: this.profile.about.trim(),
                gender: this.profile.gender,
                background_image: this.profile.background_image
            };
            this.isLoading = true;
            const result = await profileService.updateProfile(data);
            if (result.status < HttpStatusCode.CODE_300) {
                // console.log(result.body);
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
                // console.log(result.body);
                this.modalProfileOpen = false;
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
                await this.updateProfile();
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
                console.log(result);
                await this.updateUserInfo();
            }
            // console.log(result);
        }
    }

    async updateEducation() {
        if (this.selectedEducation) {
            this.isLoading = true;
            let data: any = {};
            if (this.selectedEducation.organization_id !== '') {
                data = {
                    title: this.selectedEducation.title.trim(),
                    description: this.selectedEducation.description.trim(),
                    joined_at: new Date(
                        this.selectedEducation.joined_at
                    ).toISOString(),
                    graduated_at: new Date(
                        this.selectedEducation.graduated_at
                    ).toISOString(),
                    organization_id: this.selectedEducation.organization_id
                };
            } else {
                data = {
                    title: this.selectedEducation.title.trim(),
                    description: this.selectedEducation.description.trim(),
                    joined_at: new Date(
                        this.selectedEducation.joined_at
                    ).toISOString(),
                    graduated_at: new Date(
                        this.selectedEducation.graduated_at
                    ).toISOString(),
                    organization_id: 'noorg'
                };
            }
            if (data.title === '') {
                this.validateInput.title = 'Thông tin này là bắt buộc!';
                this.isLoading = false;
                return;
            }
            const result = await profileService.updateEducation(
                this.selectedEducation._id,
                data
            );
            if (result.status < HttpStatusCode.CODE_300 && this.educationList) {
                console.log(result);
                this.educationList = this.educationList.map((item) =>
                    item._id !== result.body.data._id ? item : result.body.data
                );
            }
            this.isLoading = false;
            this.modalEducation.edit = false;
        }
    }

    async updateExperience() {
        if (this.selectedExperience) {
            this.isLoading = true;
            let data: any = {};
            if (this.selectedExperience.organization_id !== '') {
                data = {
                    job_title: this.selectedExperience.job_title.trim(),
                    job_description:
                        this.selectedExperience.job_description.trim(),
                    company: this.selectedExperience.company.trim(),
                    location: this.selectedExperience.location.trim(),
                    employment_type: this.selectedExperience.employment_type,
                    joined_at: new Date(
                        this.selectedExperience.joined_at
                    ).toISOString(),
                    left_at: new Date(
                        this.selectedExperience.left_at
                    ).toISOString(),
                    organization_id: this.selectedExperience.organization_id
                };
            } else {
                data = {
                    job_title: this.selectedExperience.job_title.trim(),
                    job_description:
                        this.selectedExperience.job_description.trim(),
                    company: this.selectedExperience.company.trim(),
                    location: this.selectedExperience.location.trim(),
                    employment_type: this.selectedExperience.employment_type,
                    joined_at: new Date(
                        this.selectedExperience.joined_at
                    ).toISOString(),
                    left_at: new Date(
                        this.selectedExperience.left_at
                    ).toISOString()
                };
            }
            if (data.job_title === '') {
                this.validateInput.job_title = 'Thông tin này là bắt buộc!';
                this.isLoading = false;
                return;
            }
            if (data.company === '') {
                this.validateInput.company = 'Thông tin này là bắt buộc!';
                this.isLoading = false;
                return;
            }
            if (data.location === '') {
                this.validateInput.location = 'Thông tin này là bắt buộc!';
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
            if (result.status < HttpStatusCode.CODE_300) {
                console.log(result);
            }
            // console.log(data);
            this.isLoading = false;
            this.modalExperience.edit = false;
        }
    }

    async deleteSkill(skill_id: string) {
        this.isLoading = true;
        const result = await profileService.deleteSkill(skill_id);
        if (result.status < HttpStatusCode.CODE_300) {
            console.log(result);
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
            console.log(result);
        }
    }
}

export const profileStore = new ProfileStore();
