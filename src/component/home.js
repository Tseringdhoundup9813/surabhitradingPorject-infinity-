import React from "react";
import "../cssComponent/home.css";
import ParticleEffect from "./particleEffect";
import Navbar from "./navbar";
import {Link} from "react-scroll";
import {motion} from "framer-motion";




function Home(){

    return(
    <div 
    
    className="home-container" id="home">
        {/* <ParticleEffect></ParticleEffect> */}

         <div className="logo">
            <img src={("./Image/logomem.png")}></img>
         </div>
        <section id="home-text-container">

        <div class="home-text-box">

        <motion.h1
        initial={{y:-200,opacity:0.5}}
        animate={{y:-0,opacity:1}}
        transition={{duration:3,type:"spring",stiffness:100}}>
        Welcome to Valera</motion.h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>

        {/* button */}
        <motion.div className="get-started-button"
        animate={{scale:1.1,y:20}}>
            <Link className="get-started-button-text"to="about" smooth={true} offset={30} duration={1000}>Get Started</Link>
        </motion.div>
      
        </div>
    </section>
    
    </div>)

}
export default Home;