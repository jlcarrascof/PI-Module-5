import React from "react";
import style from "./Landing.module.css";
import {Link} from "react-router-dom";

// This section defines the Landing component, which renders an image, 
// a heading, and a link that navigates to the /home route when the button 
// is clicked.

const Landing = () => {
     
      // This section renders a div with the container class. Inside this
      // div, it renders an image, a heading, and a link that navigates to 
      // the /home route when the button is clicked.
      
      return(
 
      <div className={style.container}>
          
        <img className={style.backgroundImage}           
             src = "/intro-app.gif"
             alt="landing" />   
        
        <h1 className={style.heading}>Proyecto Individual Pokemon - Henry Bootcamp - Ene. 2024.</h1>

        <Link to= "/home"> 
          <button  className={style.centeredButton} >INGRESAR</button>
        </Link>
               
      </div>
 
    )
 
 }
 
 export default Landing;
 