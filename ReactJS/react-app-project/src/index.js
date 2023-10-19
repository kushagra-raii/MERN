import React from "react";
import ReactDOM from "react-dom/client";
import App from "./TopCoursesNew/App";
import "./index.css";
import { BrowserRouter as Router} from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { Toaster } from "react-hot-toast";
// import AppContextProvider from "./Blogs-II/context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div id="indexPage"> 
    <Router>

      <App  />
    <Toaster/>
    
    </Router>
  </div>
);
