
import React from "react";
import "../cssComponent/career.css"


let jobdata=[
    {
        job_title:"Account Department",
    },
    {
        job_title:"Account Department",
    },
    {
        job_title:"Account Department",
    },

    {
        job_title:"Service Department"
    },

]


function Career(){
    return(
        <div className="career_main_container" id="Career">
            <div className="career-title">
                <h1>Career</h1>
            </div>

        <div className="job-box-main-container">
             {jobdata.map((data)=>{
                return <div className="job-box">
                    <h1>{data.job_title}</h1>
                    <div className="apply-button">
                        <p>apply</p>
                    </div>
                    </div>
             })}
        </div>
          
           
         
            
        </div>
    )
}

export default Career;