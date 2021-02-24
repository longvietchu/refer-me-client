/* eslint-disable handle-callback-err */
import { PostData, GetData, PostLogin } from "../helpers";
import url from "../url";

export const getListVistitor = async (body) =>
    GetData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);


export const createVisitor = async (body) =>
    PostData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);


export const editVisitor = async (body) =>
    PostData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);

export const deleteVisitor = async (body) =>
    PostData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);

export const filterVisitor = async (body) =>
    GetData(url.Default, body)
        .then((res) => res)
        .catch((err) => err)

export const acceptVisitor = async (body) =>
    PostData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);

export const rejectVisitor = async (body) =>
    PostData(url.Default, body)
        .then((res) => res)
        .catch((err) => err);