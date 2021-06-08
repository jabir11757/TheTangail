// import React from 'react';
import React, { useState } from "react";
// import { useStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { red } from '@material-ui/core/colors';
import { useHistory} from 'react-router';
import { Box, Button } from '@material-ui/core';
// import TabLayout from 'react-tab-layout'
// import { Link } from 'react-scroll';
import "./navigation.css"


const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {


  const [inHover, setHover] = useState();



const history = useHistory()

const upazila =()=>{
  history.push("./home") 
}

const bhuapur =()=>{
  history.push("./bhuapur")
}
const gopalpur =()=>{
  history.push("./gopalpur")
}
const madhupur =()=>{
  history.push("./madhupur")
}
const shakhipur =()=>{
  history.push("./shakhipur")
}
const nagarpur =()=>{
  history.push("./nagarpur")
}
const mirjapur =()=>{
  history.push("./mirjapur")
}
const kalihati =()=>{
  history.push("./kalihati")
}
const delduar =()=>{
  history.push("./delduar")
}
const dhanbari =()=>{
  history.push("./dhanbari")
}
const ghatail =()=>{
  history.push("./ghatail")
}
const basail =()=>{
  history.push("./basail")
}
const tangail =()=>{
  history.push("./tangail")
}



  const classes = useStyles();

  return (
    <div>
      {/* className={classes.root} */}
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{backgroundColor:'black', color:red[600]}}>
        <Toolbar>

           <Button style={{color:red[600], marginRight:20}}
           onMouseEnter={() => setHover(true)}
          //  onMouseLeave={() => setHover(false)}
           
           >Upazila's</Button>
           <Button style={{color:red[600]}} onClick={upazila}>Home</Button>

        
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
    <Toolbar />
    <div>
    {/* className={classes.drawerContainer} */}

    { inHover && (  
                  
                      <List style={{visibility:'inherit'}}>
                        <ListItem >
                            <Typography className="pointer" onClick={tangail}>Tangail</Typography>
                          </ListItem>
                          <ListItem>
                            <Typography className="pointer" onClick={basail}>Basail</Typography>
                          </ListItem>
                          <ListItem>
                            <Typography className="pointer" onClick={ghatail}>Ghatail</Typography>
                          </ListItem>
                          <ListItem>
                            <Typography className="pointer" onClick={bhuapur}>Bhuapur</Typography>
                          </ListItem>
                          <ListItem>
                            <Typography className="pointer" onClick={gopalpur}>Gopalpur</Typography>
                          </ListItem>
                          <ListItem>
                            <Typography className="pointer" onClick={madhupur}>Madhupur</Typography>
                          </ListItem>
                          <ListItem>
                            <Typography className="pointer" onClick={shakhipur}>Shakhipur</Typography>
                          </ListItem>
                          <ListItem>
                            <Typography className="pointer" onClick={nagarpur}>Nagarpur</Typography>
                          </ListItem>
                          <ListItem>
                            <Typography className="pointer" onClick={mirjapur}>Mirjapur</Typography>
                          </ListItem>
                          <ListItem>
                            <Typography className="pointer" onClick={kalihati}>Kalihati</Typography>
                          </ListItem>
                          <ListItem>
                            <Typography className="pointer" onClick={delduar}>Delduar</Typography>
                          </ListItem>
                          <ListItem>
                            <Typography className="pointer" onClick={dhanbari}>Dhanbari</Typography>
                          </ListItem>
                    </List>
              
     )} 
      
      
    </div>
  </Drawer>
  <main className={classes.content}>
    <Toolbar />
       
      </main>
    </div>
  );
}
