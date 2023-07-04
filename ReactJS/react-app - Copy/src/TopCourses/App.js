import React, { useEffect, useState } from "react";
import { apiUrl,filterData } from "./data";
import NavBar from "./Components/NavBar"
import Filter from "./Components/Filters"
import Card from "./Components/Card"
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      }
      catch{
        toast.error("Something Went Wrong");
      }
    }
    fetchData();
  },[]);
  
  return (
    <div>
      <NavBar/>
      
      <Filter filterData={filterData}/>

      <Card courses={courses}/>
    </div>
  );
};

export default App;
