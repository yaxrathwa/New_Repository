import Dashboard from "./scenes/dashboard";
import { ColorModeContext } from "./theme";
import { CssBaseline  } from "@mui/material";
import Sidebar from "./scenes/global/sidebar";
import Rightbar  from "./scenes/global/Rightbar";


import Appointments from "./scenes/appointments";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
     
    <div className="app">
        <Sidebar/>
        <Rightbar/>
        
      
      
      <main className="content">
        
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/Sidebar" element={<Sidebar/>} />
          <Route path="/Rightbar" element={<Rightbar/>} />
          <Route path="/appointments" element={<Appointments/>} />
        </Routes>
      </main>
       
    </div>
  );
};

export default App;
 