import { PostData, GetData, PostDefault } from "../helpers";
import url from "../url";


export const createType = async (body) =>
    PostData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);


export const editType = async (body) =>
    PostData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);

export const deleteType = async (body) =>
    PostData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);


export const filterType = async (body) =>
    GetData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);
