import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WhatIsReact_01 from "./components/01_WhatIsReact/WhatIsReact_01";
import SettingUpReact_02 from "./components/02_SettingUpReact/SettingUpReact_02";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="sidebar">
          <ul className="nav-links">
            <li>
              <Link to="/">WhatIsReact</Link>
            </li>
            <li>
              <Link to="/SettingUpReact">SettingUpReact</Link>
            </li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<WhatIsReact_01 />} />
            <Route path="/SettingUpReact" element={<SettingUpReact_02 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
