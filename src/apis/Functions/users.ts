/* eslint-disable handle-callback-err */
import { PostData, GetData, PostLogin } from '../helpers';
import url from '../url';

export const login = async (body: any) =>
    PostLogin('/v1/auth/login', body)
        .then((res) => res)
        .catch((err) => err);

export const logout = async (body: any) =>
    PostData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);
