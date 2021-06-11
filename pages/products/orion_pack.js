import Head from 'next/head'
import Navbar from '../../comps/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../comps/Footer'
import Banner from '../../comps/Banner'
import observe_nav from '../../comps/observe_nav'
import React, { useState, useEffect } from 'react'
import Formarea from '../../comps/Formarea'

export default function Home() {
  useEffect(() => {
    observe_nav()
  })

  return (
    <div>
      <Head>
        <title>Romeo</title>
        <link rel="icon" href="/favicon.ico" />
        
        
      </Head>

      <Navbar/>

      <section id="hero" className="hero-products-orion flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h1 className="font-P22Underground-thp text-7xl font-bold text-left">Orion BEV Pack Family</h1>
              <p className="font-P22Underground-thp text-2xl font-bold text-white text-left">Powering the world’s largest commercial vehicles with the first BEV pack family.</p>
              
            </div>
        </div>
        </section>
        
      </section>


   


      


      <section className="flex justify-evenly bg-white py-4">
          <div><img src="/Image1.jpg"></img></div>
          <div><img src="/Image22.jpg"></img></div>
          </section>


      <section className="flex justify-center bg-white py-16">
          <div className="flex max-w-screen-lg  flex-wrap flex-1">
            <div className="flex-1">
              <div className=" pb-8 ">
              <h2 className=" block text-center  text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold py-4 ">
              Orion BEV Pack Family</h2>
              </div>
              <p className="text-center font-P22Underground-thin py-4">Romeo Power’s proprietary pack family exhibits application flexibility and is capable of powering a range of commercial vehicles spanning
from Class 3 delivery vehicles to the largest, long-haul Class 8 vehicles.</p>

<p className="text-left font-P22Underground-thin py-4">What Sets the Orion BEV Pack Family Apart?</p>

            <ul className="list-disc list-inside py-4 ">
                <li className="font-P22Underground-thin p-1.5">Modular design with a 21700 cell format</li>
                <li className="font-P22Underground-thin p-1.5">High packaging eﬀiciency</li>
                <li className="font-P22Underground-thin p-1.5">Designed according to SAE J2380, SAE J2464, and UN 38.3 requirements</li>
                <li className="font-P22Underground-thin p-1.5">Scalable and configurable design</li>
                <li className="font-P22Underground-thin p-1.5">Cell voltage and temperature monitoring through an in-built ba ery monitoring device</li>
                <li className="font-P22Underground-thin p-1.5">Automated cell balancing to maximize the usable capacity</li>
                <li className="font-P22Underground-thin p-1.5">Isolated communication between stack of modules and the central control device</li>
                <li className="font-P22Underground-thin p-1.5">Structurally integrated cooling system with superior thermal performance</li>
              </ul>
              
             
            </div>
          </div>
          </section>





          <section  className="small-hero small-hero-orion-1 flex justify-center items-center mt-4" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h2 className="font-P22Underground-thp text-5xl font-bold">CLASS 3/4 VEHICLES</h2>
              <p className=" text-left text-white flex-1 font-P22Underground-thin text-lg pt-32">
              [Download Orion Data Sheet]
                </p>
                             
            </div>
        </div>
        </section>
        
      </section>



      <section  className="small-hero small-hero-orion-2 flex justify-center items-center mt-4" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h2 className="font-P22Underground-thp text-5xl font-bold">CLASS 5/6 VEHICLES</h2>
              <p className=" text-left text-white flex-1 font-P22Underground-thin text-lg pt-32">
              [Download Orion Data Sheet]
                </p>
                             
            </div>
        </div>
        </section>
        
      </section>

      <section  className="small-hero small-hero-orion-3 flex justify-center items-center mt-4" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h2 className="font-P22Underground-thp text-5xl font-bold">CLASS 7/8 VEHICLES</h2>
              <p className=" text-left text-white flex-1 font-P22Underground-thin text-lg pt-32">
              [Download Orion Data Sheet]
                </p>
                             
            </div>
        </div>
        </section>
        
      </section>
      



        <section className="flex justify-center bg-medium py-16">
          <div className="flex max-w-screen-lg  flex-wrap flex-1">
            <div className="flex-1">
              <div className=" pb-8 ">
              <h2 className=" text-center block text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold pt-4 ">
              Designed for Safety</h2>
              </div>
              <ul className="list-disc list-inside ">
                <li className="font-P22Underground-thin">Modular design with a 21700 cell format</li>
                <li className="font-P22Underground-thin">High packaging eﬀiciency</li>
                <li className="font-P22Underground-thin">Designed according to SAE J2380, SAE J2464, and UN 38.3 requirements</li>
                <li className="font-P22Underground-thin">Scalable and configurable design</li>
                <li className="font-P22Underground-thin">Cell voltage and temperature monitoring through an in-built ba ery monitoring device</li>
                <li className="font-P22Underground-thin">Automated cell balancing to maximize the usable capacity</li>
                <li className="font-P22Underground-thin">Isolated communication between stack of modules and the central control device</li>
                <li className="font-P22Underground-thin">Structurally integrated cooling system with superior thermal performance</li>
              </ul>
              <div className="flex justify-around py-8">
                <div className=" flex gap-4 flex-col items-center">
                  <div><img src="/batteryicon.png"></img> </div> 
                  <h2 className="text-4xl font-P22Underground-book">10kWh</h2>
                  <p>Total Energy Capacity</p>          
                </div>
                <div className="flex gap-4 flex-col items-center">
                <div><img src="/batteryicon.png"></img> </div> 
                  <h2 className="text-4xl font-P22Underground-book">208 Wh/kg</h2>
                  <p>Energy Density</p>           
                </div>
                <div className="flex gap-4 flex-col items-center">
                <div><img src="/batteryicon.png"></img> </div> 
                  <h2 className="text-4xl font-P22Underground-book">60%</h2>
                  <p className="text-center">Charge capacity in less<br></br>
than 30 minutes</p>             
                </div>
                               

              </div>
              <p className="text-center">[Download Hermes Data Sheet]</p>
             
            </div>
          </div>
          </section>

        <Formarea/>


          


        <Banner/>



        <Footer/>


    </div>
  )
}
