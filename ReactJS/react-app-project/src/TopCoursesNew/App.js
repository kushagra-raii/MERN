import { useEffect, useState } from "react";
import Cards from "../TopCoursesNew/Components/Cards";
import Filter from "../TopCoursesNew/Components/Filter";
import NavBar from "../TopCoursesNew/Components/NavBar";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Loading from "./Components/Loading";



export default function App() {
    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [category,setCategory] = useState(filterData[0].title);

    async function fetchData() {
        setLoading(true);
        try {
            let response = await fetch(apiUrl);
            let output = await response.json();
            setCourses(output.data);
            // console.log(output);
        }
        catch (error) {
            toast.error("Network error")
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <div>
                <NavBar />
            </div>
            <div className="bg-[#1e1e22f1] min-h-screen">
                <div>
                    <Filter category={category} setCategory={setCategory} filterData={filterData} />
                </div>
                <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
                    {
                        loading ? (<Loading />) : (<Cards courses={courses} category={category}/>)
                    }
                </div>
            </div>
        </div>
    );
}