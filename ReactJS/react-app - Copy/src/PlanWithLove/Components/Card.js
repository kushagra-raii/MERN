import { useState } from "react";

export default function Card({id, removeTour, image, info, price, name }) {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}....`
    
    function readMoreHandler() {
        setReadmore(!readmore);
        console.log(removeTour);
    }
    return (
        <div className="Card flex flex-col gap-3 w-[340px] p-2 border">
            <img src={image} alt="Destination " className="w-[100%] aspect-square"></img>
            <div className="tourInfo">
                <div className="tourDetails">
                    <h4 className="tourPrice">{price}</h4>
                    <h4 className="tourName">{name}</h4>
                </div>
                <div className="tourDesc font-light text-sm ">
                    {description}
                    <span className="readMore text-[#0398d4]" onClick={readMoreHandler}>
                        {readmore ? ` show less` : `read more`}
                    </span>
                </div>
            </div>
            
            <button className="border-2" onClick={() => removeTour(id)} >Not Interest</button>
        </div>
    );
}