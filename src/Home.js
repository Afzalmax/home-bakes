
//import img1 from './media/pizza.jpeg'
import img2 from './media/browniebox.jpeg'
import img3 from './media/cupcake.jpeg'
//import img4 from './media/customcake.jpeg'

import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class Home extends Component {
    render () {
        return (
    <>
            <Carousel>
                <div>
                    <img class="object-contain h-auto max-w-full mx-auto" src={img2} alt="img" />
                    
                    <div class="absolute inset-0 flex items-center justify-center">
                    <h2 class="text-white text-6xl font-bold">Freshly Baked </h2>
                    </div>  
                </div>
                <div>
                    <img class="object-contain h-auto max-w-full mx-auto" src={img3} alt="img"/>
                    <div class="absolute inset-0 flex items-center justify-center">
                    <h2 class="text-white text-6xl font-bold">SINCE 2022</h2>
                    </div>
                </div>
                
            </Carousel>
            </>
            );
    }
};


export default Home;
