import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPosts from "./pages/BlogPosts";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Layout from "./components/Layout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import RequiresAuth from "./components/RequiresAuth";
import { useEffect } from "react";
import Userfront from "@userfront/react";
import { logout, login } from "./actions";
import { useStateMachine } from "little-state-machine";

// create a state management global store using little-state-machine

function App() {
  const { actions } = useStateMachine({ logout, login });
  const {
    tokens: { accessToken },
    user,
  } = Userfront;
  useEffect(() => {
    console.log("mounted");
    if (accessToken) {
      actions.login({ accessToken, user });
    } else {
      actions.logout();
    }
  }, [accessToken, user]);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="posts"
          element={
            <RequiresAuth>
              <BlogPosts />
            </RequiresAuth>
          }
        />
        <Route
          path="profile"
          element={
            <RequiresAuth>
              <UserProfile />
            </RequiresAuth>
          }
        />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}

export default App;
