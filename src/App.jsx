import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Homepage from "../Components/Homepage";
import Loginpage from "../Components/Loginpage";
import Learningpage from "../Components/Learningpage";
import Internshipspage from "../Components/Internshipspage";
import { useTranslation } from 'react-i18next';
import Nodejscourse from "../Components/Nodejscourse";


function App() {
  const { t, i18n } = useTranslation();
  const [languagecode, setLanguagecode] = useState('en');
  

  useEffect(() => {
    i18n.changeLanguage(languagecode)
  },[languagecode])
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage setLanguagecode={setLanguagecode } languagecode={languagecode} t={t} />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/learning" element={<Learningpage />} />
          <Route path="/Internships" element={<Internshipspage />} />
          <Route path="/courses/Nodejs/" element={<Nodejscourse/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
