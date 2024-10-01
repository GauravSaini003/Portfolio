import HtmlIMg from "./assets/html.png";
import CSSImg from "./assets/css.png";
import JavaScriptImg from "./assets/js.png";
import ReactImg from "./assets/physics.png";
import Node from "./assets/nodejs.png";
import Mongodb from "./assets/mongo.jpeg";
import expressjs from "./assets/express.png";
import Bootstrap from "./assets/bootstrap.png";
import tailwindcss from "./assets/tailwind.png";
import Github from "./assets/git.png"
import React from "react";



const Skills =()=>{
    return(

<>
<div className="flex md:flex-row flex-col   md:p-28 p-12 items-center  content-center ">
<h1 className="font-semibold text-3xl text-gray-600 items-center  content-center">Tech Stack <span className="ms-6 font-semibold text-xl text-gray-500">|</span></h1>
<div className="flex md:pt-0 pt-6 pb-6 items-center  content-center  transition duration-500 hover:scale-110 gap-2">
    <img className="w-[5rem] h-auto ms-12 " src={HtmlIMg} alt="" />
    <img className="w-[5rem] h-auto" src={CSSImg} alt="" />
</div>
<div className="flex md:pt-0 pt-6 pb-6items-center  content-center  transition duration-500 hover:scale-110 gap-2">
    <img className="w-[6rem] h-auto ms-12" src={JavaScriptImg} alt="" />
    <img className="w-[6rem] h-auto" src={ReactImg} alt="" />

</div>
<div className="flex md:pt-0 pt-6 pb-6 items-center  content-center transition duration-500 hover:scale-110 gap-2">
    <img className="w-[6rem] h-auto ms-12" src={Node} alt="" />
    <img className="w-[6rem] h-auto " src={expressjs} alt="" />
</div>
<div className="flex md:pt-0 pt-6 pb-6 items-center  content-center  transition duration-500 hover:scale-110 gap-2">
    <img className="w-[5rem] h-auto ms-12 " src={Mongodb} alt="" />
    <img className="w-[5rem] h-auto" src={Github} alt="" />
</div>
<div className="flex md:pt-0 pt-6 pb-6 items-center  content-center  transition duration-500 hover:scale-110 gap-2">
    <img className="w-[5rem] h-auto ms-12 " src={tailwindcss} alt="" />
    <img className="w-[5rem] h-auto" src={Bootstrap} alt="" />
</div>
</div>
</>

    );
};
export default Skills;