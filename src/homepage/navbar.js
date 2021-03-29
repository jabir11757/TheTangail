import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Icon from "../components/image/icon.jpg"
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-scroll";
import {Box } from '@material-ui/core';
import { grey, red } from "@material-ui/core/colors";
import { useHistory } from "react-router";




const Navbar = () => {


  const history = useHistory()

  const destination =()=>{
  history.push("./navigation")
  }


  return (
   
       <Box>
            <AppBar
          style={{
            backgroundColor:"black",
            boxShadow: "initial",
          }}
        >
          <Toolbar>
           <Box style={{padding:5}}>
           <img src={Icon} alt="logo" style={{ height: "60px",backgroundColor:grey[900],borderRadius:1}} />
           </Box>

            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Button  style={{color:red[600],marginRight:60 }}>
                <Link
                  style={{ activeClass: "1px solid black" }}
                  activeClass="active"
                  to="marginTop"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </Button>
              <Button 
                style={{color:red[600],marginRight:60}}>
                <Link style={{ activeClass: "1px solid black" }}
                 onClick={destination} 
                >
                  Destination
                </Link>
              </Button>

              <Button  style={{color:red[600],marginRight:60}}>
                {" "}
                <Link activeClass="active"
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  
                >
                  Contact
                </Link>
              </Button>

              
            </Grid>
          </Toolbar>
        </AppBar>
      <Toolbar />
       </Box>
    
  );
};

export default Navbar;