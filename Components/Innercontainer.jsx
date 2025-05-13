import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import '../style/App.css'
import Paidcourses from "./paidcourses";

import Reactimg from '../images/Courses/react.png'
import Nodejsimg from '../images/Courses/nodejs.png'
import mongodbimg from '../images/Courses/mongodb.png'
import Digitalimg from '../images/Courses/Digital-free.png'
import pythonimg from '../images/Courses/Python.webp'
import Datascienceimg from '../images/Courses/datascience-free.png'


function Innercontainer({t}) {
  let courses = ["Python", "Web Development", "Java", "FullStack Development"];
  // let fontfamlies = ['sans', 'cursive', 'sans-serif'];
  // const [inputcoursefont, setInputcoursefont] = useState(fontfamlies[0]);
  const [inputcourse, setInputcourse] = useState(courses[0]);

  

  const Searchcoursehandler = async () => {
    let count = 0;
    const intervalid = setInterval(() => {
      if (count < 4) {
        setInputcourse(courses[count]);
        // setInputcoursefont(fontfamlies[count])

        // console.log(count)
        count++;
      } else {
        clearInterval(intervalid);
        console.log("Stopped");
      }
    }, 4000);
  };

  useEffect(() => {
    setInterval(() => {
      Searchcoursehandler();
    }, 20000);
  }, []);

  return (
    <div>
      <div id="innercontainer">
        <img  src="https://img.freepik.com/free-photo/portrait-asian-woman-sitting-with-laptop-bench-park-listening-music-with-wireless_1258-199096.jpg?ga=GA1.1.842890486.1746420084&semt=ais_hybrid&w=740"></img>
      </div>
      <div id="innercontent">
        {/* <div id="head">Your AI Tutor, Anytime, Anywhere </div> */}
        <div id="welcomemsg" style={{ fontSize: "20px", fontWeight: "bold", fontFamily: "cursive", color: "white", margin: "0px 0px 20px 10px" }}>{t('Welcomemsg')}
        </div>
        <div id="head" >{t('headtextinimg')} </div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            color: "white",
            fontFamily: "cursive",
            opacity: "1.5",
            marginLeft:"10px"
          }}
        >
          I Want To Learn {" "}
          <span
            style={{
              color: "white",
              fontSize: "22px",
            fontFamily: "cursive",

              // fontStyle: "italic",
              // fontFamily: "cursive",
            }}
          >
            {inputcourse}
          </span>{" "}
        </div>
        {/* <div>#LearnWithAI #DigitalLearning</div> */}
        <div id="inputfieldofhome">
          <div id="searchicon">
            <ion-icon name="search"></ion-icon>
          </div>
          <div>
            <input type="text" id="searchbar" placeholder="Search The Courses"></input>
          </div>
          <div id="sendicon">
             <ion-icon name="send"></ion-icon>
          </div>
          {/* <div><button type="button">Search</button></div> */}
        </div>
      </div>
      <div id="innerbody">
        <div class="row">
          <div style={{ padding: "0px 30px 10px 30px", textAlign: "center" }} class="col">
            <div class="block1">

            <div style={{ width: "100%", margin: "60px 0px 10px 0px" }}  >
             
              {t('coursedesc1')}
            </div>
            <button type="button" style={{textAlign:"center",borderRadius:"10px",padding:"8px 8px 8px 8px",backgroundColor:"blue",color:"white"}}>Learn Marketting</button>
            </div>
          </div>
          <div class="col" style={{ padding: "0px 30px 10px 30px",textAlign:"center" }}>
            <div class="block" style={{border:"2.5px solid hsl(133, 3.60%, 48.40%)"}}>
              <img
                src={Digitalimg}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              ></img>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col" style={{textAlign:"center"}}>
            <div class="block" style={{border:"2.5px solid hsl(133, 3.60%, 48.40%)"}}>
              <img
                src={Datascienceimg}
                style={{
                  width: "100%",
                  height: "100%",
                  // marginLeft: "80px",
                  borderRadius: "10px",
                }}
              ></img>
            </div>
          </div>
          <div class="col" style={{ textAlign: "center" }}>
            <div class="block1">

            <div style={{ width: "100%", margin: "60px 0px 10px 40px" }}>
            
              {t('coursedesc2')}
            </div>
            <button type="button" style={{textAlign:"center",borderRadius:"10px",padding:"8px 8px 8px 8px",backgroundColor:"blue",color:"white"}}>Learn DataScience</button>
            </div>
          </div>
        </div>
        <div class="row">
          <div style={{ padding: "0px 30px 10px 30px", textAlign: "center" }} class="col">
            <div class="block1">

            <div style={{ width: "100%", margin: "60px 0px 10px 0px" }}>
             
              {t('coursedesc1')}
            </div>
            <button type="button" style={{textAlign:"center",borderRadius:"10px",padding:"8px 8px 8px 8px",backgroundColor:"blue",color:"white"}}>Learn Python</button>
            </div>
          </div>
          <div class="col" style={{ padding: "0px 30px 10px 30px",textAlign:"center" }}>
            <div class="block" style={{border:"2.5px solid hsl(133, 3.60%, 48.40%)"}}>
              <img
                src={pythonimg}
                style={{
                  width: "100%",
                  height: "100%",
                  // marginLeft: "80px",
                  borderRadius: "10px",
                }}
              ></img>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col" style={{textAlign:"center"}}>
            <div class="block" style={{border:"2.5px solid hsl(131, 4.40%, 49.20%)"}}>
              <img
                src={Reactimg}
                style={{
                 width: "100%",
                  height: "100%",
                  // marginLeft: "80px",
                  borderRadius: "10px",
              
                }}
              ></img>
            </div>
          </div>
          <div class="col" style={{ textAlign: "center" }}>
            <div class="block1">

            <div style={{ width: "100%", margin: "60px 0px 10px 0px" }}>
            
              {t('coursedesc2')}
            </div>
            <button type="button" style={{textAlign:"center",borderRadius:"10px",padding:"8px 8px 8px 8px",backgroundColor:"blue",color:"white"}}>Learn ReactJS</button>
          </div>
            </div>
        </div>
        <div class="row">
          <div style={{ padding: "0px 30px 10px 30px", textAlign: "center" }} class="col">
            <div class="block1">

            <div style={{ width: "100%", margin: "60px 0px 10px 0px" }}>
             
              {t('coursedesc1')}
            </div>
           <button type="button" style={{textAlign:"center",borderRadius:"10px",padding:"8px 8px 8px 8px",backgroundColor:"blue",color:"white"}}>Learn MongoDB</button>
          </div>
            </div>
          <div class="col" style={{ padding: "0px 30px 10px 30px",textAlign:"center"}}>
            <div class="block" style={{border:"2.5px solid hsl(129, 9.70%, 61.80%)"}}>
              <img
                src={mongodbimg}
                style={{
                  width: "100%",
                  height: "100%",
                  // marginLeft: "80px",
                  borderRadius: "10px",
                }}
              ></img>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col" style={{ textAlign: "center" }}>
            <Link to="/courses/Nodejs/">
            
            <div class="block" style={{border:"2.5px solid hsl(129, 3.00%, 46.10%)"}}>
              <img
                src={Nodejsimg}
                style={{
                  width: "100%",
                  height: "100%",
                  // marginLeft: "80px",
                  borderRadius: "10px",
              
                }}
              ></img>
            </div>
            </Link>
          </div>
          <div class="col" style={{ textAlign: "center" }}>
            <div class="block1">

            <div style={{ width: "100%", margin: "60px 0px 10px 0px" }}>
            
              {t('coursedesc2')}
            </div>
            <Link to="/courses/Nodejs/"><button type="button" style={{textAlign:"center",borderRadius:"10px",padding:"8px 8px 8px 8px",backgroundColor:"blue",color:"white"}}>Learn NodeJS</button></Link>
          </div>
            </div>
        </div>
      </div>
      <div>
        
        </div>
           <Paidcourses/>
        <div>
          <Footer/>
        </div>
      
    </div>
  );
}

export default Innercontainer;
