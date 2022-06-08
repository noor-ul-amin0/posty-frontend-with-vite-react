import { Routes, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Userfront from "@userfront/react";
import { DevTool } from "little-state-machine-devtools";
import BlogPosts from "./pages/BlogPosts";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Layout from "./components/Layout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import RequiresAuth from "./components/RequiresAuth";
// create a state management global store using little-state-machine
createStore({
  accessToken: Userfront.tokens.accessToken,
  isAuthenticated: !!Userfront.tokens.accessToken,
});

function App() {
  return (
    <StateMachineProvider>
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
      <DevTool />
    </StateMachineProvider>
  );
}

export default App;
