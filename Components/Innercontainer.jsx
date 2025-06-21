import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import "../style/App.css";
import Paidcourses from "./paidcourses";

import bannerimage from "../images/Courses/banner8.webp";
import v1 from "../images/Courses/selected/lv_0_20250516153348.webm";
import v2 from "../images/Courses/v2.mp4";
// import i2 from '..//images/'

import Reactimg from "../images/Courses/selected/reactjs.avif";
import aiimg from "../images/Courses/selected/ai (3).avif";
import javaimg from "../images/Courses/selected/java (2).avif";
import sqlimg from "../images/Courses/selected/Sql (2).avif";
import Nodejsimg from "../images/Courses/selected/node js (2).avif";
import mongodbimg from "../images/Courses/mongodbimg.avif";
import Digitalimg from "../images/Courses/selected/dm (5).avif";
import pythonimg from "../images/Courses/selected/python.avif";
import Datascienceimg from "../images/Courses/selected/ds (2).avif";
import UpdatedSubscription from "./UpdatedSubscription";
import Datas from "../Utils/Datas";
import { useContext } from "react";
import { useOutletContext } from "react-router-dom";

function Innercontainer({setPagelangmenubutstate,setCoursemenubutstate}) {
  let courses = ["Python", "Web Development", "Java", "FullStack Development"];
  // let fontfamlies = ['sans', 'cursive', 'sans-serif'];
  // const [inputcoursefont, setInputcoursefont] = useState(fontfamlies[0]);
  const [inputcourse, setInputcourse] = useState(courses[0]);
  // const { setSelectedcourse, SelectedCourse } = useContext(Datas);
  const { t, selectedcourse, setSelectedcourse } = useOutletContext();
  const [scrolldirection, setScrolldirection] = useState("SDactive");
  const navigate = useNavigate();

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
  setTimeout(() => {
    setScrolldirection("SDinactive");
  }, 5000);

  return (
    <div>
      <div id="innercontainer" onClick={() => {
        setPagelangmenubutstate('PLmbutinactive');
        setCoursemenubutstate('Cmbutinactive')
      }}>
        {/* <img src={bannerimage}></img> */}
        <video  src={v1} autoPlay loop muted />
      </div>
      {/* <div id="innercontent">
        
        <div
          id="welcomemsg"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "cursive",
            color: "white",
            margin: "0px 0px 20px 10px",
          }}
        >
          {t("Welcomemsg")}
        </div>
        <div id="head">{t("headtextinimg")} </div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            color: "white",
            fontFamily: "cursive",
            opacity: "1.5",
            marginLeft: "10px",
          }}
        >
          I Want To Learn{" "}
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
       
        <div id="inputfieldofhome">
          <div id="searchicon">
            <ion-icon name="search"></ion-icon>
          </div>
          <div>
            <input
              type="text"
              id="searchbar"
              placeholder="Search The Courses"
            ></input>
          </div>
          <div id="sendicon">
            <ion-icon name="send"></ion-icon>
          </div>
          
        </div>
      </div>
      <div class={scrolldirection}>
        <div id="scrollingmsg">
          <div style={{ width: "180px", margin: "20px 0px 10px 50px" }}>
            Scroll Down To Access your Free Courses
          </div>
        </div>

        <div id="scrollarrcontainer">
          <div id="scrollingarrow"></div>
          <div id="scrollingarrow1"></div>
        </div>
      </div> */}

      <div id="innerbody">
        <div style={{display:"flex",justifyContent:"center",backgroundColor:"rgb(206, 206, 206)"}}>

        <div class="freecourses" >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
                alignItems: "center",
              // textAlign:"initial"
          
              }}
            
          >
            <div className="coursepoints">🧩 Component-based architecture.</div>
            <div className="coursepoints">🔄 Seamless state management.</div>
            <div className="coursepoints">💼 Build production-ready UIs.</div>
          </div>
          <div className="courseimg" onClick={()=>{navigate('/courses/Googleform')}}>
            <img
              style={{
                display: "flex",
                justifyContent: "center",
                  alignItems: "center",
                  cursor:"pointer"
                
                }}
                
              src={aiimg}
            ></img>
          </div>
        </div>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <div class="freecourses">
          <div className="courseimg" onClick={()=>{navigate('/courses/Googleform')}}>
            <img src={pythonimg} ></img>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
                alignItems: "center",
              
            }}
          >
            <div className="coursepoints">
              🧠 Easy to learn, powerful in use
            </div>
            <div className="coursepoints">
              🔧 Build scripts, tools, and automations
            </div>
            <div className="coursepoints">
              📊 Gateway to AI, ML, and Data Science
            </div>
          </div>
        </div>
    </div>
        <div style={{display:"flex",justifyContent:"center",background:"linear-gradient(to bottom right,rgb(185, 220, 231),white)"}}>
        <div class="freecourses">
          <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
          
            }}>
            <div className="coursepoints">🧩 Component-based architecture.</div>
            <div className="coursepoints">🔄 Seamless state management.</div>
            <div className="coursepoints">💼 Build production-ready UIs.</div>
          </div>
          <div className="courseimg" onClick={()=>{navigate('/courses/Googleform')}}>
            <img src={Reactimg}></img>
          </div>
        </div>
    </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <div class="freecourses">
          <div className="courseimg" onClick={()=>{navigate('/courses/Googleform')}}>
            <img src={Nodejsimg}></img>
          </div>
          <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
          
            }}>
            <div className="coursepoints">{t("N1")}</div>
            <div className="coursepoints">{t("N2")}</div>
            <div className="coursepoints">{t("N3")}</div>
          </div>
        </div>
    </div>
        <div style={{display:"flex",justifyContent:"center",background:"linear-gradient(to bottom right,#F8E7F6,white)"}}>
        <div class="freecourses">
          <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
          
            }}>
            <div class="coursepoints">💼 Industry-standard for backend</div>
            <div class="coursepoints">🔐 Secure and object-oriented</div>
            <div class="coursepoints">
              🤖 Used in banking, automation, Android
            </div>
          </div>
          <div className="courseimg" onClick={()=>{navigate('/courses/Googleform')}}>
            <img src={javaimg}></img>
          </div>
        </div>  
    </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <div class="freecourses">
          <div className="courseimg" onClick={()=>{navigate('/courses/Googleform')}}>
            <img src={sqlimg}></img>
          </div>
          <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
          
            }}>
            <div class="coursepoints">🧮 Write complex SQL queries</div>
            <div class="coursepoints">🔄 Perform CRUD operations and joins</div>
            <div class="coursepoints">
              📊 Use SQL for analytics and reporting
            </div>
          </div>
        </div>
    </div>
        <div style={{display:"flex",justifyContent:"center",background:"linear-gradient(to right,orange,white)"}}>
        <div class="freecourses">
          <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
          
            }}>
            <div className="coursepoints">{t("m1")}</div>
            <div className="coursepoints">{t("m2")}</div>
            <div className="coursepoints">{t("m3")}</div>
          </div>
          <div className="courseimg">
            <img src={mongodbimg}></img>
          </div>
        </div> 
    </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <div class="freecourses">
          <div className="courseimg">
            <img src={Digitalimg}></img>
          </div>
          <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
          
            }}>
            <div class="coursepoints">📢 Learn SEO, SEM, and Analytics</div>
            <div class="coursepoints">
              📱 Run real campaigns across platforms
            </div>
            <div class="coursepoints">
              💼 Build your digital marketing portfolio
            </div>
          </div>
        </div> 
    </div>
        <div style={{display:"flex",justifyContent:"center",background:"linear-gradient(to right,pink,white)"}}>
        <div class="freecourses">
          <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
          
            }}>
            <div className="coursepoints">
              📊 Data wrangling, analysis, and visualization
            </div>
            <div className="coursepoints">
              🤖 Machine Learning & AI foundations
            </div>
            <div className="coursepoints">
              📈 Real-world datasets and projects
            </div>
          </div>
          <div className="courseimg">
            <img src={Datascienceimg}></img>
          </div>
        </div>
      </div>
    </div>
 
      <div>
        <UpdatedSubscription />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Innercontainer;
