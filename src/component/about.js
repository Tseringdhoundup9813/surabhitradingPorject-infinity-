import React from "react";
import "../cssComponent/about.css";
import {motion} from "framer-motion";


function About(){

    return(<div className="About-container" id="about">  
      {/*about title  */}
        <motion.div className="about-title"
        initial={{x:-600}}
        whileInView={{x:0}}
        transition={{duration:1.2}}

        >
            <h1>ABOUT US </h1>
        </motion.div>
        {/* end herer */}

        
        {/*about description */}
        <div className="about-second-parent">
            <motion.div className="about-us-description"
            initial={{opacity:0.1}}
            whileInView={{opacity:1}}>
                <p>Surabhi Trading Pvt. Ltd. It was established and registered in Nov 2017 
                    with its head office located in Ward No. 3, Nagarjun Municipality, Kathmandu,
                    </p>
                    <p>
                    Nepal. Surabhi is established with the objective to do a business of Electrical 
                    and electronic goods, Batteries, and Alternative Energy products across Nepal.
                    </p>
                    <p>
                    It is a trading company established to provide quality products and service on 
                    time. Trading business in Nepal have motive to earn profit only. We want to 
                    differentiate us company from others and focus to delight customers by providing 
                    </p>
                    <p>
                    quality products, service, and value addition. Surabhi was established by professionals 
                    having years of experience in the field
                    of automotive battery, Alternative energy, power backup, electrical and electronic goods.</p>
                    <p>Surabhi Trading Pvt. Ltd. It was established and registered in Nov 2017 with its head office located in Ward No. 3, Nagarjun Municipality, Kathmandu, Nepal. Surabhi is established with the objective to do a business of Electrical and electronic goods, Batteries, and Alternative Energy products across Nepal. It is a trading company established to provide quality products and service on time. Trading business in Nepal have motive to earn profit only. We want to differentiate us company from others and focus to delight customers by providing quality products, service, and value addition. Surabhi was established by professionals having years of experience in the field of automotive
                        battery, Alternative energy, power backup, electrical and electronic goods.</p>
            </motion.div>


            {/* end here */}


        {/* about  */}
            <div className="about-listinformation-box">


                <div className="about-our-objective">
                    <div className="about-our-objective-img">
                        <img src={("./Image/work1.jpg")}></img>
                     </div>
                     <div className="about-our-objective-text-box">
                        <h1>OUR OBJECITVE</h1>
                        <p>Customer satisfaction is the ultimate goal of our company.</p>
                     </div>
                   
                </div>



                <div className="about-our-goal">
                    <div  className="about-goal-img">
                        <img src={("./Image/work2.jpg")}></img>
                    </div>
                    <div className="about-our-goal-text-box">
                        <h1>Our Goal</h1>
                        <p>We are committed to providing our products at the right time at the right 
                            place with zero tolerance.</p>
                    </div>
                   
                </div>


        {/* about vision-statement */}
                <div className="about-vision-statement">
                    <div className="about-vision-statement-img">
                        <img src={("./Image/work1.jpg")}></img>
                    </div>

                    <div className="about-vision-statemet-text-box">
                            <h1>Mission Statement</h1>
                            <p>To be referred to as the most reputed company in electrical, battery,
                                Alternative Energy and Electronic field in Nepal
                            </p>
                    </div>
                 
                </div>
            {/* end here */}


                <div className="about-mission-statement">
                    <div className="about-mission-statement-img">
                        <img src={("./Image/work2.jpg")}></img>
                    </div>
                    <div className="about-mission-statement-text-box">
                        <h1>Mission Statement</h1>
                        <p>We are committed to providing our products 
                            at the right time at the right place with zero tolerance.</p>
                    </div>
                  
                </div>


                <div className="about-major-product-range">
                    <div className="about-major-product-range-img">
                        <img src={("./Image/work3.jpg")} alt="" />
                    </div>
                    <ul>
                        <h1>Our Major Product</h1>
                        <li>All Kinds of Electrical Goods</li>
                        <li>Alternative Energy</li>
                        <li>Battery Inverter Battery</li>
                        <li>Solar Battery</li>
                        <li>Automotive Battery</li>
                        <li>Electronic Goods</li>
                    </ul>
                </div>



            </div> 
             {/* end here  */}
       
        </div>
        
    </div>)
}
export default About;