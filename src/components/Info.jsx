import React from "react";
import Image from "../images/bettercropimg.jpg"

const Info = ()=>{
    return(
        <div className="info-container">
            <img src={Image} alt="" className="info-img" />
            <h2 className="info-name">
                Carlos Anthony Cruz
            </h2>
            <p className="info-role">
                Computer Science Student
            </p>
            <p className="info-website">
                iamanthonycruz.website
            </p>
            <button className="info-btn">Email</button>
        </div>
    )
}
export default Info;