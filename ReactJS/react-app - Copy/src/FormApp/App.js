import React, { useState } from 'react'

const App = () => {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", country: "India", streetAdr: "", city: "", state: "", postalCode: "", comments: false, candidates: false, offer: false, pushNotification: "" })
    function changeHandler(event) {
        const { name, value, checked, type } = event.target;
        setFormData(prev => {
            return {
                ...prev, [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function submitHandler(event) {
        event.preventDefault();
        console.log(formData);
    }
    return (
        <div className='flex flex-col items-center'>
            <form onSubmit={submitHandler}>
                <label htmlFor='firstName'>First Name</label>
                <br />
                <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    placeholder='Kushagra'
                    value={formData.firstName}
                    onChange={changeHandler}
                    className=' outline'
                />
                <br />


                <label htmlFor='lastName'>Last Name</label>
                <br />
                <input
                    type='text'
                    name='lastName'
                    id='lastName'
                    placeholder='Rai'
                    value={formData.lastName}
                    onChange={changeHandler}
                    className=' outline'
                />
                <br />


                <label htmlFor='email'>Email</label>
                <br />
                <input
                    type='text'
                    name='email'
                    id='email'
                    placeholder='kushagrarai83@gmail.com'
                    value={formData.email}
                    onChange={changeHandler}
                    className=' outline'
                />
                <br />


                <label htmlFor='country'>Country</label>
                <br />
                <select
                    id='country'
                    name='country'
                    value={formData.country}
                    onChange={changeHandler}
                >
                    <option>India</option>
                    <option>Russia</option>
                    <option>South Africa</option>
                    <option>Brazil</option>
                </select>
                <br />


                <label htmlFor='streetAdr'>Street Address</label>
                <br />
                <input
                    type='text'
                    name='streetAdr'
                    id='streetAdr'
                    placeholder='123 Main street'
                    value={formData.streetAdr}
                    onChange={changeHandler}
                    className=' outline'
                />
                <br />



                <label htmlFor='city'>City</label>
                <br />
                <input
                    type='text'
                    name='city'
                    id='city'
                    placeholder='Indore'
                    value={formData.city}
                    onChange={changeHandler}
                    className=' outline'
                />
                <br />



                <label htmlFor='state'>State</label>
                <br />
                <input
                    type='text'
                    name='state'
                    id='state'
                    placeholder='M.P.'
                    value={formData.state}
                    onChange={changeHandler}
                    className=' outline'
                />
                <br />



                <label htmlFor='postalCode'>Postal Code</label>
                <br />
                <input
                    type='text'
                    name='postalCode'
                    id='postalCode'
                    placeholder='455100'
                    value={formData.postalCode}
                    onChange={changeHandler}
                    className=' outline'
                />
                <br />
                <br />

                <fieldset>
                    <legend>By Email</legend>
                    <div className='flex '>
                        <input
                            id='comments'
                            name='comments'
                            type='checkbox'
                            value={formData.comments}
                            onChange={changeHandler}
                        />
                        <div>
                            <label htmlFor='comments'>Comments</label>
                            <p>Get notified When someone post a comment on a posting</p>
                        </div>
                    </div>
                    <div className='flex '>
                        <input
                            id='candidates'
                            name='candidates'
                            type='checkbox'
                            value={formData.candidates}
                            onChange={changeHandler}
                        />
                        <div>
                            <label htmlFor='candidates'>Candidates</label>
                            <p>Get notified When someone post a comment on a posting</p>
                        </div>
                    </div>
                    <div className='flex '>
                        <input
                            id='offer'
                            name='offer'
                            type='checkbox'
                            value={formData.offer}
                            onChange={changeHandler}
                        />
                        <div>
                            <label htmlFor='offer'>Offers</label>
                            <p>Get notified When someone post a comment on a posting</p>
                        </div>
                    </div>

                </fieldset>
                <br />
                <fieldset>
                    <legend>Push Notification</legend>
                    <p>These are Delivered via sms to your mobile phone.</p>

                    <input
                        type='radio'
                        id='pushEverything'
                        name='pushNotification'
                        value="Everything"
                        onChange={changeHandler}
                    />
                    <label htmlFor='pushEverything'>Everything</label>
                    <br />
                    <input
                        type='radio'
                        id='pushEmail'
                        name='pushNotification'
                        value="Same as Email"
                        onChange={changeHandler}
                    />
                    <label htmlFor='pushEmail'>Same as Email</label>
                    <br />
                    <input
                        type='radio'
                        id='pushNothing'
                        name='pushNotification'
                        value="No push Notification"
                        onChange={changeHandler}
                    />
                    <label htmlFor='pushNothing'>No push Notification</label>
                </fieldset>
                <br />

                <button className=' bg-blue-400 text-white rounded-md font-bold py-2 px-4'>Save</button>
                <br/>
                
            </form>
            <br/>
        </div>
    )
}

export default App