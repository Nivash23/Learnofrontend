import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../Components/Multiplelang.jsx";
import { RouterProvider } from 'react-router-dom';
import { Routers } from "./App.jsx";




ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Routers}/>
);
