import { PostData, GetData } from "../helpers";
import url from "../url";

export const applicationList = async (body) =>
  PostData(url.APPLICATION, body)
    .then((res) => res)
    .catch((err) => err);
