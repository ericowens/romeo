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

      <section id="hero" >
      <section className="flex justify-center">
        <div className="flex max-w-screen-lg  flex-wrap flex-1">
          <div className="justify-start pl-4 ">
              <h1 className="font-P22Underground-thp text-7xl font-bold">Power Inspired by Nature.</h1>
              <Link href="/contact">
              <button className="bg-accent  float-left py-4 px-14 my-14">Contact</button> 
              </Link>
                
            </div>
        </div>
        </section>
        
      </section>

      <section className="flex justify-center bg-medium py-16">
        <div className="flex max-w-screen-lg  flex-wrap flex-1">
          <div className="flex-1">
            <h2 className="text-left text-darkcolor underline font-P22Underground-thp text-4xl font-bold ">BASE</h2>
            
          </div>
        </div>
        </section>




        <Banner/>



        <Footer/>


    </div>
  )
}
