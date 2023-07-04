import { useEffect, useState } from "react";

function NewApp() {
  
    const [text, setText] = useState('');

    // variation 1 -> Every Render
    // useEffect(() => {
    //     console.log("UI Rendering Done");
    // });


    // variation 2 -> First Render
    // useEffect(() => {
    //     console.log("UI Rendering Done");
    // },[]);

    // variation 3 -> First Render + whatever dependencies
    // useEffect(() => {
    //     console.log("change observed");
    // },[text]);

    // variation 4 -> To handle unmounting of component
    useEffect(() => {
        console.log("listenerAdded");

        return () =>{
            console.log("listenerRemoved");
        }
    },[text]);

    function changeHandler(event){
        console.log(text);
        setText(event.target.value)
    }
    return (
      <div>
        <input type="text" onChange={changeHandler}></input>
      </div>
    );
  }
  
  export default NewApp;