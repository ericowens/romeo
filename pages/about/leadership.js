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

      <Navbar />

      <section id="hero" className="hero-about-leadership flex justify-center items-end" >
        <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
          <div className=" max-w-screen-lg pl-4 ">
            <div className="">
              <h1 className="  font-P22Underground-thp text-6xl md:text-7xl font-bold">Leadership</h1>

            </div>
          </div>
        </section>

      </section>










      <section className="flex justify-center bg-medium px-4 py-16">
        <div className="flex max-w-screen-lg  flex-wrap flex-1">
          <div className="flex-1">


            <p className="text-center">We are driven by something bigger than ourselves. It is through our diverse, 
            experienced executive leadership team that we are able to deliver on the 
            commitment to power the world’s transition to electrification. Romeo Power's 
            executive leadership team sets the strategic direction of our organization, 
            supports our passion for continual innovation, and our drive to meet the electrification 
            needs of our customers, team and shareholders. Our leadership team continually cultivates 
            an environment that fosters improvement – not just of our products, but of the people that create them.
</p>

          </div>
        </div>
      </section>








      <section className="small-leader-1 flex justify-center  " >
        <div className="flex md:flex-row sm:flex-col max-w-screen-xl justify-evenly  px-4 flex-wrap flex-1">

          <div className=" flex items-end justify-end md:w-2/5 w-full order-last md:order-first">
            <img src="/thumbnail_LINEAL-path@2x.png"></img>
          </div>

          <div className="flex flex-col w-full md:w-3/5 pb-8">
            <h2 className="text-left text-darkcolor   font-P22Underground-thp text-2xl font-bold pt-16 ">
              Lionel Selwood, Jr.</h2>
            <h4 className="text-left text-darkcolor  font-P22Underground-thp text-l font-bold py-2 ">
              Chief Executive Oﬀicer</h4>
              <p className="text-left text-sm pt-8 leading-normal">Lionel Selwood, Jr. serves as Romeo Power’s Chief Executive Officer. As a 
recognized leader in battery-powered technology and electrification, he joined Romeo Power 
in 2016 with an innate passion for accelerating access to green energy.</p>


<p className="text-left text-sm pt-8 leading-normal">Prior to joining Romeo Power, Lionel held key positions at fast-growing 
companies on the cutting edge of innovation, including SpaceX and Faraday 
Future. He also led teams at General Electric, where he graduated from the 
highly regarded Operations Management Leadership Program (OMLP). Lionel’s 
vision for Romeo Power is rooted in his experience growing up in the U.S. Virgin Islands, 
where access to clean energy is scarce. Seeing this inequity sparked a deep commitment 
to broadening global access to life-changing, innovative green energy solutions. Lionel 
is the go-to source for energy across numerous industries and is frequently called upon 
as a thought leader among nationally recognized media outlets.</p>


<p className="text-left text-sm pt-8 leading-normal">Lionel is also an engineer and holds a master’s degree in Supply Chain Management 
from The Pennsylvania State University and a bachelor’s degree in Mechanical Engineering from Syracuse University.
</p>

            <ul className="flex-1 flex justify-end content-end items-end social gap-4 pt-6">
              <li className=""><a target="_blank" href="https://www.linkedin.com/in/lionel-selwood-jr-ab031b34/">
                <img src="/social/Linkedin.svg"></img></a></li>

              <li className="hidden"><img src="/twitter.png"></img></li>
              <li className="hidden"><img src="/Facebook.png"></img></li>

            </ul>

          </div>

        </div>

      </section>


      <section className="small-leader-2 flex justify-center  " >
        <div className="flex max-w-screen-xl justify-evenly  px-4 flex-wrap flex-1 md:flex-row sm:flex-col">



          <div className="flex flex-col w-full md:w-3/5 pb-8">
            <h2 className="text-left text-darkcolor   font-P22Underground-thp text-2xl font-bold pt-16 ">
              AK Srouji, PhD</h2>
            <h4 className="text-left text-darkcolor  font-P22Underground-thp text-l font-bold py-2 ">
              Chief Technology Oﬀicer</h4>
            <p className="text-left text-sm pt-8 leading-normal">Dr. AK Srouji is an expert in electrochemical energy storage 
            and conversion devices. He serves as Romeo Power’s Chief Technology Officer, directing all technical activities, 
            including product development, technology roadmap and IP strategy.
                      </p>
                      <p className="text-left text-sm pt-8 leading-normal">He is highly dedicated to developing 
                      electrochemical systems in order to replace incumbent combustion technology, one after the other. </p>
                      <p className="text-left text-sm pt-8 leading-normal">Prior to joining Romeo Power, AK was developing 
                      advanced battery models, battery cells and systems at Robert Bosch’s Research & 
                      Technology Center in Silicon Valley. Throughout his energy technology career, he 
                      has successfully brought to market multiple lithium-ion and fuel cell programs 
                      funded by the U.S. Department of Energy.  </p>
                      
                      <p className="text-left text-sm pt-8 leading-normal">AK holds a master’s degree in Mechanical 
                      Engineering, and a PhD in Energy & Mineral Engineering with a focus on electrochemistry from 
                      The Pennsylvania State University.</p>

            <ul className="flex-1 flex justify-start content-start items-end social gap-4 pt-6">
              <li className=""><a target="_blank" href="https://www.linkedin.com/in/ak-srouji-27191013/">
                <img src="/social/Linkedin.svg"></img></a></li>

              <li className="hidden"><img src="/twitter.png"></img></li>
              <li className="hidden"><img src="/Facebook.png"></img></li>

            </ul>

          </div>

          <div className=" flex items-end justify-end md:w-2/5 w-full">
            <img src="/AK.jpg"></img>
          </div>

        </div>

      </section>


      <section className="small-leader-3 flex justify-center  " >
        <div className="flex max-w-screen-lg justify-evenly   px-4 flex-wrap flex-1 md:flex-row sm:flex-col">

          <div className=" flex items-end justify-end md:w-2/5 w-full order-last md:order-first">
            <img src="/leadershipLAUREN-e3e3e3.png"></img>
          </div>

          <div className="flex flex-col w-full md:w-3/5 pb-8">
            <h2 className="text-left text-darkcolor   font-P22Underground-thp text-2xl font-bold pt-16 ">
              Lauren Webb</h2>
            <h4 className="text-left text-darkcolor  font-P22Underground-thp text-l font-bold py-2 ">
              Chief Financial Oﬀicer And Chief Strategy Officer
