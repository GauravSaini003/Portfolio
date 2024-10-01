import ProjectImg from "./assets/Project3.png";
import eduxcell from "./assets/Project1.png";
import Probe from "./assets/Project2.png";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";



const Projects =()=>{
    return(
        <>
        
         <div className="flex flex-col mb-6 md:ms-24 ms-6" id="projects"> 
        <h1 className="font-bold text-xl text-sky-500 mb-3">PORTFOLIO</h1>
          <h2 className="font-bold md:text-3xl text-2xl text-gray-700">Each project is a unique piece of development 🧩</h2>
           </div>
           {/**Project One */}
        <div className="md:ms-24 m-10 md:me-20  rounded-lg mb-6 bg-gray-40 shadow-2xl shadow-blue-200 p-4">

       
           <div className="flex md:flex-row flex-col">
    <div className="group  border-4 shadow-2xl rounded-lg md:h-[32rem] md:w-[44rem]  overflow-hidden relative md:mb-0 mb-6">
      <div
        className=" md:h-full md:w-full transform transition-transform duration-1000 md:group-hover:-translate-y-full group-hover:-translate-y-1/3"
        style={{ height: '100%', width: '100%' }}
      >
        <a className=" " target="_blank" href="https://edtech-2yn9.onrender.com/"> <img
          src={eduxcell}
          alt="project Image"
         
        /></a>
       </div>
       </div>
       
       <div className="flex  flex-col md:w-3/4 md:ms-12 md:me-20  ">
<h1 className="text-center pb-6 text-3xl text-gray-800 font-bold" >EduXcell - Ed Tech Website</h1>
<h5 className="p-6 text-xl font-semi-bold text-gray-600">
EduXcell is a user-friendly online platform built with the MERN stack, designed to bridge the gap between teachers and students. It provides seamless access to educational resources and fosters interactive learning through innovative features, making education more engaging and accessible for everyone.</h5>
   
<div className="flex flex-wrap items-center justify-center gap-4 pt-12">
  <div className="border border-black shadow-md shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
    <h4 className="text-black text-xl font-bold text-center">JavaScript</h4>
  </div>
  <div className="border border-black shadow-md shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
    <h4 className="text-black text-xl font-bold text-center">Tailwind CSS</h4>
  </div>
  <div className="border border-black shadow-md shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
    <h4 className="text-black text-xl font-bold text-center">React</h4>
  </div>
  <div className="border border-black shadow-md shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
    <h4 className="text-black text-xl font-bold text-center">Authentication</h4>
  </div>
  <div className="border border-black shadow-md shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
    <h4 className="text-black text-xl font-bold text-center">API</h4>
  </div>
  <div className="border border-black shadow-md shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
    <h4 className="text-black text-xl font-bold text-center">Node.js</h4>
  </div>
  <div className="border border-black shadow-md shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
    <h4 className="text-black text-xl font-bold text-center">MongoDB</h4>
  </div>
</div>


<div className=" flex md:space-x-24 space-x-3   justify-center md:ps-12 ps-3 pt-20">
<a href="https://github.com/GauravSaini003/Eduxcell">
<div className="flex items-center p-3 border border-black rounded-lg  shadow-cyan-500/50 shadow-md ">
 
  <h3 className="md:text-xl font-bold me-3"> SOURCE CODE </h3>
<a className="md:text-2xl text-xl"><  FaGithub /></a>

  
  
</div>
</a>
<a href=" https://edtech-2yn9.onrender.com/

">
<div className="flex items-center p-3 border border-black rounded-lg  shadow-cyan-500/50 shadow-md ">
 
  <h3 className="md:text-xl font-bold me-3">LIVE DEMO </h3>
  
 <a className="md:text-2xl text-xl"><FaArrowUpRightFromSquare /></a>
  
</div>
</a>
</div>
     
     
       </div>
      
    </div>
    </div>

  {/**Project Two */}
    <div className="md:ms-24 m-10 md:me-20  rounded-lg mb-6 bg-gray-40 shadow-2xl shadow-blue-200 p-4">

       
<div className="flex md:flex-row flex-col ">
<div className="group  border-4 shadow-2xl rounded-lg md:h-[32rem] md:w-[44rem]  overflow-hidden relative md:mb-0 mb-6 ">
<div
className=" md:h-full md:w-full transform transition-transform duration-1000 md:group-hover:-translate-y-1/3 group-hover:-translate-y-1/3"
style={{ height: '100%', width: '100%' }}
>
<a className=" " target="_blank" href="  https://gauravsaini003.github.io/ProbeSteam-Website/"> <img
src={Probe}
alt="project Image"

/></a>
</div>
</div>

<div className="flex flex-col md:w-3/4 md:ms-12 md:me-20  ">
<h1 className="text-center pb-6 text-3xl text-gray-800 font-bold" >Probe Steam Website</h1>
<h5 className="p-6 text-xl font-semi-bold text-gray-600">
Probe Steam is a multi-page web application designed using Figma. It provides a seamless user experience for account creation, login, and logout. The platform features an intuitive dashboard where users can update their profiles, manage their designations, and access other personalized settings, ensuring a comprehensive and user-friendly interface for managing accounts.</h5>

<div className="flex flex-wrap items-center justify-center gap-4 pt-12">
<div className="border border-black shadow-md shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
    <h4 className="text-black text-xl font-bold text-center">HTML</h4>
  </div>
  <div className="border border-black shadow-md shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
    <h4 className="text-black text-xl font-bold text-center">JavaScript</h4>
  </div>
  <div className="border border-black shadow-md shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
    <h4 className="text-black text-xl font-bold text-center">Tailwind CSS</h4>
  </div>
  <div className="border border-black shadow-md shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
    <h4 className="text-black text-xl font-bold text-center">Responsive</h4>
  </div>
  <div className="border border-black shadow-md shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
    <h4 className="text-black text-xl font-bold text-center">figma</h4>
  </div>

  
</div>

<div className=" flex md:space-x-24 space-x-3   justify-center md:ps-12 ps-3 pt-20">
<a href="https://github.com/GauravSaini003/ProbeSteam-Website">
<div className="flex items-center p-3 border border-black rounded-lg  shadow-cyan-500/50 shadow-md ">
 
  <h3 className="md:text-xl font-bold me-3"> SOURCE CODE </h3>
<a className="md:text-2xl text-xl"><  FaGithub /></a>

  
  
</div>
</a>
<a href=" https://gauravsaini003.github.io/ProbeSteam-Website/

">
<div className="flex items-center p-3 border border-black rounded-lg  shadow-cyan-500/50 shadow-md ">
 
  <h3 className="md:text-xl font-bold me-3">LIVE DEMO </h3>
  
 <a className="md:text-2xl text-xl"><FaArrowUpRightFromSquare /></a>
  
</div>
</a>
</div>


</div>

</div>
</div>

  {/**Project Three */}
    <div className="md:ms-24 m-10 md:me-20  rounded-lg mb-6 bg-gray-40 shadow-2xl shadow-blue-200 p-4">

       
<div className="flex md:flex-row flex-col">
<div className="group  border-4 shadow-2xl rounded-lg md:h-[32rem] md:w-[44rem]  overflow-hidden relative md:mb-0 mb-6">
<div
className=" md:h-full md:w-full transform transition-transform duration-1000 md:group-hover:-translate-y-full group-hover:-translate-y-1/3"
style={{ height: '100%', width: '100%' }}
>
<a className=" " target="_blank" href=" https://gauravsaini003.github.io/Fashion-website/"> <img
src={ProjectImg}
alt="project Image"

/></a>
</div>
</div>

<div className="flex flex-col   md:w-3/4 md:ms-12 md:me-20 ">
<h1 className="text-center pb-6 text-3xl text-gray-800 font-bold" >E-commerce Website</h1>
<h5 className="p-6 text-xl font-semi-bold text-gray-600">
A clothing e-commerce website is an online platform dedicated to the buying and selling of clothing items.
It provides a virtual storefront where customers can browse, select, and purchase a wide range of apparel,
footwear, and accessories. These websites typically offer an extensive collection of fashion products, catering
to various styles, sizes, and preferences.</h5>

<div className="flex flex-wrap items-center justify-center gap-4 pt-12">
<div className="border border-black shadow-md shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
    <h4 className="text-black text-xl font-bold text-center">HTML</h4>
  </div>
  <div className="border border-black shadow-md shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
    <h4 className="text-black text-xl font-bold text-center">JavaScript</h4>
  </div>
  <div className="border border-black shadow-md shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
    <h4 className="text-black text-xl font-bold text-center">Tailwind CSS</h4>
  </div>
  <div className="border border-black shadow-md shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
    <h4 className="text-black text-xl font-bold text-center">Responsive</h4>
  </div>
  <div className="border border-black shadow-md shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
    <h4 className="text-black text-xl font-bold text-center">UI/UX</h4>
  </div>
  
</div>

<div className=" flex md:space-x-24 space-x-3   justify-center md:ps-12 ps-3 pt-20">
<a href="https://github.com/GauravSaini003/Fashion-website">
<div className="flex items-center p-3 border border-black rounded-lg  shadow-cyan-500/50 shadow-md ">
 
  <h3 className="md:text-xl font-bold me-3"> SOURCE CODE </h3>
<a className="md:text-2xl text-xl"><  FaGithub /></a>

  
  
</div>
</a>
<a href=" https://gauravsaini003.github.io/Fashion-website/

">
<div className="flex items-center p-3 border border-black rounded-lg  shadow-cyan-500/50 shadow-md ">
 
  <h3 className="md:text-xl font-bold me-3">LIVE DEMO </h3>
  
 <a className="md:text-2xl text-xl"><FaArrowUpRightFromSquare /></a>
  
</div>
</a>
</div>


</div>

</div>
</div>

       
        </>
    );
};
export default Projects;