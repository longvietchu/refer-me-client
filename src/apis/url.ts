import { NetworkSetting } from '../config/index';

const root = 'https://refer-me-api.herokuapp.com';
export default {
    LOGIN: root + `/v1/auth/login`,
    Default: `${NetworkSetting.ROOT_WEB}`
};
