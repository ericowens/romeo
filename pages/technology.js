import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Banner from '../comps/Banner'
import Formarea from '../comps/Formarea'
import observe_nav from '../comps/observe_nav'
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

      <section id="hero" className="hero-technology flex justify-center items-center" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start  ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h1 className="font-P22Underground-thp text-7xl font-bold text-left p-4">Technology</h1>
              <p className="font-P22Underground-thp text-2xl font-bold text-white text-left p-4">
              Our end-to-end engineering capabilities include cell science, mechanical,
thermal, electrical, firmware systems, and stress.
                </p>
                <p className="font-P22Underground-thp text-2xl font-bold text-white text-left p-4">
                The results speak for themselves – packs for every application that go further
on a single charge, and last longer charge after charge.
                </p>
              
            </div>
        </div>
        </section>
        
      </section>


      <section className="flex bg-romeogray justify-center py-16">

        <div className=" flex justify-center align-center content-center  flex-col max-w-screen-lg   ">
          
            <h2 className=" text-left   flex-1 text-white  font-P22Underground-thp text-4xl font-bold ">
            Energy Density up to 30% Higher than the Rest
              </h2>
              <p className=" text-left text-white flex-1 font-P22Underground-thin text-lg py-4">
              Romeo Power delivers balanced, modular and integrated design with superior capacity and power, while lowering the total cost of ownership.
With battery technology, the greater the energy density and power density, the longer the range and the be er the acceleration. Our battery systems
provide both, resulting in eﬀicient packs without sacrificing space.
                </p>
                                  
        </div>

      </section>


      <section className="flex justify-center bg-white py-16">
          <div className="flex max-w-screen-lg  flex-wrap flex-1">
            <div className="flex-1">
              <div className=" pb-8 ">
              
              <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold py-4 ">
              BUILT-IN BATTERY MANAGEMENT SYSTEM</h2>
              </div>


              <div className="flex gap-8 py-12">

                <div className="w-1/2">
                    <p className=" text-left  font-P22Underground-thin text-lg">
                        Charge fast and go further. At Romeo Power, we customize our
                      intelligent battery management system (BMS) in the Hermes
                      module to suit specific applications with proprietary algorithms
                      that enable rapid charge at optimal cycle life. Our battery
                      management system features:
                    </p>
                    <ul className="list-disc list-outside  pt-4 ml-4 ">
               
                      <li className="font-P22Underground-thin py-1">Voltage and current measurement, fault detection and
                        diagnostics with thermal control and cell temperature
                        reporting</li>
                                        <li className="font-P22Underground-thin py-1">Isolation resistance monitoring and reporting between high-
                        voltage buses and low-voltage system</li>
                                        <li className="font-P22Underground-thin py-1">Advanced battery state indicators (State of Charge (SOC), State
                        of Health (SOH) and State of Power (SOP))</li>
                                        <li className="font-P22Underground-thin py-1">Passive cell balancing</li>
                                        <li className="font-P22Underground-thin py-1">Safety controls (overvoltage, undervoltage, overcharge, short
                        circuit and over temperature / under-temperature)</li>
                                        <li className="font-P22Underground-thin py-1">Controller Area Network (CAN) communications according to
                        SAE J1939</li>
                      <li className="font-P22Underground-thin py-1">Firmware updates over UDS</li>
                    </ul>
                      <p className=" text-left  font-P22Underground-book text-lg text-bold py-4">The Romeo Power Difference</p>
                      <ul className="list-disc list-outside  py-2 ">
                        <li className="font-P22Underground-thin py-1">Proprietary controls models</li>
                        <li className="font-P22Underground-thin py-1">Parameterized for each individual cell design and chemistry</li>
                        <li className="font-P22Underground-thin py-1">Enhanced State of Charge (SOC), and State of Health (SOH)</li>
                      </ul>
                </div>

                <div className="w-1/2">
                  <img src="/Image11.jpg"></img>
                </div>

              </div>




              <div className="flex gap-8 py-12">

              <div className="w-1/2">
                  <img src="/image2.jpg"></img>
                </div>

                <div className="w-1/2">
                <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8  mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                INNOVATIVE THERMAL MANAGEMENT</h2>
              
                    <p className=" text-left  font-P22Underground-thin text-lg">
                    For electric vehicles that go the distance, eﬀective battery thermal
                    management is key. Through innovative thermal management,
                    Romeo Power battery systems remain in the optimal temperature
                    range for safety, longevity and performance.
                    </p>
                    
                      <p className=" text-left  font-P22Underground-book text-lg text-bold py-4">The Romeo Power Difference</p>
                      <ul className="list-disc list-outside  py-2 ">
                        <li className="font-P22Underground-thin py-1">Thermal solutions based on power requirements for optimized
                          performance</li>
                        <li className="font-P22Underground-thin py-1">Faster turnaround time for prototype and A-Sample
                        development using validated simulation methodologies in 1D and
                        3D space</li>
                        <li className="font-P22Underground-thin py-1">In-house analysis capabilities with MATLAB in 0D/1D and Star-
                          CCM+ and battery Design Studio in 3D space</li>

                        <li className="font-P22Underground-thin py-1">Perform detailed testing through state-of-the-art battery
                        cyclers and thermal chambers to validate the battery thermal
                        architecture prior to production</li>
                      </ul>
                </div>

                

              </div>



              <div className="flex gap-8 py-12">

              

                <div className="w-1/2">
                  
                <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8 mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                CELL SCIENCE + ENGINEERING</h2>
                    <p className=" text-left  font-P22Underground-thin text-lg">
                    Romeo Power analyzes virtually every cell on the market to identify
                    the highest performing and most robust cells. By selecting those
                    with superior performance, we are able to meet and exceed
                    demanding commercial battery-electric vehicle requirements,
                    enabling our customers to succeed.
                    </p>
                    
                      <p className=" text-left  font-P22Underground-book text-lg text-bold py-4">Romeo Power’s Approach:</p>
                      <ul className="list-disc list-outside  py-2 ">
                        <li className="font-P22Underground-thin py-1">Electrical, thermal and battery aging models validated against
