import axios, { Method } from 'axios';
import StorageService from '../service/StorageService';
import HttpStatusCode from '../constants/HttpErrorCode';
import Constants from '../constants/Constants';

export interface IApiResponse {
    readonly status: number;
    readonly body: any;
}

export interface IBodyError {
    readonly errorCode: number;
    readonly message: string;
}
export function uploadFile(
    path: string,
    _params: object
): Promise<IApiResponse> {
    var newHeaders: any = { 'Content-Type': 'multipart/form-data' };
    if (StorageService.isTokenExits())
        newHeaders[Constants.TOKEN_NAME] = StorageService.getToken();
    return new Promise<IApiResponse>((resolve) => {
        axios({
            data: _params,
            headers: newHeaders,
            method: 'POST',
            url: Constants.API_URL + path
        })
            .then(function (response) {
                resolve({
                    status: response.status,
                    body: response.data
                });
            })
            .catch(function (error) {
                if (
                    error.response &&
                    error.response.status === HttpStatusCode.UNAUTHORIZED &&
                    error.response.data.message == 'Invalid authentication 4'
                ) {
                    StorageService.removeToken();
                    window.location.href = '/';
                }

                let bodyError: IBodyError;
                try {
                    if (
                        error.response &&
                        error.response.status ===
                            HttpStatusCode.INTERNAL_SERVER_ERROR
                    ) {
                        bodyError = {
                            errorCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
                            message:
                                'Internal server error, please try again later'
                        };
                    } else {
                        bodyError = {
                            errorCode: error.response.data.errorCode,
                            message: error.response.data.message
                        };
                    }
                } catch (e) {
                    bodyError = {
                        errorCode: HttpStatusCode.UNKNOW_ERROR,
                        message: 'Unknow error, please try again later'
                    };
                }
                const apiResponse: IApiResponse = {
                    status: error.response.status,
                    body: bodyError
                };
                resolve(apiResponse);
            });
    });
}
