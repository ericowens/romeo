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

      <section id="hero" className="hero-about-leadership flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold">Leadership</h1>
              
            </div>
        </div>
        </section>
        
      </section>


   


      
      



        <section className="flex justify-center bg-medium px-4 py-16">
          <div className="flex max-w-screen-lg  flex-wrap flex-1">
            <div className="flex-1">
              
              
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui oﬀicia deserunt
mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
qui oﬀicia deserunt mollit anim id est laborum.</p>
             
            </div>
          </div>
          </section>





          


          <section  className="small-leader-1 flex justify-center  " >  
            <div className="flex max-w-screen-lg justify-evenly  flex-wrap flex-1">  

                <div className=" flex items-end justify-end w-2/5">
                <img src="/thumbnail_LINEAL-path@2x.png"></img>
                </div>

                  <div className="flex flex-col w-3/5 pb-8">
                    <h2 className="text-left text-darkcolor   font-P22Underground-thp text-2xl font-bold pt-16 ">
                    Lionel Selwood, Jr.</h2>
                    <h4 className="text-left text-darkcolor  font-P22Underground-thp text-l font-bold py-2 ">
                    Chief Executive Oﬀicer</h4>
                      <p className="text-left text-sm pt-8 leading-normal">Lionel is an accomplished Product Management Leader with expertise in
                      Operations Management, Financial Management (Profit & Loss, Balance Sheet,
                      Cash Flow), Lean Six Sigma, Supplier Development, Strategic Sourcing and Product
                      Quality Management. His experience spans General Electric where he graduated
                      from the highly regarded Operations Management Leadership Program (OMLP)
                      and owned Profit & Loss Responsibility as Manufacturing Shop Operations
                      Manager of a High Volume Production Facility and three Fast Moving Innovative
                      Start Ups (SpaceX, Faraday Future & Romeo Power) where he has held various
                      Roles including Director of Procurement, Vice President of Engineering and Chief
                      Operating Oﬀicer. Lionel holds a B.Sc. in Mechanical Engineering from Syracuse
                      University and MPS in Supply Chain Management from The Penn State University.</p>

                      <ul className="flex-1 flex justify-end content-end items-end social gap-4 pt-6">
                                <li className=""><Link href="https://www.linkedin.com/in/lionel-selwood-jr-ab031b34/">
                                  <img src="/linkedin.png"></img></Link></li>
                                  
                                <li className="hidden"><img src="/twitter.png"></img></li>
                                <li className="hidden"><img src="/Facebook.png"></img></li>
                                
                              </ul>
                
                </div>

             </div>
               
            </section>


            <section  className="small-leader-2 flex justify-center  " >  
            <div className="flex max-w-screen-lg justify-evenly  flex-wrap flex-1">  

                

            <div className="flex flex-col w-3/5 pb-8">
                    <h2 className="text-left text-darkcolor   font-P22Underground-thp text-2xl font-bold pt-16 ">
                    AK Srouji, PhD</h2>
                    <h4 className="text-left text-darkcolor  font-P22Underground-thp text-l font-bold py-2 ">
                    Chief Technology Oﬀicer</h4>
                      <p className="text-left text-sm pt-8 leading-normal">Dr. Srouji directs all technical and technological developments, including IP
strategy, roadmaps, and future products, internally and in collaboration with
strategic partners. Before being promoted to CTO, he was responsible for R&D
and Cell Technology at Romeo. Prior to joining Romeo, he was developing
advanced physico-chemical battery models at Robert Bosch’s Research &
Technology Center in Silicon Valley. He also worked on novel battery component
development, spanning from next-gen lithium ion to all solid-state ba eries.
Throughout his energy storage technology career he has successfully brought to
market multiple programs funded by the US Department of Energy. He holds an
MS degree in Mechanical Engineering, and a PhD in Energy & Mineral Engineering
with a focus on electrochemistry from The Pennsylvania State University.</p>

                      <ul className="flex-1 flex justify-start content-start items-end social gap-4 pt-6">
                      <li className=""><Link href="https://www.linkedin.com/in/ak-srouji-27191013/">
                                  <img src="/linkedin.png"></img></Link></li>
                                  
                                <li className="hidden"><img src="/twitter.png"></img></li>
                                <li className="hidden"><img src="/Facebook.png"></img></li>
                                
                              </ul>
                
                </div>

                <div className=" flex items-end justify-end w-2/5">
                <img src="/AK.jpg"></img>
                </div>
                
             </div>
               
            </section>


            <section  className="small-leader-3 flex justify-center  " >  
            <div className="flex max-w-screen-lg justify-evenly  flex-wrap flex-1">  

            <div className=" flex items-end justify-end w-2/5">
                <img src="/leadershipLAUREN-e3e3e3.png"></img>
                </div>

                <div className="flex flex-col w-3/5 pb-8">
                    <h2 className="text-left text-darkcolor   font-P22Underground-thp text-2xl font-bold pt-16 ">
                    Lauren Webb</h2>
                    <h4 className="text-left text-darkcolor  font-P22Underground-thp text-l font-bold py-2 ">
                    Chief Financial Oﬀicer And Chief Strategy Officer
</h4>
                      <p className="text-left text-sm pt-8 leading-normal">Lauren Webb has over a dozen years of experience in finance and operations for
early stage companies, including InAuth, Inc. Prior to joining Romeo she was Vice
President of business services company Apollo Services, LLC. She started her
career at the U.S. Department of Justice and spent ten years with The Ashcroft
Group, a venture investment and consulting firm based in Washington, DC.</p>

                      <ul className="flex-1 flex justify-end content-end items-end social gap-4 pt-6">
                      <li className=""><Link href="https://www.linkedin.com/in/lauren-webb-9b65a95/">
                                  <img src="/linkedin.png"></img></Link></li>
                                  
                                <li className="hidden"><img src="/twitter.png"></img></li>
                                <li className="hidden"><img src="/Facebook.png"></img></li>
                                
                              </ul>
                
                </div>

             </div>
               
            </section>


            <section  className="small-leader-4 flex justify-center  " >  
            <div className="flex max-w-screen-lg justify-evenly  flex-wrap flex-1">  

                

            <div className="flex flex-col w-3/5 pb-8">
                    <h2 className="text-left text-darkcolor   font-P22Underground-thp text-2xl font-bold pt-16 ">
                    Criswell Choi</h2>
                    <h4 className="text-left text-darkcolor  font-P22Underground-thp text-l font-bold py-2 ">
                    Chief Operations Oﬀicer</h4>
                      <p className="text-left text-sm pt-8 leading-normal">Criswell Choi has over 17 years of experience in operations, engineering, and
business management within the electronics and semiconductor sectors. Prior to
Romeo his experience includes managing operations at both early stage startups
as well as large scale companies such as Apple and SanDisk. He holds a B.S. in
Electrical Engineering from MIT and 12 patents.</p>

                      <ul className="flex-1 flex justify-start content-start items-end social gap-4 pt-6">
                      <li className=""><Link href="https://www.linkedin.com/in/criswell-choi-82221046/">
                                  <img src="/linkedin.png"></img></Link></li>
                                  
                                <li className="hidden"><img src="/twitter.png"></img></li>
                                <li className="hidden"><img src="/Facebook.png"></img></li>
                                
                              </ul>
                
                </div>

                <div className=" flex items-end justify-end w-2/5">
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
