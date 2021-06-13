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

      <section id="hero" className="hero-about-story flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h1 className=" border-accent border-b-2 font-P22Underground-thp text-7xl font-bold">Our Story</h1>
              
            </div>
        </div>
        </section>
        
      </section>


   


      
      



        <section className="flex justify-center bg-medium px-4 py-16">
          <div className="flex max-w-screen-lg  flex-wrap flex-1">
            <div className="flex-1">
              
              
              

<p className="text-left pb-4">Romeo Power is on a mission to power the world’s transition to electrification.
</p>
<p className="text-left pb-4">Romeo Power was founded in 2016 by a team of former Tesla and SpaceX engineers with a vision to create an electrified world where all have access to clean energy. Since then, we’ve laser-focused our collective engineering, entrepreneurial and networking skills to push high-density battery technology to its peak, to serve a market with a need for cleaner energy solutions now, and at scale: heavy-duty commercial vehicle fleets.
</p>
<p className="text-left pb-4">We’ve come a long way in understanding our customers’ exact pain points and identifying the best approach to solve them.
</p>
<p className="text-left pb-4">As a pioneer in battery-powered energy, we’re delivering advanced electrification solutions to some of the most complex commercial vehicle applications. Our suite of advanced hardware, combined with our innovative battery management systems, delivers the safety, performance, reliability and configurability our customers demand for success. We’re determined to create real change in energy sourcing and electrification, enabling access to clean energy for all.
</p>
<p className="text-left pb-4">Together, we are Romeo Power. This is our bold vision to create an electrically powered world.
</p>
             
            </div>
          </div>
          </section>


          <section className="flex bg-white justify-center py-16">

        <div className=" flex-1 flex justify-center align-center content-center  flex-col max-w-screen-lg   ">
          
            <h2 className=" text-left   flex-1   font-P22Underground-thp text-4xl font-bold pb-8 ">
            Timeline
              </h2>
              

            

                <div className="grid grid-cols-2 gap-4 w-3/4">
                  <div className="flex flex-col items-center align-center content-center justify-center">
                    <div className="flex-1 py-4" >
                      <div className=" rounded-full border border-black text-white bg-black font-bold leading-none text-md p-2">20<br></br>16</div>
                      </div>
                    <span className="border-r-2 border-black flex-grow-0 h-full w-1"></span>
                  </div>
                  <div className="py-8">
                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold ">August 2016</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power was founded</p>
                  </div>
                </div>


                <div className="grid grid-cols-2 gap-4 w-3/4">
                  <div className="flex flex-col items-center align-center content-center justify-center">
                    <div className="flex-1 py-4" >
                      <div className=" rounded-full border border-black text-white bg-black font-bold leading-none text-md p-2">20<br></br>17</div>
                      </div>
                    <span className="border-r-2 border-black flex-grow-0 h-full w-1"></span>
                  </div>
                  <div className="py-8">
                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold ">February 2017</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power expands to new manufacturing
facility in Southern California</p>

                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold pt-8 ">August 2017</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power Closes $30M seed round to ramp
up battery pack production for commercial EVs
and stationary storage</p>

                  <h2 className=" text-left font-P22Underground-thp text-4xl font-bold pt-8 ">November 2017</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power inaugurates the first
manufacturing facility dedicated to EV battery
packs on the West Coast</p>
                  </div>
                </div>




                <div className="grid grid-cols-2 gap-4 w-3/4">
                  <div className="flex flex-col items-center align-center content-center justify-center">
                    <div className="flex-1 py-4" >
                      <div className=" rounded-full border border-black text-white bg-black font-bold leading-none text-md p-2">20<br></br>19</div>
                      </div>
                    <span className="border-r-2 border-black flex-grow-0 h-full w-1"></span>
                  </div>
                  <div className="py-8">
                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold ">May 2019</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">BorgWarner invests $50M in Romeo Power and
announces a strategic joint venture</p>

                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold pt-8 ">August 2019</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Heritage makes a $4M investment in Romeo Power
through their HG Ventures arm and forms a strategic
partnership for responsible environmental controls</p>

                  
                  </div>
                </div>


                <div className="grid grid-cols-2 gap-4 w-3/4">
                  <div className="flex flex-col items-center align-center content-center justify-center">
                    <div className="flex-1 py-4" >
                      <div className=" rounded-full border border-black text-white bg-black font-bold leading-none text-md p-2">20<br></br>20</div>
                      </div>
                    <span className="border-r-2 border-black flex-grow-0 h-full w-1"></span>
                  </div>
                  <div className="py-8">
                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold ">September 2020</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power announces Lionel Selwood, Jr. as CEO</p>

                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold pt-8 ">October 2020</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power announces SPAC merger agreement with
RMG Acquisition Corp.</p>


<h2 className=" text-left font-P22Underground-thp text-4xl font-bold pt-8 ">December 2020</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power begins trading on the NYSE under “RMO”</p>

                  
                  </div>
                </div>



                <div className="grid grid-cols-2 gap-4 w-3/4">
                  <div className="flex flex-col items-center align-center content-center justify-center">
                    <div className="flex-1 py-4" >
                      <div className=" rounded-full border border-black text-white bg-black font-bold leading-none text-md p-2">20<br></br>21</div>
                      </div>
                    <span className="border-r-2 border-black flex-grow-0 h-full w-1"></span>
                  </div>
                  <div className="py-8">
                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold ">April 2021</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power announces long-term supply agreement
with PACCAR for Peterbilt EVs</p>

                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold pt-8 ">May 2021</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power appoints VP of Cell Engineering</p>


                  
                  </div>
                </div>





                                  
        </div>

      </section>



          


        <Banner />



        <Footer />
        


    </div>
  )
}
