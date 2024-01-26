import React from "react";
import style from "./Landing.module.css";
import {Link} from "react-router-dom";

const Landing = () => {
    return(
 
     <div className={style.container}>
          
        <img className={style.backgroundImage}           
             src = "/intro-app.gif"
             alt="landing" />   
        
        <h1 className={style.heading}>Proyecto Individual Pokemon - Henry Bootcamp - Feb. 2024.</h1>

        <Link to= "/home"> 
          <button  className={style.centeredButton} >INGRESAR</button>
        </Link>
               
     </div>
 
    )
 
 }
 
 export default Landing;
 