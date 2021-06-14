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

      <section id="hero" className="hero-media-gallery  flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold">Gallery</h1>
              
              
            </div>
        </div>
        </section>
        
      </section>


      




      <section className="flex bg-white justify-center py-16">

          <div className=" flex-1  max-w-screen-lg ">
  
          <div className="grid grid-cols-3 gap-16">
            <div>
              <img src="/galImage1.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/hermesgal/Image2.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
            <img src="/hermesgal/Image3.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
            <img src="/hermesgal/Image4.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
            <img src="/hermesgal/Image5.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
            <img src="/hermesgal/Image6.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/Image7.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/Image8.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/Image9.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/Image10.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/galImage11.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/Image12.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/oriongal/1.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/oriongal/2.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/oriongal/3.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/oriongal/4.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/oriongal/5.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/oriongal/6.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/oriongal/7.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/oriongal/8.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/oriongal/9.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/oriongal/10.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/oriongal/11.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/oriongal/12.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/oriongal/13.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/oriongal/14.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/oriongal/15.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
              <img src="/oriongal/16.jpg"></img>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                  <img src="/DOWNLOAD ICON.png"></img>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">Photo title</p>
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
