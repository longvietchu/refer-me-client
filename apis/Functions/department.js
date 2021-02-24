/* eslint-disable handle-callback-err */
import { GetData } from "../helpers";
import url from "../url";

export const getDepartment = async (body) =>
  GetData(url.LOGIN, body)
    .then((res) => res)
    .catch((err) => err);

export const filterDepartment = async (body) =>
  GetData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);
