import React, { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useContext } from "react";
import Datas from '../Utils/Datas'

function Googleform() {
  
  const { t, selectedcourse, setSelectedcourse } = useOutletContext();
  const navigate = useNavigate();
  // const {SelectedCourse} = useContext(Datas);

  const [formdata, setFormdata] = useState({
    Email: "",
    Name:"",
    Phoneno: "",
    Course:selectedcourse,
    Interested:""
  })

  const handlesubmit = (e) => {
    e.preventDefault();
    

    const formurl = 'https://docs.google.com/forms/d/e/1FAIpQLSfyDjmQJn5HFJGaIRayyWF3Dx9bIexPClTWyRGeCyLJ9mm-yg/formResponse';
    const formbody = new FormData();

    formbody.append('entry.1169104402', formdata.Email);
    formbody.append('entry.1690489574', formdata.Name);
    formbody.append('entry.1502312109', formdata.Phoneno);
    formbody.append('entry.2109634359', formdata.Interested);
    formbody.append('entry.207286917', formdata.Course);
    

    fetch(formurl, {
      method: "POST",
      mode: "no-cors",
      body:formbody
    }).then(() => {
      alert(`Congratulations ${formdata.Name}!,You have Sucessfully Completed the course Registration Process.Our Team will contact you soon..`);
      setFormdata({
        Email: '',
        Name:'',
        Phoneno: '',
        Course:selectedcourse,
        Interested:'',
      })
      navigate('/');
    })
      .catch((e) => {
      alert('Failed Kindly Go Back get Try again..')
    })
    // const data = await response.json();

    // if (response.status == 200)
    // {
    //   console.log(data);
    //   setFormdata({
    //     Email: '',
    //     Phoneno: "",
    //     Interested:''
    //   })
    // }
  }



  return (
    <div id="Googleformpage">
      <div id="Googleformcontainer">


      <div id="Googleformpagenav">
          <div style={{color:"rgb(244, 192, 3)",fontWeight:"bold",flex:"5"}} id="googleformlogo" >Lsaii</div>
          <Link to="/" style={{textDecoration:"none",color:"black",flex:"1"}}>
            <div id="Googleformhomepagebut" style={{color:"white"}}>Home</div>
          </Link>
        </div>
        <div id="Googleboxcontainer">

      <form onSubmit={handlesubmit}>
      <div id="Googleformbox">
              <div style={{fontWeight:"bold",fontSize:"18px"}}>Choosed Course is --{selectedcourse}--</div>
            <div id="Ginputscontainer">
                
          <div id="email">
            <div>
              <label>Email </label>
            </div>
            <div class="ginput">
              <input  type="email" placeholder="Enter Your email.." value={formdata.Email} required onChange={(e)=>{setFormdata({...formdata,Email:e.target.value})}} />
            </div>
          </div>
          <div id="name">
            <div>
              <label>Name </label>
            </div>
            <div class="ginput">
              <input  type="text" placeholder="Enter Your Name.." value={formdata.Name} required onChange={(e)=>{setFormdata({...formdata,Name:e.target.value})}} />
            </div>
          </div>
          <div id="mobile">
            <div>
              <label>Mobile No </label>
            </div>
            <div class="ginput" >
              <input type="text" placeholder="Enter Your Phone Number.." value={formdata.Phoneno} required onChange={(e)=>{setFormdata({...formdata,Phoneno:e.target.value})}}/>
            </div>
          </div>
          <div id="interested">
            <div>
              <label>Interested </label>
            </div>
           <div id="radiobuts">
                <div style={{display:"flex",marginRight:"10px"}}>
                    <div><input type="radio" name="interest" checked={formdata.Interested==='yes'} required value="yes" onChange={(e) => {
                      setFormdata({ ...formdata, Interested: e.target.value });
                      
                    }} /></div>
                  <div style={{padding:"0px 2px 0px 10px"}}>Yes</div>
              </div>
              <div style={{display:"flex"}}>
              <div><input type="radio" name="interest" checked={formdata.Interested==='No'} required value="No" onChange={(e) => {
                setFormdata({ ...formdata, Interested: e.target.value });
                
              }} /></div>
              <div style={{padding:"0px 2px 0px 10px"}}>No</div>
              </div>
            </div>
          </div>
          <button type="submit" >Submit</button>
        </div>
        <div id="loadingstatus"></div>
      </div>
       </form>
        </div>
      </div>
    </div>
  );
}

export default Googleform;
