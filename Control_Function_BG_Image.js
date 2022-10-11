import React from "react";
// import { useRef } from "react";

export default function Control_Function_BG_Image() {

    // var a = useRef(null);

    function calcu(event) {
        var i = event.target.value
        if (i === "bg1") {
            document.body.style.backgroundImage = `URL("https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`
            document.body.style.backgroundSize = "cover"

        } else if (i === "bg2") {
            document.body.style.backgroundImage = `URL("https://images.pexels.com/photos/8935809/pexels-photo-8935809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`

            document.body.style.backgroundSize = "cover"

        } else if (i === "bg3") {
            document.body.style.backgroundImage = `URL("https://images.pexels.com/photos/5957601/pexels-photo-5957601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`
            document.body.style.backgroundSize = "cover"
        }

        event.preventDefault()
    }


    return (
        <div>
            <select onChange={calcu}  >
                <option value="bg1"  >BG1</option>
                <option value="bg2"  >BG2</option>
                <option value="bg3"  >BG3</option>
            </select>
        </div>
    )
}