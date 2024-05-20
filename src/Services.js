
import hot1 from './media/pizzaSB.jpg'
import hot2 from './media/hot2.jpg'
import hot3 from './media/hot3.jpg'
import cake1 from './media/bforest.jpg'
import cake2 from './media/chococake.jpg'
import cake3 from './media/pistacake.jpg'
import brownie1 from './media/brow.jpg'
import brownie2 from './media/browniebox.jpeg'
import brownie3 from './media/BrownieSB.jpg'
import custom1 from './media/customSB.jpg'
import custom2 from './media/CUSTOMSB2.jpg'
import custom3 from './media/CUSTOMSB3.jpg'
import special1 from './media/specialSB.jpg'
import special2 from './media/specialSB2.jpg'
import special3 from './media/specialSB3.jpg'
import React from 'react';


const Services = () => {
  const serviceData = [
    {
        name: "CUSTOMIZED CAKE",
        image:[ 
            custom1,
            custom2,
            custom3,
        ],
      },
    {
        name:"HOT PICKS",
        image:[
            hot1,
            hot2,
            hot3,
        ],
    },
    {
        name:"CAKES",
        image:[
            cake1,
            cake2,
            cake3,
        ],
    },
    {
        name:"BROWNIES",
        image:[
            brownie1,
            brownie2,
            brownie3,
        ],
    },
    {
        name:"SPECIAL",
        image:[
            special1,
            special2,
            special3,
        ],
    }

]

  return (
    <>
    <br></br>
    <br></br>
    <br/>

    <h2 class="mt-5 text-center text-5xl text-pink-600 font-semibold whitespace-pre-line text-gray-900 dark:text-white">OUR DISHES AND SERVICES </h2>
    
    
     <div className="mt-10 grid grid-cols-1 md:grid-cols-3 ">
     {serviceData.map((category, index) => (
        <div key={index} className="relative h-120 p-3">
          {category.image.map((img, idx) => (
          <div key={idx}  className="mx-auto w-full" style={{ scrollSnapType: 'x mandatory' }}>
           <br></br><br></br><br></br><br></br>
            <div className="">
              
              <input className="peer sr-only" type="radio" name="carousel" id="carousel-1" defaultChecked />
              <div className="absolute left-1/2 top-1/2 z-0 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white opacity-100 shadow-lg transition-all duration-300 peer-defaultchecked:z-10 peer-defaultchecked:opacity-100">
              <img className="h-64 w-96 rounded-t-lg" src={img} alt="" />
                <div className="bg-gray-200 p-2 rounded-b-lg">
                  <p className="text-center text-gray-700">{category.name}</p>
                </div>

                <div className="absolute top-1/2 z-20 flex w-full justify-between">
                  <label htmlFor="carousel-3" className="inline-block -translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                  </label>
                  <label htmlFor="carousel-2" className="inline-block translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <input className="peer sr-only" type="radio" name="carousel" id="carousel-2" defaultChecked />

              <div className="absolute left-1/2 top-1/2 z-0 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white opacity-100 shadow-lg transition-all duration-300 peer-defaultchecked:z-10 peer-defaultchecked:opacity-100">
                <img className="h-64 w-96 rounded-t-lg" src={img} alt="" />
                <div className="bg-gray-200 p-2 rounded-b-lg">
                  <p className="text-center text-gray-700">{category.name}</p>
                </div>

                <div className="absolute top-1/2 z-20 flex w-full justify-between">
                  <label htmlFor="carousel-1" className="inline-block -translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                  </label>
                  <label htmlFor="carousel-3" className="inline-block translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <input className="peer sr-only" type="radio" name="carousel" id="carousel-3" defaultChecked />

              <div className="absolute left-1/2 top-1/2 z-0 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white opacity-100 shadow-lg transition-all duration-300 peer-defaultchecked:z-10 peer-defaultchecked:opacity-100">
                <img className="h-64 w-96 rounded-t-lg" src={img} alt="" />
                <div className="bg-gray-200 p-2 rounded-b-lg">
                  <p className="text-center text-gray-700">{category.name}</p>
                </div>

                <div className="absolute top-1/2 z-20 flex w-full justify-between">
                  <label htmlFor="carousel-2" className="inline-block -translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                  </label>
                  <label htmlFor="carousel-1" className="inline-block translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            
            </div>
          ))}
            </div>
            ))}
            </div>
            
{/*
  <div className="relative h-120 bg-gray-70 p-3">
  <div className="mx-auto w-96" style={{ scrollSnapType: 'x mandatory' }}>

            <div className="">
              <input className="peer sr-only" type="radio" name="carousel" id="carousel-4" defaultchecked />

              <div className="absolute left-1/2 top-1/2 z-0 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white opacity-100 shadow-lg transition-all duration-300 peer-defaultchecked:z-10 peer-defaultchecked:opacity-100">
                <img className="h-64 w-96 rounded-t-lg" src={special1} alt="" />
                <div className="bg-gray-200 p-2 rounded-b-lg">
                  <p className="text-center text-gray-700">SPECIAL FLAVOURS</p>
                </div>

                <div className="absolute top-1/2 z-20 flex w-full justify-between">
                  <label htmlFor="carousel-6" className="inline-block -translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                  </label>
                  <label htmlFor="carousel-5" className="inline-block translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <input className="peer sr-only" type="radio" name="carousel" id="carousel-5" defaultchecked />

              <div className="absolute left-1/2 top-1/2 z-0 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white opacity-100 shadow-lg transition-all duration-300 peer-defaultchecked:z-10 peer-defaultchecked:opacity-100">
                <img className="h-64 w-96 rounded-t-lg" src={special2} alt="" />
                <div className="bg-gray-200 p-2 rounded-b-lg">
                  <p className="text-center text-gray-700">SPECIAL FLAVOURS</p>
                </div>

                <div className="absolute top-1/2 z-20 flex w-full justify-between">
                  <label htmlFor="carousel-4" className="inline-block -translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                  </label>
                  <label htmlFor="carousel-6" className="inline-block translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <input className="peer sr-only" type="radio" name="carousel" id="carousel-6" defaultchecked />

              <div className="absolute left-1/2 top-1/2 z-0 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white opacity-100 shadow-lg transition-all duration-300 peer-defaultchecked:z-10 peer-defaultchecked:opacity-100">
                <img className="h-64 w-96 rounded-t-lg" src={special3} alt="" />
                <div className="bg-gray-200 p-2 rounded-b-lg">
                  <p className="text-center text-gray-700">SPECIAL FLAVOURS</p>
                </div>

                <div className="absolute top-1/2 z-20 flex w-full justify-between">
                  <label htmlFor="carousel-5" className="inline-block -translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                  </label>
                  <label htmlFor="carousel-4" className="inline-block translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            </div>
            </div>
            <div className="relative h-120 bg-gray-70 p-3">
          <div className="mx-auto w-96" style={{ scrollSnapType: 'x mandatory' }}>

            <div className="">
              <input className="peer sr-only" type="radio" name="carousel" id="carousel-7" defaultchecked />

              <div className="absolute left-1/2 top-1/2 z-0 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white opacity-100 shadow-lg transition-all duration-300 peer-defaultchecked:z-10 peer-defaultchecked:opacity-100">
                <img className="h-64 w-96 rounded-t-lg" src={cake1} alt="" />
                <div className="bg-gray-200 p-2 rounded-b-lg">
                  <p className="text-center text-gray-700">NORMAL CAKES</p>
                </div>

                <div className="absolute top-1/2 z-20 flex w-full justify-between">
                  <label htmlFor="carousel-9" className="inline-block -translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                  </label>
                  <label htmlFor="carousel-8" className="inline-block translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <input className="peer sr-only" type="radio" name="carousel" id="carousel-8" defaultchecked />

              <div className="absolute left-1/2 top-1/2 z-0 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white opacity-100 shadow-lg transition-all duration-300 peer-defaultchecked:z-10 peer-defaultchecked:opacity-100">
                <img className="h-64 w-96 rounded-t-lg" src={cake2} alt="" />
                <div className="bg-gray-200 p-2 rounded-b-lg">
                  <p className="text-center text-gray-700">NORMAL CAKES</p>
                </div>

                <div className="absolute top-1/2 z-20 flex w-full justify-between">
                  <label htmlFor="carousel-7" className="inline-block -translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                  </label>
                  <label htmlFor="carousel-9" className="inline-block translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <input className="peer sr-only" type="radio" name="carousel" id="carousel-9" defaultchecked />

              <div className="absolute left-1/2 top-1/2 z-0 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white opacity-100 shadow-lg transition-all duration-300 peer-defaultchecked:z-10 peer-defaultchecked:opacity-100">
                <img className="h-64 w-96 rounded-t-lg" src={cake3} alt="" />
                <div className="bg-gray-200 p-2 rounded-b-lg">
                  <p className="text-center text-gray-700">NORMAL CAKES</p>
                </div>

                <div className="absolute top-1/2 z-20 flex w-full justify-between">
                  <label htmlFor="carousel-8" className="inline-block -translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                  </label>
                  <label htmlFor="carousel-7" className="inline-block translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            </div>
            </div>
            <div className="relative min-h-screen bg-gray-70 p-3">
          <div className="mx-auto w-96" style={{ scrollSnapType: 'x mandatory' }}>

            <div className="">
              <input className="peer sr-only" type="radio" name="carousel" id="carousel-10" defaultchecked />

              <div className="absolute left-1/2 top-1/2 z-0 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white opacity-100 shadow-lg transition-all duration-300 peer-defaultchecked:z-10 peer-defaultchecked:opacity-100">
                <img className="h-64 w-96 rounded-t-lg" src={hot1} alt="" />
                <div className="bg-gray-200 p-2 rounded-b-lg">
                  <p className="text-center text-gray-700">Text for image 1</p>
                </div>

                <div className="absolute top-1/2 z-20 flex w-full justify-between">
                  <label htmlFor="carousel-12" className="inline-block -translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                  </label>
                  <label htmlFor="carousel-11" className="inline-block translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <input className="peer sr-only" type="radio" name="carousel" id="carousel-11" defaultchecked />

              <div className="absolute left-1/2 top-1/2 z-0 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white opacity-100 shadow-lg transition-all duration-300 peer-defaultchecked:z-10 peer-defaultchecked:opacity-100">
                <img className="h-64 w-96 rounded-t-lg" src={hot2} alt="" />
                <div className="bg-gray-200 p-2 rounded-b-lg">
                  <p className="text-center text-gray-700">Text for image 1</p>
                </div>

                <div className="absolute top-1/2 z-20 flex w-full justify-between">
                  <label htmlFor="carousel-10" className="inline-block -translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                  </label>
                  <label htmlFor="carousel-12" className="inline-block translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <input className="peer sr-only" type="radio" name="carousel" id="carousel-12" defaultchecked />

              <div className="absolute left-1/2 top-1/2 z-0 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white opacity-100 shadow-lg transition-all duration-300 peer-defaultchecked:z-10 peer-defaultchecked:opacity-100">
                <img className="h-64 w-96 rounded-t-lg" src={hot3} alt="" />
                <div className="bg-gray-200 p-2 rounded-b-lg">
                  <p className="text-center text-gray-700">Text for image 1</p>
                </div>

                <div className="absolute top-1/2 z-20 flex w-full justify-between">
                  <label htmlFor="carousel-11" className="inline-block -translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                  </label>
                  <label htmlFor="carousel-10" className="inline-block translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            </div>
            </div>
            <div className="relative min-h-screen bg-gray-70 p-3">
          <div className="mx-auto w-96" style={{ scrollSnapType: 'x mandatory' }}>

            <div className="">
              <input className="peer sr-only" type="radio" name="carousel" id="carousel-13" defaultchecked />

              <div className="absolute left-1/2 top-1/2 z-0 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white opacity-100 shadow-lg transition-all duration-300 peer-defaultchecked:z-10 peer-defaultchecked:opacity-100">
                <img className="h-64 w-96 rounded-t-lg" src={brownie1} alt="" />
                <div className="bg-gray-200 p-2 rounded-b-lg">
                  <p className="text-center text-gray-700">Text for image 1</p>
                </div>

                <div className="absolute top-1/2 z-20 flex w-full justify-between">
                  <label htmlFor="carousel-15" className="inline-block -translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                  </label>
                  <label htmlFor="carousel-14" className="inline-block translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <input className="peer sr-only" type="radio" name="carousel" id="carousel-14" defaultchecked />

              <div className="absolute left-1/2 top-1/2 z-0 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white opacity-100 shadow-lg transition-all duration-300 peer-defaultchecked:z-10 peer-defaultchecked:opacity-100">
                <img className="h-64 w-96 rounded-t-lg" src={brownie2} alt="" />
                <div className="bg-gray-200 p-2 rounded-b-lg">
                  <p className="text-center text-gray-700">Text for image 1</p>
                </div>

                <div className="absolute top-1/2 z-20 flex w-full justify-between">
                  <label htmlFor="carousel-13" className="inline-block -translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                  </label>
                  <label htmlFor="carousel-15" className="inline-block translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <input className="peer sr-only" type="radio" name="carousel" id="carousel-15" defaultchecked />

              <div className="absolute left-1/2 top-1/2 z-0 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white opacity-100 shadow-lg transition-all duration-300 peer-defaultchecked:z-10 peer-defaultchecked:opacity-100">
                <img className="h-64 w-96 rounded-t-lg" src={brownie3} alt="" />
                <div className="bg-gray-200 p-2 rounded-b-lg">
                  <p className="text-center text-gray-700">Text for image 1</p>
                </div>

                <div className="absolute top-1/2 z-20 flex w-full justify-between">
                  <label htmlFor="carousel-14" className="inline-block -translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                  </label>
                  <label htmlFor="carousel-13" className="inline-block translate-x-5 cursor-pointer rounded-full bg-white text-red-600 shadow-md active:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            </div>
  </div>*/}
  
    </>
   
  )
}

export default Services;

        