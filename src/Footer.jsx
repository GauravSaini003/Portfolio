import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import React from "react";

const Footer =()=>{
    return(<>
<div className="bg-gray-700 pt-16 pb-16 mt-12 " >
<div className=" flex md:flex-row flex-col items-center justify-between font-bold  md:ps-40 md:pe-40 p-3 gap-3">
<h3 className="md:text-2xl text-white">Copyright © 2024. All rights are reserved &#10084;</h3>

<div className="  flex  flex-row    gap-3 items-center justify-center">
    <a className="text-4xl  " href="https://github.com/GauravSaini003" target="_blank"><FaGithub/></a>
<a className="text-4xl   " href="https://www.linkedin.com/in/gaurav-saini-248aaa223/" target="_blank"><CiLinkedin/></a>

</div>
</div>
</div>

    </>);
    };
export default Footer;