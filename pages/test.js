import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Banner from '../comps/Banner'
import observe_nav from '../comps/observe_nav'
import React, { useState, useEffect } from 'react'


export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://boards-api.greenhouse.io/v1/boards/romeopower/jobs`)
  const data = await res.json()
  // console.log(data)
  // console.log(data.jobs[0].location)

  // Pass data to the page via props
  return { props: { data } }
}

export default function Home({ data }) {
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

      <section id="hero" className="hero-media-gallery  flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold">Careers</h1>
              
              
            </div>
        </div>
        </section>
        
      </section>


      
      <section className="flex justify-center bg-white px-4 py-16">
        <div className="flex max-w-screen-lg  flex-wrap flex-1">
          <div className="flex-1">

          <ul className="list-disc list-outside  pt-4 ml-4 ">              
          {data.jobs.map((job, index) => (            
            <li key={index} className="font-P22Underground-thin py-1">
              <a target="_blank" href={job.absolute_url}>{job.title} - {job.location.name}</a></li>
          ))}
        </ul>

           

          </div>
        </div>
      </section>

      



      


    


        <Banner />



        <Footer />
        


    </div>
  )
}
