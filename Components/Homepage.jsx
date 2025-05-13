import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Innercontainer from "./Innercontainer";
import Animation from './animation'
import Logo from '../images/Logo/logo6.png'

function Homepage({setLanguagecode,languagecode,t}) {
  const [coursemenubutstate, setCoursemenubutstate] = useState("Cmbutinactive");
  const [pagelangmenubutstate, setPagelangmenubutstate] = useState("PLmbutinactive");
  const [pagelangtext, setPagelangtext] = useState('English');

 
  



  return (
    <div>

    <div id="wholecontainer">
      <div id="Nav1">
        
        <div id="langbut" onClick={() => {
            if (pagelangmenubutstate == "PLmbutinactive")
            {
              setPagelangmenubutstate("PLmbutactive")
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
      <div class={pagelangmenubutstate}>
        <div id="pagelangbox">

        <div id="pagelangmenus">

            <div onClick={() => { setLanguagecode('ta'); setPagelangmenubutstate('PLmbutinactive'); setPagelangtext('Tamil')}}>Tamil</div>
            <div onClick={() => { setLanguagecode('en'); setPagelangmenubutstate('PLmbutinactive');setPagelangtext('English') }}>English</div>
        </div>
         <div id="sharpdesignPagelangmenu"></div>
        </div>
      </div>
      <div id="Nav2">
        <div id="logo"><img src={Logo}></img></div>
        <div id="menus">
          <div id="lists">
            {/* <div
              
              
            >
              Language
            </div> */}

            <div
              id="coursemenubut"
              onClick={() => {
                if (coursemenubutstate == "Cmbutinactive") {
                  setCoursemenubutstate("Cmbutactive");
                } else {
                  setCoursemenubutstate("Cmbutinactive");
                }
              }}>Courses</div>
            {/* <div>Phrasebooks</div> */}
            <div>Learno blogs</div>
            <Link to="/Internships" style={{textDecoration:"none", color:"white"}}><div>Internships</div></Link>
          </div>

          <Link to="/learning" style={{ textDecoration: "none", color: "black" }}><div id="stlearnbut">Start Learning</div></Link>
          <div id="menulines"><ion-icon name="menu" ></ion-icon></div>
        </div>
          </div>
      <div class={coursemenubutstate}>
        <div id="coursemenucontainer">
          <div class="row">
            <div class="col">
              <div>Artificial Intelligence</div>
              <div>FE- Web Development</div>
              <div>BE- Web Development</div>
              <div>Cyber Security</div>
              <div style={{borderBottom:"none"}}>Data Science</div>
              {/* <div>Java</div> */}
              {/* <div>Item 6</div>
              <div>Item 7</div>
              <div>Item 8</div>
              <div>Item 9</div>
              <div>Item 10</div> */}
            </div>
            {/* <div class="col-md-3">
              <div>Item 11</div>
              <div>Item 12</div>
              <div>Item 13</div>
              <div>Item 14</div>
              <div>Item 15</div>
              <div>Item 16</div>
              <div>Item 17</div>
              <div>Item 18</div>
              <div>Item 19</div>
              <div>Item 20</div>
            </div>
            <div class="col-md-3">
              <div>Item 21</div>
              <div>Item 22</div>
              <div>Item 23</div>
              <div>Item 24</div>
              <div>Item 25</div>
              <div>Item 26</div>
              <div>Item 27</div>
              <div>Item 28</div>
              <div>Item 29</div>
              <div>Item 30</div>
            </div> */}
          </div>
          <div id="coursedesign"></div>
        </div>
      </div>
    </div>
      <div>
        <Innercontainer t={t } />
      </div>

    </div>
  );
}

export default Homepage;
