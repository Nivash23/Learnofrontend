import React from 'react'
import '../style/card.css'

function Subscribecoursecard({src,name,price,originalprice}) {
  return (
      <div>
          <div id="cardcontainer">
        <img style={{ height: "260px", width: "100%" }} src={src} alt="coding"></img>
        <div style={{ fontWeight: "bold", fontSize: "20px", color: "GrayText", display: "flex", justifyContent: "center" }}>{name}</div>
        <div style={{ width: "205px", height: "30px", overflow: "hidden",margin:"10px 0px 10px 20px" }}>4.2 ratings <span style={{ color: "orange", fontSize: "24px" }}>★ ★ ★ ★ ★</span><span>&#9734;</span> </div>
        <div style={{ fontWeight: "bold", margin: "10px 0px 10px 20px" }}>Rs.{price} <span style={{ textDecoration: "line-through", color: "GrayText", marginLeft: "10px" }}>Rs.{originalprice }</span></div>
        <div style={{display:"flex",justifyContent:"center"}}>
          <button type="button" style={{backgroundColor:"lightseagreen",padding:"6px 15px 6px 15px",color:"white",borderRadius:"7px"}}>Purchase</button>
        </div>   
          </div>
    </div>
  )
}

export default Subscribecoursecard