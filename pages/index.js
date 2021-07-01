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
  const uri = "http://18.218.2.107:1337/pages/9"
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
              <h1 className=" text-left font-P22Underground-thp text-4xl md:text-6xl font-bold" dangerouslySetInnerHTML={{ __html: data.contentSections[0].text}}></h1>
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
            <p className="text-lg leading-normal my-4" dangerouslySetInnerHTML={{ __html: data.contentSections[2].SectionBody}}></p>
            
          </div>
        </div>
      </section>




      <section className="flex justify-center bg-light pt-8 pb-4">
        <div className="flex max-w-screen-lg flex-col flex-wrap flex-1 lg:flex-row m-3 space-x-0 md:space-x-4  ">
          <div className="flex-1 flex justify-center align-center flex-col ">
            <h3 className="text-left text-darkcolor  font-P22Underground-thp text-4xl font-bold my-4  py-4 ">{data.contentSections[3].SectionTitle}</h3>
            <p dangerouslySetInnerHTML={{ __html: data.contentSections[3].SectionBody}}></p>
            <div className="flex"><Link   href={`${data.contentSections[4].url}`} >
              <button className="bg-accent  float-left py-4 px-14 my-10 text-white">{data.contentSections[4].text}</button>
            </Link> </div>

          </div>
          <div className="flex justify-start md:justify-end  flex-1">
            <img className="float-left  md:float-right w-4/5 md:w-full px-0 object-cover "
              src="/hermes-hero01.jpg"

              alt=""
            />
          </div>
        </div>
      </section>






      <section className="flex justify-center bg-light pb-12">
        <div className="flex max-w-screen-lg flex-col md:flex-wrap flex-wrap-reverse flex-1 lg:flex-row m-3 space-x-0 md:space-x-4 ">
          
        <div className=" flex justify-start  md:justify-start  flex-1 order-last lg:order-first">
            <img className="float-left  md:float-right w-4/5 md:w-full px-0 object-cover "
              src="/TechnologyHome.jpg"

              alt=""
            />
          </div>

          <div className="flex-1 flex justify-center align-center flex-col ">
            <h3 className="text-left text-darkcolor  font-P22Underground-thp text-4xl font-bold my-4 py-4">{data.contentSections[5].SectionTitle}</h3>
            <p dangerouslySetInnerHTML={{ __html: data.contentSections[5].SectionBody}}></p>
            <div className="flex"><Link   href={`${data.contentSections[6].url}`} >
              <button className="bg-accent  float-left py-4 px-14 my-10 text-white">{data.contentSections[6].text}</button>
            </Link>  </div>

          </div>
          
        </div>
      </section>





      <section className="flex justify-center bg-light pb-12">
        <div className="flex max-w-screen-lg flex-col md:flex-wrap flex-wrap-reverse flex-1 lg:flex-row m-3 space-x-0 md:space-x-4 ">
          <div className="flex-1 flex justify-center align-center flex-col">
            <h3 className="text-left text-darkcolor  font-P22Underground-thp text-4xl font-bold my-4 py-4">{data.contentSections[7].SectionTitle}</h3>
            <p dangerouslySetInnerHTML={{ __html: data.contentSections[7].SectionBody}}></p>
            <div className="flex"><Link   href={`${data.contentSections[8].url}`} >
              <button className="bg-accent  float-left py-4 px-14 my-10 text-white">{data.contentSections[8].text}</button>
            </Link>  </div>

          </div>
          <div className=" flex justify-start md:justify-end  justify-center flex-1">
            <img className="float-left  md:float-right w-4/5 md:w-full px-0 object-cover "
              src="/USManufacturing.jpg"

              alt=""
            />
          </div>
        </div>
      </section>




      <Banner />



      <Footer />


    </div>
  )
}
