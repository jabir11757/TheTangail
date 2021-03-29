import React from 'react';
import Home from '../homepage/home';
import ClippedDrawer from '../homepage/navigation' 
import {
    Switch,
    Route,
    BrowserRouter
  } from "react-router-dom";
import Bhuapur from '../category/bhuapur';



const Main = () => {
    return ( 
        <div>

             <BrowserRouter>
               <Switch>
                   <Route exact path= "/" component={Home} />
                   <Route exact path= "/navigation" component={ClippedDrawer}  />
                   <Route exact path= "/bhuapur" component={Bhuapur} />
               </Switch>
             </BrowserRouter>
      
        </div>
     );
}
 
export default Main;