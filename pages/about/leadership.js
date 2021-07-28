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
  const uri = `${process.env.NEXT_PUBLIC_ENV_URL}/pages/15`
  const res = await fetch(uri)
  let data = await res.json()

  const uri2 = `${process.env.NEXT_PUBLIC_ENV_URL}/leaders`
  const res2 = await fetch(uri2)
  let data2 = await res2.json()
  
  
  // console.log(data2)
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

      <section id="hero" className="hero-about-leadership flex justify-center items-end" >
        <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
          <div className=" max-w-screen-lg pl-4 ">
            <div className="">
              <h1 className="  font-P22Underground-thp text-6xl md:text-7xl font-bold" dangerouslySetInnerHTML={{ __html: data.contentSections[0].text}}></h1>

            </div>
          </div>
        </section>

      </section>










      <section className="flex justify-center bg-medium px-4 py-16">
        <div className="flex max-w-screen-lg  flex-wrap flex-1">
          <div className="flex-1">


            <p className="text-center" dangerouslySetInnerHTML={{ __html: data.contentSections[1].List}}>
</p>

          </div>
        </div>
      </section>








      <section className="small-leader-1 flex justify-center  " >
        <div className="flex md:flex-row sm:flex-col max-w-screen-xl justify-evenly  px-4 flex-wrap flex-1">

          <div className=" flex items-end justify-end md:w-2/5 w-full order-last md:order-first">
            <img src={`${data2[0].pic.url}`}></img>
          </div>

          <div className="flex flex-col w-full md:w-3/5 pb-8">
            <h2 className="text-left text-darkcolor   font-P22Underground-thp text-2xl font-bold pt-16 ">
            {data2[0].name}</h2>
            <h4 className="text-left text-darkcolor  font-P22Underground-thp text-l font-bold py-2 ">
            {data2[0].position}</h4>
              <p className="text-left text-sm pt-8 leading-normal" dangerouslySetInnerHTML={{ __html: data2[0].bio}}></p>

            <ul className="flex-1 flex justify-end content-end items-end social gap-4 pt-6">
              <li className=""><a target="_blank" href={`${data2[0].linkedin}`}>
                <img src="/social/Linkedin.svg"></img></a></li>

              <li className="hidden"><img src="/twitter.png"></img></li>
              <li className="hidden"><img src="/Facebook.png"></img></li>

            </ul>

          </div>

        </div>

      </section>


      <section className="small-leader-2 flex justify-center  " >
        <div className="flex max-w-screen-xl justify-evenly  px-4 flex-wrap flex-1 md:flex-row sm:flex-col">



          <div className="flex flex-col w-full md:w-3/5 pb-8">
            <h2 className="text-left text-darkcolor   font-P22Underground-thp text-2xl font-bold pt-16 ">
            {data2[1].name}</h2>
            <h4 className="text-left text-darkcolor  font-P22Underground-thp text-l font-bold py-2 ">
            {data2[1].position}</h4>
              <p className="text-left text-sm pt-8 leading-normal" dangerouslySetInnerHTML={{ __html: data2[1].bio}}></p>

            <ul className="flex-1 flex justify-start content-start items-end social gap-4 pt-6">
            <li className=""><a target="_blank" href={`${data2[1].linkedin}`}>
                <img src="/social/Linkedin.svg"></img></a></li>

              <li className="hidden"><img src="/twitter.png"></img></li>
              <li className="hidden"><img src="/Facebook.png"></img></li>

            </ul>

          </div>

          <div className=" flex items-end justify-end md:w-2/5 w-full">
          <img src={`${data2[1].pic.url}`}></img>
          </div>

        </div>

      </section>


      <section className="small-leader-3 flex justify-center  " >
        <div className="flex max-w-screen-lg justify-evenly   px-4 flex-wrap flex-1 md:flex-row sm:flex-col">

          <div className=" flex items-end justify-end md:w-2/5 w-full order-last md:order-first">
          <img src={`${data2[2].pic.url}`}></img>
          </div>

          <div className="flex flex-col w-full md:w-3/5 pb-8">
            <h2 className="text-left text-darkcolor   font-P22Underground-thp text-2xl font-bold pt-16 ">
            {data2[2].name}</h2>
            <h4 className="text-left text-darkcolor  font-P22Underground-thp text-l font-bold py-2 ">
            {data2[2].position}</h4>
            <p className="text-left text-sm pt-8 leading-normal" dangerouslySetInnerHTML={{ __html: data2[2].bio}}></p>

            <ul className="flex-1 flex justify-end content-end items-end social gap-4 pt-6">
            <li className=""><a target="_blank" href={`${data2[2].linkedin}`}>
                <img src="/social/Linkedin.svg"></img></a></li>

              <li className="hidden"><img src="/twitter.png"></img></li>
              <li className="hidden"><img src="/Facebook.png"></img></li>

            </ul>

          </div>

        </div>

      </section>


      <section className="small-leader-4 flex justify-center  " >
        <div className="flex max-w-screen-xl justify-evenly  px-4 flex-wrap flex-1 md:flex-row sm:flex-col">



          <div className="flex flex-col w-full md:w-3/5 pb-8">
            <h2 className="text-left text-darkcolor   font-P22Underground-thp text-2xl font-bold pt-16 ">
            {data2[4].name}</h2>
            <h4 className="text-left text-darkcolor  font-P22Underground-thp text-l font-bold py-2 ">
            {data2[4].position}</h4>
            <p className="text-left text-sm pt-8 leading-normal" dangerouslySetInnerHTML={{ __html: data2[4].bio}}></p>

            <ul className="flex-1 flex justify-start content-start items-end social gap-4 pt-6">
            <li className=""><a target="_blank" href={`${data2[3].linkedin}`}>
                <img src="/social/Linkedin.svg"></img></a></li>

              <li className="hidden"><img src="/twitter.png"></img></li>
              <li className="hidden"><img src="/Facebook.png"></img></li>

            </ul>

          </div>

          <div className=" flex items-end justify-end md:w-2/5 w-full">
          <img src={`${data2[4].pic.url}`}></img>
          </div>

        </div>

      </section>



      <section className="small-leader-5 flex justify-center  " >
        <div className="flex max-w-screen-lg justify-evenly  px-4 flex-wrap flex-1 md:flex-row sm:flex-col">


        <div className=" flex items-end justify-end md:w-2/5 w-full">
          <img src={`${data2[3].pic.url}`}></img>
          </div>


          <div className="flex flex-col w-full md:w-3/5 pb-8">
            <h2 className="text-left text-darkcolor   font-P22Underground-thp text-2xl font-bold pt-16 ">
            {data2[3].name}</h2>
            <h4 className="text-left text-darkcolor  font-P22Underground-thp text-l font-bold py-2 ">
            {data2[3].position}</h4>
            <p className="text-left text-sm pt-8 leading-normal" dangerouslySetInnerHTML={{ __html: data2[3].bio}}></p>

            <ul className="flex-1 flex justify-start content-start items-end social gap-4 pt-6">
            <li className=""><a target="_blank" href={`${data2[3].linkedin}`}>
                <img src="/social/Linkedin.svg"></img></a></li>

              <li className="hidden"><img src="/twitter.png"></img></li>
              <li className="hidden"><img src="/Facebook.png"></img></li>

            </ul>

          </div>

          

        </div>

      </section>





      {/* <section  className="small-leader-5 flex justify-center  " >  
            <div className="flex max-w-screen-lg justify-evenly  flex-wrap flex-1">  

            <div className=" flex items-end justify-end w-2/5">
                <img src="/leadershipCHRIS.png"></img>
                </div>

                  <div className="flex flex-col w-3/5">
                    <h2 className="text-left text-white   font-P22Underground-thp text-2xl font-bold pt-16 ">
                    NAME</h2>
                    <h4 className="text-left text-white  font-P22Underground-thp text-l font-bold py-2 ">
                    TITLE</h4>
                      <p className="text-left text-white text-sm pt-8 leading-normal">adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui oﬀicia deserunt mollit</p>

                      <ul className="flex-1 flex justify-end content-end items-end social gap-4 pt-6">
                                <li className=""><img src="/Facebook.png"></img></li>
                                <li className=""><img src="/twitter.png"></img></li>
                                <li className=""><img src="/linkedin.png"></img></li>
                                
                              </ul>
                
                </div>

             </div>
               
            </section> */}















      <Banner />



      <Footer />



    </div>
  )
}
