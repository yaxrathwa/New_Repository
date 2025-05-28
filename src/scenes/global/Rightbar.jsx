
// import { Box, Typography, useTheme,IconButton } from "@mui/material";
// import { useState } from "react";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { Link } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
// const Rightbar = () => {
//     const [selected,setSelected] = useState("Dashboard");
//     return (
//          <Box
//       sx={{
//         position: "fixed",
//         top: 0,
//         right: 0,
//         height: "100vh",
//         zIndex: 1200,
//         // Optional: set width
//         width: 250,
//       }}
//     >
//       <ProSidebar
//         style={{
//           height: "100vh",
//           position: "absolute",
//           right: 0,
//           top: 0,
//         }}
//       >
//         <Menu iconShape="square">
//           <MenuItem
//             active={selected === "Dashboard"}
//             onClick={() => setSelected("Dashboard")}
//           >
//             Dashboard
//           </MenuItem>
//           <MenuItem
//             active={selected === "Settings"}
//             onClick={() => setSelected("Settings")}
//             component={<Link to="/settings" />}
//           >
//             Settings
//           </MenuItem>
//         </Menu>
//       </ProSidebar>
//     </Box>
//   );
// };

// export default Rightbar;

import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Grid,
  Avatar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const days = [
  { day: "Mon", date: 25, times: [] },
  { day: "Tues", date: 26, times: [{ time: "09:00", selected: true }] },
  { day: "Wed", date: 27, times: [{ time: "11:00" }] },
  { day: "Thurs", date: 28, times: [] },
  { day: "Fri", date: 29, times: [{ time: "12:00" }] },
  { day: "Sat", date: 30, times: [{ time: "13:00", selected: true }] },
  { day: "Sun", date: 31, times: [] },
];

const arrangements = [
  {
    title: "Dentist",
    time: "09:00-11:00",
    person: "Dr. Cameron Williamson",
    icon: "🦷",
    color: "#3d4fe8",
  },
  {
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    person: "Dr. Kevin Djones",
    icon: "🦴",
    color: "#e4e8f5",
  },
];

const upcoming = [
  {
    day: "Thursday",
    items: [
      {
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: "🩺",
      },
      {
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: "👁️",
      },
    ],
  },
  {
    day: "Saturday",
    items: [
      {
        title: "Cardiologist",
        time: "10:00 AM",
        icon: "❤️",
      },
      {
        title: "Neurologist",
        time: "16:00 PM",
        icon: "🧠",
      },
    ],
  },
];

export default function Rightbar() {
  return (
    <Box
      sx={{
        position: { xs: "static", md: "fixed" },
        top: 0,
        right: 0,
        width: { xs: "300%", md: 550 }, // Adjust width as needed
        height: "100vh",
        bgcolor: "#ebeeff",
        boxShadow: -4,
        zIndex: 1300,
        overflowY: "auto",
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
        p: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header with Avatar and Add button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", mb: 2 }}>
        <Avatar sx={{ bgcolor: "#e4e8f5", mr: 2 }}>👨‍⚕️</Avatar>
        <IconButton sx={{ bgcolor: "#3d4fe8", color: "#fff" }}>
          <AddIcon />
        </IconButton>
      </Box>

      {/* Calendar Navigation */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <IconButton>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <Typography variant="subtitle1" sx={{ flexGrow: 1, textAlign: "center", fontWeight: 600 }}>
          October 2021
        </Typography>
        <IconButton>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Calendar Days */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        {days.map((d) => (
          <Box key={d.day} sx={{ textAlign: "center" }}>
            <Typography variant="caption" color="text.secondary">
              {d.day}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                color: "#3d4fe8",
                bgcolor: d.times.some((t) => t.selected) ? "#e4e8f5" : "transparent",
                borderRadius: 2,
                px: 1,
                py: 0.5,
                display: "inline-block",
                mt: 0.5,
              }}
            >
              {d.date}
            </Typography>
            <Box sx={{ mt: 1 }}>
              {d.times.map((t, idx) => (
                <Box
                  key={idx}
                  sx={{
                    bgcolor: t.selected ? "#3d4fe8" : "#e4e8f5",
                    color: t.selected ? "#fff" : "#3d4fe8",
                    borderRadius: 2,
                    px: 1,
                    py: 0.5,
                    fontSize: 12,
                    fontWeight: 600,
                    mb: 0.5,
                  }}
                >
                  {t.time}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Appointments */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {arrangements.map((a) => (
          <Grid item xs={12} sm={6} key={a.title}>
            <Card
              sx={{
                bgcolor: a.color,
                color: a.color === "#3d4fe8" ? "#fff" : "#3d4fe8",
                borderRadius: 3,
                minHeight: 80,
              }}
            >
              <CardContent sx={{ py: 1.5, px: 2, "&:last-child": { pb: 1.5 } }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Typography sx={{ fontWeight: 700, fontSize: 15, flexGrow: 1 }}>
                    {a.title}
                  </Typography>
                  <Typography sx={{ fontSize: 22, ml: 1 }}>{a.icon}</Typography>
                </Box>
                <Typography sx={{ fontSize: 13, mb: 0.5 }}>{a.time}</Typography>
                <Typography sx={{ fontSize: 12 }}>{a.person}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Upcoming Schedule */}
      <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
        The Upcoming Schedule
      </Typography>
      {upcoming.map((group) => (
        <Box key={group.day} sx={{ mb: 2 }}>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: "block" }}>
            On {group.day}
          </Typography>
          <Grid container spacing={2}>
            {group.items.map((item) => (
              <Grid item xs={12} sm={6} key={item.title}>
                <Card sx={{ borderRadius: 3, bgcolor: "#cdd4f9" }}>
                  <CardContent sx={{ py: 1.5, px: 2, "&:last-child": { pb: 1.5 } }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography sx={{ fontWeight: 600, fontSize: 14, flexGrow: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ fontSize: 18, ml: 1 }}>{item.icon}</Typography>
                    </Box>
                    <Typography sx={{ fontSize: 13, mt: 1 }}>{item.time}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}


