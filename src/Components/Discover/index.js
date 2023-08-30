import { Box } from "@mui/material";
import React from "react";
import CardCarsoul from "./CardCarsoul";
import DiscoverNav from "./DiscoverNav";


// import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function CarousalComponent({ header, navflag, data }) {


  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      marginTop={10}
      width={"100%"}
      height={"60vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box width={'100%'} height={'150vh'} display={'flex'} flexDirection={'column'}  justifyContent={'center'}
      alignItems={'center'}>
        <Box sx={{position:'absolute'}}>
        <DiscoverNav header={header} navflag={navflag}   />

        </Box>
        <Box sx={{position:'relative',top:160}} >

        <TabContext value={value} >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="#101820"
              TabIndicatorProps={{
                style: {
                  background: '#FFAA4D 0% 0% no-repeat padding-box',
                  border: '1px solid #FFAA4D',
                  opacity: 1,
                }
              }}
              centered sx={{ boxShadow: '0 4px 0 -2px white', }}  >
              <Tab label="Special Offers" value="1" />
              <Tab label="Trending" value="2" />
              <Tab label="New In" value="3" />
            </TabList>

          </Box>
          <TabPanel value="1">

            <Box
              sx={{ position: "relative", top: 100, overflow: "hidden" }}
              width={"100%"}
              height={"40vh"}
            >
              <CardCarsoul data={data} />
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box
              sx={{ position: "relative", top: 100, overflow: "hidden" }}
              width={"100%"}
              height={"40vh"}
            >
              <CardCarsoul data={data} />
            </Box>
          </TabPanel>
          <TabPanel value="3">
            <Box
              sx={{ position: "relative", top: 100, overflow: "hidden" }}
              width={"100%"}
              height={"40vh"}
            >
              <CardCarsoul data={data} />
            </Box>

          </TabPanel>
        </TabContext>
        </Box>

      </Box>

    </Box>
  );
}
