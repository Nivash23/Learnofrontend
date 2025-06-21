import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { useContext } from "react";
import Datas from '../Utils/Datas'

function Googleform() {
  
  // const { selectedcourse,setSelectedcourse } = useOutletContext();
  const {SelectedCourse} = useContext(Datas);

  return (
    <div id="Googleformpage">
      <div id="Googleformcontainer">


      <div id="Googleformpagenav">
          <div style={{color:"rgb(244, 192, 3)",fontWeight:"bold"}} >Lsaii</div>
          <Link to="/" style={{textDecoration:"none",color:"black"}}>
            <div id="Googleformhomepagebut" style={{color:"white"}}>Home</div>
          </Link>
        </div>
      <div id="Googleformbox">
              <div style={{fontWeight:"bold",fontSize:"18px"}}>Choosed Course is --{SelectedCourse}--</div>
        <div id="Ginputscontainer">
          <div id="email">
            <div>
              <label>Email </label>
            </div>
            <div class="ginput">
              <input  type="email" placeholder="Enter Your email.." />
            </div>
          </div>
          <div id="mobile">
            <div>
              <label>Mobile No </label>
            </div>
            <div class="ginput" >
              <input type="text" placeholder="Enter Your Phone Number.." />
            </div>
          </div>
          <div id="interested">
            <div>
              <label>Interested </label>
            </div>
           <div id="radiobuts">
                <div style={{display:"flex",marginRight:"10px"}}>
                <div><input type="radio" name="interest" /></div>
                  <div style={{padding:"0px 2px 0px 10px"}}>Yes</div>
              </div>
              <div style={{display:"flex"}}>
              <div><input type="radio" name="interest" /></div>
              <div style={{padding:"0px 2px 0px 10px"}}>No</div>
              </div>
            </div>
          </div>
          <button type="button" >Submit</button>
        </div>
        <div id="loadingstatus"></div>
      </div>
      </div>
    </div>
  );
}

export default Googleform;
