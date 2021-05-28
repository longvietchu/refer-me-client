import { NetworkSetting } from '../config/index';

const root = 'https://refer-me-api.herokuapp.com';
export default {
    LOGIN: root + `/v1/auth/login`,
    SIGNUP: root + `/v1/auth/register`,
    USER: root + `/v1/user/current`,
    LIST_EXP: root + `/v1/experience/user`,
    CREATE_EXP: root + `/v1/experience`,
    CREATE_EDU: root + `/v1/education`,
    Default: `${NetworkSetting.ROOT_WEB}`
};
