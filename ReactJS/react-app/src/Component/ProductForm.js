import { useState } from 'react';
import './ProductForm.css'

export default function ProductForm(props) {
    // const [fullProductInput, setFullProductInfo] = useState({
    //     title : '',
    //     date : ''
    //})

    // function dataChangeHandler(event) {
    //     const { name, value } = event.target;
    //     setFullProductInfo(prevState  => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    //     console.log(fullProductInput);
    // }
    let[title,setTitle] = useState('');
    let[date,setDate] = useState('');
    function titleChangeHandler(event) {
       setTitle(event.target.value); 
    }
    function dateChangeHandler(event) {
        setDate(event.target.value);
    }

    // function submitHandler(event) {
    //     event.preventDefault();
    //     console.log(fullProductInput);
    // }
    function submitHandler(event) {
        event.preventDefault();
        let productData = {
            title : title,
            date:date
        }
        setDate('');
        setTitle('');
        props.addProduct(productData);
        // console.log(productData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='newProdTitle'>
                <label>Title</label>
                <input type="text" value={title} onChange={titleChangeHandler}></input>
            </div>
            <div className='newProdDate'>
                <label>Date</label>
                <input type="date" value={date} onChange={dateChangeHandler} min='2023-01-01' max="2023-12-12"></input>
            </div>
            <div className='newProdBtn'>
                <button type="submit" >Add Product</button>
            </div>
        </form>
    );
}