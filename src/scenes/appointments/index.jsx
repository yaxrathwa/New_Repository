import {Box, Typography, useTheme}from "@mui/material";
import { mockDataTeam} from "../../data/MockData";
import{DataGrid} from "@mui/x-data-grid";



const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "age", headerName: "Age", type: "number", flex: 0.5 },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
];
const Appointments  =()=> {
    console.log(mockDataTeam); // Debug data
    return(
        <Box m="40px 0 0 0" height="75vh">
            <DataGrid rows={mockDataTeam} columns={columns}   pageSize={5} rowsPerPageOptions={[5]}/>

             
        </Box>
    );
        

  

  

} 

export default Appointments;