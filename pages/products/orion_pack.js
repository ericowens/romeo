import Head from 'next/head'
import Navbar from '../../comps/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../comps/Footer'
import Banner from '../../comps/Banner'
import observe_nav from '../../comps/observe_nav'
import React, { useState, useEffect } from 'react'
import Formarea from '../../comps/Formarea'


export async function getServerSideProps(context) {
  // Fetch data from external API
  const uri = `${process.env.NEXT_PUBLIC_ENV_URL}/pages/12`
  const res = await fetch(uri)
  let data = await res.json()
  
  
  // console.log(data)
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

      <Navbar/>

      <section id="hero" className="hero-products-orion flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg pl-4 ">
          <div className="">
              <h1 className="font-P22Underground-thp text-7xl font-bold text-left"dangerouslySetInnerHTML={{ __html: data.contentSections[0].text}}></h1>
             
            </div>
        </div>
        </section>
        
      </section>


   


      


      <section className="flex justify-evenly bg-white  gap-4 py-8">
          <div>
          <h2 className=" block text-center  text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold pt-4 pb-16 ">
          {data.contentSections[1].text}</h2>
              
            <img src="/Images/Orion-pack_family_Group.png"></img>
            </div>
          
          </section>


      <section className="flex justify-center bg-white py-16">
          <div className="flex max-w-screen-lg px-4 flex-wrap flex-1">
            <div className="flex-1">
              <div className=" pb-8 ">
              <h2 className=" block text-center  text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold py-4 ">
              {data.contentSections[2].SectionTitle}</h2>
              </div>
              <p className="text-center font-P22Underground-thin py-4"
              dangerouslySetInnerHTML={{ __html: data.contentSections[2].SectionBody}}></p>

<p className="text-left font-P22Underground-thin py-4"> {data.contentSections[3].text}</p>

            <ul className="list-disc list-outside py-4 " dangerouslySetInnerHTML={{ __html: data.contentSections[4].List}}>
               
              </ul>

              <p className=" text-center md:text-left   font-P22Underground-thin text-lg pt-8">
              <a href={`${data.contentSections[5].url}`} target="_blank">
                <button className="bg-accent text-white font-P22Underground-book  md:float-left py-4 px-10 my-10">{data.contentSections[5].text}</button>
                </a>
                </p>
              
             
            </div>
          </div>
          </section>





          <section  className="small-hero small-hero-orion-1 flex justify-center items-center mt-4" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start px-4 py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h2 className="font-P22Underground-thp text-5xl font-bold">{data.contentSections[6].text}</h2>
              {/* <p className=" text-left text-white flex-1 font-P22Underground-thin text-lg pt-32">
              [Download Orion Data Sheet]
                </p> */}
                             
            </div>
        </div>
        </section>
        
      </section>



      <section  className="small-hero small-hero-orion-2 flex justify-center items-center mt-4" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start px-4 py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h2 className="font-P22Underground-thp text-5xl font-bold">{data.contentSections[7].text}</h2>
              {/* <p className=" text-left text-white flex-1 font-P22Underground-thin text-lg pt-32">
              [Download Orion Data Sheet]
                </p> */}
                             
            </div>
        </div>
        </section>
        
      </section>

      <section  className="small-hero small-hero-orion-3 flex justify-center items-center mt-4" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start px-4 py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h2 className="font-P22Underground-thp text-5xl font-bold">{data.contentSections[8].text}</h2>
              {/* <p className=" text-left text-white flex-1 font-P22Underground-thin text-lg pt-32">
              [Download Orion Data Sheet]
                </p> */}
                             
            </div>
        </div>
        </section>
        
      </section>
      



        <section className="flex justify-center bg-medium py-16">
          <div className="flex max-w-screen-lg px-4 flex-wrap flex-1">
            <div className="flex-1">
              <div className=" pb-8 ">
              <h2 className=" text-center block text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold pt-4 ">
              {data.contentSections[9].text}</h2>
              </div>

              
              
              <div className="flex gap-8 justify-around py-8 flex-col md:flex-row">
                <div className="w-full md:w-1/3 flex gap-4 flex-col items-start">
                  <div className="w-full flex items-center justify-center content-center">
                    <img src="/icon-battery-100.png"></img>
                    </div> 
                  <h4 className="text-xl font-P22Underground-book text-gray-500 text-left">{data.contentSections[10].SectionTitle}</h4>
                  <p dangerouslySetInnerHTML={{ __html: data.contentSections[10].SectionBody}}></p>          
                </div>


                <div className="w-full md:w-1/3 flex gap-4 flex-col items-start">
                <div className="w-full flex items-center justify-center content-center">
                  <img src="/icon-bms-100.png"></img> </div> 
                  <h4 className="text-xl font-P22Underground-book text-gray-500 text-left">{data.contentSections[11].SectionTitle}</h4>
                  <p dangerouslySetInnerHTML={{ __html: data.contentSections[11].SectionBody}}></p>            
                </div>

                <div className="w-full md:w-1/3 flex gap-4 flex-col items-start">
                <div className="w-full flex items-center justify-center content-center">
                  <img src="/icon-sensor-100.png"></img> </div> 
                  <h4 className="text-xl font-P22Underground-book text-gray-500 text-left">{data.contentSections[12].SectionTitle}</h4>
                  <p dangerouslySetInnerHTML={{ __html: data.contentSections[12].SectionBody}}></p>       
                </div>
                               

              </div>
              
             
            </div>
          </div>
          </section>

        <Formarea/>


          


        <Banner/>



        <Footer/>


    </div>
  )
}
