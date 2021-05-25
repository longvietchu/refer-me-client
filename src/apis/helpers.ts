/* eslint-disable no-return-await */
/**
 * helper.js - for storing reusable logic.
 * axios.defaults.headers.common.Authorization = `Bearer ${account.tokenLogin}`; to set TOKEN default
 */
import axios from 'axios';
import KEY from '../assets/AsynStorage';
import { NetworkSetting } from '../config';
axios.defaults.timeout = 10000;

export async function GetData(api_url: string, data: any) {
    const token = localStorage.getItem(KEY.API_TOKEN);
    let myRequest: object = {
        method: 'get',
        url: api_url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        params: {
            ...data
        },
        timeout: 60 * 1000
        // withCredentials: true,
    };
    console.log('My request----------', myRequest);
    return await axios(myRequest)
        .then((response) => response)
        .catch(
            (error) => error
            // {
            //     console.log(error.request);
            //     const err = {
            //         message: 'error',
            //         status: error.request.status
            //     };
            //     return err;
            //}
        );
}
export async function PostLogin(api_url: string, json: string, isAuth = true) {
    let myRequest: object = {
        method: 'post',
        url: api_url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        timeout: 60 * 1000,
        data: JSON.stringify(json)
    };
    console.log('post data mobile', myRequest);
    return await axios(myRequest)
        .then((response) => response)
        .catch((error) => {
            console.log(error.request);
            const err = {
                message: 'error',
                status: error.request.status
            };
            return err;
        });
}

export async function PostData(api_url: string, json: string, isAuth = true) {
    const token = localStorage.getItem(KEY.API_TOKEN);
    let myRequest: object = {
        method: 'post',
        url: api_url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token
        },
        timeout: 60 * 1000,
        data: JSON.stringify(json)
    };
    console.log('post data mobile', myRequest);
    return await axios(myRequest)
        .then((response) => response)
        .catch((error) => {
            return error.response.data;
        });
}

/**
 *
 * @param {*} url is link api
 * @param {*} json is input format json to request server
 * @param {*} isAuth is state auth
 */
export async function PutData(api_url: string, json: string, isAuth = true) {
    const token = localStorage.getItem(KEY.API_TOKEN);
    let myRequest: object = {
        method: 'put',
        url: api_url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        data: JSON.stringify(json)
    };
    console.log('PutData', myRequest);
    return await axios(myRequest)
        .then((response) => response)
        .then((response) => response)
        .catch((error) => {
            console.log(error.request);
            const err = {
                message: 'error',
                status: error.request.status
            };
            return err;
        });
}
