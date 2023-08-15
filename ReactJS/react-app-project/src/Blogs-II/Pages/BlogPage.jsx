import React, { useContext, useEffect, useState } from 'react'
import Header from '../../Blogs/Components/Header'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from "../baseUrl";
import BlogDetail from '../components/BlogDetail';

const BlogPage = () => {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { setLoading, loading } = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);


    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${baseUrl}?blogId=${blogId}`
        try {
            const res = await fetch(url)
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs)
        } catch (error) {
            console.log("Related Blogs Not found")
            setBlog(null);
            setRelatedBlogs([]);

        }
        setLoading(false)
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname])
    return (
        <div>
            <Header />
            <div>
                <button onClick={navigation(-1)}>
                    Back
                </button>
            </div>
            {
                loading ? (<div><p>loading</p></div>) : (
                    blog ? (
                        <div>
                            <BlogDetail post={blog} /> 
                            <h2>Related Blogs</h2>
                            {
                                relatedBlogs.map((post)=>(
                                    <div>
                                        <BlogDetail post={post}/>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (<p>No-Blog Found</p>)
                )
            }
        </div>
    )
}

export default BlogPage