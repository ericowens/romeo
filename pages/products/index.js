import Head from 'next/head'
import Navbar from '../../comps/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../comps/Footer'
import Banner from '../../comps/Banner'
import Formarea from '../../comps/Formarea'
import observe_nav from '../../comps/observe_nav'
import React, { useState, useEffect } from 'react'

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

      <section id="hero" className="hero-products flex justify-center items-start" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h1 className="font-P22Underground-thp text-7xl font-bold">Products</h1>
              
            </div>
        </div>
        </section>
        
      </section>


      <section className="flex bg-accent justify-center py-16">

        <div className=" flex justify-center align-center content-center  flex-col max-w-screen-lg   ">
          
            <h2 className=" text-center   flex-1 text-white  font-P22Underground-thp text-5xl font-bold ">
              Moving People and Things Emission Free
              </h2>
              <p className=" text-center text-white flex-1 font-P22Underground-thin text-lg py-4">Our customers are becoming environmentally responsible and reducing operating costs in a variety of markets.</p>
            
              <ul className=" table flex-1 py-4 ">
              <li className="table-cell " ><img className="align-bottom" src="/Group 72.svg"></img></li>
                <li className="table-cell" ><img className="align-bottom" src="/Group 68.svg"></img></li>
                <li className="table-cell" ><img className="align-bottom" src="/Group 71.svg"></img></li>
                <li className="table-cell" ><img className="align-bottom" src="/Group 70.svg"></img></li>
                <li className="table-cell" ><img className="align-bottom" src="/Group 69.svg"></img></li>
               
                
               
                </ul>
            
                      
        </div>

      </section>


      <section  className="small-hero small-hero-hermes flex justify-center items-center" >
      <section className="flex flex-1  max-w-screen-lg justify-center items-center align-center py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h2 className="font-P22Underground-thp text-5xl font-bold">Hermes Module</h2>
              <p className=" text-center text-white flex-1 font-P22Underground-thin text-lg py-4">
              The ideal electrification solution for the commercial vehicle industry, Hermes is a modular building block
consisting of lithium-ion cells in a 21700 format that are connected in series and parallel to achieve the desired
voltage, energy and power capability. Its high packaging eﬀiciency, high energy density and structurally integrated
cooling system makes it an ideal battery system for many automotive powertrain applications.
                </p>
                <Link href="/products/hermes_module">
              <button className="bg-accent   py-4 px-14 my-14">Learn More</button> 
              </Link>

              
            </div>
        </div>
        </section>
        
      </section>


      <section  className="small-hero small-hero-orion flex justify-center items-center" >
      <section className="flex flex-1  max-w-screen-lg justify-center  align-center py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h2 className="font-P22Underground-thp text-5xl font-bold">Orion BEV Pack Family</h2>
              <p className=" text-center text-white flex-1 font-P22Underground-thin text-lg py-4">
              Romeo Power’s proprietary pack family exhibits application flexibility and is capable of
powering a range of commercial vehicles spanning from Class 3 delivery vehicles to the
largest, long-haul Class 8 vehicles.
                </p>
                <Link href="/products/orion_pack">
              <button className="bg-accent   py-4 px-14 my-14">Learn More</button> 
              </Link>

              
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

              
              
              <div className="flex gap-8 justify-around py-8">
                <div className="w-1/3 flex gap-4 flex-col items-start">
                  <div className="w-full flex items-center justify-center content-center">
                    <img src="/icon-battery-100.png"></img>
                    </div> 
                  <h4 className="text-xl font-P22Underground-book text-gray-500 text-left">Single Cell Fault Tolerance</h4>
                  <p>Through robust cell validation and
                  safety testing, Romeo Power selects
                  optimal cells and incorporates design
                  features to mitigate thermal
                  propagation.</p>          
                </div>


                <div className="w-1/3 flex gap-4 flex-col items-start">
                <div className="w-full flex items-center justify-center content-center">
                  <img src="/icon-bms-100.png"></img> </div> 
                  <h4 className="text-xl font-P22Underground-book text-gray-500 text-left">Battery Management System</h4>
                  <p>Functional safety algorithms rapidly
                  detect faults to maintain safe
                  operating conditions for the battery,
                  overall system and most importantly,
                  end users. Redundant hardware and
                  software measurements and
                  protection mechanisms constantly
                  monitor critical parameters of the
                  battery pack and ensure that all cells
                  are at their safe operating conditions.</p>          
                </div>

                <div className="w-1/3 flex gap-4 flex-col items-start">
                <div className="w-full flex items-center justify-center content-center">
                  <img src="/icon-sensor-100.png"></img> </div> 
                  <h4 className="text-xl font-P22Underground-book text-gray-500 text-left">Sensing</h4>
                  <p>Accurate monitoring devices at cell-level, module-level and pack-level
                  constantly measure voltages, temperatures, and current to ensure
                  safe operation.</p>          
                </div>
                               

              </div>
              
             
            </div>
          </div>
          </section>



        {/* <section className="flex justify-center bg-medium py-16">
          <div className="flex max-w-screen-lg  flex-wrap flex-1">
            <div className="flex-1">
              <h2 className="text-left text-darkcolor  font-P22Underground-thp text-4xl font-bold py-4 ">Product Safety</h2>
              <div className="flex space-x-20">
                <div className="w-1/2">
                <p className="text-lg leading-normal my-4">Romeo Power Battery Management System detect
                faults, and react quickly to maintain safe operating
                conditions for battery, system and users.</p>
                <p className="text-lg leading-normal my-4">
                  <span className="font-P22Underground-book  text-bold block ">Sensing</span>
                Accurate sensing of cell parameters to constantly
                gauge the state of cells:</p>
                <p className="text-lg leading-normal my-4">
                  <span className="font-P22Underground-book block  text-bold" >Cell Voltage</span>
                Cell Temperature<br></br>
                Current in/out of the battery<br></br>
                Cell Balancing<br></br>
                Fast and accurate cell balancing during charge and
                discharge to maximize cell life.</p>
                <p className="text-lg leading-normal my-4">
                  <span className="font-P22Underground-book block  text-bold">Safety</span>
                Constant monitoring of safety critical parameters and
                fast acting protection circuits ensure safe and reliable
                operation:</p>
                </div>
                <div className="w-1/2">
                <p className="text-lg leading-normal my-4">
                <span className="font-P22Underground-book block  text-bold">Communication</span>
High speed and robust communication lines carry
information to and from user/system and the BMS.
These communication lines help optimize system
performance and simplify diagnostics.</p>
<p className="text-lg leading-normal my-4">
<span className="font-P22Underground-book block  text-bold">Designed for Safety</span>
Romeo Power battery modules and packs are single
cell fault tolerant. This means, that in the outlying
case, where for some reason a certain battery exhibits
a thermal incident, the thermal incident will not
propagate to the neighboring cells. Based on system
requirements, the BMS can be programmed to shut
oﬀ the system completely after a cell related
incident, or keep operating safely under actively
derated fashion until servicing is conducted.</p>
                </div>
                

              </div>
             
            </div>
          </div>
          </section> */}


          <Formarea/>

         



        <Banner/>



        <Footer/>


    </div>
  )
}
