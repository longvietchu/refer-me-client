//import {loginStore} from "../../modules/authen/login/LoginStore";
import StorageService from "../service/StorageService";

class RequestUtil {

    public getUserId() {
        // if (loginStore.isLogin === true) {
        //     return "_me"
        // } else {
            return StorageService.getUUID();
        // }
    }
}

export const requestUtils = new RequestUtil();
