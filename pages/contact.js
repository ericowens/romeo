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
  
  const formsubmit = async event => {
    const thanks = document.querySelector("#thankscontact");
    const form = document.querySelector("#contact");
    event.preventDefault()
    // console.log('here', event.target.name.value)

    const res = await fetch(
      '/api/contact',
      {
        body: JSON.stringify({
          fname: event.target.fname.value ?? '-',
          lname: event.target.lname.value ?? '-',
          email: event.target.email.value ?? '-',
          company: event.target.company.value ?? '-',
          message: event.target.message.value ?? '-',
         
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    thanks.classList.remove("hidden");
    form.classList.add("hidden");

    const result = await res.json()
    console.log('here', result)
    // result.user => 'Ada Lovelace'
  }

  return (
    <div>
      <Head>
        <title>Romeo</title>
        <link rel="icon" href="/favicon.ico" />
        
        
      </Head>

      <Navbar/>

      <section id="hero" className="hero-contact flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg pl-4 ">
          <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold">Contact</h1>
              
              
            </div>
        </div>
        </section>
        
      </section>


      




      <section className="flex bg-white justify-center py-16">

          <div className="flex-1 gap-8  border-2 border-black p-8 flex justify-center align-center content-center  max-w-screen-lg flex-col md:flex-row  ">
  
            <div className="w-full md:w-1/2 flex flex-col  ">
              <div className=" gap-4 flex-1 w-full">
                <h2 className=" text-left inline-block text-darkcolor   font-P22Underground-thp text-xl font-bold pt-8  ">
                Get In Touch</h2>
              
              </div>
              <div className=" flex-1 w-full">
                <p className=" text-left  flex-1 font-P22Underground-thin text-md py-2">
                  <img className="float-left" src="map.jpg" width="25"></img>
                  4380 Ayers Ave.<br/>
Vernon, CA 90058
                </p>
                <p className=" text-left  flex-1 font-P22Underground-thin text-md py-2">
                <img className="float-left" src="phone.jpg" width="25"></img>+1 833.467.2237
                </p>
              </div>
              <div className=" flex-1 w-full">
                
              <p id="thankscontact" className="hidden text-darkcolor  text-base  ">Thank You</p>


              <form id="contact" onSubmit={formsubmit}>
            
            <div className="flex md:space-x-5">
              <div className="w-1/2">
                <input  name="fname" className="sm:w-full my-2 p-4 "   type="text" placeholder="First Name"  required></input>
              </div>
              <div className="w-1/2">
                <input  name="lname" className="sm:w-full my-2 p-4"   type="text" placeholder="Last Name" required></input>
               </div>
            </div>
            <div className="flex space-x-20">
              <div className="flex-1 w-full">
                <input  name="email" className="sm:w-full my-2 p-4"   type="text" placeholder="Email" required></input>
                <input  name="company" className="sm:w-full my-2 p-4"   type="text" placeholder="Company" required></input>
                <textarea  name="message" className="sm:w-full my-2 px-2 p-4 form-textarea  block" rows="3"  placeholder="Message"></textarea>
                      
                <button type="submit" className="bg-accent sm:w-full   py-4 px-14  text-white">Submit</button>
              </div>
            </div>
          
                         
       
     
      </form>








              </div>
            </div>
            

            <div className="w-full md:w-1/2 ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7478672747925!2d-118.1863346845222!3d33.999009427980475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d2cfed148d%3A0xf5ac45541220129e!2sRomeo%20Power%2C%20Inc.!5e0!3m2!1sen!2sus!4v1623458417896!5m2!1sen!2sus" width="100%" height="450"   loading="lazy"></iframe>
            </div>
           
          </div>

      </section>

    


        <Banner />



        <Footer />
        


    </div>
  )
}
