import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorComponent() {
  const err = useRouteError();
  console.log(err)
  return (
      <div style={{textAlign:"center"}}>
      <h1>Error ! {err.status}{err.statusText }</h1>
      <h2>Please Enter the correct Url</h2>
    </div>
  )
}

export default ErrorComponent