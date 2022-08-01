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
  const uri = `${process.env.NEXT_PUBLIC_ENV_URL}/pages/24`
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
              <p className="text-center md:text-left  font-P22Underground-thin text-lg pt-8"><a href="#formplease" >               
                <button className="bg-accent text-white font-P22Underground-book md:float-left py-4 px-10 my-10">Contact</button>
                </a>
                </p>
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

              <p className="text-center md:text-left  font-P22Underground-thin text-lg pt-8"><a href="#formplease" >               
                <button className="bg-accent text-white font-P22Underground-book md:float-left py-4 px-10 my-10">Contact</button>
                </a>
                </p>

              {/* <p className=" text-center md:text-left   font-P22Underground-thin text-lg pt-8">
              <a href={`${data.contentSections[4].url}`} target="_blank">
                <button className="bg-accent text-white font-P22Underground-book  md:float-left py-4 px-10 my-10">{data.contentSections[4].text}</button>
                </a>
                </p> */}
              
             
            </div>
          </div>
          </section>





         
      <section className="flex flex-col md:flex-row flex-1 w-full">
       <div class="w-full md:w-1/2 relative">
            <img class="filter brightness-60" src="/72022/Menara Packs/Truck3.jpg"></img>
            <span  class="absolute top-1/2 pl-8 md:pl-0 	  md:top-10 md:left-10 font-P22Underground-thp text-5xl text-white font-bold">Transportation</span>
       </div>
       <div class="w-full md:w-1/2  hidden md:block"><img class="filter brightness-60" src="/72022/Menara Packs/Van.jpg"></img></div>
        </section>

        <section className="flex flex-col md:flex-row flex-1 w-full">
       <div class="w-full md:w-1/2  hidden md:block"><img class="filter brightness-60" src="/72022/Menara Packs/Tractor.jpg"></img></div>
       <div class="w-full md:w-1/2 relative">
         <img class="filter brightness-60" src="/72022/Menara Packs/dozer.jpg"></img> 
         <span  class=" absolute top-1/2 pl-8 md:pl-0 md:top-12 md:right-12  font-P22Underground-thp text-5xl text-white font-bold">Industrial</span>
         </div>
        </section>

        <section className="flex flex-col md:flex-row flex-1 w-full">
       <div class="w-full md:w-1/2 relative">
         <img class="filter brightness-60" src="/72022/Menara Packs/Boat.jpg"></img>
         <span  class="absolute top-3/4 pl-8 md:pl-0  md:top-10 md:left-10 font-P22Underground-thp text-white text-5xl font-bold">Marine</span>
         </div>
       <div class="w-full md:w-1/2 hidden md:block"><img class="filter brightness-60" src="/72022/Menara Packs/jetski.jpg"></img></div>
        </section>
        




     
      



        <section className="flex justify-center bg-medium py-16">
          <div className="flex max-w-screen-lg px-4 flex-wrap flex-1">
            <div className="flex-1">
              <div className=" pb-8 ">
              <h2 className=" text-center block text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold pt-4 ">
              {data.contentSections[5].text}</h2>
              </div>

              
              
              <div className="flex gap-8 justify-around py-8 flex-col md:flex-row">
                <div className="w-full md:w-1/3 flex gap-4 flex-col items-start">
                  <div className="w-full flex items-center justify-center content-center">
                    <img width="190" src="/svg/icon-battery-02.svg"></img>
                    </div> 
                  <h4 className="text-xl font-P22Underground-book text-gray-500 text-left">{data.contentSections[6].SectionTitle}</h4>
                  <p dangerouslySetInnerHTML={{ __html: data.contentSections[6].SectionBody}}></p>          
                </div>


                <div className="w-full md:w-1/3 flex gap-4 flex-col items-start">
                <div className="w-full flex items-center justify-center content-center">
                  <img width="190" src="/svg/icon-bms.svg"></img> </div> 
                  <h4 className="text-xl font-P22Underground-book text-gray-500 text-left">{data.contentSections[7].SectionTitle}</h4>
                  <p dangerouslySetInnerHTML={{ __html: data.contentSections[7].SectionBody}}></p>            
                </div>

                <div className="w-full md:w-1/3 flex gap-4 flex-col items-start">
                <div className="w-full flex items-center justify-center content-center">
                  <img width="190" src="/svg/icon-sensor.svg"></img> </div> 
                  <h4 className="text-xl font-P22Underground-book text-gray-500 text-left">{data.contentSections[8].SectionTitle}</h4>
                  <p dangerouslySetInnerHTML={{ __html: data.contentSections[8].SectionBody}}></p>       
                </div>
                               

              </div>
              
              {/* <p className="text-center md:text-left  font-P22Underground-thin text-lg pt-8"><a target="_blank" href={`${data.contentSections[9].url}`}>
               
               <button className="bg-accent text-white font-P22Underground-book md:float-left py-4 px-10 my-10">{data.contentSections[9].text}</button>
               </a>
               </p> */}

            </div>
          </div>
          </section>

        <Formarea/>


          


        <Banner/>



        <Footer/>


    </div>
  )
}
