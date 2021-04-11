import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider0 from '../components/image/putput2.jpg'
import Slider1 from "../components/image/putput6.jpg";
import Slider2 from "../components/image/putput14.jpg";
import Slider3 from "../components/image/putput15.jpg";
import Slider4 from "../components/image/putput16.jpg";
import { Typography,Box,Card, List, ListItem } from "@material-ui/core";
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

            <Typography variant="h3" style={{color:red[600],backgroundColor:grey[600]}}>Bhuapur</Typography>
          <div
                id="marginTop"
                style={{ width: "100%", height: 600, overflow: "hidden" }}
            >

            <Box display="flex">
                <Box flexGrow={1} style={{height:300,width:"25%",backgroundColor:grey[200]}} >
                    <Typography variant="h5">
                     Places
                    </Typography>

                       <List>
                         <ListItem>Jamuna Setu</ListItem>                        
                         <ListItem>Jamuna Resort</ListItem>
                         <ListItem>Jamuna River side</ListItem>
                         <ListItem>Historical Sirajkandi</ListItem>
                         <ListItem>The Road Side View</ListItem>
                         <ListItem>Boat Riding</ListItem>
                       </List>
                     
                </Box>

                <Box flexGrow={1} style={{height:300,width:"50%"}}>

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
                              <img src={sliderImages} style={{ height: 300, width: "100%" }} />
                            </div>
                    </div>

                    )}

                    </Slider>
                </Box>

                <Box flexGrow={1} style={{height:300,width:"25%",backgroundColor:grey[200]}}>
                    <Typography variant="h5">
                      Cost
                    </Typography>
                    
                    <List>
                         <ListItem>Jamuna Setu</ListItem>                        
                         <ListItem>Jamuna Resort</ListItem>
                         <ListItem>Jamuna River side</ListItem>
                         <ListItem>Historical Sirajkandi</ListItem>
                         <ListItem>The Road Side View</ListItem>
                         <ListItem>Boat Riding</ListItem>
                       </List>
                </Box>
            </Box>

            <Typography variant="h4" style={{backgroundColor:grey[600],color:red[600], marginTop:40}}>History Of Bhuapur</Typography>

           </div>


        </Box>
    );
  }
}






