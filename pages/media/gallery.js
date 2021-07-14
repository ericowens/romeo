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
  const uri = `${process.env.NEXT_PUBLIC_ENV_URL}/pages/22`
  const res = await fetch(uri)
  let data = await res.json()

  const uri2 = `${process.env.NEXT_PUBLIC_ENV_URL}/galleries`
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

      <Navbar/>

      <section id="hero" className="hero-media-gallery  flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg pl-4 ">
          <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold" dangerouslySetInnerHTML={{ __html: data.contentSections[0].text}}></h1>
              
              
            </div>
        </div>
        </section>
        
      </section>


      
      



      <section className="flex bg-white justify-center py-16">

          <div className=" flex-1  max-w-screen-lg px-4 ">
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">


          {data2.map((item, index) => (  


<div>
<img src={`${item.image.url}`}></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                <a target="_blank" href={`${item.file}`}><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase text-center">{item.title}</p>
                  {/* <div className="grid gap-4 grid-cols-2 justify-center">
                    <div className="md:border-r">
                      <p className="text-center">RGB</p>
                    </div>
                    <div>
                      <p className="text-center">JPG</p>
                      </div>
                    <div className="md:border-r">
                      <p className="text-center">CMYK</p>
                      </div>
                    <div>
                      <p className="text-center">TIFF</p>
                      </div>
                  </div> */}
                </div>
              </section>
            </div>



     
))}




            
            
            
           










          </div>
           
          </div>

      </section>


      







        <Banner />



        <Footer />
        


    </div>
  )
}
