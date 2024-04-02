import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import { styled } from "@mui/material/styles";

import LinearWithValueLabel from "../linerBar.js"
// table


import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import BasicTable from "../table.js";
// calender

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


export default function DashBoard() {

  return (
    <>
      <Box sx={{ height: "100%" }}>
        <Box sx={{ width: "100%" }}>
          <Card
            sx={{
              borderRadius: "16px",
              background: "#F2EAFF",
              height: "35%",
              display: "flex",
              flexDirection:  "row" ,
            }}
          >

            <Box sx={{ width: "50%" , display:"flex" , p:4  }}>
               
                <Box sx={{ width: "50%" , gap:3 , display:"flex" , flexDirection:"column"}}>
                <LinearWithValueLabel color="primary" progress={30}/>
                <LinearWithValueLabel color="secondary" progress={40}/>
                <LinearWithValueLabel color="primary" progress={10}/>
                <LinearWithValueLabel color="secondary" progress={70}/>
            </Box>
                <Box sx={{ width: "50%" , gap:3 , display:"flex" , flexDirection:"column"}}>
                <LinearWithValueLabel color="primary" progress={30}/>
                <LinearWithValueLabel color="secondary" progress={40}/>
                <LinearWithValueLabel color="primary" progress={10}/>
                <LinearWithValueLabel color="secondary" progress={70}/>
            </Box>
          
          </Box>

          {/* calender */}
          
           <Box sx={{ width: "50%" , display:"flex"   }}>
               
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar sx={{height:"100%"}}/>
                </LocalizationProvider>

          
          </Box>

            </Card>
              <Box sx={{ width: "100%" , display:"flex"  , pt:4 }}>
               
               <BasicTable/>
          
          </Box>
          </Box>
        </Box>
    </>
  );
}