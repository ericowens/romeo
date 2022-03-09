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



  

  const formsubmitsub = async event => {
    const thanks = document.querySelector("#thankssub");
    const form = document.querySelector("#subscribe");
    event.preventDefault()
    // console.log('here', event)

    const res = await fetch(
      '/api/subscribe',
      {
        body: JSON.stringify({
          fname: event.target.fname.value ?? '-',
          lname: event.target.lname.value ?? '-',
          email: event.target.email.value ?? '-',
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
    // console.log('here', result)
    // result.user => 'Ada Lovelace'
  }

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
          phone: event.target.phone.value ?? '-',
          title: event.target.title.value ?? '-',
          company: event.target.company.value ?? '-',
          tob: event.target.tob.value ?? '-',
          region: event.target.region.value ?? '-',
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


      




    
      <section className="flex justify-center bg-white py-16">



       


        <div className="flex max-w-screen-lg flex-1 gap-2	">

          <div className="w-1/3 bg-light p-4">


            <h2 className="text-left inline-block text-darkcolor pr-8   font-P22Underground-thp text-4xl font-bold py-4 ">
              Our Office
            </h2>
            <p className="text-darkcolor  text-base leading-7 text-bold " >ROMEO POWER, INC.</p>
            <p className="address text-darkcolor font-P22Underground-thin text-base  " >4380 Ayers Ave, Vernon, CA 90058<br></br>
              sales@romeopower.com<br></br>
              +1 833.467.2237</p>
            <ul className="flex social pt-8 pb-8">
              <li className="flex-1"><a target="_blank" href="https://www.facebook.com/RomeoPowerInc"><img src="/social/facebook.svg"></img></a></li>
              <li className="flex-1"><a target="_blank" href="https://twitter.com/romeopowerinc"><img src="/social/Twitter.svg"></img></a></li>
              <li className="flex-1"><a target="_blank" href="https://www.linkedin.com/company/romeopowerinc/"><img src="/social/Linkedin.svg"></img></a></li>
              <li className="flex-1"><a target="_blank" href="https://www.youtube.com/channel/UCBLrQ658VqC1XQTGajV3xlQ"><img src="/social/Youtube.svg"></img></a></li>
              <li className="flex-1"><a target="_blank" href="https://www.instagram.com/romeopowerinc/"><img src="/social/instagram.svg"></img></a></li>
            </ul>

            <p className="text-left inline-block text-darkcolor  font-P22Underground-thp text-xl font-bold  ">
            Subscribe
            </p>
            <p id="thankssub" className="hidden text-darkcolor  text-base  ">Thank You</p>

            <form className="flex-1  gap-4 flex-grow flex flex-col" id="subscribe" onSubmit={formsubmitsub}>

              <input name="fname" required
                className="p-4" type="text" placeholder="First Name *"></input>
              <input name="lname" required
                className=" p-4" type="text" placeholder="Last Name *"></input>
              <input name="email" required
                className=" p-4" type="email" placeholder="Email *"></input>

              <div className="flex"><button type="submit" className="bg-accent  float-left py-4 px-14 my-2 text-white">Submit</button>  </div>
            </form>
          </div>

          <div className="w-2/3">
          <p id="thankscontact" className=" flex-1 hidden text-darkcolor  text-base  ">Thank You</p>

            <form id="contact" className="" onSubmit={formsubmit}>

              <div className="flex gap-4	">
                <div className="w-1/2">

                  <div className="flex gap-4	 flex-col">

                    <div className="flex-1">
                      <label>First Name <span className="text-required  text-base font-light text-sm">(Required)</span></label>
                      <input name="fname" className="sm:w-full my-2 p-4 " type="text" required></input>
                    </div>


                    <div className="flex-1">
                      <label>Email Address <span className="text-required  text-base font-light text-sm">(Required)</span></label>
                      <input name="email" className="sm:w-full my-2 p-4 " type="text" required></input>
                    </div>

                    <div className="flex-1">
                      <label>Title </label>
                      <input name="title" className="sm:w-full my-2 p-4 " type="text" ></input>
                    </div>

                    <div className="flex-1">
                      <label>Type of Business <span className="text-required  text-base font-light text-sm">(Required)</span></label>
                      <select name="tob" className="sm:w-full my-2 p-4 " type="text" required>
                        <option value="">--None--</option>
                        <option value="Public Transit Agency">Public Transit Agency</option>
                        <option value="Commercial Transit Operator">Commercial Transit Operator</option>
                        <option value="Government Agency">Government Agency</option>
                        <option value="College / University">College / University</option>
                        <option value="School">School</option>
                        <option value="Vehicle Manufacturer">Vehicle Manufacturer</option>
                        <option value="Supplier / Vendor">Supplier / Vendor</option>
                        <option value="Utility / Energy Company">Utility / Energy Company</option>
                        <option value="Media">Media</option>
                        <option value="Student">Student</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                  </div>
                </div>



                <div className="w-1/2">

                  <div className="flex gap-4	 flex-col">




                    <div className="flex-1">
                      <label>Last Name <span className="text-required  text-base font-light text-sm">(Required)</span></label>
                      <input name="lname" className="sm:w-full my-2 p-4 " type="text" required></input>
                    </div>



                    <div className="flex-1">
                      <label>Phone Number </label>
                      <input name="phone" className="sm:w-full my-2 p-4 " type="text" ></input>
                    </div>




                    <div className="flex-1">
                      <label>Company <span className="text-required  text-base font-light text-sm">(Required)</span></label>
                      <input name="company" className="sm:w-full my-2 p-4 " type="text" required></input>
                    </div>




                    <div className="flex-1">
                      <label>Region <span className="text-required  text-base font-light text-sm">(Required)</span></label>
                      <select name="region" className="sm:w-full my-2 p-4 " type="text" required>
                        <option value="">--None--</option>
                        <option value="US or Canada">US or Canada</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Central America / Caribbean">Central America / Caribbean</option>
                        <option value="South America">South America</option>
                        <option value="Europe">Europe</option>
                        <option value="Middle East">Middle East</option>
                        <option value="Asia / Pacific">Asia / Pacific</option>
                        <option value="Africa">Africa</option>
                      </select>
                    </div>

                  </div>




                </div>

              </div>

              <div className="flex gap-4 flex-col	">
                <div className="flex-1 w-full">
                  <label>Message <span className="text-required  text-base font-light text-sm">(Required)</span></label>
                  <textarea name="message" className="sm:w-full my-2 px-2 p-4 form-textarea  block" rows="3" placeholder="Message *" required></textarea>

             
                </div>
                <div className="flex-none w-1/5">
                 
                  <button type="submit" className="bg-accent   py-4 px-14  text-white">Submit</button>
                </div>
              </div>




            </form>
          </div>

          
        </div>


      </section>

    


        <Banner />



        <Footer />
        


    </div>
  )
}
