import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WhatIsReact_01 from "./components/01_WhatIsReact/WhatIsReact_01";
import SettingUpReact_02 from "./components/02_SettingUpReact/SettingUpReact_02";
import IntroductionToJSK_03 from "./components/03_IntroductionToJSX/IntroductionToJSK_03";
import ComponentsInReact_04 from "./components/04_ComponentsInReact/ComponentsInReact_04";
import StateInReact_05 from "./components/05_StateInReact/StateInReact_05";
import HandlingEvents_06 from "./components/06_HandlingEvents/HandlingEvents_06";
import Conditionals_07 from "./components/07_Conditionals/Conditionals_07";
import FormsAndConditionals_08 from "./components/08_FormsAndConditionals/FormsAndConditionals_08";
import Lists_09 from "./components/09_Lists/Lists_09";
import IntroductionToReactHooks_10 from "./components/10_IntroductionToReactHooks/IntroductionToReactHooks_10";
import UseStateInDepth_11 from "./components/11_useStateInDepth/UseStateInDepth_11";
import UseEffectInDepth_12 from "./components/12_useEffectInDepth/UseEffectInDepth_12";
import UseRefInDepth_13 from "./components/13_useRefInDepth/UseRefInDepth_13";
import HandlingFormsInReact_14 from "./components/14_HandlingFormsInReact/HandlingFormsInReact_14";
import FormAndList_17 from "./components/17_FormAndList/FormAndList_17";
import Mutations_18 from "./components/18_Mutations/Mutations_18";
import Filters_19 from "./components/19_Filters/Filters_19";
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
            <li>
              <Link to="/IntroductionToJSK">IntroductionToJSK</Link>
            </li>
            <li>
              <Link to="/ComponentsInReact?name=Tahseen">
                ComponentsInReact
              </Link>
            </li>
            <li>
              <Link to="/StateInReact">StateInReact</Link>
            </li>
            <li>
              <Link to="/HandlingEvents">HandlingEvents</Link>
            </li>
            <li>
              <Link to="/Conditionals">Conditionals</Link>
            </li>
            <li>
              <Link to="/FormsAndConditionals">FormsAndConditionals</Link>
            </li>
            <li>
              <Link to="/Lists">Lists</Link>
            </li>
            <li>
              <Link to="/IntroductionToReactHooks">
                IntroductionToReactHooks
              </Link>
            </li>
            <li>
              <Link to="/useStateInDepth">useStateInDepth</Link>
            </li>
            <li>
              <Link to="/UseEffectInDepth">UseEffectInDepth</Link>
            </li>
            <li>
              <Link to="/UseRefInDepth">UseRefInDepth</Link>
            </li>
            <li>
              <Link to="/HandlingFormsInReact">HandlingFormsInReact</Link>
            </li>
            <li>
              <Link to="/FormAndList">FormAndList</Link>
            </li>
            <li>
              <Link to="/Mutations">Mutations</Link>
            </li>
            <li>
              <Link to="/Filters">Filters</Link>
            </li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<WhatIsReact_01 />} />
            <Route path="/SettingUpReact" element={<SettingUpReact_02 />} />
            <Route
              path="/IntroductionToJSK"
              element={<IntroductionToJSK_03 />}
            />
            <Route
              path="/ComponentsInReact"
              element={<ComponentsInReact_04 />}
            />
            <Route path="/StateInReact" element={<StateInReact_05 />} />
            <Route path="/HandlingEvents" element={<HandlingEvents_06 />} />
            <Route path="/Conditionals" element={<Conditionals_07 />} />
            <Route
              path="/FormsAndConditionals"
              element={<FormsAndConditionals_08 />}
            />
            <Route path="/Lists" element={<Lists_09 />} />
            <Route
              path="/IntroductionToReactHooks"
              element={<IntroductionToReactHooks_10 />}
            />
            <Route path="/useStateInDepth" element={<UseStateInDepth_11 />} />
            <Route path="/UseEffectInDepth" element={<UseEffectInDepth_12 />} />
            <Route path="/UseRefInDepth" element={<UseRefInDepth_13 />} />
            <Route
              path="/HandlingFormsInReact"
              element={<HandlingFormsInReact_14 />}
            />
            <Route path="/FormAndList" element={<FormAndList_17 />} />
            <Route path="/Mutations" element={<Mutations_18 />} />
            <Route path="/Filters" element={<Filters_19 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
