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

      <section id="hero" className="hero-products-hermes flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h1 className=" border-accent border-b-2 font-P22Underground-thp text-7xl font-bold">Hermes Module</h1>
              
            </div>
        </div>
        </section>
        
      </section>


   


      <section className="flex justify-between  bg-white  py-16">
         
          <div className="w-1/5">        
            </div>

            <div className="flex-1">
              <div className=" pb-8 ">
              <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold py-4 ">
              Hermes Module</h2>
              </div>
              <p>The ideal electrification solution for the commercial vehicle industry,
              Hermes is a modular building block consisting of lithium-ion cells in a
              21700 format that are connected in series and parallel to achieve the
              desired voltage, energy and power capability. Its high packaging
              eﬀiciency, high energy density and structurally integrated cooling
              system makes it an ideal battery system for many automotive
              powertrain applications.</p>
              <img src="/Images/HermesModual2.jpg" ></img>  
            </div>

            <div className="w-1/3">
              <img className="text-right float-right " src="/Images/HermesModule1.jpg"  ></img>  
              </div>         
            
         
          </section>


{/* 
          <section className="flex justify-between  bg-white  py-16">
         
          <div className="w-1/3 flex align-center content-center">
              <img src="/HermesModule2.jpg" ></img>           
            </div>

            <div className="w-1/3">
              <div className=" pb-8 ">
              <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold py-4 ">
              Hermes Module</h2>
              </div>
              <p>The ideal electrification solution for the commercial vehicle industry,
              Hermes is a modular building block consisting of lithium-ion cells in a
              21700 format that are connected in series and parallel to achieve the
              desired voltage, energy and power capability. Its high packaging
              eﬀiciency, high energy density and structurally integrated cooling
              system makes it an ideal battery system for many automotive
              powertrain applications.</p>
            </div>

            <div className="w-1/3">
              <img className="text-right float-right " src="/HermesModule1.jpg"  ></img>  
              </div>         
            
         
          </section> */}



      



        <section className="flex justify-center bg-medium px-4 py-16">
          <div className="flex max-w-screen-lg  flex-wrap flex-1">
            <div className="flex-1">
              <div className=" pb-8 ">
              <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold pt-4 ">
                Features</h2>
              </div>
              <ul className="list-disc list-outside ">
                <li className="font-P22Underground-thin">Modular design with a 21700 cell format</li>
                <li className="font-P22Underground-thin">High packaging eﬀiciency</li>
                <li className="font-P22Underground-thin">Designed according to SAE J2380, SAE J2464, and UN 38.3 requirements</li>
                <li className="font-P22Underground-thin">Scalable and configurable design</li>
                <li className="font-P22Underground-thin">Cell voltage and temperature monitoring through an in-built battery monitoring device</li>
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

        <Formarea />


          


        <Banner />



        <Footer />
        


    </div>
  )
}