</h4>
            <p className="text-left text-sm pt-8 leading-normal">
              Lauren Webb serves as Romeo Power’s Chief Financial Officer and Chief Strategy Officer 
              with 15 years of experience in finance, strategy and operations for early-stage companies. 
              Lauren started her career at the U.S. Department of Justice and spent ten years with the 
              Ashcroft Group, a venture investment and consulting firm based in Washington D.C.</p>
              <p className="text-left text-sm pt-8 leading-normal">Before joining Romeo Power in 2017, 
              Lauren was also a founder and Vice President at Apollo Services, LLC, a business services 
              company specializing in operations for legal and audit firms.</p>
              
              <p className="text-left text-sm pt-8 leading-normal">Lauren holds two bachelor’s degrees from Texas A&M University.</p>

            <ul className="flex-1 flex justify-end content-end items-end social gap-4 pt-6">
              <li className=""><a target="_blank" href="https://www.linkedin.com/in/lauren-webb-9b65a95/">
                <img src="/social/Linkedin.svg"></img></a></li>

              <li className="hidden"><img src="/twitter.png"></img></li>
              <li className="hidden"><img src="/Facebook.png"></img></li>

            </ul>

          </div>

        </div>

      </section>


      <section className="small-leader-4 flex justify-center  " >
        <div className="flex max-w-screen-lg justify-evenly  px-4 flex-wrap flex-1 md:flex-row sm:flex-col">



          <div className="flex flex-col w-full md:w-3/5 pb-8">
            <h2 className="text-left text-darkcolor   font-P22Underground-thp text-2xl font-bold pt-16 ">
              Criswell Choi</h2>
            <h4 className="text-left text-darkcolor  font-P22Underground-thp text-l font-bold py-2 ">
              Chief Operations Oﬀicer</h4>
            <p className="text-left text-sm pt-8 leading-normal">Criswell Choi serves as Romeo Power’s Chief 
            Operating Officer and directs all operations, manufacturing, supply chain and program management 
            activities. Criswell has over 19 years of experience in operations, engineering and business management 
            within the electronics and semiconductor sectors. Prior to Romeo Power, Criswell has managed operations at 
            both early-stage startups, as well as large scale companies, such as Apple and SanDisk. He holds a bachelor’s 
            degree in Electrical Engineering from MIT and 12 patents.</p>

            <ul className="flex-1 flex justify-start content-start items-end social gap-4 pt-6">
              <li className=""><a target="_blank" href="https://www.linkedin.com/in/criswell-choi-82221046/">
                <img src="/social/Linkedin.svg"></img></a></li>

              <li className="hidden"><img src="/twitter.png"></img></li>
              <li className="hidden"><img src="/Facebook.png"></img></li>

            </ul>

          </div>

          <div className=" flex items-end justify-end md:w-2/5 w-full">
            <img src="/CRISWELL.jpg"></img>
          </div>

        </div>

      </section>





      {/* <section  className="small-leader-5 flex justify-center  " >  
            <div className="flex max-w-screen-lg justify-evenly  flex-wrap flex-1">  

            <div className=" flex items-end justify-end w-2/5">
                <img src="/leadershipCHRIS.png"></img>
                </div>

                  <div className="flex flex-col w-3/5">
                    <h2 className="text-left text-white   font-P22Underground-thp text-2xl font-bold pt-16 ">
                    NAME</h2>
                    <h4 className="text-left text-white  font-P22Underground-thp text-l font-bold py-2 ">
                    TITLE</h4>
                      <p className="text-left text-white text-sm pt-8 leading-normal">adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui oﬀicia deserunt mollit</p>

                      <ul className="flex-1 flex justify-end content-end items-end social gap-4 pt-6">
                                <li className=""><img src="/Facebook.png"></img></li>
                                <li className=""><img src="/twitter.png"></img></li>
                                <li className=""><img src="/linkedin.png"></img></li>
                                
                              </ul>
                
                </div>

             </div>
               
            </section> */}















      <Banner />



      <Footer />



    </div>
  )
}
