import React from 'react'
import Subscribecoursecard from './subscribecoursecard'

import digitalmarketimg from '../images/Courses/selected/dm (5).avif'

import Frontendimg from '../images/Courses/selected/reactjs.avif'
import Fullstackimg from '../images/Courses/selected/ai (3).avif'
import datascienceimg from '../images/Courses/selected/ds (2).avif'
import cybersecurityimg from '../images/Courses/selected/python.avif'
import aiimg from '../images/Courses/selected/node js (2).avif'



function UpdatedSubscription() {
  return (
      <div>
          <div style={{display:"flex", fontWeight: "bold", marginBottom: "50px", fontSize: "22px",justifyContent:"center" }}>Subscription</div>
          <div id="fadeeffectinsubhead"></div>
          <div id="coursecontainer" >
              
          <div class="row">
                  <div class="col-md-4">
                      <Subscribecoursecard src={Fullstackimg } />
              </div>
                  <div class="col-md-4">
                      <Subscribecoursecard src={Frontendimg } />
              </div>
                  <div class="col-md-4">
                      <Subscribecoursecard src={cybersecurityimg } />
              </div>
          </div>
          <div class="row" style={{marginTop:"100px"}}>
                  <div class="col-md-4">
                      <Subscribecoursecard src={datascienceimg } />
              </div>
                  <div class="col-md-4">
                      <Subscribecoursecard src={digitalmarketimg} />
              </div>
                  <div class="col-md-4">
                      <Subscribecoursecard src={aiimg} />
              </div>
          </div>
          </div>
    </div>
  )
}

export default UpdatedSubscription