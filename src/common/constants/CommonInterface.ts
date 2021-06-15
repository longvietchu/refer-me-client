export interface IMetaData {
    page_index: number;
    page_size: number;
    total_record: number;
    total_page: number;
}

export interface IUserInfo {
    _id: string;
    name: string;
    email: string;
    avatar: string;
    headline: string;
}

export interface IOrganizationInfo {
    _id: string;
    name: string;
    avatar: string;
    background_image: string;
    description: string;
    website: string;
    industry: string;
    company_size: number;
    founded: string;
    user_id: string;
    created_at: string;
    updated_at: string;
}
