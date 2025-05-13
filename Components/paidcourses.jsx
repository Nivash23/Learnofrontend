import React, { useEffect, useRef } from "react";

import digitalmarketimg from '../images/Courses/Digitalmarketting.webp'

import Frontendimg from '../images/Courses/Frontend.png'
import Fullstackimg from '../images/Courses/fullstack.png'
import datascienceimg from '../images/Courses/Datascience.png'
import cybersecurityimg from '../images/Courses/Cybersecurity.webp'


function Autoscrollcontainer() {
    
    
  return (
    <div>
      <div id="subscriptioncontainer">

      <div>
      <div style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "150px",color:"GrayText" }}>
          Subscription Courses
          </div>
          <div id="fadeeffectinsubhead"></div>
        <div id="courselist">
            <div class="paid">
              <img style={{width:"100%",height:"100%",borderRadius:"10px"}} src={Fullstackimg}></img>
            </div>
            <div class="paid">
            <img style={{width:"100%",height:"100%",borderRadius:"10px"}} src={digitalmarketimg}></img>
            </div>
            <div class="paid">
            <img style={{width:"100%",height:"100%",borderRadius:"10px"}} src={Frontendimg}></img>

            </div>
            <div class="paid">
            <img style={{width:"100%",height:"100%",borderRadius:"10px"}} src={datascienceimg}></img>

            </div>
            <div class="paid">
            <img style={{width:"100%",height:"100%",borderRadius:"10px"}} src={cybersecurityimg}></img>

            </div>
            <div class="paid">
            <img style={{width:"100%",height:"100%",borderRadius:"10px"}} src={cybersecurityimg}></img>

            </div>
            <div class="paid"></div>

        </div>
    </div>
          </div>
    </div>
  );
}

export default Autoscrollcontainer;
