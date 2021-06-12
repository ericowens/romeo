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

      <section id="hero" className="hero-about-resources flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold">Resources</h1>
              
              
            </div>
        </div>
        </section>
        
      </section>


      




      <section className="flex bg-white justify-center py-16">

          <div className="flex-1 flex justify-center align-center content-center  flex-col max-w-screen-lg   ">
  
            <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui oﬀicia deserunt
mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            </p>
           
          </div>

      </section>



      <section className="flex bg-white justify-center py-4">

          <div className="flex-1 flex justify-center align-center content-center gap-8 max-w-screen-lg   ">
  
            <div className="w-1/2 bg-medium p-10">
              <h2 className=" border-b-2 text-left  inline-block   flex-1   font-P22Underground-thp text-4xl font-bold pt-8 ">
              Resource Title
              </h2>
              <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4"></p>
            </div>

            <div className="w-1/2 bg-medium p-10">
              <h2 className=" border-b-2 text-left inline-block   flex-1   font-P22Underground-thp text-4xl font-bold pt-8 ">
              Resource Title
              </h2>
              <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4"></p>
            </div>
           
          </div>

      </section>

      <section className="flex bg-white justify-center py-4">

<div className="flex-1 flex justify-center align-center content-center gap-8 max-w-screen-lg   ">

  <div className="w-1/2 bg-medium p-10">
    <h2 className=" border-b-2 text-left  inline-block   flex-1   font-P22Underground-thp text-4xl font-bold pt-8 ">
    Resource Title
    </h2>
    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4"></p>
  </div>

  <div className="w-1/2 bg-medium p-10">
    <h2 className=" border-b-2 text-left inline-block   flex-1   font-P22Underground-thp text-4xl font-bold pt-8 ">
    Resource Title
    </h2>
    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4"></p>
  </div>
 
</div>

</section>




      







        <Banner />



        <Footer />
        


    </div>
  )
}
