import BlogPosts from "./pages/BlogPosts";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/posts",
    element: <BlogPosts />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
  // {
  //   path: "/",
  //   element: <Home />,
  // },
  // {
  //   path: "/posts",
  //   element: !isLoggedIn ? <Navigate to="/" /> : <BlogPosts />,
  // },
  // {
  //   path: "/users",
  //   element: !isLoggedIn ? <Navigate to="/" /> : <UsersList />,
  // },
  // {
  //   path: "/profile",
  //   element: !isLoggedIn ? <Navigate to="/" /> : <Profile />,
  // },
];

export default routes;
