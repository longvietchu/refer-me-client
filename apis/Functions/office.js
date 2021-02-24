/* eslint-disable handle-callback-err */
import { PostData, GetData, PostLogin } from "../helpers";
import url from "../url";

export const getOffcie = async (body) =>
  GetData(url.LOGIN, body)
    .then((res) => res)
    .catch((err) => err);

export const createOffcie = async (body) =>
  PostData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);

export const editOffcie = async (body) =>
  PostData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);

export const deleteOffcie = async (body) =>
  PostData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);

export const filterOffcie = async (body) =>
  GetData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);
