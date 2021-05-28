/* eslint-disable handle-callback-err */
import { PostData, GetData, PostLogin } from '../helpers';
import url from '../url';

export const login = async (body: any) =>
    PostLogin(url.LOGIN, body)
        .then((res) => res)
        .catch((err) => err);

export const logout = async (body: any) =>
    PostData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);

export const signup = async (body: any) =>
    PostData(url.SIGNUP, body)
        .then((res) => res)
        .catch((err) => err);

export const getUser = async (body?: any) =>
    GetData(url.USER, body)
        .then((res) => res)
        .catch((err) => err);

export const getExp = async (body: any) =>
    GetData(url.LIST_EXP, body)
        .then((res) => res)
        .catch((err) => err);

export const createExp = async (body: any) =>
    PostData(url.CREATE_EXP, body)
        .then((res) => res)
        .catch((err) => err);

export const createEdu = async (body: any) =>
    PostData(url.CREATE_EDU, body)
        .then((res) => res)
        .catch((err) => err);
