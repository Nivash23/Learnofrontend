import React from 'react'
import banner from '../images/Courses/banner5.avif'
import v1 from '../images/Courses/v1.mp4'

function Digitalcourse() {
  return (
      <div style={{textAlign:"center"}}>
      <h1>Access The Digital Market course Here..</h1>
      <video
        src={v1}
        autoPlay
        loop
        muted
      />
        

    </div>
  )
}

export default Digitalcourse