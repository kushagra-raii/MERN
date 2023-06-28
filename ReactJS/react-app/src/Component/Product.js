import React from 'react';
import { useState } from "react";
import Item from './Item';
import ItemDate from './ItemDate';
import './Product.css'

function Product(props) {

    
//hw: why const, setTitle schedules?
    const [title,setTitle] = useState(props.specs.itemName);
    //Syntax: const [var,fn->{will update var}]->{returns} = useState(initial value-> {curr value of var}); this line will update and render
    function clickHandler() {
       console.log("button Clicked"); 
       setTitle("555");
    }
    return (
        <div className='product'>
            <Item name={title} />
            <ItemDate day={props.specs.itemDate} month={props.specs.itemMonth} year={props.specs.itemYear} />
            <button onClick={clickHandler}>Add to cart</button>
        </div>
    );
}

export default Product;

