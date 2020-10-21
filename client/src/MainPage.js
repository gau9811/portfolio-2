import React,{useState,Fragment} from 'react'
import './App.css';
import Grid from '@material-ui/core/Grid';  
import {Card} from "react-bootstrap"
import AOS from 'aos';
import { Link } from 'react-router-dom'
import Contact from "./Contact"
import { Container } from '@material-ui/core';

const MainPage = () => {
    AOS.init({
    
        disable: false, 
        startEvent: 'DOMContentLoaded', 
        initClassName: 'aos-init', 
        animatedClassName: 'aos-animate', 
        useClassNames: false, 
        disableMutationObserver: false, 
        debounceDelay: 50,
        throttleDelay: 99,
      
       
        offset: 120, 
        delay: 0, 
        duration: 500, 
        easing: 'ease', 
        once: false, 
        mirror: false, 
        anchorPlacement: 'top-bottom',
      
      });
       
      const [Dark,setDark] = useState(false)
      
      const handleChange = () => {
         setDark(dark=>!dark)
         let dark = Dark
         
      }
     
      
    const Styling = {
      backgroundColor : Dark ? "rgb(0,0,0,0.8)" : "",
      color:Dark ? "white" :"black"
    }
    const Styling2 = {
      color:Dark ? "white" :"black"
    }

  
   
    const Heading = () => {
    return(
     <div className="Heading">
      <Grid container>
      <Grid item xs={12} sm={12}>
        <h1 style={Styling2} className="main-head animate__animated animate__fadeInDown animate__delay-1s">
        HEY I'M GAURAV 
       </h1>
      </Grid>
      <Grid item xs={12} sm={12}>
      <h1 style={Styling2} className="main-head-2 animate__animated animate__fadeInDown animate__delay-2s">BAJAJ</h1>
      </Grid>
      <Grid style={Styling2} item xs={12} sm={12}>
       <p className="main-title animate__animated animate__fadeInDown animate__delay-3s">I'm seasoned software developer</p>  
      </Grid>
      <Grid style={Styling2} item xs={12} sm={12}>
       <p className="main-title-2 animate__animated animate__fadeInDown animate__delay-4s">Who loves to develop product for personal client and enterprise company</p>
      </Grid>
     </Grid>
     </div>
          )
      }
    
      const MainContent = () => {
       return(
   <div className="Content"  data-aos="fade-up" data-aos-delay="20">
      <h1 style={{textAlign:"center", color:"aliceblue"}}>PROJECTS</h1>
     
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        
        >
      <Grid  item xs={12} sm={12}>
       <a className="card-p" href="https://github.com/gau9811/eCommerce-website-with-payment-gateway">
       <Card  className="Content-Card" data-aos="fade-up" data-aos-delay="150">
       <Card.Body>
        <Card.Title>React-Node e-commerce</Card.Title>
        <Card.Text>
          App that allows you to create a product and sell products 
        </Card.Text>
       </Card.Body>
    </Card>
    </a> 
    </Grid>
   
    <Grid item xs={12} sm={12}>
    <a className="card-p" href="https://github.com/gau9811/olx-replica-backend">
       <Card  className="Content-Card-2" data-aos="fade-up" data-aos-delay="200">
       <Card.Body>
        <Card.Title>Node-olx-replica-backend</Card.Title>
        <Card.Text>
         it allows you to buy or sell product but you can sold via chat disscussion and it use passportjs aws s3 nodemailer technologies
        </Card.Text>
       </Card.Body>
    </Card>
    </a>
    </Grid>
    <Grid item xs={12} sm={12}>
    <a className="card-p" href="https://github.com/gau9811/trucky-app">
       <Card  className="Content-Card-3" data-aos="fade-up" data-aos-delay="250">
       <Card.Body>
        <Card.Title>React Trucky-app</Card.Title>
        <Card.Text>
          it allows you to store truck driver information and manage their details about the driver vital information
        </Card.Text>
       </Card.Body>
    </Card>
    </a>
    </Grid>
    <Grid item xs={12} sm={12}>
    <a className="card-p" href="https://github.com/gau9811/Dev-Connector">
       <Card  className="Content-Card-4" data-aos="fade-up" data-aos-delay="300">
       <Card.Body>
        <Card.Title>Mongo-express-react-node Dev-connector</Card.Title>
        <Card.Text>
         it allows you to create user profile like github and interact with other developer like social media platform
        </Card.Text>
       </Card.Body>
    </Card>
    </a>
    </Grid>
    </Grid> 
    
          </div>
        )
      }
    
     
      const About = () => {
        return(
          <Grid container>
          <Grid item sm={12} xs={12}>
          <div className="About"  data-aos="fade-up" data-aos-delay="20">
                <h1 className="About-Head"  data-aos="fade-up" data-aos-delay="50">ABOUT</h1>
                <p className="About-Head-2"  data-aos="fade-up" data-aos-delay="70">I'm a technology geek who love to learn new technology and i love to play batminton in my spare time.</p>
            </div>
            </Grid>
        </Grid>
        )
      }
  

      const WaveTo = () => {
      return(
      <Grid container>
        <Grid item sm={12} xs={12}>   
            <div  className="Content-3" data-aos="fade-up" data-aos-delay="20">
              <h1 className="Wave-Head"   data-aos="fade-up" data-aos-delay="40">Catch me on :)</h1>
              <p className="Wave-Head"   data-aos="fade-up" data-aos-delay="60"><a style={{textDecoration:"none",color:"orange"}} href="https://www.linkedin.com/in/gaurav-bajaj-a680201b3">Linkedin</a> and <a href="https://github.com/gau9811" style={{textDecoration:"none",color:"orange"}}>Github</a>  or <Link style={{textDecoration:"none",color:"orange"}} to="/contact">DM</Link></p>
            </div>
        </Grid>
      </Grid>
      )
      }
    

     

      return (
        <div style={Styling}>
           <Heading/>
           <MainContent />
           <About/>
           <WaveTo/>
           <div className="Content-4"  data-aos="fade-up" data-aos-delay="20">
           <button style={Styling} className="Footer-btn"   onClick={handleChange}>
             {Dark? '🌙' : '🌞'}
           </button>
           <p style={{color:"aliceblue"}}>Copyright © 2020. All rights reserved.</p>
           </div>
        </div>
      );
}

export default MainPage
