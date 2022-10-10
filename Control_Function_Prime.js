import React from "react";
import { useState } from "react";


export default function Control_Function_Prime(){
    var [Number,setNumber] = useState(0);
    var [Res,setRes] = useState("")

    function  Control_Number(event){
        setNumber(event.target.value)
    }

    function Calculate(event){
          // 10
          //var c = 0;
        //   var g = ""
        for(var i =2; i<=Number; i++ ){  // 
            if(Number%i===0){
                // g = "Not Prime"  
                setRes( "Not Prime" )
            }else{
                // g = "Prime"
                setRes("Prime")
            }
        }
        

        setRes();
        event.preventDefault()
    }



    return(
        <div>
            <form action="" onSubmit={(event)=>Calculate(event)} >
            <h1>Check Number is Prime Or Not Prime</h1>
            <input type="text" placeholder="Enter Any Number" onChange={(event)=>Control_Number(event)} />
            <br />
            <input type="submit" value="Click Me" />
            <p>Number is = {Res}</p>


            </form>
        </div>
    )
}