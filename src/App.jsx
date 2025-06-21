import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Homepage from "../Components/Homepage";
import Loginpage from "../Components/Loginpage";
import Learningpage from "../Components/Learningpage";
import Internshipspage from "../Components/Internshipspage";
import { useTranslation } from 'react-i18next';
// import Nodejscourse from "../Components/Nodejscourse";
// import Digitalcourse from "../Components/Digitalcourse";
// import Datascience from "../Components/Datascience";
// import Reactjscourse from "../Components/Reactjscourse";
// import Pythoncourse from "../Components/Pythoncourse";
// import Mongodbcourse from "../Components/Mongodbcourse";
import Googleform from "../Components/googleform";
import ErrorComponent from "../Components/ErrorComponent";
import { createBrowserRouter, Outlet } from "react-router-dom";
// import { useContext } from "react";
import Datas from '../Utils/Datas'

// import { Outlet } from "react-router-dom";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element:<Homepage/>
    },
      {
        path: "/Internships",
        element:<Internshipspage/>
      },
      {
        path: "/courses/Googleform",
        element:<Googleform/>
      },
      {
        path: "/login",
        element:<Loginpage/>
      },
      {
        path: "/learning",
        element:<Learningpage/>
      },

    ]

  },

])
function App() {

  const { t, i18n } = useTranslation();
  const [languagecode, setLanguagecode] = useState('en');
  const [selectedcourse, setSelectedcourse] = useState('');
  
  
  useEffect(() => {
    i18n.changeLanguage(languagecode)
  },[languagecode])
  return (
    <div id="wholebody">
 

      

      <Outlet context={{t,languagecode,setLanguagecode,setSelectedcourse,selectedcourse}} />
     
      
        
     
      
    </div>
  );
}

export default App;
