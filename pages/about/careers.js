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

      <section id="hero" className="hero-about-careers flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold">Careers</h1>
              <Link href="/contact">
              <button className="bg-accent  float-left py-4 px-10 my-10">Join our team</button> 
              </Link> 
              
            </div>
        </div>
        </section>
        
      </section>


      <section className="flex justify-center bg-medium py-16">
          <div className="flex max-w-screen-lg  flex-wrap flex-1">
            <div className="flex-1">             

                <p className=" text-center flex-1 font-P22Underground-thin text-2xl uppercase leading-loose py-4">
                Romeo Power’s goal is to ensure that green energy is accessible to all eight billion people across the globe. It’s our True North; the multi-generational endeavor that drives us on a daily basis and we are unwavering in our commitment to achieving it, together.


                </p>   

                <p className=" text-right flex-1 font-P22Underground-thin text-xl py-4">
               - Lionel Selwood, Jr.  <br/>CEO


                </p>           
              
              
             
            </div>
          </div>
          </section>





      <section className="flex bg-white justify-center py-16">

          <div className="flex-1 flex justify-center align-center content-center  flex-col max-w-screen-lg   ">
  
            <h2 className=" text-left   flex-1   font-P22Underground-thp text-4xl font-bold pt-8 ">
              Our Mission
            </h2>
            <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">
              To power the world’s transition to electrification.
            </p>



            <h2 className=" text-left   flex-1   font-P22Underground-thp text-4xl font-bold pt-8 ">
            Our Vision
            </h2>
            <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">
            We seek to create a world where energy poverty no longer exists.
            </p>




            <h2 className=" text-left   flex-1   font-P22Underground-thp text-4xl font-bold pt-8 ">
            Working at Romeo Power
            </h2>
            <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">
            At Romeo Power, we’re turning the vision of universal energy into reality. We’re solving one of
the world’s main challenges with a team of talented individuals who share our passion for
creating real change. Headquartered in Los Angeles, California, we work to deliver advanced
electrification solutions for complex commercial vehicle applications.
<p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">We embrace innovative ideas and inclusivity at our core. We’re hiring the best so we can
continue to be the brightest.</p>
<p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">If you’re ready to join us on our mission to power the world’s transition to electrification, we
invite you to explore current opportunities.</p>
            </p>
           
          </div>

      </section>





      <section className="flex bg-white justify-center py-16">

      <div className="flex-1 flex justify-center align-center content-center  gap-8 max-w-screen-lg   ">

        <div className="w-1/2">
          <img src="/car1.jpg"></img>
          <img src="/car2.jpg"></img>
        <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">
        Our Benefits<br/>
Medical, Dental and Vision
Romeo Power oﬀers rich benefits packages,
many of which we cover at 100% for you and
your eligible dependents.</p>
<p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Work-life Balance<br/>
Romeo Power provides a generous amount
of vacation time with Unlimited
Discretionary Time Oﬀ (DTO) for exempt
employees and 120 hours of annual Paid Time
Oﬀ (PTO) for non-exempt employees. We
also have paid holidays and oﬀer 40 hours of
sick time at the beginning of each year.</p>
<p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Competitive Salary<br/>
The high technology space is a competitive
market. To be the best, we need the
brightest. We value our team members and
our compensation packages reflect
accordingly.</p>
<p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Preparing for the Future<br/>
Employees are eligible to enroll in Romeo
Power’s 401(k) plan after three months of
employment. We also cover $20,000 per
employee in basic life and AD&D insurance at
no cost to you.

        </p>
        </div>



        <div className="w-1/2">
        <img src="/car3.jpg"></img>
          <img src="/car4.jpg"></img>
        <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">The fun stuﬀ<br/>
Know quality candidates that you’d love to
have join us on our mission? Romeo Power
has a referral program.<br/>
Romeo Power’s kitchen is stocked with
unlimited snacks.<br/>
Eligible employees can participate in our
Patent Reward Program that seeks to support
creativity and inspire continual innovation.</p>
        </div>

      
      </div>

      </section>




   


      







        <Banner />



        <Footer />
        


    </div>
  )
}
