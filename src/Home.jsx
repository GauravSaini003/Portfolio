import Profile from "./assets/Profile.jpg";
import React from "react";
import MyComponent from "./AnimationText";
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Skills from "./Skills";


const Home =()=>{
    return(
<>
<div className=" w-full " id="home">
    <div className="  md:p-28 p-12  flex  flex-col-reverse  md:flex-row justify-center items-center   ">
<div className=" flex flex-col justify-center  ">



    <div className="font-bold text-4xl  ">
Hello I m , <br />
<span className=" font-bold text-7xl">Gaurav  <span className="text-sky-600">Saini</span></span>
</div>

<MyComponent />


<h3 className="leading-relaxed  text-2xl pt-3 pb-3  text-black md:pe-24 ">
I am a passionate MERN Full Stack Developer dedicated to transforming ideas into elegant solutions. With strong problem-solving skills and a love for coding, I strive to create seamless user experiences. Let’s collaborate to build something amazing together!</h3>
<div className="flex">
    <a className="text-5xl m-3" href="https://github.com/GauravSaini003" target="_blank"><FaGithub /></a>
<a className="text-5xl m-3" href="https://www.linkedin.com/in/gaurav-saini-248aaa223/" target="_blank"><CiLinkedin /></a>


</div>
</div>
<span className=" md:w-28 w-3 h-full " ></span>
<div className="grow md:shrink-0  ">
    <img className="shadow-2xl shadow-cyan-500/50 border rounded-lg  md:h-[30rem]   transform  transition duration-500 md:hover:scale-110" src={Profile} alt="Profile Picture" />
</div>
</div>
<Skills/>
</div>

</>

    )
};
export default Home;