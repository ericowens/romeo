import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        
        
      </Head>

      <Navbar/>

      <section id="hero" >
      <section className="flex justify-center">
        <div className="flex max-w-screen-lg  flex-wrap flex-1">
          <div className="justify-start  ">
              <h1 className="font-P22Underground-thp text-7xl font-bold">Power Inspired by Nature.</h1>
              
              <button className="bg-accent  float-left py-4 px-14 my-10">Contact</button>    
            </div>
        </div>
        </section>
        
      </section>

      <section className="flex justify-center bg-medium py-16">
        <div className="flex max-w-screen-lg  flex-wrap flex-1">
          <div className="flex-1">
            <h2 className="text-left text-darkcolor underline font-P22Underground-thp text-4xl font-bold">The Future is Now</h2>
            <p className="text-lg leading-normal my-4">For far too long, we’ve taken from nature without replenishing. Now, here we are. We see
and feel the eﬀects and it’s time for real change.</p>
<p className="text-lg leading-normal my-4">At Romeo Power, we’re not just in the business of delivering electrification solutions for
complex commercial vehicle applications. We want to change the way people live. We
have a bold vision to create a world where energy poverty no longer exists.</p>
<p className="text-lg leading-normal my-4">Curiosity is key to achieving our goal. It spurs innovation. It empowers us to find new
ways to approach seemingly unyielding challenges. We embrace the tough questions
because they’re necessary to drive transformation. We have an opportunity to make
universal energy a thing of the future. And the future is now.</p>
          </div>
        </div>
        </section>

        <section className="flex justify-center bg-light">
        <div className="flex max-w-screen-lg flex-col flex-wrap flex-1 md:flex-row m-3 space-x-4 ">
          <div className="flex-1 flex justify-center align-center flex-col">
          <h3 className="text-left text-darkcolor underline font-P22Underground-thp text-4xl font-bold">Products</h3>
          <p>Romeo Power oﬀers custom electrification solutions for the
commercial vehicle industry spanning from Class 3 delivery
vehicles to the largest, long-haul Class 8 vehicles. With high
packaging eﬀiciency, high energy density and a structurally
integrated cooling system, Romeo Power’s modular ba ery
systems have multiple safety features and are designed to
tolerate thermal event faults at a single cell level.</p>
<div className="flex"><button className="bg-accent  float-left py-4 px-14 my-10 text-white">Learn More</button>  </div>
 
          </div>
          <div className="flex-1">
          <img
            src="/USManufacturing.jpg"
            width='500'
            alt=""        
          />   
          </div>
        </div>
        </section>



        <section className="flex justify-center bg-light">
        <div className="flex max-w-screen-lg flex-col flex-wrap flex-1 md:flex-row m-3 space-x-4 ">
        <div className="flex-1">
          <img
           src="/USManufacturing.jpg"
           width='500'
            alt=""        
          />   
          </div>
          <div className="flex-1 flex justify-center align-center flex-col">
          <h3 className="text-left text-darkcolor underline font-P22Underground-thp text-4xl font-bold">Technology</h3>
          <p>Romeo Power oﬀers custom electrification solutions for the
commercial vehicle industry spanning from Class 3 delivery
vehicles to the largest, long-haul Class 8 vehicles. With high
packaging eﬀiciency, high energy density and a structurally
integrated cooling system, Romeo Power’s modular ba ery
systems have multiple safety features and are designed to
tolerate thermal event faults at a single cell level.</p>
<div className="flex"><button className="bg-accent  float-left py-4 px-14 my-10 text-white">Learn More</button>  </div>
 
          </div>
          
        </div>
        </section>


        <section className="flex justify-center bg-light">
        <div className="flex max-w-screen-lg flex-col flex-wrap flex-1 md:flex-row m-3 space-x-4 ">
          <div className="flex-1 flex justify-center align-center flex-col">
          <h3 className="text-left text-darkcolor underline font-P22Underground-thp text-4xl font-bold">U.S. Manufacturing</h3>
          <p>Romeo Power oﬀers custom electrification solutions for the
