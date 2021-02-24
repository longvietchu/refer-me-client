/* eslint-disable handle-callback-err */
import { PostData, GetData, PostLogin } from "../helpers";
import url from "../url";

export const getOption = async (body) =>
  GetData(url.LOGIN, body)
    .then((res) => res)
    .catch((err) => err);

export const createOption = async (body) =>
  PostData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);

export const editOption = async (body) =>
  PostData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);

export const deleteOption = async (body) =>
  PostData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);

export const filterOption = async (body) =>
  GetData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);
