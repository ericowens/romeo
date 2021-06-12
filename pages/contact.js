import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Banner from '../comps/Banner'
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

      <section id="hero" className="hero-contact flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold">Contact</h1>
              
              
            </div>
        </div>
        </section>
        
      </section>


      




      <section className="flex bg-white justify-center py-16">

          <div className="flex-1  border-2 border-black p-8 flex justify-center align-center content-center  max-w-screen-lg   ">
  
            <div className="w-1/2 flex flex-col ">
              <div className="  flex-1 w-full">
                <h2 className=" text-left inline-block text-darkcolor   font-P22Underground-thp text-xl font-bold  ">
                Get In Touch</h2>
              
              </div>
              <div className=" flex-1 w-full">
                <p className=" text-left  flex-1 font-P22Underground-thin text-xs py-2">
                  <img className="float-left" src="map.jpg" width="25"></img>
                  4380 Ayers Ave.<br/>
Vernon, CA 90058
                </p>
                <p className=" text-left  flex-1 font-P22Underground-thin text-xs py-2">
                <img className="float-left" src="phone.jpg" width="25"></img>+1.833.467.2237
                </p>
              </div>
              <div className=" flex-1 w-full">
                <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Form
                </p>
              </div>
            </div>
            

            <div className="w-1/2 ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7478672747925!2d-118.1863346845222!3d33.999009427980475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d2cfed148d%3A0xf5ac45541220129e!2sRomeo%20Power%2C%20Inc.!5e0!3m2!1sen!2sus!4v1623458417896!5m2!1sen!2sus" width="100%" height="300"   loading="lazy"></iframe>
            </div>
           
          </div>

      </section>

      <section className="flex bg-white justify-center py-16">

          <div className="flex-1 flex justify-center align-center content-center   max-w-screen-lg   ">
  
            <p className=" text-center  flex-1 font-P22Underground-thin text-lg py-4">
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


        <Banner />



        <Footer />
        


    </div>
  )
}
