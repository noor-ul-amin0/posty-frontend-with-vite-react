import { useQuery } from "react-query";
import Userfront from "@userfront/react";
import { api } from "../api";

const useUserPosts = (userId, page, limit) =>
  useQuery(
    [`posts`, { userId, page }],
    () =>
      api
        .get(`/users/${userId}?limit=${limit}&page=${page}`, {
          headers: { Authorization: Userfront.tokens.accessToken },
        })
        .then((res) => res.data),
    { keepPreviousData: true }
  );
export default useUserPosts;
