import Head from 'next/head'
import Navbar from '../../comps/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../comps/Footer'
import Banner from '../../comps/Banner'
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

      <section id="hero" className="hero-about-manu flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold">U.S. Manufacturing</h1>
              
            </div>
        </div>
        </section>
        
      </section>


   


      
      



        <section className="flex justify-center bg-medium px-4 py-16">
          <div className="flex max-w-screen-lg  flex-wrap flex-1">
            <div className="flex-1">
              
              
              <p className="text-center">Romeo Power’s Southern California manufacturing facility is located close to port and
intermodal transport networks for rapid delivery to your factory. Before leaving our facility,
all modules and packs are tested according to stringent Romeo Power standards.</p>
             
            </div>
          </div>
          </section>




        <section className="flex justify-center bg-white px-4 py-16">
          <div className="flex max-w-screen-lg  gap-8 flex-1">
          <div className="w-1/2"><img src="/1.jpg"></img></div>
            <div className="w-1/2">

            <h4 className="text-left text-darkcolor  font-P22Underground-thp text-xl font-bold py-2 ">
            ISO 9001 CERTIFIED BATTERY PACK ASSEMBLY</h4>           
              
              <p className="text-left">Romeo Power’s trained technicians provide
optimized drop-in solutions for your vehicle
application by assembling our modules into
custom, high-capacity ba ery pack
configurations. ISO 9001 certification guarantees
that our packs are built to meet your specific
power needs with strict quality assurance to
ensure long-term reliability.</p>
             
            </div>
          </div>
          </section>


          <section className="us-hero us-hero-1 flex justify-center bg-white px-4 ">
          <div className="flex max-w-screen-lg  gap-8 flex-1">
          
            <div className=" flex flex-col items-center justify-center w-1/2">

            <h4 className="text-left text-white  font-P22Underground-thp text-xl font-bold pb-8 ">
            DESIGNED FOR MANUFACTURING WITH
THE HIGHEST SAFETY STANDARDS</h4>           
              
              <p className="text-left text-white">Romeo Power designs are inherently
configurable for high-rate manufacturing
on the same automated production lines.
Multiple shift capacity easily scales to meet
the quality and delivery requirements our
customers’ demand. Designing safe,
reliable and robust systems with in-depth
ba ery research results in ensuring our
customers’ standards are met or exceeded
throughout the entire product maturity,
development and production process.</p>
             
            </div>
          </div>
          </section>




          <section className="flex justify-center bg-white px-4 py-16">
          <div className="flex max-w-screen-lg  gap-8 flex-1">
          <div className="w-1/2"><img src="/3.jpg"></img></div>
            <div className="w-1/2">

            <h4 className="text-left text-darkcolor  font-P22Underground-thp text-xl font-bold py-2 ">
            COST EFFECTIVE, US BASED PRODUCTION</h4>           
              
              <p className="text-left">Automation of critical assembly steps, coupled
with patented component designs enables our
module production process to be economical,
reliable and timely. Robotic work cells can run
24/7 with the utmost speed and accuracy,
allowing Romeo Power to manufacture ba ery
modules with low cost and predictable
consistency.</p>
             
            </div>
          </div>
          </section>


          <section className="us-hero us-hero-2 flex justify-center bg-white px-4 ">
          <div className="flex max-w-screen-lg  gap-8 flex-1">
          
            <div className=" flex flex-col  justify-center w-1/2">

            <h4 className="text-left text-white  font-P22Underground-thp text-xl font-bold pb-8 ">
            HIGH THROUGHPUT MICRO
LASER WELDING</h4>           
              
              <p className="text-left text-white">Speed is critical to our ba ery module
manufacturing process, though it could
not be achieved without a focus on
accuracy. Our state-of-the-art laser
welder combines vision-based guidance
and precision fixturing to pinpoint an
exact weld location on each ba ery cell.
The welds connecting the cells are
made at light speed, creating a
repeatable, reliable and vibration-
resistant interconnection.</p>
             
            </div>
          </div>
          </section>




          <section className="flex justify-center bg-white px-4 py-16">
          <div className="flex max-w-screen-lg  gap-8 flex-1">
          
            <div className="flex-1">

            <h4 className="text-left text-darkcolor  font-P22Underground-thp text-xl font-bold py-2 ">
            RELIABILITY TESTING + VALIDATION</h4>           
              
              <p className="text-left py-4">With a robust test plan strategy, we characterize module performance and product lifecycle.
Our proprietary test plans, developed from industry-wide research in automotive and
aerospace, set us apart.</p>
<p className="text-left py-4">Romeo Power’s full range of test capabilities includes:</p>
<ul className="list-disc list-inside ">
                <li className="font-P22Underground-thin">Mechanical, environmental and electrical testing</li>
                <li className="font-P22Underground-thin">Engineering, qualification, and production testing for single cell, module and pack level
ba ery systems</li>
                <li className="font-P22Underground-thin">Comprehensive failure analysis solutions, analytical methods, cross section imaging, cell
teardowns, and failure analysis reports</li>
              </ul>
             
            </div>
          </div>
          </section>



          <section className="us-hero us-hero-3 flex justify-center bg-white px-4 ">
          <div className="flex max-w-screen-lg  gap-8 flex-1 items-center">
          <div className=" flex flex-col items-center justify-center w-1/2"></div>
          
            <div className=" flex flex-col items-center justify-center w-1/2">

            <h4 className="text-left text-white  font-P22Underground-thp text-xl font-bold pb-8 ">
            HIGH THROUGHPUT MICRO
LASER WELDING</h4>           
              
              <p className="text-left text-white">Speed is critical to our ba ery module
manufacturing process, though it could
not be achieved without a focus on
accuracy. Our state-of-the-art laser
welder combines vision-based guidance
and precision fixturing to pinpoint an
exact weld location on each ba ery cell.
The welds connecting the cells are
made at light speed, creating a
repeatable, reliable and vibration-
resistant interconnection.</p>
             
            </div>
          </div>
          </section>






          



            


         


       



          


        <Banner />



        <Footer />
        


    </div>
  )
}
