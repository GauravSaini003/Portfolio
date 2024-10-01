import AboutIMG from "./assets/about.jpg";
import React from "react";

const About =()=>{
    return (
        <>
        <div className=" flex md:flex-row flex-col md:p-28 p-12 items-center justify-center"id="about" >
      
      <img className="min-h-80 min-w-80 rounded-lg" src={AboutIMG} alt="About Section Image" />

     <div className="flex flex-col pt-6 md:ps-24 md:p-12 p-3 ">
     <h3 className="font-bold   text-2xl text-sky-500 pb-3">ABOUT ME</h3>
     <h4 className="font-bold md:text-4xl text-2xl text-gray-900 pb-3">
     A dedicated Front-end Developer
        based in Dehradun, India 	&#127470;&#127475;

     </h4>
     <h6 className="md:text-2xl text-xl md:text-justify text-center leading-relaxed text-wrap pt-2  pb-3 text-gray-800 text-bold">
     As a MERN Stack Developer, I bring expertise in MongoDB, Express.js, React, and Node.js, along with a strong proficiency in Tailwind CSS and Bootstrap. I excel at building and maintaining responsive, dynamic web applications that deliver exceptional user experiences. My strength lies in crafting clean and optimized code while utilizing modern development tools and techniques. I am also a collaborative team player who thrives in working with cross-functional teams to create impactful and innovative digital solutions.        </h6>
     </div>
     </div>
    
        </>
    );
};
export default About;