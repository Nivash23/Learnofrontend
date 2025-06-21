import React from 'react'
import '../style/card.css'

function Subscribecoursecard({src}) {
  return (
      <div>
          <div id="cardcontainer">
              <img style={{height:"260px",width:"100%"}} src={src} alt="coding"></img>
              
          </div>
    </div>
  )
}

export default Subscribecoursecard