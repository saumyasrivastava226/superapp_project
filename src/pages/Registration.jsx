import React, { useState } from "react"
import bgImage from "../assets/image 13.png"

export default function Registration(){
    const[name,setName]= useState();
    const [username,setUserName]=useState();
    const[email,setEmail]=useState();
    const[mobile,setMobile]=useState();
    const[consent,setConsent]=useState(false);
        

    return (
        <div>
          <div>
            <img src= {bgImage}/>
          </div>
           <div>
             <div></div>
             <div></div>
             <div></div>
          </div>
        </div>
    )
}