import React from "react";
import ReactDOM from "react-dom/client";
import App from "./RandomGif/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div id="indexPage"> 
    {/* <BrowserRouter> */}
    <App  />
    {/* <ToastContainer/> */}
    {/* </BrowserRouter> */}
  </div>
);
