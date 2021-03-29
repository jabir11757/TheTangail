// import { Box, Card } from '@material-ui/core';
// import { grey } from '@material-ui/core/colors';
// import React from 'react';


// const Bhuapur = () => {
//     return ( 
//         <Box display="flex">
//             <Box flexGrow={1} style={{height:200,width:"25%",backgroundColor:grey[200]}} >
// fgj
//             </Box>

//             <Box flexGrow={1} style={{height:200,width:"50%"}}>
// fddgj
//             </Box>

//             <Box flexGrow={1} style={{height:200,width:"25%",backgroundColor:grey[200]}}>
// fgjh
//             </Box>
//         </Box>
//      );
// }
 
// export default Bhuapur;























import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider0 from '../components/image/putput1.jpg'
import Slider1 from '../components/image/putput2.jpg'
import Slider2 from "../components/image/putput3.jpg";
import Slider3 from "../components/image/putput4.jpg";
import Slider4 from "../components/image/putput5.jpg";
import Slider5 from "../components/image/putput6.jpg";
import Slider6 from "../components/image/putput7.jpg";
import Slider7 from "../components/image/putput8.jpg";
import Slider8 from "../components/image/putput9.jpg";
import Slider9 from "../components/image/putput10.jpg";
import Slider10 from "../components/image/putput11.png";
import Slider11 from "../components/image/putput12.jpg";
import { Typography,Box,Card } from "@material-ui/core";
import "aos/dist/aos.css";
import AOS from "aos";
import { red ,grey } from "@material-ui/core/colors";

AOS.init();

    
const sliderImages = [
    Slider0,
    Slider1,
    Slider2,
    Slider3,
    Slider4,
    Slider5,
    Slider6,
    Slider7,
    Slider8,
    Slider9,
    Slider10,
    Slider11,
    
  ];

export default class Bhuapur extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
        <Box>

            <Typography variant="h4" style={{color:red[600]}}>Bhuapur</Typography>
            <div
                id="marginTop"
                style={{ width: "100%", height: 600, overflow: "hidden" }}
            >

                        <Box display="flex">
                            <Box flexGrow={1} style={{height:200,width:"25%",backgroundColor:grey[200]}} >
                                fgj
                            </Box>

                            <Box flexGrow={1} style={{height:200,width:"50%"}}>

                               <Slider {...settings}>

                                {sliderImages.map((sliderImages,index)=>

                                <div>
                                        <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            width: "100%",
                                        }}
                                        >
                                        <img src={sliderImages} style={{ height: 200, width: "100%" }} />
                                        </div>
                                </div>

                                )}

                                </Slider>
                            </Box>

                            <Box flexGrow={1} style={{height:200,width:"25%",backgroundColor:grey[200]}}>
                                fgjh
                            </Box>
                        </Box>
                
            </div>

        </Box>
    );
  }
}






