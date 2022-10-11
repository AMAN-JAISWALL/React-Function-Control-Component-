import React from "react";

import { useState } from "react";

export default function Control_Function_AreaOfRectangle(){

    var [L, setL] =useState(0);
    var [B,setB] = useState(0);
    var [AreaOfRectangle,setAreaOfRectangle] = useState(" ");

    function Control_Length(event){
        setL(event.target.value)
    }

    function Control_Breadth(event){
        setB(event.target.value)
    }

    function Calcu(event){
        var area = +(L * B)
        setAreaOfRectangle(area)
        event.preventDefault()
    }

return(
    <div>
        <h1>Function Control Component Example</h1>
        <form action="" onSubmit={(event)=>Calcu(event)} >
            <input type="text" placeholder="Enter Length" onChange={(event)=>Control_Length(event)}/>
            <br />
            <input type="text" placeholder="Enter Breadth"  onChange={(event)=>Control_Breadth(event)} />
            <br />
            <input type="submit" value="Click Me" />
            <p>Result is= {AreaOfRectangle}</p>
        </form>
    </div>
)
}