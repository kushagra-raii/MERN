import React, { useEffect, useState } from "react";
import { apiUrl,filterData } from "./data";
import NavBar from "./Components/NavBar"
import Filter from "./Components/Filters"
import { toast } from "react-toastify";
import Cards from "./Components/Cards";

const App = () => {
  const [courses, setCourses] = useState(null);
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        console.log(output);
        setCourses(output.data);

      }
      catch{
        toast.error("Something Went Wrong");
      }
    }
    fetchData();
  },[]);


    // console.log(Object.values(courses))

  
  return (
    <div>
    
      <NavBar/>
      
      <Filter key={filterData.id} filterData={filterData}/>

      <Cards courses={courses}/>
    </div>
  );
};

export default App;
