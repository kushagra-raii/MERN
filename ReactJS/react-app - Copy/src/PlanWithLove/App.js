import React, { useState } from "react";
import Tours from "./Components/Tours";
import data from "./data"

const App = () => {

  const [tours, setTours] = useState(data);
 
  const removeTourHandler = (id) => {
    console.log("abc")
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };


  if (tours.length === 0) {
    return (
      <div  className="flex justify-center items-center h-[100vh] flex-col">
        <h2 className="text-[40px]">No Tours left</h2>
        <button className="border-2 text-lg px-2" onClick={()=>setTours(data)}>Refresh</button>
      </div>
    );
  }
  return (
    <div className=" " >
      <Tours tours={tours} removeTour={removeTourHandler}></Tours>
    </div>
  );
};

export default App;
