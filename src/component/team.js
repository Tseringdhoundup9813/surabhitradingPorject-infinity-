import React from "react";
import "../cssComponent/team.css";

function Team(){
    return(<div className="team-main-container" id="Team">
        
        <div className="team-title">
            <h1>Meet our Team</h1>
        </div>
        <div className="team-box">
            <div className="team-box-img">
                <img src={("./Image/work1.jpg")}></img>
            </div>
            <div className="team-box-text-box">
                <h1 className="name">Tsering</h1>
                <p className="role">Enginer</p>
                <p className="team-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis unde accusantium ex? Officiis excepturi voluptas eos nostrum dolore eum animi! 
                    Corrupti repellendus, soluta perferendis blanditiis modi pariatur porro nobis!</p>
            </div>
        </div>


        {/*  */}


        <div className="team-box">
            <div className="team-box-img">
                <img src={("./Image/work1.jpg")}></img>
            </div>
            <div className="team-box-text-box">
                <h1 className="name">Tsering</h1>
                <p className="role">Enginer</p>
                <p className="team-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis unde accusantium ex? Officiis excepturi voluptas eos nostrum dolore eum animi! 
                    Corrupti repellendus, soluta perferendis blanditiis modi pariatur porro nobis!</p>
            </div>
        </div>


        {/*  */}


        <div className="team-box">
            <div className="team-box-img">
                <img src={("./Image/work1.jpg")}></img>
            </div>
            <div className="team-box-text-box">
                <h1 className="name">Tsering</h1>
                <p className="role">Enginer</p>
                <p className="team-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis unde accusantium ex? Officiis excepturi voluptas eos nostrum dolore eum animi! 
                    Corrupti repellendus, soluta perferendis blanditiis modi pariatur porro nobis!</p>
            </div>
        </div>
        {/*  */}


    </div>)
}

export default Team;