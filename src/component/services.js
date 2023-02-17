import React from "react";
import "../cssComponent/services.css";
import {motion} from "framer-motion";


function Services(){

    let servicedata=[
        {
            service_name:"services",
            service_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam vitae quasi vel. Maxime veritatis modi sed repellat consequuntur quos minus itaque quaerat eveniet! Temporibus corrupti accusantium est expedita aperia"
        },
        {
            service_name:"services",
            service_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam vitae quasi vel. Maxime veritatis modi sed repellat consequuntur quos minus itaque quaerat eveniet! Temporibus corrupti accusantium est expedita aperia"
        },
        {
            service_name:"services",
            service_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam vitae quasi vel. Maxime veritatis modi sed repellat consequuntur quos minus itaque quaerat eveniet! Temporibus corrupti accusantium est expedita aperia"
        },
        {
            service_name:"services",
            service_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam vitae quasi vel. Maxime veritatis modi sed repellat consequuntur quos minus itaque quaerat eveniet! Temporibus corrupti accusantium est expedita aperia"
        },
        {
            service_name:"services",
            service_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam vitae quasi vel. Maxime veritatis modi sed repellat consequuntur quos minus itaque quaerat eveniet! Temporibus corrupti accusantium est expedita aperia"
        },
        {
            service_name:"services",
            service_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam vitae quasi vel. Maxime veritatis modi sed repellat consequuntur quos minus itaque quaerat eveniet! Temporibus corrupti accusantium est expedita aperia"
        },
     
    ]
    return(<div className="services-title-container" id="Services">
        <div className="services-title">
            <h1>Services</h1>
        </div>

        <div className="services-box-container">

            {servicedata.map((item)=>{
            return <motion.div className="services-box"
            initial={{x:300}}
            whileInView={{x:0}}
            // transition={{duration:0.4}}
            >
                <h1>{item.service_name}</h1>
                <p>{item.service_description}</p>
            </motion.div>
            })}
           

        
        </div>
    </div>)
}

export default Services;