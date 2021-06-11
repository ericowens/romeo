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



      <section id="hero" className="hero-home flex " >
      <section className="flex flex-1  justify-start align-center content-center items-center    pl-28">
        
          <div className="">
              <h1 className="font-P22Underground-thp text-6xl font-bold">Power Inspired by Nature.</h1>
              <Link href="/contact">
              <button className="bg-accent  float-left py-4 px-10 my-10">Contact</button> 
              </Link>              
            </div>
      
        </section>
        
      </section>

      

      <section className="flex justify-center bg-medium py-16">
        <div className="flex max-w-screen-lg  flex-wrap flex-1">
          <div className="flex-1">
            <div className="text-left text-darkcolor inline-block border-darkcolor border-b-2">
            <h2 className="border-darkcolor border-b-2 text-left inline-block text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold py-4 ">
            
              The Future is Now</h2>
                </div>
            <p className="text-lg leading-normal my-4">For far too long, we’ve taken from nature without replenishing. Now, here we are. We see
and feel the eﬀects and it’s time for real change.</p>
<p className="text-lg leading-normal my-4">At Romeo Power, we’re not just in the business of delivering electrification solutions for
complex commercial vehicle applications. We want to change the way people live. We
have a bold vision to create a world where energy poverty no longer exists.</p>
<p className="text-lg leading-normal my-4">Curiosity is key to achieving our goal. It spurs innovation. It empowers us to find new
ways to approach seemingly unyielding challenges. We embrace the tough questions
because they’re necessary to drive transformation. We have an opportunity to make
universal energy a thing of the future.</p>
<p className="text-lg leading-normal my-4 font-bold"> And the future is now.</p>
          </div>
        </div>
        </section>

        <section className="flex justify-center bg-light pt-16 pb-4">
        <div className="flex max-w-screen-lg flex-col flex-wrap flex-1 md:flex-row m-3 space-x-4 ">
          <div className="flex-1 flex justify-center align-center flex-col">
          <h3 className="text-left text-darkcolor  font-P22Underground-thp text-4xl font-bold my-4  py-4 ">Products</h3>
          <p>Romeo Power oﬀers custom electrification solutions for the
commercial vehicle industry spanning from Class 3 delivery
vehicles to the largest, long-haul Class 8 vehicles. With high
packaging eﬀiciency, high energy density and a structurally
integrated cooling system, Romeo Power’s modular ba ery
systems have multiple safety features and are designed to
tolerate thermal event faults at a single cell level.</p>
<div className="flex"><Link href="/products">
  <button className="bg-accent  float-left py-4 px-14 my-10 text-white">Learn More</button>
  </Link> </div>
 
          </div>
          <div className="flex-1">
          <img className="float-right "
            src="/hermes-hero01.jpg"
            width='450'
            alt=""        
          />   
          </div>
        </div>
        </section>



        <section className="flex justify-center bg-light  pb-4">
        <div className="flex max-w-screen-lg flex-col flex-wrap flex-1 md:flex-row m-3 space-x-8 ">
        <div className="flex-1">
          <img className="float-left "
           src="/Image.jpg"
           width='450'
            alt=""        
          />   
          </div>
          <div className="flex-1 flex justify-center align-center flex-col">
          <h3 className="text-left text-darkcolor  font-P22Underground-thp text-4xl font-bold my-4 py-4">Technology</h3>
          <p>Romeo Power oﬀers custom electrification solutions for the
commercial vehicle industry spanning from Class 3 delivery
vehicles to the largest, long-haul Class 8 vehicles. With high
packaging eﬀiciency, high energy density and a structurally
integrated cooling system, Romeo Power’s modular ba ery
systems have multiple safety features and are designed to
tolerate thermal event faults at a single cell level.</p>
<div className="flex"><Link href="/technology"><button className="bg-accent  float-left py-4 px-14 my-10 text-white">Learn More</button></Link> </div>
 
          </div>
          
        </div>
        </section>


        <section className="flex justify-center bg-light pb-16">
        <div className="flex max-w-screen-lg flex-col flex-wrap flex-1 md:flex-row m-3 space-x-4 ">
          <div className="flex-1 flex justify-center align-center flex-col">
          <h3 className="text-left text-darkcolor  font-P22Underground-thp text-4xl font-bold my-4 py-4">U.S. Manufacturing</h3>
          <p>Romeo Power oﬀers custom electrification solutions for the
commercial vehicle industry spanning from Class 3 delivery
vehicles to the largest, long-haul Class 8 vehicles. With high
packaging eﬀiciency, high energy density and a structurally
integrated cooling system, Romeo Power’s modular ba ery
systems have multiple safety features and are designed to
tolerate thermal event faults at a single cell level.</p>
<div className="flex"><Link href="/about/us_manufacturing"><button className="bg-accent  float-left py-4 px-14 my-10 text-white">Learn More</button></Link>  </div>
 
          </div>
          <div className="flex-1">
          <img className="float-right "
            src="/USManufacturing.jpg"
            width='450'
            alt=""        
          />   
          </div>
        </div>
        </section>




        <Banner/>



        <Footer/>


    </div>
  )
}
