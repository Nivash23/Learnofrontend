import React from 'react'
import Subscribecoursecard from './Subscribecoursecard'

import digitalmarketimg from '../images/Courses/selected/dm (5).avif'

import Frontendimg from '../images/Courses/selected/reactjs.avif'
import Fullstackimg from '../images/Courses/selected/ai (3).avif'
import datascienceimg from '../images/Courses/selected/ds (2).avif'
import cybersecurityimg from '../images/Courses/selected/python.avif'
import javaimg from '../images/Courses/selected/java (2).avif'



function UpdatedSubscription() {
  return (
      <div>
          <div style={{ display: "flex", fontWeight: "bold", marginBottom: "50px", fontSize: "26px", justifyContent: "center" }}>SUBSCRIPTION COURSES</div>
          
          <div id="fadeeffectinsubhead"></div>
          <div id="coursecontainer" >
              
          <div class="row">
                  <div class="col-md-4">
                      <Subscribecoursecard src={Fullstackimg } name="FullStack Development" price="499" originalprice="2999" />
              </div>
                  <div class="col-md-4">
                      <Subscribecoursecard src={Frontendimg } name="Frontend Development" price="600" originalprice="999" />
              </div>
                  <div class="col-md-4">
                      <Subscribecoursecard src={cybersecurityimg } name="Cyber Security" price="899" originalprice="1999" />
              </div>
          </div>
          <div class="row" style={{marginTop:"100px"}}>
                  <div class="col-md-4">
                      <Subscribecoursecard src={datascienceimg } name="Datascience" price="499" originalprice="2999"/>
              </div>
                  <div class="col-md-4">
                      <Subscribecoursecard src={digitalmarketimg} name="DigitalMarketing" price="1200" originalprice="5000"/>
              </div>
                  <div class="col-md-4">
                      <Subscribecoursecard src={javaimg} name="Java Development" price="500" originalprice="2499" />
              </div>
          </div>
          </div>
    </div>
  )
}

export default UpdatedSubscription