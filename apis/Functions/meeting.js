import { PostData, GetData, PostDefault } from "../helpers";
import url from "../url";

export const getListMeeting = async (body) =>
  GetData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);

export const createMeeting = async (body) =>
  PostData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);

export const editMeeting = async (body) =>
  PostData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);

export const deleteMeeting = async (body) =>
  PostData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);

export const filterMeeting = async (body) =>
  GetData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);

export const acceptMeeting = async (body) =>
  PostData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);

export const rejectMeeting = async (body) =>
  PostData(url.Default, body)
    .then((res) => res)
    .catch((err) => err);
