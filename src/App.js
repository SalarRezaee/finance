import React, { useState } from "react";
import { Home, Navbar, Sidebar, PieChart } from "./components";

import { Routes, Route } from "react-router-dom";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="flex w-full h-full">
        <Sidebar open={open} handleChange={handleChange} />
        <div className="flex flex-col w-full">
          <Navbar open={open} handleChange={handleChange} />
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pie-chart" element={<PieChart />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
