import React from 'react';
import Navbar from '../homepage/navbar'
import MySlider from '../homepage/slider'
import Lookit from '../homepage/lookit'
import Footer from '../homepage/footer'


const Home = () => {
    return ( 
        <div>
            <Navbar/>
            <MySlider/>
            <Lookit/>
            <Footer/>

        </div>
     );
}
 
export default Home;