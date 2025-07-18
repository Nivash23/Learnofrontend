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
import Mobileinnerbody from "./Mobileinnerbody";
import Desktopinnerbody from './Desktopinnerbody'
import Datas from "../Utils/Datas";
import { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Innercontainer({setPagelangmenubutstate,setCoursemenubutstate,setMenulinemenudisplay}) {
  // let courses = ["Python", "Web Development", "Java", "FullStack Development"];
  // let fontfamlies = ['sans', 'cursive', 'sans-serif'];
  // const [inputcoursefont, setInputcoursefont] = useState(fontfamlies[0]);
  // const [inputcourse, setInputcourse] = useState(courses[0]);
  // const { setSelectedcourse, SelectedCourse } = useContext(Datas);
  // const { t, selectedcourse, setSelectedcourse } = useOutletContext();
  // const [scrolldirection, setScrolldirection] = useState("SDactive");
  // const navigate = useNavigate();

  // const Searchcoursehandler = async () => {
  //   let count = 0;
  //   const intervalid = setInterval(() => {
  //     if (count < 4) {
  //       setInputcourse(courses[count]);
  //       // setInputcoursefont(fontfamlies[count])

  //       // console.log(count)
  //       count++;
  //     } else {
  //       clearInterval(intervalid);
  //       console.log("Stopped");
  //     }
  //   }, 4000);
  // };
  // const [ismobile, setIsmobile] = useState(window.innerWidth <= 600)
  const ismobile = useMediaQuery({ maxWidth: 600 });
  

  // useEffect(() => {
  //   // setInterval(() => {
  //   //   Searchcoursehandler();
  //   // }, 20000);
  // }, []);
  // setTimeout(() => {
  //   setScrolldirection("SDinactive");
  // }, 5000);

  return (
    <div>
      {
        ismobile ? <Mobileinnerbody/> : <Desktopinnerbody/>
      }
    </div>
    
  );
}

export default Innercontainer;
