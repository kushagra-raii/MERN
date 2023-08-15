import React from 'react'
import Header from '../../Blogs/Components/Header'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import Blogs from '../../Blogs/Components/Blogs';
import Pagination from '../../Blogs/Components/Pagination';

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();

    const category = location.pathname.split("/").at(-1);
  return (
    <div>
         <Header/>
        <div>
            <button onClick={navigation(-1)}>
                Back
            </button>
            <h2>
                Blogs on <span>{category}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage