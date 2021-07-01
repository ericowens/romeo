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
  const uri = "http://18.218.2.107:1337/pages/13"
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

      <section id="hero" className="hero-technology  flex justify-center items-center md:items-end" >

        <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
          <div className=" max-w-screen-lg pl-4 ">
            <div className="">
              <h1 className="  font-P22Underground-thp text-5xl md:text-7xl font-bold" dangerouslySetInnerHTML={{ __html: data.contentSections[0].text}}></h1>


            </div>
          </div>
        </section>

      </section>



      <section className="flex justify-center bg-white px-4 py-16">
        <div className="flex max-w-screen-lg  flex-wrap flex-1">
          <div className="flex-1">

            <p className="font-P22Underground-thp text-2xl font-bold  text-left p-4" dangerouslySetInnerHTML={{ __html: data.contentSections[1].List}}>
              </p>

          </div>
        </div>
      </section>


      <section className="flex bg-romeogray justify-center py-16">

        <div className=" flex justify-center align-center content-center px-4  flex-col max-w-screen-lg   ">

          <h2 className=" text-left   flex-1 text-white  font-P22Underground-thp text-4xl font-bold ">
          {data.contentSections[2].SectionTitle}
              </h2>
          <p className=" text-left text-white flex-1 font-P22Underground-thin text-lg py-4"
          dangerouslySetInnerHTML={{ __html: data.contentSections[2].SectionBody}}>
            </p>

        </div>

      </section>


      <section className="flex justify-center bg-white py-16">
        <div className="flex max-w-screen-lg  flex-wrap flex-1">
          <div className="flex-1">











            <div className="flex flex-col md:flex-row gap-8 px-4 py-12">



              <div className="flex-1 md:w-1/2">

                <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8 mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                {data.contentSections[3].SectionTitle}</h2>
                <p className=" text-left  font-P22Underground-thin text-lg"
                dangerouslySetInnerHTML={{ __html: data.contentSections[3].SectionBody}}>
                  
                    </p>
                <ul className="list-disc list-outside  pt-4 ml-4 " dangerouslySetInnerHTML={{ __html: data.contentSections[4].List}}>

                 
                </ul>
                <p className=" text-left  font-P22Underground-book text-lg text-bold py-4"> {data.contentSections[5].text}</p>
                <ul className="list-disc list-outside  py-2 " dangerouslySetInnerHTML={{ __html: data.contentSections[6].List}}>
                 
                </ul>
              </div>


              <div className="flex-1 md:w-1/2">
                <img src="/Image11.jpg"></img>
              </div>



            </div>








            <div className="flex flex-col md:flex-row gap-8 px-4 py-12">

              <div className="flex-1 md:w-1/2">
                <img src="/image2.jpg"></img>
              </div>

              <div className="flex-1 md:w-1/2">
                <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8  mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                {data.contentSections[7].SectionTitle}</h2>

                <p className=" text-left  font-P22Underground-thin text-lg"
                dangerouslySetInnerHTML={{ __html: data.contentSections[7].SectionBody}}>
                  
                    </p>

                <p className=" text-left  font-P22Underground-book text-lg text-bold py-4">{data.contentSections[8].text}</p>
                <ul className="list-disc list-outside  py-2 " dangerouslySetInnerHTML={{ __html: data.contentSections[9].List}}>
                  
                </ul>
              </div>



            </div>



            <div className="flex flex-col md:flex-row gap-8 px-4 py-12">



              <div className="flex-1 md:w-1/2">

                <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8 mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                {data.contentSections[10].SectionTitle}</h2>
                <p className=" text-left  font-P22Underground-thin text-lg"  dangerouslySetInnerHTML={{ __html: data.contentSections[10].SectionBody}}>
                  
                    </p>

                <p className=" text-left  font-P22Underground-book text-lg text-bold py-4">{data.contentSections[11].text}</p>
                <ul className="list-disc list-outside  py-2 " dangerouslySetInnerHTML={{ __html: data.contentSections[12].List}}>
                 
                </ul>
              </div>


              <div className="flex-1 md:w-1/2">
                <img src="/Image33.jpg"></img>
              </div>



            </div>



            <div className="flex flex-col md:flex-row gap-8 px-4 py-12">

              <div className="flex-1 md:w-1/2">
              <img src="/Images/Manufacturing images/Reliability.jpg"></img>
              </div>

              <div className="flex-1 md:w-1/2">
                <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8  mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                {data.contentSections[13].SectionTitle}</h2>

                <p className=" text-left  font-P22Underground-thin text-lg" dangerouslySetInnerHTML={{ __html: data.contentSections[13].SectionBody}}></p>
                  


              </div>



            </div>



            <div className="flex flex-col md:flex-row gap-8 px-4 py-12">



              <div className="flex-1 md:w-1/2">

                <h2 className="border-accent border-b-2 text-left inline-block text-darkcolor pr-8 mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                {data.contentSections[14].SectionTitle}</h2>
                <p className="text-left font-P22Underground-thin text-lg"
                dangerouslySetInnerHTML={{ __html: data.contentSections[14].SectionBody}}></p>
                <ul className="list-disc list-outside " dangerouslySetInnerHTML={{ __html: data.contentSections[15].List}}>
                  
                </ul>


              </div>


              <div className="flex-1 md:w-1/2">
              <img src="/Images/Manufacturing images/functional-testing.jpg"></img>
               
              </div>



            </div>














          </div>
        </div>
      </section>




      <section className="flex justify-center bg-medium py-16">
        <div className="flex max-w-screen-lg px-4 flex-wrap flex-1">
          <div className="flex-1">
            <div className=" pb-4 border-accent border-b-2 ">
              <h2 className="text-left inline-block text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold pt-4 ">
              {data.contentSections[3].SectionTitle}</h2>
            </div>

            <p className=" text-left flex-1 font-P22Underground-thin text-lg py-4">
              At Romeo Power, we develop electromechanical architectures for maximum packaging eﬀiciency, light weighting and
              safety from conceptualization to production.
                </p>

            <p className=" text-left flex-1 font-P22Underground-book font-bold text-lg py-4">
              Romeo Power’s Approach:
                </p>

            <ul className="list-disc list-outside ">
              <li className="font-P22Underground-thin">Proprietary electro-mechanical, thermal and structural architectures specific for diverse applications</li>
              <li className="font-P22Underground-thin">Comprehensive material compatibility studies, including corrosion and fatigue testing</li>
              <li className="font-P22Underground-thin">Utilization of the latest Finite Element Analysis (FEA) tools to analyze structural load path development, optimum
material selection and joining technologies</li>
              <li className="font-P22Underground-thin">Design engineering in a 3D environment using Catia V6 for rapid turnaround</li>

            </ul>



          </div>
        </div>
      </section>


      <section className="flex justify-center bg-white py-16">
        <div className="flex max-w-screen-lg px-4 flex-wrap flex-1">
          <div className="flex-1">
            <div className=" pb-4 border-accent border-b-2 ">
              <h2 className=" text-left inline-block text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold pt-4 ">
              {data.contentSections[3].SectionTitle}</h2>
            </div>

            <p className=" text-left flex-1 font-P22Underground-thin text-lg py-4">
              Romeo Power’s battery safety design is rooted in extensive research. Through rigorous testing, we gain valuable data and an in-depth
understanding of critical battery safety designs.</p>
            <p className=" text-left flex-1 font-P22Underground-thin text-lg py-4">
              The result is a focused approach to management and mitigation of critical battery system failures, including thermal event mitigation through
              intelligent venting strategies and a single cell fault tolerant system design.
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
