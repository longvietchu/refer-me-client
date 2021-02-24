import { PostData, GetData, PostLogin } from "../helpers";
import url from "../url";

export const getListOffice = async (body) =>
  GetData(url.LOGIN, body)
    .then((res) => res)
    .catch((err) => err);

export const getListDepartment = async (body) =>
  GetData(url.LOGIN, body)
    .then((res) => res)
    .catch((err) => err);

export const filterDepartment = async (body) =>
  GetData(url.LOGIN, body)
    .then((res) => res)
    .catch((err) => err);

export const getListTypeMeeting = async (body) =>
  GetData(url.LOGIN, body)
    .then((res) => res)
    .catch((err) => err);

export const getListRoomMeeting = async (body) =>
  GetData(url.LOGIN, body)
    .then((res) => res)
    .catch((err) => err);

export const getListLevelMeeting = async (body) =>
  GetData(url.LOGIN, body)
    .then((res) => res)
    .catch((err) => err);

export const getListOptionMeeting = async (body) =>
  GetData(url.LOGIN, body)
    .then((res) => res)
    .catch((err) => err);

export const getListEmployee = async (body) =>
  GetData(url.LOGIN, body)
    .then((res) => res)
    .catch((err) => err);

export const getListRole = async (body) =>
  GetData(url.LOGIN, body)
    .then((res) => res)
    .catch((err) => err);
