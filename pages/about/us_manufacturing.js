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



          <section className="flex justify-center bg-white py-16">
          <div className="flex max-w-screen-lg  flex-wrap flex-1">
            <div className="flex-1">
             
              <div className="flex gap-8 py-12">

              

                <div className="w-1/2">
                  
                <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8 mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                ISO 9001 Certified Battery Pack Assembly</h2>
                    <p className=" text-left  font-P22Underground-thin text-lg">
                    Romeo Power’s trained technicians provide
optimized drop-in solutions for your vehicle
application by assembling our modules into
custom, high-capacity battery pack
configurations. ISO 9001 certification guarantees
that our packs are built to meet your specific
power needs with strict quality assurance to
ensure long-term reliability.
                    </p>
                    
                      
                </div>


                <div className="w-1/2">
                <img src="/Images/Manufacturing images/IS0_9001.jpg"></img>
                </div>

                

              </div>


              




              <div className="flex gap-8 py-12">

              <div className="w-1/2">
                  <img src="/Images/Manufacturing images/safety-standards.jpg"></img>
                </div>

                <div className="w-1/2">
                <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8  mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                Designed For Manufacturing With The Highest Safety Standards</h2>
              
                    <p className=" text-left  font-P22Underground-thin text-lg">
                    Romeo Power designs are inherently
configurable for high-rate manufacturing
on the same automated production lines.
Multiple shift capacity easily scales to meet
the quality and delivery requirements our
customers’ demand. Designing safe,
reliable and robust systems with in-depth
battery research results in ensuring our
customers’ standards are met or exceeded
throughout the entire product maturity,
development and production process.
                    </p>
                    
                      
                </div>

                

              </div>



              <div className="flex gap-8 py-12">

              

                <div className="w-1/2">
                  
                <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8 mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                Cost Effective,  <br/>U.S. Based Production</h2>
                    <p className=" text-left  font-P22Underground-thin text-lg">
                    Automation of critical assembly steps, coupled
with patented component designs enables our
module production process to be economical,
reliable and timely. Robotic work cells can run
24/7 with the utmost speed and accuracy,
allowing Romeo Power to manufacture battery
modules with low cost and predictable
consistency.
                    </p>
                    
                      
                </div>


                <div className="w-1/2">
                  <img src="/Images/Manufacturing images/cost-effective.jpg"></img>
                </div>

                

              </div>



              <div className="flex gap-8 py-12">

<div className="w-1/2">
    <img src="/Images/Manufacturing images/micro laser.jpg"></img>
  </div>

  <div className="w-1/2">
  <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8  mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
  High Throughput Micro
Laser Welding</h2>

      <p className=" text-left  font-P22Underground-thin text-lg">
      Speed is critical to our battery module
manufacturing process, though it could
not be achieved without a focus on
accuracy. Our state-of-the-art laser
welder combines vision-based guidance
and precision fixturing to pinpoint an
exact weld location on each battery cell.
The welds connecting the cells are
made at light speed, creating a
repeatable, reliable and vibration-
resistant interconnection.
      </p>
      
        
  </div>

  

</div>

              



<div className="flex gap-8 py-12">

              

<div className="w-1/2">
  
<h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8 mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
Reliability Testing + Validation</h2>
<p className="text-left font-P22Underground-thin text-lg">With a robust test plan strategy, we characterize module performance and product lifecycle.
Our proprietary test plans, developed from industry-wide research in automotive and
aerospace, set us apart.</p>
<p className="text-left font-P22Underground-thin text-lg">Romeo Power’s full range of test capabilities includes:</p>
<ul className="list-disc list-outside ">
                <li className="font-P22Underground-thin">Mechanical, environmental and electrical testing</li>
                <li className="font-P22Underground-thin">Engineering, qualification, and production testing for single cell, module and pack level
battery systems</li>
                <li className="font-P22Underground-thin">Comprehensive failure analysis solutions, analytical methods, cross section imaging, cell
teardowns, and failure analysis reports</li>
              </ul>
    
      
</div>


<div className="w-1/2">
  <img src="/Images/Manufacturing images/Reliability.jpg"></img>
</div>



</div>



<div className="flex gap-8 py-12">

<div className="w-1/2">
<img src="/Images/Manufacturing images/functional-testing.jpg"></img>
</div>

<div className="w-1/2">
<h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8  mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
Functional Testing</h2>

<p className=" text-left  font-P22Underground-thin text-lg">
Modules and packs are not
considered complete until their
functional and electrical
characteristics are verified. Romeo
Power’s state-of-the-art testing
systems verify all critical
specifications to assure everything
is functioning as intended before
our products are integrated into
</p>


</div>



</div>
              
              
              
             
            </div>
          </div>
          </section>


          


        <Banner />



        <Footer />
        


    </div>
  )
}
