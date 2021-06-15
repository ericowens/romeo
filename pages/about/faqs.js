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

      <Navbar />

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
          <div className="w-1/5 md:block hidden">
            <p className="text-left"></p>
          </div>
          <div className="w-full lg:w-3/5 ">

            <details id="q1" className=" pb-4" >
              <summary className="font-P22Underground-book mb-8 py-2 border-darkcolor border-b border-t flex flex-col align-center  justify-center text-lg ">
                <p className="font-bold">What is Romeo Power’s mission and how does it influence the business on a day-to-day basis?</p>
              </summary>
              <div >
                <p className="font-P22Underground-book">We are a Southern California energy technology
                company dedicated to enabling large-scale, sustainable
                transportation with our suite of energy-dense battery
                packs and modules. We are motivated by a bold vision to
                create a world where energy poverty no longer exists –
                where all eight billion global citizens have access to
                sustainable and aﬀordable clean energy.
                We believe that to secure a livable, sustainable future for
                our world, we must transition from polluting combustion
                engines to clean battery-electric energy fast and at scale.
                At Romeo Power, we are developing the world’s highest
                energy dense batteries, with a focus on safety, extended
                range and durability, for heavy-duty commercial vehicles.
                Our team of elite engineers has made crucial
                breakthroughs in safety standards, energy density,
                battery management and cost-eﬀective manufacturing,
                and we aren’t slowing down anytime soon. We are laser-
                focused on addressing our customers’ specific pain
                points to enable more commercial fleet managers to
switch to battery-electric solutions.</p>
              </div>
            </details>

            <details id="q2" className=" pb-4">
              <summary className="font-P22Underground-book mb-8 py-2 border-darkcolor border-b border-t flex flex-col align-center justify-center text-lg ">
                <p className="font-bold">What do we mean when we talk about energy
                poverty? How does Romeo Power address
energy poverty today?</p>
              </summary>
              <div >
                <p className="font-P22Underground-book">When we talk about creating a world where energy
                poverty no longer exists, we are referring to the global
                imperative to transition to cleaner, more sustainable
                energy sources in a way that is safe and aﬀordable for all.
                Where it was once prohibitively expensive to make the
                switch to electric alternatives, innovators like Romeo
                Power are laser-focused on overcoming these barriers at
scale.</p>
                <p className="font-P22Underground-book">Today, Romeo Power is building the world’s highest
                energy dense battery systems, with a focus on safety,
                extended range and durability, for heavy-duty
commercial vehicles.</p>
              </div>
            </details>





            <details id="q3" className=" pb-4">
              <summary className="font-P22Underground-book mb-8 py-2 border-darkcolor border-b border-t flex flex-col align-center justify-center text-lg ">
                <p className="font-bold ">What does Romeo Power manufacture?</p>
              </summary>
              <div >
                <p className="font-P22Underground-book">We manufacture battery modules, packs and battery
                management systems (BMS) for the commercial EV
                market and other high-performance EVs that require the
                highest energy dense solutions. Our end-to-end
                engineering capabilities include cell science, mechanical,
                thermal, electrical, firmware systems and stress.
                Our balanced, modular and integrated design provides
                superior range and power, at an eﬀective cost. When it
                comes to battery technology, the greater the energy
                density and power density, the longer the range and the
                better the acceleration. Our battery systems provide
                both, resulting in eﬀicient packs without sacrificing
space.</p>
              </div>
            </details>






            <details id="q4" className=" pb-4">
              <summary className="font-P22Underground-book mb-8 py-2 border-darkcolor border-b border-t flex flex-col align-center  justify-center text-lg ">
                <p className="font-bold">Where does Romeo Power fit within the
                battery market and commercial EV value
chain overall?</p>
              </summary>
              <div >
                <p className="font-P22Underground-book">Romeo Power is at the heart of the EV battery market.
                Our industry-leading energy density and cell agnostic
                approach enable us to collaborate with the other leading
                industry players and vehicle manufacturers to drive
                innovation at a rapid pace. After our technology
                undergoes rigorous safety and reliability testing, we
                manufacture the battery packs and battery management
                systems that directly power vehicles for OEMs in North
America and Europe.</p>
              </div>
            </details>






            <details id="q5" className=" pb-4">
              <summary className="font-P22Underground-book mb-8 py-2 border-darkcolor border-b border-t flex flex-col align-center  justify-center text-lg ">
                <p className="font-bold">What types of companies does Romeo Power
                look to partner and work with? Does Romeo
                Power look to partner with companies outside
of the EV industry?</p>
              </summary>
              <div >
                <p className="font-P22Underground-book">Romeo Power focuses on two key markets in mobility
                energy technology. First, the North American commercial
                vehicle market. Second, European high-performance
                vehicles in addition to light-, medium- and heavy-duty
commercial vehicles.</p>
                <p className="font-P22Underground-book">As we continue to collaborate and expand our ability to
                serve our customers, we are committed to partnering
                with organizations that share our vision and goal of an
                electrified future and an end to energy poverty. We will
                also look to work with organizations that prioritize safety,
                durability and responsible recycling in alignment with
our corporate mission.</p>
                <p className="font-P22Underground-book">Romeo Power’s technology also naturally lends itself to
                numerous applications in industries with increasingly
                diﬀicult applications, including the mining, agriculture,
marine and aerospace industries.</p>

              </div>
            </details>






            <details id="q6" className=" pb-4">
              <summary className="font-P22Underground-book mb-8 py-2 border-darkcolor border-b border-t flex flex-col align-center  justify-center text-lg ">
                <p className="font-bold">What does Romeo Power’s logo represent?</p>
              </summary>
              <div >
                <p className="font-P22Underground-book">Romeo Power’s logo is a celebration of a current as it
                flows towards the possibility of a be er future for all.
                Romeo Power is moving in one direction - forward. We
                direct our energy towards achieving our objectives as one
                strong, cohesive unit. And this includes our customers.
                Just as the current flows in a continuous circle, the circle
                in our logo mirrors the unceasing flow of our passion and
                determination to create a zero-emissions future, in a
                world in which access to energy is universal.
                The Romeo Power logo is inspired by the center of a
                tree’s wood core, called Heartwood. It is the
                fundamental supporting pillar of the tree and it never
                decays or loses strength. In many ways, it’s as strong as
                steel and this feat of nature aligns perfectly with Romeo
                Power’s internal values. Not only does the Romeo Power
                logo visually represent the natural pattern of Heartwood,
                itself akin to the design of a battery cell, but it represents
Romeo Power’s positioning as the core of electrification.</p>
              </div>
            </details>





          </div>
          <div className="w-1/5 md:block hidden">
            <p className="text-left"></p>
          </div>
        </div>
      </section>







      <Banner />



      <Footer />



    </div>
  )
}
