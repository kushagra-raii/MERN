import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
    const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  useEffect(() => {
  const page =  searchParams.get("page") ?? 1;
    
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").slice(-1)[0].replace(/-/g, " ");
      fetchBlogPosts(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").slice(-1)[0].replace(/-/g, " ");
      fetchBlogPosts(Number(page), null, category);
    } else {
      fetchBlogPosts(Number(page));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/category/:category" element={<CategoryPage />} />
    </Routes>
  );
}
