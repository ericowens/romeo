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

   // Fetch data from external API
   const uri2 = `${process.env.NEXT_PUBLIC_ENV_URL}/pages/19`
   const res2 = await fetch(uri2)
   let data2 = await res2.json()

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

      <section id="hero" className="hero-media flex justify-center items-end" >
        <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
          <div className=" max-w-screen-lg pl-4  ">
            <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold" dangerouslySetInnerHTML={{ __html: data2.contentSections[0].text}}></h1>


            </div>
          </div>
        </section>

      </section>







      <section className="flex  bg-white justify-center py-16">

        <div className="flex-1 flex justify-center align-center content-center px-4 flex-col max-w-screen-lg   ">

          <p className=" text-left  flex-1 font-P22Underground-thin  text-lg " dangerouslySetInnerHTML={{ __html: data2.contentSections[1].List}}>
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
                <span><img className="flex-grow-0" src="/imgs/arrow.svg" width="18" ></img></span>
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
                <span><img className="flex-grow-0" src="/imgs/arrow.svg" width="18" ></img></span>
              </div>
            </a>

       

        </div>

      </section>


     
     

      





      <section className="flex  bg-white justify-center py-4">

        <div className=" border-t-2 flex-1 flex justify-center align-center content-center gap-8 max-w-screen-lg  flex-col md:flex-row  ">

          <div className="w-full md:w-1/3 bg-white p-10 flex flex-col justify-evenly">
            <img src={`${data2.contentSections[2].image.url}`}></img>
            <h2 className="  text-left  inline-block     font-P22Underground-thp text-2xl font-bold pt-4 ">
            {data2.contentSections[2].SectionTitle}</h2>

            <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4"
            dangerouslySetInnerHTML={{ __html: data2.contentSections[2].SectionBody}}>
              
      </p>
            <p className=" text-left  flex-1 font-P22Underground-book text-lg py-4 uppercase flex flex-col align-start justify-end items-starts">

              <Link href="/media/logos">
                <span className="flex  w-3/5 gap-8 justify-between align-center content-center cursor-pointer">
                  <span className="flex-1">View All</span>
                  <span><img className="flex-grow-0"src="/imgs/arrow.svg" width="18" ></img></span>
                </span>
              </Link></p>
          </div>

          <div className="w-full md:w-1/3 bg-white p-10 flex flex-col justify-evenly content-end ">
          <img src={`${data2.contentSections[3].image.url}`}></img>
            <h2 className="  text-left  inline-block     font-P22Underground-thp text-2xl font-bold pt-4 ">
            {data2.contentSections[3].SectionTitle}</h2>

            <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4"
             dangerouslySetInnerHTML={{ __html: data2.contentSections[3].SectionBody}}>
              
      </p>
            <p className=" text-left  flex-1 font-P22Underground-book text-lg py-4 uppercase flex flex-col align-start justify-end items-start">
              <Link href="/media/leadership">
                <span className="flex w-3/5 gap-8 justify-between align-center content-center cursor-pointer">
                  <span className="flex-1">View All</span>
                  <span><img className="flex-grow-0"src="/imgs/arrow.svg" width="18" ></img></span>
                </span>
              </Link></p>
          </div>

          <div className="w-full md:w-1/3 bg-white p-10 flex flex-col justify-evenly">
          <img src={`${data2.contentSections[4].image.url}`}></img>
            <h2 className="  text-left  inline-block     font-P22Underground-thp text-2xl font-bold pt-4 ">
            {data2.contentSections[4].SectionTitle}</h2>

            <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4"
             dangerouslySetInnerHTML={{ __html: data2.contentSections[4].SectionBody}}>
             
      </p>
            <p className=" text-left  flex-1 font-P22Underground-book text-lg py-4 uppercase flex flex-col align-start justify-end items-start">
              <Link href="/media/gallery">
              <span className="flex w-3/5 gap-8 justify-between align-center content-center cursor-pointer">
                <span className="flex-1">View All</span>
                <span><img className="flex-grow-0"src="/imgs/arrow.svg" width="18" ></img></span>
              </span>
            </Link></p>
          </div>

        </div>

      </section>











      <Banner />



      <Footer />



    </div>
  )
}
