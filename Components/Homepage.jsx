import React, { useEffect, useState } from "react";
import { Link,useOutletContext } from "react-router-dom";
import Innercontainer from "./Innercontainer";
// import Animation from './animation'
import Logo from '../images/Logo/logo blck.png'
import { useContext } from "react";
import Datas from "../Utils/Datas";

function Homepage() {
  const { t, languagecode,setLanguagecode,  setSelectedcourse } = useOutletContext();
  // const {setLanguagecode}=useContext(Datas)
  const [coursemenubutstate, setCoursemenubutstate] = useState("Cmbutinactive");
  const [pagelangmenubutstate, setPagelangmenubutstate] = useState("PLmbutinactive");
  const [pagelangtext, setPagelangtext] = useState('English');

 
  



  return (
    <div id="totalcontainer">

    <div id="wholecontainer">
        <div id="Nav1">
          <div id="nav1menus">

        <div id="langbut" onClick={() => {
            if (pagelangmenubutstate == "PLmbutinactive")
            {
              setPagelangmenubutstate("PLmbutactive");
              setCoursemenubutstate('Cmbutinactive');
            }
            else {
              setPagelangmenubutstate('PLmbutinactive')
            }
          }}>
          <div >{pagelangtext }</div>
          <div>
            <ion-icon name="arrow-dropdown"></ion-icon>
          </div>
        </div>

        <Link to='/login' style={{textDecoration:"none",color:"black",marginRight:"20px"}} ><div id="logbut">Login</div></Link>
          </div>
        
        
      </div>
      <div class={pagelangmenubutstate}>
        <div id="pagelangbox">

        <div id="pagelangmenus">

            <div onClick={() => { setLanguagecode('en'); setPagelangmenubutstate('PLmbutinactive');setPagelangtext('English') }}>English</div>
            <div onClick={() => { setLanguagecode('ta'); setPagelangmenubutstate('PLmbutinactive'); setPagelangtext('Tamil')}}>Tamil</div>
        </div>
         {/* <div id="sharpdesignPagelangmenu"></div> */}
        </div>
        </div>
        <div id="wholenav2">

      <div id="Nav2">
        <div id="logo"><img src={Logo}></img></div>
        <div id="menus">
          <div id="lists">
            {/* <div
              
              
              >
              Language
              </div> */}

              <Link to="/learning" style={{ textDecoration: "none", color: "black" }}><div id="stlearnbut">Learning Process</div></Link>
            <div
              id="coursemenubut"
              onClick={() => {
                if (coursemenubutstate == "Cmbutinactive") {
                  setCoursemenubutstate("Cmbutactive");
                  setPagelangmenubutstate('PLmbutinactive')
                } else {
                  setCoursemenubutstate("Cmbutinactive");
                }
              }}>Courses</div>
            {/* <div>Phrasebooks</div> */}
            <div>Learno blogs</div>
            <Link to="/Internships" style={{textDecoration:"none", color:"black"}}><div>Internships</div></Link>
          </div>

          <div id="menulines"><ion-icon name="menu" ></ion-icon></div>
        </div>
          </div>
        </div>
      <div class={coursemenubutstate}>
        <div id="coursemenucontainer">
          
            
              <div>Artificial Intelligence</div>
              <div>FE- Web Development</div>
              <div>BE- Web Development</div>
              <div>Cyber Security</div>
              <div style={{borderBottom:"none"}}>Data Science</div>
              
            

          
          {/* <div id="coursedesign"></div> */}
        </div>
      </div>
      </div>
      
      <div>
        <Innercontainer t={t } setSelectedcourse={setSelectedcourse} setPagelangmenubutstate={setPagelangmenubutstate} setCoursemenubutstate={setCoursemenubutstate} />
      </div>

    </div>
  );
}

export default Homepage;
