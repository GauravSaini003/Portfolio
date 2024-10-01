import React from "react";
import LocationImG from "./assets/Map.png";
import GmailImG from "./assets/GmailI.png";


const Contact =()=>{
    return(<>
<div className="pt-28 ps-28 pb-12   " id="contact">
    <h3 className="pb-5 text-3xl text-sky-500 font-bold">CONTACT</h3>
  <h2 className="pb-5 text-3xl text-gray-800 font-bold">Don't be shy! Hit me up! 👇</h2>
 
</div>
<div  className="flex md:flex-row md:items-start md:justify-start items-center justify-center flex-col md:ms-28 ms-16">
<div className="flex md:flex-row flex-col items-center md:ps-16  md:mb-3 mb-6">
    <img className="h-16 w-16 mb-2" src={LocationImG} alt="" />
    <div className=" ps-6 flex flex-col">
    <h6 className="font-bold text-xl">Location</h6>
    <h5 className="font-normal text-lg">Dehradun , India</h5>
    </div>
    
    
    </div>
    <div className=" flex md:flex-row flex-col items-center md:ps-16 ">
    <img className="h-16 w-16" src={GmailImG} alt="img" />
    <div  className="ps-6 flex flex-col">
    <h6  className="font-bold text-xl">Mail</h6>
   <a  className="font-normal text-lg" href="mailto:gaurav8191@gmail.com">gaurav8191saini@gmail.com </a>
   </div>
   </div>
    
    </div>




    </>);
};
export default Contact;