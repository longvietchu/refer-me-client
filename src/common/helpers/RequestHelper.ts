import axios, { Method } from 'axios';
import Constants from '../constants/Constants';
import HttpStatusCode from '../constants/HttpErrorCode';
import StorageService from '../service/StorageService';

export interface IApiResponse {
    readonly status: number;
    readonly body: any;
}

export interface IBodyError {
    readonly errorCode: number;
    readonly message: string;
}

export async function getRequest(
    path: string,
    tokenRequire?: boolean
): Promise<IApiResponse> {
    var newHeaders: any = { 'Content-Type': 'application/json' };

    if (StorageService.isTokenExits() && tokenRequire) {
        newHeaders[Constants.TOKEN_NAME] = StorageService.getToken();
    }

    return await axios
        .get(Constants.API_URL + path, { headers: newHeaders })
        .then(
            (response) => {
                const apiResponse: IApiResponse = {
                    status: response.status,
                    body: response.data
                };
                return apiResponse;
            },
            (error) => {
                let bodyError: IBodyError;
                try {
                    bodyError = {
                        errorCode: error.response.data.errorCode,
                        message: error.response.data.message
                    };
                } catch (e) {
                    bodyError = {
                        errorCode: HttpStatusCode.UNKNOW_ERROR,
                        message: 'Unknow error, please try again later'
                    };
                }
                const apiResponse: IApiResponse = {
                    status: error.response ? error.response.status : 1000,
                    body: bodyError
                };
                return apiResponse;
            }
        );
}

export async function postRequest(
    path: string,
    params: object
): Promise<IApiResponse> {
    return apiCall(path, 'POST', params);
}

export function apiCall(
    path: string,
    _method: Method = 'POST',
    _params: object
): Promise<IApiResponse> {
    var newHeaders: any = { 'Content-Type': 'application/json' };

    if (StorageService.isTokenExits()) {
        newHeaders[Constants.TOKEN_NAME] = StorageService.getToken();
    }

    return new Promise<IApiResponse>((resolve) => {
        axios({
            data: JSON.stringify(_params),
            headers: newHeaders,
            method: _method,
            url: Constants.API_URL + path
        })
            .then(function (response) {
                resolve({
                    status: response.status,
                    body: response.data
                });
            })
            .catch(function (error) {
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

export async function putRequest(
    path: string,
    params: object
): Promise<IApiResponse> {
    return apiCall(path, 'PUT', params);
}

export async function deleteRequest(
    path: string,
    params: object
): Promise<IApiResponse> {
    return apiCall(path, 'DELETE', params);
}
