import Link from 'next/link'

const Banner = () => {
    return (
      <section id="banner" className="flex justify-center py-10">
        <div className="flex max-w-screen-lg flex-col flex-wrap flex-1 md:flex-row m-3 space-x-4 ">
        <div className="flex-1 w-2/5 flex-grow">
          <p className="text-darkcolor  text-base leading-7 text-bold " >ROMEO POWER, INC. Media</p>
        <p className="text-darkcolor font-P22Underground-thin text-base leading-7 " >4380 Ayers Ave, Vernon, CA 90058<br></br>
        sales@romeopower.com<br></br>
        +1 833.467.2237</p>
        <ul className="flex my-4">
          <li className="flex-1"><img src="/Facebook.png"></img></li>
          <li className="flex-1"><img src="/twitter.png"></img></li>
          <li className="flex-1"><img src="/linkedin.png"></img></li>
          <li className="flex-1"><img src="/youtube.png"></img></li>
          <li className="flex-1"><img src="/instagram.png"></img></li>
        </ul>
        </div> 
        <div className="flex-1 w-1/5">
          <ul>
            <li className="text-darkcolor  text-bold "><Link href="/media">Media</Link></li>
            <li className="text-darkcolor  text-bold my-4 "><Link href="/investors">Investors</Link></li>
            <li className="text-darkcolor  text-bold my-4 "><Link href="/about/careers">Careers</Link></li>
            <li className="text-darkcolor  text-bold my-4 "><Link href="/contact">Contact</Link></li>
          </ul>
        </div> 
        <div className="flex-1 w-2/5 flex-grow flex flex-col">
          <p className="text-darkcolor  text-base  ">Subscribe</p>
          <input 
          className=" "   type="text" placeholder="First Name"></input>
           <input 
          className=" "   type="text" placeholder="Last Name"></input>
          <input 
          className=" "   type="text" placeholder="Email"></input>

        <div className="flex"><button className="bg-accent  float-left py-4 px-14 my-2 text-white">Submit</button>  </div>
        </div> 
        </div>
        </section>
    );
}

export default Banner; 