import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { topnavlinks } from "../Header/topnavlinks";

export default function MainNavigation() {
  return (
    <Box padding={3} display={'flex'} marginLeft={18} >
      <Box>
      <Grid
  
  container
   spacing={4}
 >
   {topnavlinks.map((navlink) => (
     <Grid item  key={navlink.id}> <Typography
    
     variant="overline"
     component={Link}
     sx={{
       color: '#101820',
       textDecoration: "none",
       cursor: "pointer",
       fontWeight:'bold'
     }}
   >
     {navlink.link}
   </Typography></Grid>
    
   ))}
 </Grid>
      </Box>

    </Box>
   
  );
}
