import axios from "axios";
// import Userfront from "@userfront/react";
export const api = axios.create({
  // headers: {
  //   Authorization: "Userfront.tokens.accessToken",
  // },
  baseURL: "http://localhost:8080",
});

// export const getPosts = api.get("/post").then((res) => res);
// export const getPostsByUser = api.get("/user/:id/post").then((res) => res.data);
// export const getUsers = api.get("/user").then((res) => res.data);
