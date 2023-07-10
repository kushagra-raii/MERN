import React, { useState } from 'react'

const App = () => {


    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "" });
    // console.log(formData)
    function changeHandler(event) {
        const { name, value, checked, type } = event.target
        setFormData(
            prevFormData => {
                return {
                    ...prevFormData,
                    [name]: type === "checkbox" ? checked : value
                }
            }
        )
    }

    function submitHandler(event){
        event.preventDefault();
        console.log(formData)
    }

    return (

        <div>
            <form onSubmit={submitHandler}>
                <input type='text' name='firstName' placeholder='First Name' onChange={changeHandler} value={formData.firstName} />
                <br />
                <br />
                <input type='text' name='lastName' placeholder='Last Name' onChange={changeHandler} value={formData.lastName} />
                <br />
                <br />
                <input type='text' name='email' placeholder='email' onChange={changeHandler} value={formData.email} />
                <br />
                <br />
                <fieldset>
                    <legend>Mode</legend>
                    <input type='radio' name='mode' checked={formData.mode === "Online-Mode"} onChange={changeHandler} value="Online-mode" id='Online-mode' />
                    <label htmlFor='Online-Mode' >Online Mode</label>
                    <input type='radio' name='mode' checked={formData.mode === "Offline-Mode"} onChange={changeHandler} value="Offline-mode" id='Offline-mode' />
                    <label htmlFor='Offline-Mode' >Offline Mode</label>
                </fieldset>
                <br />
                <br />
                <input type='checkbox' id='isVisible' name='isVisible' onChange={changeHandler} checked={formData.isVisible} />
                <label htmlFor='isVisible'>Am I visible?</label>
                <br />
                <br />
                <textarea name='comments' placeholder='Comments' onChange={changeHandler} value={formData.comments} />
                <br />
                <br />
                <select name='favCar' id='favCar' value={formData.favCar} onChange={changeHandler}>
                    <option value="Scorpio">Scorpio</option>
                    <option value="Thar">Thar</option>
                    <option value="Fortuner">Fortuner</option>
                    <option value="Defender">Defender</option>
                </select>
                <br/>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default App


    // const [firstName,setFirstName] = useState("");
    // const [lastName,setLastName] = useState("");
    // function changeFNameHandler(event){
    //     console.log(event.target);
    //     setFirstName(event.target.value);
    // }
    // function changeLNameHandler(event){
    //     console.log(event.target);
    //     setLastName(event.target.value);
    // }