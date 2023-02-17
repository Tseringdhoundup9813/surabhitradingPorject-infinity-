

import React  from "react";
import "../cssComponent/contact.css";
import { GrFormLocation} from 'react-icons/fa';
import { AiOutlinePhone } from "react-icons/ai";



function Contact(){
    return(<div className="contact-main-container">
        {/* contact title */}
        <div className="contact-title">
            <h1>Contact</h1>
        </div>
        {/* end here */}
        {/* gogolge map */}
        <div className="mapcontainer">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14128.186683870072!2d85.28259279999999!3d27.71584525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb188ffed4ba13%3A0xf945d21b8f02e2e9!2sSwoyambhu%20Recreation%20Center!5e0!3m2!1sne!2snp!4v1676529353871!5m2!1sne!2snp" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* end here */}

        <div className="form-container" id="Contact">
            <div className="form-contact-icon-container">
                <div className="location">
                    <div className="icon-box" >
                        <AiOutlinePhone className="call-icon"></AiOutlinePhone>

                    </div>
                    <div className="location-text-box text-box">
                        <h1>Location</h1>
                        <p>Dhobi Ghat, Lalitpur, Nepal</p>

                    </div>


                </div>


                <div className="email">
                    <div className=" icon-box" >
                        <AiOutlinePhone className="call-icon"></AiOutlinePhone>
                    </div>
                    <div className="email-text-box text-box">
                        <h1>Email</h1>
                        <p>info@surabhitrading.com</p>
                    </div>
                </div>


                <div className="call">
                        <div className="icon-box" >
                             <AiOutlinePhone className="call-icon"></AiOutlinePhone>
                        </div>
                    <div className="call-text-box text-box">
                        <h1>Contact</h1>
                        <p>+977-1-5153325</p>
                    </div>
                </div>
            </div>
            <div className="form-input-container">
                    <form>
                        
                        <input placeholder="your name"></input>
                        <input placeholder="your email"></input>
                        <input placeholder="subject"></input>
                        <textarea id="w3review" name="w3review" rows="6" cols="90"></textarea>


                    </form>
            </div>
        </div>



    </div>)
}
export default Contact;