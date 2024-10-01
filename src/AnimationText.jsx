import { TypeAnimation } from 'react-type-animation';
import React from "react";
 // Animation in the about section
const MyComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'I m a Web Developer 👩‍💻 ',
        1000, 
        'I m a problem Solver 💡',
        1000,
        'I m a Software Engineer 💻',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block',fontWeight :'bold', paddingTop:'1rem', paddingBottom:'1rem', position:'relative' }}
      repeat={Infinity}
    />
  );
};
export default MyComponent;