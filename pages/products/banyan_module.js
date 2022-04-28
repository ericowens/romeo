import Head from 'next/head'
import Navbar from '../../comps/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../comps/Footer'
import Banner from '../../comps/Banner'
import observe_nav from '../../comps/observe_nav'
import React, { useState, useEffect } from 'react'
import Formarea from '../../comps/Formarea'

export async function getServerSideProps(context) {
  // Fetch data from external API
  const uri = `${process.env.NEXT_PUBLIC_ENV_URL}/pages/11`
  const res = await fetch(uri)
  let data = await res.json()
  
  
  console.log(data)
  // console.log(data.jobs[0].location)

  // Pass data to the page via props
  return { props: { data } }
}

export default function Home({data}) {
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

      <section id="hero" className="hero-products-hermes flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg pl-4 ">
          <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold" dangerouslySetInnerHTML={{ __html: data.contentSections[0].text}}></h1>
              <p className="text-center md:text-left  font-P22Underground-thin text-lg pt-8"><a href="#formplease" >               
                <button className="bg-accent text-white font-P22Underground-book md:float-left py-4 px-10 my-10">Contact</button>
                </a>
                </p>
             
            </div>
        </div>
        </section>
        
      </section>


   


      <section className="flex justify-between  bg-white  py-16">
         
          

            <div className="flex-1 pl-16 pr-16">
              <div className=" pb-8 ">
              <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold py-4 ">
              {data.contentSections[1].SectionTitle}</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: data.contentSections[1].SectionBody}}></p>
              <img className="pt-8 md:pt-2" src="/Images/HermesModual2.jpg" ></img>  
              <p className="text-center md:text-left  font-P22Underground-thin text-lg pt-8"><a href="#formplease" >               
                <button className="bg-accent text-white font-P22Underground-book md:float-left py-4 px-10 my-10">Contact</button>
                </a>
                </p>
            </div>

            <div className="w-1/3 hidden md:block">
              <img className="text-right float-right " src="/Images/HermesModule1.jpg"  ></img>  
              </div>         
            
         
          </section>


{/* 
          <section className="flex justify-between  bg-white  py-16">
         
          <div className="w-1/3 flex align-center content-center">
              <img src="/HermesModule2.jpg" ></img>           
            </div>

            <div className="w-1/3">
              <div className=" pb-8 ">
              <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold py-4 ">
              Hermes Module</h2>
              </div>
              <p>The ideal electrification solution for the commercial vehicle industry,
              Hermes is a modular building block consisting of lithium-ion cells in a
              21700 format that are connected in series and parallel to achieve the
              desired voltage, energy and power capability. Its high packaging
              eﬀiciency, high energy density and structurally integrated cooling
              system makes it an ideal battery system for many automotive
              powertrain applications.</p>
            </div>

            <div className="w-1/3">
              <img className="text-right float-right " src="/HermesModule1.jpg"  ></img>  
              </div>         
            
         
          </section> */}



      



        <section className="flex justify-center bg-medium px-4 py-16">
          <div className="flex max-w-screen-lg  flex-wrap flex-1">
            <div className="flex-1">
              <div className=" pb-8 ">
              <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold pt-4 ">
              {data.contentSections[2].SectionTitle}</h2>
              </div>
              <ul className="list-disc list-outside " dangerouslySetInnerHTML={{ __html: data.contentSections[2].SectionBody}}>
                
              </ul>
              <div className="flex flex-col md:flex-row gap-16 md:gap-2 justify-around py-8">
                <div className=" flex gap-4 flex-col items-center">
                  <div><img src="/svg/Battery.svg"></img> </div> 
                  <h2 className="text-4xl font-P22Underground-book">10k Wh</h2>
                  <p>Total Energy Capacity</p>          
                </div>
                <div className="flex gap-4 flex-col items-center">
                <div><img src="/svg/Battery.svg"></img> </div> 
                  <h2 className="text-4xl font-P22Underground-book">196 Wh/kg</h2>
                  <p>Energy Density</p>           
                </div>
                <div className="flex gap-4 flex-col items-center">
                <div><img src="/svg/Battery.svg"></img> </div> 
                  <h2 className="text-4xl font-P22Underground-book">0.5C</h2>
                  <p className="text-center">Fast Charging<br></br>
Capacity</p>             
                </div>
                               

              </div>

              
              <p className="text-center md:text-left  font-P22Underground-thin text-lg pt-8"><a target="_blank" href={`${data.contentSections[3].url}`}>
               
                <button className="bg-accent text-white font-P22Underground-book md:float-left py-4 px-10 my-10">{data.contentSections[3].text}</button>
                </a>
                </p>
             
            </div>
          </div>
          </section>

        <Formarea />


          


        <Banner />



        <Footer />
        


    </div>
  )
}
