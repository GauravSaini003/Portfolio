
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';



function App() {
  
  return (
    < >
      <Header  />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      
    </>
  );

  }
  const root = ReactDOM.createRoot(document.getElementById('root'));



  root.render(<App />);