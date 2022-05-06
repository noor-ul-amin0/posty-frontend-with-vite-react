import { useQuery } from "react-query";
import { api } from "../api";

const usePost = (userId, page, limit) =>
  useQuery(
    [`posts`, { userId, page }],
    () =>
      api
        .get(`/users/${userId}?limit=${limit}&page=${page}`)
        .then((res) => res.data),
    { keepPreviousData: true }
  );
export default usePost;
