import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Banner from '../comps/Banner'
import observe_nav from '../comps/observe_nav'
import React, { useState, useEffect } from 'react'
import { Remarkable } from 'remarkable';



export async function getServerSideProps(context) {
  // Fetch data from external API
  const uri = `${process.env.NEXT_PUBLIC_ENV_URL}/pages/9`
  const res = await fetch(uri)
  let data = await res.json()


  // console.log(data)
  // console.log(data.jobs[0].location)

  // Pass data to the page via props
  return { props: { data } }
}

export default function Home({ data }) {
  useEffect(() => {
    observe_nav()
  })
  var md = new Remarkable();

  return (
    <div>
      <Head>
        <title>Romeo</title>
        <link rel="icon" href="/favicon.ico" />


      </Head>

      <Navbar />



      <section id="hero" className="hero-home flex " >
        <section className="flex flex-1  justify-start align-center content-center items-center    ">


          <div className="img-slider flex-1 flex">

            <div id="slide0" className="slide active flex-1 flex flex-col justify-center align-center content-center items-start pl-8 md:pl-16 pr-2">
              <h1 className=" text-left font-P22Underground-thp text-4xl md:text-6xl font-bold" dangerouslySetInnerHTML={{ __html: data.contentSections[0].text }}></h1>
              <Link href={`${data.contentSections[1].url}`} >
                <button className="bg-accent  float-left py-4 px-10 my-10">{data.contentSections[1].text}</button>
              </Link>
            </div>


            <div className="slide flex-1 flex bg-accent ">
              <video id="myVid" className="video-container video-container-overlay w-full" controls >
                <source src="/vid/FINAL ROMEO POWER BF MASTER 360.mp4" type="video/mp4" />
              </video>
            </div>



            <div className="navigation">
              <div className="btn active"></div>
              <div className="btn"></div>
            </div>
          </div>


        </section>

      </section>







      <section className="flex justify-center bg-medium py-16">
        <div className="flex max-w-screen-lg  flex-wrap flex-1">
          <div className="flex-1 px-4">
            <div className="text-left text-darkcolor inline-block border-darkcolor border-b-2">
              <h2 className="border-darkcolor border-b text-left inline-block text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold py-4 ">

                {data.contentSections[2].SectionTitle} </h2>
            </div>
            <p className="text-lg leading-normal my-4" dangerouslySetInnerHTML={{ __html: data.contentSections[2].SectionBody }}></p>

          </div>
        </div>
      </section>



      <section className="flex justify-center bg-white py-2">
        <div className="flex max-w-screen-lg  flex-wrap flex-1">
          <div className="flex-1">




            <div className="flex flex-col md:flex-row gap-8 px-4 py-12">



              <div className="flex-1 md:w-1/2">

              <h2 className="border-accent border-b-2 text-left block  text-darkcolor pr-8  mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                {data.contentSections[3].SectionTitle}</h2>
                <p dangerouslySetInnerHTML={{ __html: data.contentSections[3].SectionBody }}></p>
                <div className="flex"><Link href={`${data.contentSections[4].url}`} >
                  <button className="bg-accent  float-left py-4 px-14 mt-4 text-white">{data.contentSections[4].text}</button>
                </Link> </div>
              </div>


              <div className="flex-1 md:w-1/2">
                <img src={`${data.contentSections[3].image.url}`}></img>
              </div>



            </div>








            <div className="flex flex-col md:flex-row gap-8 px-4 py-12">

              <div className="flex-1 md:w-1/2">
                <img src={`${data.contentSections[5].image.url}`}></img>
              </div>

              <div className="flex-1 md:w-1/2">
              <h2 className="border-accent border-b-2 text-left block text-darkcolor pr-8  mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                {data.contentSections[5].SectionTitle}</h2>
                <p dangerouslySetInnerHTML={{ __html: data.contentSections[5].SectionBody }}></p>
                <div className="flex"><Link href={`${data.contentSections[6].url}`} >
                  <button className="bg-accent  float-left py-4 px-14 mt-4 text-white">{data.contentSections[6].text}</button>
                </Link>  </div>
              </div>



            </div>




            <div className="flex flex-col md:flex-row gap-8 px-4 py-12">



              <div className="flex-1 md:w-1/2">

              <h2 className="border-accent border-b-2 text-left block text-darkcolor pr-8  mb-8  font-P22Underground-thp text-4xl font-bold py-4 ">
                {data.contentSections[7].SectionTitle}</h2>
            <p dangerouslySetInnerHTML={{ __html: data.contentSections[7].SectionBody }}></p>
            <div className="flex"><Link href={`${data.contentSections[8].url}`} >
              <button className="bg-accent  float-left py-4 px-14 mt-4 text-white">{data.contentSections[8].text}</button>
            </Link>  </div>
              </div>


              <div className="flex-1 md:w-1/2">
                <img src={`${data.contentSections[7].image.url}`}></img>
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
