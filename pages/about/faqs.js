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
  const uri = "http://18.218.2.107:1337/pages/17"
  const res = await fetch(uri)
  let data = await res.json()

  const uri2 = "http://18.218.2.107:1337/faqs"
  const res2 = await fetch(uri2)
  let data2 = await res2.json()
  
  
  console.log(data2)
  // console.log(data.jobs[0].location)

  // Pass data to the page via props
  return { props: { data, data2 } }
}


export default function Home({data, data2}) {
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
          <div className=" max-w-screen-lg pl-4  ">
            <div className="">
              <h1 className="  font-P22Underground-thp text-6xl md:text-7xl font-bold" dangerouslySetInnerHTML={{ __html: data.contentSections[0].text}}>
                </h1>

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

          {data2.map((faq, index) => (  
                <details id="q1" className="faq    " >
                <summary className="font-P22Underground-book  border-darkcolor  border-t flex flex-col align-center  justify-center text-lg ">
                  <p className="font-bold" dangerouslySetInnerHTML={{ __html: faq.question}}></p>
                </summary>
                <div >
                  <p className="font-P22Underground-book" dangerouslySetInnerHTML={{ __html: faq.answer}}></p>
                </div>
                </details>
          ))}

           
            

            




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
