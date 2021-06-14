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

      <section id="hero" className="bg-accent flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold">Privacy Policy
</h1>
              
              
            </div>
        </div>
        </section>
        
      </section>


      
      <section className="flex justify-center bg-white py-16">
          <div className="flex max-w-screen-lg  flex-wrap flex-1">
            <div className="flex-1">
              <div className=" pb-8 ">
              <h2 className=" block text-left  text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold py-4 ">
              Privacy Policy</h2>
              </div>
              <p className="text-left font-P22Underground-thin py-4">
                Copy
</p>

             
            </div>
          </div>
          </section>

      







        <Banner />



        <Footer />
        


    </div>
  )
}
