import { PostData, GetData, PostDefault } from "../helpers";
import url from "../url";

export const createLevel = async (body) =>
  PostData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);

export const editLevel = async (body) =>
  PostData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);

export const deleteLevel = async (body) =>
  PostData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);

export const filterLevel = async (body) =>
  GetData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);
