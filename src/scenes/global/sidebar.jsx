import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import  {useState} from "react";
import{ProSidebar,Menu,MenuItem} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import{Box, IconButton,Typography,useTheme} from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextsmsIcon from '@mui/icons-material/Textsms';
import SettingsIcon from '@mui/icons-material/Settings';
import CallIcon from '@mui/icons-material/Call';
import AreaChartRoundedIcon from '@mui/icons-material/AreaChartRounded';
import ImportExportSharpIcon from '@mui/icons-material/ImportExportSharp';

const Sidebar = () => {
    
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    return (
      
        
        
        <Box
          sx={{
              "& .pro-sidebar-inner": {
                backgroundColor: "#ebeeff !important",
              },
              "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
              },
              "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
              },
              "& .pro-inner-item:hover": {
                color: "#868dfb !important",
              },
              "& .ps-menuitem-root.ps-active": {
                color: "#000110 !important",
              },
            }}
            
        >
            <ProSidebar  collapsed={isCollapsed} > 
              <h2 style={{ padding: "0 20px" ,margin: "40px  20px 0"}}>
              <span>
              <span style={{ color: "#18c3c9" }}>Health</span>
              <span span style={{ color: "#02023f" }}>care.</span>
              </span>
              </h2>

                
              
              <h6 style={{margin:"10px 30px 0"}}>
              General 
              </h6>
                <Menu iconShape="square"> 
                    <MenuItem
                        onClick={() => {
                            setSelected("Dashboard");
                        }}
                        icon={<DashboardIcon />} 
                    >
                        <Typography>Dashboard</Typography>
                    </MenuItem>
                     <MenuItem
                        onClick={() => {
                            setSelected("History");
                        }}
                        icon={<ImportExportSharpIcon />} 
                    >
                        <Typography>History</Typography>
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            setSelected("Calendar");
                        }}
                        icon={<CalendarMonthIcon />}
                    >
                        <Typography>Calendar</Typography>
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                          setSelected("Add");
                        }}
                        icon={<AddBoxIcon />}
                        >
                      <Link to="/appointments" >
                        <Typography>Appointments</Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            setSelected("Statistics");
                        }}
                        icon={<AreaChartRoundedIcon />}
                    >
                        <Typography>Statistics</Typography>
                    </MenuItem>
                   
                </Menu>
                <h6 style={{margin:"10px 30px 0"}}>
              
                Tools
              </h6>
                <Menu iconShape="square">
                   <MenuItem
                        onClick={() => {
                            setSelected("Chat");
                        }}
                        icon={<TextsmsIcon />}
                    >
                        <Typography>Chat</Typography>
                    </MenuItem>
                     <MenuItem
                        onClick={() => {
                            setSelected("Support");
                        }}
                        icon={<CallIcon />}
                    >
                        <Typography>Support</Typography>
                    </MenuItem>
                    <div>
                      <br /><br /><br /><br /><br />

                    </div>
                   <MenuItem
                        onClick={() => {
                            setSelected("Settings");
                        }}
                        icon={<SettingsIcon />}
                    >
                        <Typography>Settings</Typography>
                    </MenuItem>

                </Menu>
            </ProSidebar>  
        </Box>
    
  );
};

export default Sidebar;
        
