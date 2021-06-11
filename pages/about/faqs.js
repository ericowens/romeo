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

      <section id="hero" className="hero-about-faq flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold">Frequently Asked Questions</h1>
              
            </div>
        </div>
        </section>
        
      </section>


   


        <section className="flex justify-center bg-white px-4 py-16">
          <div className="flex max-w-screen-lg  gap-8 flex-1">
          <div className="w-1/3"> 
          <p className="text-left">Lorem ipsum dolor sit amet,
consectetur adipiscing elit, sed
do eiusmod tempor incididunt
ut labore et dolore magna
aliqua. Ut enim ad minim</p>
</div>
            <div className="w-2/3">

                 
              
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







        <Banner />



        <Footer />
        


    </div>
  )
}
