import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BlogPosts from "./pages/BlogPosts";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<BlogPosts />} />
        <Route path="profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
