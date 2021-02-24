/* eslint-disable handle-callback-err */
import { PostData, GetData, PostLogin } from "../helpers";
import url from "../url";

export const getListSeminar = async (body) =>
    GetData(url.LOGIN, body)
        .then((res) => res)
        .catch((err) => err);


export const createSeminar = async (body) =>
    PostData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);


export const editSeminar = async (body) =>
    PostData(url.LOGIN, body)
        .then((res) => res)
        .catch((err) => err);

export const deleteSeminar = async (body) =>
    PostData(url.LOGIN, body)
        .then((res) => res)
        .catch((err) => err);

export const filterSeminar = async (body) =>
    GetData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);

export const acceptSeminar = async (body) =>
    PostData(url.LOGIN, body)
        .then((res) => res)
        .catch((err) => err);

export const rejectSeminar = async (body) =>
    PostData(url.LOGIN, body)
        .then((res) => res)
        .catch((err) => err);
