import React from "react";
import { Box, Typography, TextField, Card, CardContent, LinearProgress, Grid, IconButton, Icon,  } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import NotificationIcon from "@mui/icons-material/NotificationsOutlined";
import { ReactComponent as LungsIcon } from './lungs.svg';
import { ReactComponent as TeethIcon } from './dental.svg';
import { ReactComponent as BoneIcon } from './bone.svg';
import InputAdornment from "@mui/material/InputAdornment";


// Mock data for activity chart
const activityData = [
  { day: "Mon", value: 6 },
  { day: "Tues", value: 8 },
  { day: "Wed", value: 5 },
  { day: "Thurs", value: 9 },
  { day: "Fri", value: 7 },
  { day: "Sat", value: 4 },
  { day: "Sun", value: 6 },
];

// Health status cards data
const healthCards = [
  { label: "Lungs", date: "26 Oct 2024", value: 60, color: "error", icon:LungsIcon},
  { label: "Teeth", date: "26 Oct 2024", value: 90, color: "info" ,icon:TeethIcon},
  { label: "Bone", date: "26 Oct 2024", value: 40, color: "warning",icon:BoneIcon}, 
];

export default function Dashboard() {
  return (
    <Box sx={{ background: "#f8fbff", minHeight: "100vh", p: 3 }}>
      {/* Search Bar */}
      <Box sx={{ display: "", alignItems: "center",justifyContent: "space-between", mb: 3 }}>
        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: { borderRadius: 3, background: "#fff" },
          }}
          sx={{ width: 300 }}
        />
         <IconButton>
            <NotificationIcon />
         </IconButton>
      </Box>

      {/* Dashboard Title */}
      <Typography variant="h5" fontWeight={700} mb={2}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Left: Anatomy Card */}
        <Grid item xs={12} md={6} lg={7}>
          <Card sx={{ borderRadius: 4, p: 2, minHeight: 340 }}>
            <CardContent>
              {/* Anatomy Image Placeholder */}
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    width: 180,
                    height: 260,
                    background: "#e3e8f0",
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* Replace this div with your SVG or image */}
                  <Typography color="text.secondary" align="center">
                   <img src="/1_Muscles_Skeleton_Full_A-1-1030x1030.jpg" alt="body" style={{width:350, height:550,objectFit:"contain"}}/> 
                  </Typography>
                  {/* Example health tags */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      bgcolor: "#cdd4f9",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 2,
                      boxShadow: 1,
                      fontSize: 12,
                      color: "#black",
                    }}
                  >
                    Healthy Heart ❤️
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 24,
                      left: -20,
                      bgcolor: "#cdd4f9",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 2,
                      fontSize: 12,
                      color: "#black",
                      boxShadow: 1,
                    }}
                  >
                    Healthy Leg 🦵
                  </Box>
                </Box>
                <IconButton sx={{ ml: 1 }}>
                  <InfoOutlinedIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right: Health Cards */}
        <Grid item xs={12} md={6} lg={5}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary" mb={1}>
              This Week
            </Typography>
            {healthCards.map((card) => {
  const Icon = card.icon; // 
  return (
    <Card
      key={card.label}
      sx={{
        mb: 2,
        borderRadius: 3,
        px: 2,
        py: 1.5,
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
        {/* Render the icon */}
        <Icon style={{ width: 32, height: 32, marginRight: 12 }} />
        <Typography variant="body1" fontWeight={600}>
          {card.label}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="caption" color="text.secondary">
          Date: {card.date}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={card.value}
        color={card.color}
        sx={{ height: 8, borderRadius: 4 }}
      />
    </Card>
  );
})}

          </Box>
        </Grid>
      </Grid>

      {/* Activity Section */}
      <Box sx={{ mt: 4, background: "#fff", borderRadius: 4, p: 3 }}>
        <Box sx={{ display: "", alignItems: "center", mb: 1 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            Activity
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="caption" color="text.secondary">
            3 appointments on this week
          </Typography>
        </Box>
        {/* Simple bar chart */}
        <Box sx={{ display: "flex", alignItems: "end", height: 80 }}>
          {activityData.map((item) => (
            <Box key={item.day} sx={{ mx: 1, textAlign: "center" }}>
              <Box
                sx={{
                  width: 16,
                  height: `${item.value * 7}px`,
                  bgcolor: "#18c3c9",
                  borderRadius: 2,
                  mb: 0.5,
                }}
              />
              <Typography variant="caption" color="text.secondary">
                {item.day}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