proven cell data</li>
                        <li className="font-P22Underground-thin py-1">Rigorous cell selection criteria for higher performance and
increased safety</li>
                        <li className="font-P22Underground-thin py-1">Cell characterization for fast charging and optimized against
lithium plating aging mechanisms as indicated by test data</li>
                      </ul>
                </div>


                <div className="w-1/2">
                  <img src="/Image33.jpg"></img>
                </div>

                

              </div>




              
              
              
              
             
            </div>
          </div>
          </section>




          <section className="flex justify-center bg-medium py-16">
          <div className="flex max-w-screen-lg  flex-wrap flex-1">
            <div className="flex-1">
              <div className=" pb-4 border-accent border-b-2 ">
              <h2 className="text-left inline-block text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold pt-4 ">
              ELECTRO-MECHANICAL / STRUCTURAL DESIGN
AND MATERIALS</h2>
              </div>

              <p className=" text-left flex-1 font-P22Underground-thin text-lg py-4">
              At Romeo Power, we develop electromechanical architectures for maximum packaging eﬀiciency, light weighting and
safety from conceptualization to production.
                </p>

                <p className=" text-left flex-1 font-P22Underground-book font-bold text-lg py-4">
                Romeo Power’s Approach:
                </p>

              <ul className="list-disc list-outside ">
                <li className="font-P22Underground-thin">Proprietary electro-mechanical, thermal and structural architectures specific for diverse applications</li>
                <li className="font-P22Underground-thin">Comprehensive material compatibility studies, including corrosion and fatigue testing</li>
                <li className="font-P22Underground-thin">Utilization of the latest Finite Element Analysis (FEA) tools to analyze structural load path development, optimum
material selection and joining technologies</li>
                <li className="font-P22Underground-thin">Design engineering in a 3D environment using Catia V6 for rapid turnaround</li>
                
              </ul>
              
              
             
            </div>
          </div>
          </section>


          <section className="flex justify-center bg-white py-16">
          <div className="flex max-w-screen-lg  flex-wrap flex-1">
            <div className="flex-1">
              <div className=" pb-4 border-accent border-b-2 ">
              <h2 className=" text-left inline-block text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold pt-4 ">
              BATTERY SAFETY (DESTRUCTIVE TESTING)</h2>
              </div>

              <p className=" text-left flex-1 font-P22Underground-thin text-lg py-4">
              Romeo Power’s battery safety design is rooted in extensive research. Through rigorous testing, we gain valuable data and an in-depth
understanding of critical battery safety designs.<br></br>
The result is a focused approach to management and mitigation of critical battery system failures, including thermal event mitigation through
intelligent venting strategies and a single cell fault tolerant system design.
                </p>
          
              
             
            </div>
          </div>
          </section>



      <section  className="small-hero small-hero-technology flex justify-center items-center" >
      
        <img src="/image42x.jpg"></img>
       
        
      </section>


     


          <Formarea/>

         



        <Banner/>



        <Footer/>


    </div>
  )
}
