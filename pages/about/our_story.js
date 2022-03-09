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
  const uri = `${process.env.NEXT_PUBLIC_ENV_URL}/pages/14`
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

      <section id="hero" className="hero-about-story flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  pl-4">
          <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold" dangerouslySetInnerHTML={{ __html: data.contentSections[0].text}}></h1>
              
            </div>
        </div>
        </section>
        
      </section>


   


      
      



        <section className="flex justify-center bg-medium px-4 py-16">
          <div className="flex max-w-screen-lg  flex-wrap flex-1">
            <div className="flex-1">
              
              
              

<p className="text-left pb-4" dangerouslySetInnerHTML={{ __html: data.contentSections[1].List}}>
</p>
             
            </div>
          </div>
          </section>


          <section className="flex bg-white justify-center py-16">

        <div className=" flex-1 flex justify-center align-center content-center  px-4 flex-col max-w-screen-lg   ">
          
            <h2 className=" text-left   flex-1   font-P22Underground-thp text-4xl font-bold pb-8 ">
            {data.contentSections[2].text}
              </h2>
              

            

                <div className="grid grid-cols-2 gap-4 w-3/4">
                  <div className="flex flex-col items-center align-center content-center justify-center">
                    <div className="flex-1 py-4" >
                      <div className=" rounded-full border border-black text-white bg-black font-bold leading-none text-md p-2">20<br></br>16</div>
                      </div>
                    <span className="border-r-2 border-black flex-grow-0 h-full w-1"></span>
                  </div>
                  <div className="py-8">
                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold ">August 2016</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power was founded</p>
                  </div>
                </div>


                <div className="grid grid-cols-2 gap-4 w-3/4">
                  <div className="flex flex-col items-center align-center content-center justify-center">
                    <div className="flex-1 py-4" >
                      <div className=" rounded-full border border-black text-white bg-black font-bold leading-none text-md p-2">20<br></br>17</div>
                      </div>
                    <span className="border-r-2 border-black flex-grow-0 h-full w-1"></span>
                  </div>
                  <div className="py-8">
                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold ">February 2017</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power expands to new manufacturing
facility in Southern California</p>

                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold pt-8 ">August 2017</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power Closes $30M seed round to ramp
up battery pack production for commercial EVs
and stationary storage</p>

                  <h2 className=" text-left font-P22Underground-thp text-4xl font-bold pt-8 ">November 2017</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power inaugurates the first
manufacturing facility dedicated to EV battery
packs on the West Coast</p>
                  </div>
                </div>




                <div className="grid grid-cols-2 gap-4 w-3/4">
                  <div className="flex flex-col items-center align-center content-center justify-center">
                    <div className="flex-1 py-4" >
                      <div className=" rounded-full border border-black text-white bg-black font-bold leading-none text-md p-2">20<br></br>19</div>
                      </div>
                    <span className="border-r-2 border-black flex-grow-0 h-full w-1"></span>
                  </div>
                  <div className="py-8">
                                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold  ">August 2019</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Heritage makes a $4M investment in Romeo Power
through their HG Ventures arm and forms a strategic
partnership for responsible environmental controls</p>

                  
                  </div>
                </div>


                <div className="grid grid-cols-2 gap-4 w-3/4">
                  <div className="flex flex-col items-center align-center content-center justify-center">
                    <div className="flex-1 py-4" >
                      <div className=" rounded-full border border-black text-white bg-black font-bold leading-none text-md p-2">20<br></br>20</div>
                      </div>
                    <span className="border-r-2 border-black flex-grow-0 h-full w-1"></span>
                  </div>
                  <div className="py-8">
                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold ">October 2020</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power announces SPAC merger agreement with
RMG Acquisition Corp.</p>


<h2 className=" text-left font-P22Underground-thp text-4xl font-bold pt-8 ">December 2020</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power begins trading on the NYSE under “RMO”</p>

                  
                  </div>
                </div>



                <div className="grid grid-cols-2 gap-4 w-3/4">
                  <div className="flex flex-col items-center align-center content-center justify-center">
                    <div className="flex-1 py-4" >
                      <div className=" rounded-full border border-black text-white bg-black font-bold leading-none text-md p-2">20<br></br>21</div>
                      </div>
                    <span className="border-r-2 border-black flex-grow-0 h-full w-1"></span>
                  </div>
                  <div className="py-8">
                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold ">April 2021</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power announces long-term supply agreement
                    with PACCAR for Peterbilt EVs</p>

                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold pt-8 ">May 2021</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power appoints VP of Cell Engineering</p>

                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold pt-8 ">August 2021</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power Announces Susan Brennan as New President and Chief 
                    Executive Officer</p>


                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold pt-8 ">June 2021</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Expansion of Executive Leadership Team With Chief Financial Officer, 
                    Kerry Shiba and Chief Accounting Officer, Yun Han</p>


                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold pt-8 ">July 2021</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power Announces Appointment of Matthew 
                    Sant as General Counsel</p>

                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold pt-8 ">October 2021</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power Signs Lease for 215,000 Square Foot 
                    State-of-the-Art Facility in Southern California</p>



                  
                  </div>
                </div>





                <div className="grid grid-cols-2 gap-4 w-3/4">
                  <div className="flex flex-col items-center align-center content-center justify-center">
                    <div className="flex-1 py-4" >
                      <div className=" rounded-full border border-black text-white bg-black font-bold leading-none text-md p-2">20<br></br>22</div>
                      </div>
                    <span className="border-r-2 border-black flex-grow-0 h-full w-1"></span>
                  </div>
                  <div className="py-8">
                    <h2 className=" text-left font-P22Underground-thp text-4xl font-bold ">February 2022</h2>
                    <p className=" text-left  flex-1 font-P22Underground-thin text-lg py-4">Romeo Power Completes Acquisition of Joint 
                    Venture Interest From BorgWarner</p>

                   


                  
                  </div>
                </div>



                





                                  
        </div>

      </section>



          


        <Banner />



        <Footer />
        


    </div>
  )
}
