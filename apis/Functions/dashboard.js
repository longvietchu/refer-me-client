/* eslint-disable handle-callback-err */
import { PostData, GetData, PostLogin } from "../helpers";
import url from "../url";

export const getDashBoard = async (body) =>
    GetData(url.LOGIN, body)
        .then((res) => res)
        .catch((err) => err);

export const filterDashBoard = async (body) =>
    GetData(url.LOGIN, body)
        .then((res) => res)
        .catch((err) => err);




