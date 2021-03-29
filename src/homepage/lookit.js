import { Box, Grid, Typography,Card } from '@material-ui/core';
import { grey ,red } from "@material-ui/core/colors";
// import React, { Fragment } from "react";
import React from "react";
import {LookitData} from '../components/data'



import "aos/dist/aos.css";
import AOS from "aos";


AOS.init();


const Lookit = () => {
    return(
      <Box>
        <Grid>
          {LookitData.map((item,index)=>{


return ( 
  <Box
  id={item.title}
  data-aos={item.animation}
  data-aos="fade-down-right"
  display="flex"
  style={{
    padding: 10,
    color:grey[900],
    backgroundColor: index % 2 === 0 ? grey[100] : grey[300],
  }}
>
      <Box
        display="flex"
        flexGrow="1"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        style={{ maxWidth: "50%", minWidth: "50%" }}
        order={2}
        justifyContent="center"
        alignItems="center" 
      >
        <Card display="flex" style={{ width: "100%" }}>
         
          <img src={item.image} style={{ height: 300 }} />
        </Card>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        flexGrow="1"
        alignItems="center"
        justifyContent="center"
        style={{ padding:20 }}
        order={index % 2 === 0 ? 3 : 1}
      >
       <Card style={{height:305}}>
       <Typography
          variant="h4"
          style={{ color:red[600] ,padding:30}}
        >
          {item.title}
        </Typography>
        <Typography
          variant="body1"
          style={{
            marginTop: 10,
            padding:20,
            color:"black",
          }}
        >
          {item.description}
        </Typography>
       </Card>
      </Box>
</Box>


);


          })}
        </Grid>
      </Box>
    )

};
     

 
export default Lookit;