import React from 'react'
import "../App.css"
import SignUp from './signUp'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";const Homepage = ()=>{

    return(
        <Router>

        <body>
            <header>
            <div className="topBar">
                <div className="leftTop">
                <a href="/"><img src="https://i.ibb.co/cDXz5vG/logo.png" alt="logo" border="0"/></a>
                </div>
                <div className="rightTop">
                    <ul className="navMenu">
                    <a href="/"><li className="menuItem">Home</li></a>
                        <li className="menuItem">About us</li>
                        <li className="menuItem">Contact us</li>
                    </ul>
                    <button className="loginInButton">Login in</button>
                    <a href="/signup"> <button className="signUpButton">Get started</button></a>
                 </div>
            </div>

            <div className="heroSection">
                <div className="heroTitle">
                    <div className="subTitle">Are you a developer?</div>
                    <div className="title">Build your generated <br/>portfolio in few clicks<span className="titleEndPoint">.</span></div>
                    <a href="/signup">    <button className="getStartedButton">Get started</button> </a>
                </div>
                <div className="heroPicture">
                <img  src="https://i.ibb.co/3vQC1vV/Group-58-2x.png" alt="Group-58-2x" border="0"/>               
            </div>
            </div>

            </header>
            <main>
                <div>
                <div className="subTitle2">Features that we have</div>
                <div className="title2">Why GitPro?<span className="titleEndPoint">.</span></div>
                <div className="features">
                    <div className="featuresContainer">
                    <div className="firstRowFeatures">
                        <div className="feature">
                        <img src="https://i.ibb.co/py6f7Wz/resume.png" alt="Group-58-2x" border="0"/>    
                        <p>Build your resume using your Linkedin</p>           
                        </div>
                        <div className="feature">
                        <img src="https://i.ibb.co/dMZMrNd/employee.png" alt="Group-58-2x" border="0"/>  
                        <p>Edit your personal information</p>    
                        </div>
                        <div className="feature">
                        <img src="https://i.ibb.co/1Zqtwp9/github.png" alt="Group-58-2x" border="0"/>  
                        <p>Retrieve your repositories from GitHub</p>   
                    </div>  
                    </div>  

                    <div className="secondRowFeatures">
                    <div className="feature1">
                        <img src="https://i.ibb.co/gzd76pT/management.png" alt="Group-58-2x" border="0"/>       
                        <p>Edit your repository information</p>        
                        </div>
                        <div className="feature">
                        <img src="https://i.ibb.co/Rhm0wJ3/list.png" alt="Group-58-2x" border="0"/>  
                        <p>Easily accessible by the employers</p>
                        </div>
                        </div>
                    </div>              
                </div>
                </div>
            </main>

            <footer>
                <div className="footerContainer">
          <img className="logoMin" src="https://i.ibb.co/jgJW3wx/logomin.png" alt="logomin" />
          <div className="copyrightText">All rights are reserved</div>
          </div>
        </footer>
        </body>
        </Router>


    )
}

export default Homepage;