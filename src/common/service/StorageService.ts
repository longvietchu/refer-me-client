import { eraseCookie, getCookie, setCookie } from '../utils/Utils';
import Constants from '../constants/Constants';

export default class StorageService {
    public static getToken(): string | null {
        return getCookie(Constants.TOKEN_NAME);
    }
    public static removeToken() {
        eraseCookie(Constants.TOKEN_NAME);
    }

    public static setToken(token: String) {
        setCookie(Constants.TOKEN_NAME, token, Constants.TOKEN_EXPIRE_DAYS);
    }

    public static isTokenExits() {
        return StorageService.getToken() !== null;
    }

    public static setLocalStore(key: any, value: any) {
        localStorage.setItem(key, value);
    }

    public static getLocalStore(key: any) {
        return localStorage.getItem(key);
    }

    public static setUUID(uuid: string) {
        const newUserId = uuid.replace('-', '');
        this.setLocalStore('uuid', newUserId);
    }

    public static getUUID() {
        return this.getLocalStore('uuid');
    }
}
