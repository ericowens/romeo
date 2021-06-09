import Head from 'next/head'
import Navbar from '../comps/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
      </Head>

      <Navbar/>

      <section id="hero" >
      <section className="flex justify-center">
        <div className="flex max-w-screen-lg  flex-wrap flex-1">
          <div className="justify-start  ">
              <h1 className="">Power Inspired by Nature.</h1>
              
              <button className="bg-accent  float-left">Contact</button>    
            </div>
        </div>
        </section>
        
      </section>

      <section className="flex justify-center bg-medium">
        <div className="flex max-w-screen-lg  flex-wrap flex-1">
          <div className="flex-1">
            <h2 className="text-left">The Future is Now</h2>
            <p>For far too long, we’ve taken from nature without replenishing. Now, here we are. We see
and feel the eﬀects and it’s time for real change.</p>
<p>At Romeo Power, we’re not just in the business of delivering electrification solutions for
complex commercial vehicle applications. We want to change the way people live. We
have a bold vision to create a world where energy poverty no longer exists.</p>
<p>Curiosity is key to achieving our goal. It spurs innovation. It empowers us to find new
ways to approach seemingly unyielding challenges. We embrace the tough questions
because they’re necessary to drive transformation. We have an opportunity to make
universal energy a thing of the future. And the future is now.</p>
          </div>
        </div>
        </section>

        <section className="flex justify-center bg-light">
        <div className="flex max-w-screen-lg flex-col flex-wrap flex-1 md:flex-row m-3 space-x-4 ">
          <div className="flex-1 flex justify-center align-center flex-col">
          <h3>Products</h3>
          <p>Romeo Power oﬀers custom electrification solutions for the
commercial vehicle industry spanning from Class 3 delivery
vehicles to the largest, long-haul Class 8 vehicles. With high
packaging eﬀiciency, high energy density and a structurally
integrated cooling system, Romeo Power’s modular ba ery
systems have multiple safety features and are designed to
tolerate thermal event faults at a single cell level.</p>
<div className="flex"><button className="bg-accent  float-left">Learn More</button>  </div>
 
          </div>
          <div className="flex-1">
          <img
            src="https://unsplash.it/801/500"
            alt=""        
          />   
          </div>
        </div>
        </section>



        <section className="flex justify-center bg-light">
        <div className="flex max-w-screen-lg flex-col flex-wrap flex-1 md:flex-row m-3 space-x-4 ">
        <div className="flex-1">
          <img
            src="https://unsplash.it/801/500"
            alt=""        
          />   
          </div>
          <div className="flex-1 flex justify-center align-center flex-col">
          <h3>Products</h3>
          <p>Romeo Power oﬀers custom electrification solutions for the
commercial vehicle industry spanning from Class 3 delivery
vehicles to the largest, long-haul Class 8 vehicles. With high
packaging eﬀiciency, high energy density and a structurally
integrated cooling system, Romeo Power’s modular ba ery
systems have multiple safety features and are designed to
tolerate thermal event faults at a single cell level.</p>
<div className="flex"><button className="bg-accent  float-left">Learn More</button>  </div>
 
          </div>
          
        </div>
        </section>


        <section className="flex justify-center bg-light">
        <div className="flex max-w-screen-lg flex-col flex-wrap flex-1 md:flex-row m-3 space-x-4 ">
          <div className="flex-1 flex justify-center align-center flex-col">
          <h3>Products</h3>
          <p>Romeo Power oﬀers custom electrification solutions for the
commercial vehicle industry spanning from Class 3 delivery
vehicles to the largest, long-haul Class 8 vehicles. With high
packaging eﬀiciency, high energy density and a structurally
integrated cooling system, Romeo Power’s modular ba ery
systems have multiple safety features and are designed to
tolerate thermal event faults at a single cell level.</p>
<div className="flex"><button className="bg-accent  float-left">Learn More</button>  </div>
 
          </div>
          <div className="flex-1">
          <img
            src="https://unsplash.it/801/500"
            alt=""        
          />   
          </div>
        </div>
        </section>


    </div>
  )
}
