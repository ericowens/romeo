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
  const uri = "https://investors.romeopower.com/feed/PressRelease.svc/GetPressReleaseList?LanguageId=1&bodyType=0&pressReleaseDateFilter=3&categoryId=1cb807d2-208f-4bc3-9133-6a9ad45ac3b0&pageSize=-1&pageNumber=0&tagList=&includeTags=true&year=2021&excludeSelection=1"
  const res = await fetch(uri)
  let data = await res.json()
  
  data = data.GetPressReleaseListResult.map(function(news) {
      news.LinkToDetailPage = `https://investors.romeopower.com${news.LinkToDetailPage}`
      return news
  }).slice(0,4)
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

      <Navbar />

      <section id="hero" className="hero-media flex justify-center items-end" >
        <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
          <div className=" max-w-screen-lg pl-4  ">
            <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold">Media Kit</h1>


            </div>
          </div>
        </section>

      </section>







      <section className="flex  bg-white justify-center py-16">

        <div className="flex-1 flex justify-center align-center content-center px-4 flex-col max-w-screen-lg   ">

          <p className=" text-left  flex-1 font-P22Underground-thin  text-lg ">We’ve curated some of Romeo Power’s key brand assets and we invite you to use them in
          accordance with our brand guidelines. To request a copy of our brand guidelines, or for
          more information on using the Romeo Power name or brand assets, please include a mockup
          of the intended use and reach out to media@romeopower.com.
            </p>

        </div>

      </section>


      <section className="flex  bg-white justify-center py-4">

        <div className="flex-1 flex justify-center align-center content-center  max-w-screen-lg   ">




        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-16">

        {data.map((news, index) => (  
          <div className=" bg-medium p-10 flex flex-col justify-around">
            <p className=" border-b text-left inline-block font-bold font-P22Underground-thp text-lg">Press Release</p>
            <h2 className="newhead  text-left  inline-block     font-P22Underground-thp  text-2xl font-bold pt-8 ">
            {news.Headline}
              </h2>
            <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4"></p>
            <a target="_blank" href={news.LinkToDetailPage}>
              <div className="cursor-pointer flex gap-2   justify-end align-center content-center items-center">
                <span className="font-P22Underground-thp font-bold">Read More</span>
                <span><img className="flex-grow-0" src="/arrow.png" ></img></span>
              </div>
            </a>
          </div>
        ))}

        </div>

        

        </div>

      </section>



      <section className="flex  bg-white justify-center py-4">

        <div className="flex-1 flex justify-center align-center content-center  max-w-screen-lg   ">




        <a target="_blank" href='https://investors.romeopower.com/news/default.aspx'>
              <div className="cursor-pointer flex gap-2   justify-end align-center content-center items-center">
                <span className="font-P22Underground-thp font-bold">View All</span>
                <span><img className="flex-grow-0" src="/arrow.png" ></img></span>
              </div>
            </a>

       

        </div>

      </section>


     
     

      





      <section className="flex  bg-white justify-center py-4">

        <div className=" border-t-2 flex-1 flex justify-center align-center content-center gap-8 max-w-screen-lg  flex-col md:flex-row  ">

          <div className="w-full md:w-1/3 bg-white p-10 flex flex-col justify-evenly">
            <img src="/ROMEO POWER VERT LOGO_GREEN-GREYRGB.svg"></img>
            <h2 className="  text-left  inline-block     font-P22Underground-thp text-2xl font-bold pt-4 ">
              LOGOS</h2>

            <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">
              Romeo Power’s marks include
              its name, logos, or other
              identifiers of the brand or its
              products. Please refrain from
              modifying the marks or using
              them in a confusing way,
              including suggesting
              partnership, endorsement or
              sponsorship, unless agreed
              upon by the company.
      </p>
            <p className=" text-left  flex-1 font-P22Underground-book text-lg py-4 uppercase flex flex-col align-end justify-end items-end">

              <Link href="/media/logos">
                <div className="flex  w-3/5 gap-8 justify-between align-center content-center cursor-pointer">
                  <span className="flex-1">View All</span>
                  <span><img className="flex-grow-0" src="/arrow.jpg" ></img></span>
                </div>
              </Link></p>
          </div>

          <div className="w-full md:w-1/3 bg-white p-10 flex flex-col justify-evenly content-end ">
            <img src="/LEADERSHIP.jpg"></img>
            <h2 className="  text-left  inline-block     font-P22Underground-thp text-2xl font-bold pt-4 ">
              LEADERSHIP</h2>

            <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">
              Here you’ll find high-
              resolution photos and
              corresponding biographies
              for Romeo Power’s
              experienced and diverse
              leadership team. We invite
              you to use these for relevant
              articles, speaking
              opportunities or for general
              inspiration.
      </p>
            <p className=" text-left  flex-1 font-P22Underground-book text-lg py-4 uppercase flex flex-col align-end justify-end items-end">
              <Link href="/media/leadership">
                <div className="flex w-3/5 gap-8 justify-between align-center content-center cursor-pointer">
                  <span className="flex-1">View All</span>
                  <span><img className="flex-grow-0" src="/arrow.jpg" ></img></span>
                </div>
              </Link></p>
          </div>

          <div className="w-full md:w-1/3 bg-white p-10 flex flex-col justify-evenly">
            <img src="/GALLERY.jpg"></img>
            <h2 className="  text-left  inline-block     font-P22Underground-thp text-2xl font-bold pt-4 ">
              GALLERY</h2>

            <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">
              Explore oﬀicial Romeo Power
              graphics available to
              download or share. Inspired
              by nature and rooted in
              electrification, we’ve
              collected an array of product
              and brand images that align
              with our corporate identity
              and vision for the future.
      </p>
            <p className=" text-left  flex-1 font-P22Underground-book text-lg py-4 uppercase flex flex-col align-end justify-end items-end"><Link href="/media/gallery">
              <div className="flex w-3/5 gap-8 justify-between align-center content-center cursor-pointer">
                <span className="flex-1">View All</span>
                <span><img className="flex-grow-0" src="/arrow.jpg" ></img></span>
              </div>
            </Link></p>
          </div>

        </div>

      </section>











      <Banner />



      <Footer />



    </div>
  )
}
