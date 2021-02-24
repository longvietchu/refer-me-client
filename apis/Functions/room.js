import { PostData, GetData, PostDefault } from "../helpers";
import url from "../url";


export const createRoom = async (body) =>
    PostData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);


export const editRoom = async (body) =>
    PostData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);

export const deleteRoom = async (body) =>
    PostData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);


export const filterRoom = async (body) =>
    GetData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);
