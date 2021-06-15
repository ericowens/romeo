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

      <section id="hero" className="bg-accent flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold">Logos</h1>
              
              
            </div>
        </div>
        </section>
        
      </section>


      




      <section className="flex bg-white justify-center py-16">

          <div className=" flex-1  max-w-screen-lg px-4 ">
  
          <div className="grid grid-cols-2 gap-16">
            <div>
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER HORZ LOGO_GREEN-GREY.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href="/zips/ROMEO_POWER_LOGO_1.zip"><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">ROMEO POWER HORIZONTAL
GREEN/GREY</p>
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
            <div className="hidden">
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER HORZ LOGO_GREEN-WHITE.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href=""><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">ROMEO POWER HORIZONTAL
GREEN/WHITE</p>
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
            <div className="hidden">
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER HORZ LOGO_WHITE.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href=""><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">ROMEO POWER HORIZONTAL
WHITE</p>
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
            <div className="hidden">
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER HORZ LOGO_BLACK.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href=""><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">ROMEO POWER HORIZONTAL
BLACK</p>
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
            <div className="hidden">
              <div className="flex justify-center items-center bg-logobg">
                <img   src="/Image5.jpg"></img>
                </div>
              <section className="flex gap-4 py-4">
                <div className=" w-1/3">
                   <a target="_blank" href=""><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">ROMEO POWER VERTICAL
GREEN/GREY</p>
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
            <div className="hidden">
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER VERT_GREEN-WHITE.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href=""><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">ROMEO POWER VERTICAL
GREEN/WHITE</p>
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
            <div className="hidden">
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER VERT LOGO_WHITE.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href=""><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">ROMEO POWER VERTICAL
WHITE</p>
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
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER VERT LOGO_BLACK.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href="/zips/ROMEO_POWER_LOGO_Vert_2.zip"><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">ROMEO POWER VERTICAL
BLACK</p>
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
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER HORZ LOGOTYPE_GREEN-GREY_RGB.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href="/zips/ROMEO_POWER_LOGOTYPE_3.zip"><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">LOGO TYPE HORIZONTAL
GREEN/GREY</p>
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
            <div className="hidden">
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER HORZ LOGOTYPE_GREEN-WHITE_RGB.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href=""><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">LOGO TYPE HORIZONTAL
GREEN/WHITE</p>
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
            <div className="hidden">
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER HORZ LOGOTYPE_WHITE_RGB.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href=""><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">LOGO TYPE HORIZONTAL
WHITE</p>
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
            <div className="hidden">
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER HORZ LOGOTYPE_BLACK_RGB.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href=""><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">LOGO TYPE HORIZONTAL
BLACK</p>
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



            <div className="hidden">
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER VERT LOGOTYPE_GREEN-GREY_RGB.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href=""><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">LOGO TYPE VERTICAL
GREEN/GREY</p>
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




            <div className="hidden">
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER VERT_LOGOTYPE_GREEN-WHITE_RGB.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href=""><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">LOGO TYPE VERTICAL
GREEN/WHITE</p>
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




            <div className="hidden">
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER VERT LOGOTYPE_WHITE_RGB.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href=""><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">LOGO TYPE VERTICAL
WHITE</p>
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




            <div className="hidden">
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER VERT LOGOTYPE_BLACK_RGB.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href=""><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">LOGO TYPE VERTICAL
BLACK</p>
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
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER BUTTON LOGO_GREENRGB.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href="/zips/ROMEO POWER  BADGE LOGO_4.zip"><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">BADGE
GREEN</p>
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





            <div className="hidden">
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER BUTTON LOGO_GREYRGB.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href=""><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">BADGE
GREY</p>
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





            <div className="hidden">
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER BUTTON LOGO_WHITERGB.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href=""><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">BADGE
WHITE</p>
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



            <div className="hidden">
            <div className="flex justify-center items-center bg-logobg">
              <img src="/logos/ROMEO POWER BUTTON LOGO_BLACKRGB.png"></img>
              </div>
              <section className="flex gap-4 py-4">
                <div className="w-1/3">
                   <a target="_blank" href=""><img src="/DOWNLOAD ICON.png"></img></a>
                </div>
                <div className="w-2/3">
                  <p className="uppercase">BADGE
BLACK</p>
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