commercial vehicle industry spanning from Class 3 delivery
vehicles to the largest, long-haul Class 8 vehicles. With high
packaging eﬀiciency, high energy density and a structurally
integrated cooling system, Romeo Power’s modular ba ery
systems have multiple safety features and are designed to
tolerate thermal event faults at a single cell level.</p>
<div className="flex"><button className="bg-accent  float-left py-4 px-14 my-10 text-white">Learn More</button>  </div>
 
          </div>
          <div className="flex-1">
          <img
            src="/USManufacturing.jpg"
            width='500'
            alt=""        
          />   
          </div>
        </div>
        </section>




        <section className="flex justify-center bg-medium py-16">
        <div className="flex max-w-screen-lg flex-col flex-wrap flex-1 md:flex-row m-3 space-x-4 ">
        <div className="flex-1 w-2/5 flex-grow">
          <p className="text-darkcolor font-P22Underground-book text-base " >ROMEO PO W ER, INC. Media</p>
        <p >4380 Ayers Ave, Vernon, CA 90058<br></br>
        sales@romeopower.com<br></br>
        +1 833.467.2237</p>
        <ul className="flex py-10">
          <li className="flex-1"><img src="/Facebook.png"></img></li>
          <li className="flex-1"><img src="/twitter.png"></img></li>
          <li className="flex-1"><img src="/linkedin.png"></img></li>
          <li className="flex-1"><img src="/youtube.png"></img></li>
          <li className="flex-1"><img src="/instagram.png"></img></li>
        </ul>
        </div> 
        <div className="flex-1 w-1/5">
          <ul>
            <li className="text-darkcolor font-P22Underground-book text-base ">Media</li>
            <li className="text-darkcolor font-P22Underground-book text-base ">Investors</li>
            <li className="text-darkcolor font-P22Underground-book text-base ">Careers</li>
            <li className="text-darkcolor font-P22Underground-book text-base ">Contact</li>
          </ul>
        </div> 
        <div className="flex-1 w-2/5 flex-grow flex flex-col">
          <p className="text-darkcolor font-P22Underground-book text-base ">Subscribe</p>
          <input 
          className="rounded py-3 px-4 leading-tight focus:outline-none bg-transparent border border-gray-200 focus:border-gray-500" 
          id="grid-last-name" type="text" placeholder="First Name"></input>
          <input 
          className=" rounded py-3 px-4 leading-tight focus:outline-none bg-transparent border border-gray-200 focus:border-gray-500" 
          id="grid-last-name" type="text" placeholder="Last Name"></input>
          <input 
          className=" rounded py-3 px-4 leading-tight focus:outline-none bg-opacity-50 bg-transparent border border-gray-200 focus:border-gray-500" 
          id="grid-last-name" type="text" placeholder="Email"></input>

        <div className="flex"><button className="bg-accent  float-left py-4 px-14 my-10 text-white">Submit</button>  </div>
        </div> 
        </div>
        </section>



        <section className="flex justify-center bg-accent ">
        <div className="flex flex-col flex-wrap flex-1 md:flex-row m-3 space-x-4 ">
        <div className="flex-1 text-white font-P22Underground-light text-sm">
          LOGO
        </div> 
        <div className="flex-1 text-white font-P22Underground-light text-sm">
        © 2021 Romeo Power, Inc. All Rights Reserved.
        </div>
        <div className="flex-1 text-white font-P22Underground-light text-sm">
        Privacy Policy
        </div>
        <div className="flex-1 text-white font-P22Underground-light text-sm">
        Terms of Service
        </div>
        <div className="flex-1 text-white font-P22Underground-light text-sm">
        Social Media Community Guidelines
        </div>
       
        </div>
        </section>


    </div>
  )
}
