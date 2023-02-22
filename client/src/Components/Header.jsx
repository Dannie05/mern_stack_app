// import Navbar from "./Navbar";
import { useState } from "react";
export default function Header({title, body, greet}){
    let [isRed, setIsRed] = useState({
        color: true,
        name : "Daniel",
        isBroke: false
    });
    
    let color = isRed.color?"red":"blue";
    function clickEvent() {
    setIsRed(prev=>{return {...prev, color: !prev.color}});
    }
    return <>
    {/* <Navbar/> */}
    <h1 onClick={clickEvent} style={{color : color}} >{title}</h1>
     <p>{body}</p>

     {/* <p>{greet}</p> */}
    </>
}