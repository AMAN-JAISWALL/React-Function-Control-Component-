import React from "react";
import { useState } from "react";
export default function Control_Function_CalsiusToFah(){

    var [Calsius, setCalsius] = useState(0);
    var [Fahrenheit,setFahrenheit] = useState('');

    function Control_Calsius(event){
        setCalsius(event.target.value);
    }
    function Calcu(event){
        var fah = (Calsius*1.8+32)
        setFahrenheit(fah)
        event.preventDefault()
    }





    return(
        <div>
            <h1>Function Control Component to Create Calsius to fahrenheit</h1>
            <form action="" onSubmit={(event)=>Calcu(event)} >
                <input type="text" placeholder="Enter Calsius Value" onChange={(event)=>Control_Calsius(event)} />
                <br />
                <input type="submit"  value="Click Me" />

                <br />
                <p>fahrenheit is ={Fahrenheit}</p>
            </form>
        </div>
    )
}