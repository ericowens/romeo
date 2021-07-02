import Head from 'next/head'
import Navbar from '../../comps/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../comps/Footer'
import Banner from '../../comps/Banner'
import observe_nav from '../../comps/observe_nav'
import React, { useState, useEffect } from 'react'

export async function getServerSideProps(context) {
  // Fetch data from external API
  const uri = "http://18.218.2.107:1337/pages/16"
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

      


      <section id="hero" className="hero-about-manu  flex justify-center items-end block " >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg pl-4 ">
          <div className="">
          <h1 className=" text-left font-P22Underground-thp text-5xl lg:text-7xl font-bold" dangerouslySetInnerHTML={{ __html: data.contentSections[0].text}}></h1>
            
              
              
            </div>
        </div>
        </section>
        
      </section>


   


      
      



        <section className="flex justify-center bg-medium px-4 py-16">
          <div className="flex max-w-screen-lg  flex-wrap flex-1">
            <div className="flex-1">
              
              
              <p className="text-center" dangerouslySetInnerHTML={{ __html: data.contentSections[1].List}}></p>
             
            </div>
          </div>
          </section>



          <section className="flex justify-center bg-white py-16">
          <div className="flex max-w-screen-lg px-4  flex-wrap flex-1">
            <div className="flex-1">
             
              <div className="flex gap-8 py-12 md:flex-row flex-col">

              

                <div className=" w-full md:w-1/2">
                  
                <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8 mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                {data.contentSections[2].SectionTitle}</h2>
                    <p className=" text-left  font-P22Underground-thin text-lg" dangerouslySetInnerHTML={{ __html: data.contentSections[2].SectionBody}}>
                    
                    </p>
                    
                      
                </div>


                <div className="w-full md:w-1/2">
                <img src={`${process.env.NEXT_PUBLIC_ENV_URL}${data.contentSections[2].image.url}`}></img>
                </div>

                

              </div>


              




              <div className="flex gap-8 py-12 md:flex-row flex-col">

              <div className="w-full md:w-1/2 order-last md:order-first">
                  <img src={`${process.env.NEXT_PUBLIC_ENV_URL}${data.contentSections[3].image.url}`}></img>
                </div>

                <div className="w-full md:w-1/2 ">
                <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8  mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                {data.contentSections[3].SectionTitle}</h2>
              
                    <p className=" text-left  font-P22Underground-thin text-lg" dangerouslySetInnerHTML={{ __html: data.contentSections[3].SectionBody}}>
                   
                    </p>
                    
                      
                </div>

                

              </div>



              <div className="flex gap-8 py-12 md:flex-row flex-col">

              

                <div className="w-full md:w-1/2">
                  
                <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8 mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                {data.contentSections[4].SectionTitle}</h2>
                    <p className=" text-left  font-P22Underground-thin text-lg" dangerouslySetInnerHTML={{ __html: data.contentSections[4].SectionBody}}>
                    
                    </p>
                    
                      
                </div>


                <div className="w-full md:w-1/2">
                  <img src={`${process.env.NEXT_PUBLIC_ENV_URL}${data.contentSections[4].image.url}`}></img>
                </div>

                

              </div>



              <div className="flex gap-8 py-12 md:flex-row flex-col">

<div className="w-full md:w-1/2 order-last md:order-first">
    <img src={`${process.env.NEXT_PUBLIC_ENV_URL}${data.contentSections[5].image.url}`}></img>
  </div>

  <div className="w-full md:w-1/2">
  <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8  mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
  {data.contentSections[5].SectionTitle}</h2>

      <p className=" text-left  font-P22Underground-thin text-lg" dangerouslySetInnerHTML={{ __html: data.contentSections[5].SectionBody}}>
      
      </p>
      
        
  </div>

  

</div>

              


              
              
             
            </div>
          </div>
          </section>


          


        <Banner />



        <Footer />
        


    </div>
  )
}
