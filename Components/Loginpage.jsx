import React, { useState } from "react";
import { Link } from "react-router-dom";

function Loginpage() {
  const [loginpagestate, setLoginpagestate] = useState("Loginpageactive");
  const [registerpagestate, setRegisterpagestate] = useState("Regpageinactive");
 
  const [loginformdetails, setLoginformdetails] = useState({
    email: "",
    password:""
  })

  const [registerformdetails, setRegisterformdetails] = useState({
    email: "",
    name: "",
    password:""
  })

  return (
    <div id="loginpage" class={loginpagestate}>
      <div id="logincontainer">
        <div id="loginpagenav">
          <div style={{color:"rgb(244, 192, 3)",fontWeight:"bold",flex:"6"}} >Lsaii</div>
          <Link to="/" style={{textDecoration:"none",color:"black",flex:"1"}}>
            <div id="loghomepagebut" style={{color:"white"}}>Home</div>
          </Link>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>

        <div id="loginbox">
          <div style={{marginLeft:"140px",fontSize:"22px",fontWeight:"bold"}}>LOGIN</div>
          <div>
            <div class="label">
              <label>Username </label>
            </div>
            <div>
              <input type="email" placeholder="Enter The Email.." value={loginformdetails.email} onChange={(e)=>{setLoginformdetails({...loginformdetails,email:e.target.value})}}/>
            </div>
          </div>
          <div>
            <div class="label">
              <label>Password </label>
            </div>
            <div>
              <input type="password" placeholder="Enter the password ..." value={loginformdetails.password} onChange={(e)=>{setLoginformdetails({...loginformdetails,password:e.target.value})}} />
            </div>
          </div>
          <div>
            <div id="containerloginbut">Login</div>
          </div>
          <div id="Registerpageswitch">Create new Account ? <span style={{ textDecoration: "underline", fontWeight: "bold", paddingLeft: "5px", cursor: "pointer" }} onClick={() => {
            setRegisterpagestate('Regpageactive');
            setLoginpagestate('Loginpageinactive');
          }}>Register</span></div>
        </div>
        <div class={registerpagestate}>

        <div id="Registerbox">
           <div style={{marginLeft:"120px",fontSize:"22px",fontWeight:"bold"}}>REGISTER</div>
          <div>
            <div class="label">
              <label>Username </label>
            </div>
            <div>
                <input type="email" placeholder="Enter The Email.." value={registerformdetails.email} onChange={(e) => {setRegisterformdetails({...registerformdetails,email:e.target.value})}} />
            </div>
          </div>
          <div>
            <div class="label">
              <label>Name </label>
            </div>
            <div>
              <input type="text" placeholder="Enter The Name.." value={registerformdetails.name} onChange={(e) => {setRegisterformdetails({...registerformdetails,name:e.target.value})}} />
            </div>
          </div>
          <div>
            <div class="label">
              <label>Password </label>
            </div>
            <div>
              <input type="password" placeholder="Enter the password ..." value={registerformdetails.password} onChange={(e) => {setRegisterformdetails({...registerformdetails,password:e.target.value})}} />
            </div>
          </div>
          <div>
            <div id="containerRegisterbut">Register</div>
          </div>
            <div id="Loginpageswitch">Already have a account ? <span onClick={() => {
              setLoginpagestate('Loginpageactive');
              setRegisterpagestate('Regpageinactive')
          }} style={{textDecoration:"underline",fontWeight:"bold",paddingLeft:"5px",cursor:"pointer"}}>Login</span></div>
        </div>
        </div>
      </div>
        </div>
    </div>
  );
}

export default Loginpage;
