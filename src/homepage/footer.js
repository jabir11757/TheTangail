import React from 'react';
import Button from '@material-ui/core/Button';
import { Avatar, Box, Typography} from '@material-ui/core';
import "./footer.css"
import image from "../components/image/icon.jpg"






    const Footer = () => {

       


        return ( 

     
             
              <Box id="footer" style={{height:350, marginTop:20,backgroundColor:'black'}}>


                <Box display="flex">
                        
                        <Box>
                                <Avatar img src={image} 
                                style={{
                                marginTop:20,
                                marginLeft:600,
                                width: 100,
                                height: 100,
                               
                                }} />
                        </Box>

                </Box>



                <Box display="flex">
                    <Box flexGrow={1}>
                       <Typography style={{color:'white'}}>
                           Name:Jabir
                       </Typography>
                    </Box>

                    <Box flexGrow={1} >
                        <Button>
                        <a href="https://www.facebook.com/ItsJabir" class="fa fa-facebook"></a>
                        </Button>

                        <Button>
                        <a href="https://www.youtube.com/channel/UCxIrxt-lY36xmvPFzgEUgTw" class="fa fa-youtube"></a>
                        </Button>
                    </Box>
                </Box>

                </Box>
             
         
      
         );
    }
     
    export default Footer;
