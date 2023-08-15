import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { AppContext } from "./Context/AppContext";
import { useContext, useEffect } from "react";

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext)
  useEffect(()=>{
    fetchBlogPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
