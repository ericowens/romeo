import Head from 'next/head'
import Navbar from '../../comps/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../comps/Footer'
import Banner from '../../comps/Banner'
import observe_nav from '../../comps/observe_nav'
import React, { useState, useEffect } from 'react'


export default function Home() {
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

      <section id="hero" className="hero-media-leadership flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold">Leadership</h1>
              
              
            </div>
        </div>
        </section>
        
      </section>


      




      <section className="flex bg-white justify-center py-16">

          <div className=" flex-1  max-w-screen-lg ">
  
          <div className="grid grid-cols-2 gap-16">
            <div>
            <div className="flex justify-center items-center ">
              <img src="/leadership/Lionel.jpg"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Lionel Selwood, Jr.</p>
                  <div className="grid gap-4 grid-cols-2 justify-center">
                    <div className="border-r">
                      <p className="text-center">RGB</p>
                    </div>
                    <div>
                      <p className="text-center">JPG</p>
                      </div>
                    <div className="border-r">
                      <p className="text-center">CMYK</p>
                      </div>
                    <div>
                      <p className="text-center">TIFF</p>
                      </div>
                  </div>
                </div>
              </section>
            </div>
            <div>
            <div className="flex justify-center items-center ">
              <img src="/leadership/AK Srouji, PhD .jpg"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">AK Srouji, PhD</p>
                  <div className="grid gap-4 grid-cols-2 justify-center">
                    <div className="border-r">
                      <p className="text-center">RGB</p>
                    </div>
                    <div>
                      <p className="text-center">JPG</p>
                      </div>
                    <div className="border-r">
                      <p className="text-center">CMYK</p>
                      </div>
                    <div>
                      <p className="text-center">TIFF</p>
                      </div>
                  </div>
                </div>
              </section>
            </div>
            <div>
            <div className="flex justify-center items-center">
              <img src="/leadership/Lauren Webb.jpg"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Lauren Webb</p>
                  <div className="grid gap-4 grid-cols-2 justify-center">
                    <div className="border-r">
                      <p className="text-center">RGB</p>
                    </div>
                    <div>
                      <p className="text-center">JPG</p>
                      </div>
                    <div className="border-r">
                      <p className="text-center">CMYK</p>
                      </div>
                    <div>
                      <p className="text-center">TIFF</p>
                      </div>
                  </div>
                </div>
              </section>
            </div>
            <div>
            <div className="flex justify-center items-center">
              <img src="/leadership/Criswell Choi.jpg"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Criswell Choi</p>
                  <div className="grid gap-4 grid-cols-2 justify-center">
                    <div className="border-r">
                      <p className="text-center">RGB</p>
                    </div>
                    <div>
                      <p className="text-center">JPG</p>
                      </div>
                    <div className="border-r">
                      <p className="text-center">CMYK</p>
                      </div>
                    <div>
                      <p className="text-center">TIFF</p>
                      </div>
                  </div>
                </div>
              </section>
            </div>
         
            
            
            
            








          </div>
           
          </div>

      </section>


      







        <Banner />



        <Footer />
        


    </div>
  )
}
