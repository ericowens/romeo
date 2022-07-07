import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Banner from '../comps/Banner'
import Formarea from '../comps/Formarea'
import observe_nav from '../comps/observe_nav'
import React, { useState, useEffect } from 'react'

export async function getServerSideProps(context) {
  // Fetch data from external API
  const uri = `${process.env.NEXT_PUBLIC_ENV_URL}/pages/23`
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

      <Navbar />

      <section id="hero" className="hero-markets  flex justify-center items-center md:items-end" >

        <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
          <div className=" max-w-screen-lg pl-4 ">
            <div className="">
              <h1 className="  font-P22Underground-thp text-5xl md:text-7xl font-bold" dangerouslySetInnerHTML={{ __html: data.contentSections[0].text}}></h1>


            </div>
          </div>
        </section>

      </section>



     


      <section className="flex justify-center bg-white py-2">
        <div className="flex max-w-screen-lg  flex-wrap flex-1">
          <div className="flex-1">











            <div className="flex flex-col md:flex-row gap-8 px-4 py-12">

            <div className="flex-1 md:w-1/2">
                <img src={`${data.contentSections[1].image.url}`}></img>
              </div>

              <div className="flex-1 md:w-1/2">

                <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8 mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                {data.contentSections[1].SectionTitle}</h2>
                <p className=" text-left  font-P22Underground-thin leading-tight"
                dangerouslySetInnerHTML={{ __html: data.contentSections[1].SectionBody}}>
                  
                    </p>
               
                
              </div>


              



            </div>








            <div className="flex flex-col md:flex-row gap-8 px-4 py-12">

              <div className="flex-1 md:w-1/2">
                <img src={`${data.contentSections[2].image.url}`}></img>
              </div>

              <div className="flex-1 md:w-1/2">
                <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8  mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                {data.contentSections[2].SectionTitle}</h2>

                <p className=" text-left  font-P22Underground-thin leading-tight "
                dangerouslySetInnerHTML={{ __html: data.contentSections[2].SectionBody}}>
                  
                    </p>

               
              </div>



            </div>



            <div className="flex flex-col md:flex-row gap-8 px-4 py-12">

            <div className="flex-1 md:w-1/2">
                <img src={`${data.contentSections[3].image.url}`}></img>
              </div>


              <div className="flex-1 md:w-1/2">

                <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8 mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                {data.contentSections[3].SectionTitle}</h2>
                <p className=" text-left  font-P22Underground-thin leading-tight"  dangerouslySetInnerHTML={{ __html: data.contentSections[3].SectionBody}}>
                  
                    </p>

               
              </div>


            



            </div>



           














          </div>
        </div>
      </section>















      <Formarea />





      <Banner />



      <Footer />


    </div>
  )
}
