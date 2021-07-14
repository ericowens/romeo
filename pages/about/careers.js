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
  const uri = `${process.env.NEXT_PUBLIC_ENV_URL}/pages/18`
  const res = await fetch(uri)
  let data = await res.json()

  const uri2 = `${process.env.NEXT_PUBLIC_ENV_URL}/careers`
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

      <section id="hero" className="hero-about-careers flex justify-center items-end" >
        
        <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
          <div className=" max-w-screen-lg pl-4  ">
            <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold" dangerouslySetInnerHTML={{ __html: data.contentSections[0].text}}></h1>
              <a target="_blank" href={`${data.contentSections[1].url}`}>
                <button className="bg-accent  float-left py-4 px-10 my-10">{data.contentSections[1].text}</button>
                {/* get request jsonp https://boards-api.greenhouse.io/v1/boards/romeopower/jobs */}
              </a>

            </div>
          </div>
        </section>

      </section>


      <section className="flex justify-center bg-medium py-16">
        <div className="flex max-w-screen-lg px-4 flex-wrap flex-1">
          <div className="flex-1 relative">

            <p id="quote" lang="us" className=" text-center flex-1 font-P22Underground-book text-2xl uppercase leading-loose py-4"
            dangerouslySetInnerHTML={{ __html: data.contentSections[2].List}}>
                         </p>

            <p className=" text-center flex-1 font-P22Underground-thin text-lg py-4" dangerouslySetInnerHTML={{ __html: data.contentSections[3].List}}>
                              </p>



          </div>
        </div>
      </section>





      <section className="flex bg-white justify-center ">

        <div className="flex-1 flex justify-center align-center content-center px-4 flex-col max-w-screen-lg   ">

          <h2 className=" text-left   flex-1   font-P22Underground-thp text-4xl font-bold pt-8 "
          dangerouslySetInnerHTML={{ __html: data.contentSections[4].text}}>
           
            </h2>
          <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4"
          dangerouslySetInnerHTML={{ __html: data.contentSections[5].List}}>
            
            </p>



          <h2 className=" text-left   flex-1   font-P22Underground-thp text-4xl font-bold pt-8 "
          dangerouslySetInnerHTML={{ __html: data.contentSections[6].text}}>
           
            </h2>
          <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4" 
          dangerouslySetInnerHTML={{ __html: data.contentSections[7].List}}>
           
            </p>




          <h2 className=" text-left   flex-1   font-P22Underground-thp text-4xl font-bold pt-8 "
          dangerouslySetInnerHTML={{ __html: data.contentSections[8].text}}>
           
            </h2>
          <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4"
          dangerouslySetInnerHTML={{ __html: data.contentSections[9].List}}>
            </p>
          

        </div>

      </section>





      <section className="careers flex justify-center bg-white px-4 py-16">
        <div className="flex max-w-screen-lg  gap-8 flex-1">

          <div className="w-full">

            

            {data2.map((career, index) => (  
              
                <details className=" pb-8">
                <summary className={`c${career.class} font-P22Underground-book  py-2  flex flex-col align-center justify-center text-lg`}>
                  <p className="font-bold text-white pl-4" dangerouslySetInnerHTML={{ __html: career.section}}></p>
                </summary>
                <div >
                  <p className="font-P22Underground-book text-lg p-4" dangerouslySetInnerHTML={{ __html: career.description}}></p>
                </div>
                </details>
          ))}






          </div>

        </div>
      </section>


















      <Banner />



      <Footer />



    </div>
  )
}
