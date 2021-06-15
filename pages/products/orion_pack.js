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
             
            </div>
        </div>
        </section>
        
      </section>


   


      


      <section className="flex justify-evenly bg-white  gap-4 py-8">
          <div>
          <h2 className=" block text-center  text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold pt-4 pb-16 ">
            Powering the world’s largest commercial vehicles with the first BEV pack family.</h2>
              
            <img src="/Images/Orion-pack_family_Group.png"></img>
            </div>
          
          </section>


      <section className="flex justify-center bg-white py-16">
          <div className="flex max-w-screen-lg px-4 flex-wrap flex-1">
            <div className="flex-1">
              <div className=" pb-8 ">
              <h2 className=" block text-center  text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold py-4 ">
              Orion BEV Pack Family</h2>
              </div>
              <p className="text-center font-P22Underground-thin py-4">Romeo Power’s proprietary pack family exhibits application flexibility and is capable of powering a range of commercial vehicles spanning
from Class 3 delivery vehicles to the largest, long-haul Class 8 vehicles.</p>

<p className="text-left font-P22Underground-thin py-4">What Sets the Orion BEV Pack Family Apart?</p>

            <ul className="list-disc list-outside py-4 ">
                <li className="font-P22Underground-thin p-1.5">Modular design with a 21700 cell format</li>
                <li className="font-P22Underground-thin p-1.5">High packaging eﬀiciency</li>
                <li className="font-P22Underground-thin p-1.5">Designed according to SAE J2380, SAE J2464, and UN 38.3 requirements</li>
                <li className="font-P22Underground-thin p-1.5">Scalable and configurable design</li>
                <li className="font-P22Underground-thin p-1.5">Cell voltage and temperature monitoring through an in-built battery monitoring device</li>
                <li className="font-P22Underground-thin p-1.5">Automated cell balancing to maximize the usable capacity</li>
                <li className="font-P22Underground-thin p-1.5">Isolated communication between stack of modules and the central control device</li>
                <li className="font-P22Underground-thin p-1.5">Structurally integrated cooling system with superior thermal performance</li>
              </ul>

              <p className=" text-left  font-P22Underground-thin text-lg pt-8">
              <a href="/ORION BEV PACK FAMILY DATA SHEET.pdf" target="_blank">
                <button className="bg-accent text-white font-P22Underground-book  float-left py-4 px-10 my-10">Download Orion Data Sheet</button>
                </a>
                </p>
              
             
            </div>
          </div>
          </section>





          <section  className="small-hero small-hero-orion-1 flex justify-center items-center mt-4" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start px-4 py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h2 className="font-P22Underground-thp text-5xl font-bold">Class 3/4 Vehicles</h2>
              {/* <p className=" text-left text-white flex-1 font-P22Underground-thin text-lg pt-32">
              [Download Orion Data Sheet]
                </p> */}
                             
            </div>
        </div>
        </section>
        
      </section>



      <section  className="small-hero small-hero-orion-2 flex justify-center items-center mt-4" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start px-4 py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h2 className="font-P22Underground-thp text-5xl font-bold">Class 5/6 Vehicles</h2>
              {/* <p className=" text-left text-white flex-1 font-P22Underground-thin text-lg pt-32">
              [Download Orion Data Sheet]
                </p> */}
                             
            </div>
        </div>
        </section>
        
      </section>

      <section  className="small-hero small-hero-orion-3 flex justify-center items-center mt-4" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start px-4 py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h2 className="font-P22Underground-thp text-5xl font-bold">Class 7/8 Vehicles</h2>
              {/* <p className=" text-left text-white flex-1 font-P22Underground-thin text-lg pt-32">
              [Download Orion Data Sheet]
                </p> */}
                             
            </div>
        </div>
        </section>
        
      </section>
      



        <section className="flex justify-center bg-medium py-16">
          <div className="flex max-w-screen-lg px-4 flex-wrap flex-1">
            <div className="flex-1">
              <div className=" pb-8 ">
              <h2 className=" text-center block text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold pt-4 ">
              Designed for Safety</h2>
              </div>

              
              
              <div className="flex gap-8 justify-around py-8 flex-col md:flex-row">
                <div className="w-full md:w-1/3 flex gap-4 flex-col items-start">
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


                <div className="w-full md:w-1/3 flex gap-4 flex-col items-start">
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

                <div className="w-full md:w-1/3 flex gap-4 flex-col items-start">
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

        <Formarea/>


          


        <Banner/>



        <Footer/>


    </div>
  )
}
