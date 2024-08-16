import "./App.css";
import SideMenu from "./components/SideMenu";
import Dashboard from "./components/Dashboard";
import ProgressTracker from "./components/ProgressTracker";
import WeightTable from "./components/WeightTable";
import CalorieTable from "./components/CalorieTable";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Progress-Tracker" element={<ProgressTracker />} />
            <Route path="/Weight-Table" element={<WeightTable />} />
            <Route path="/Calorie-Table" element={<CalorieTable />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
