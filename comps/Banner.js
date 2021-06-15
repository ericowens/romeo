import Link from 'next/link'

const Banner = () => {
  const formsubmit = async event => {
    const thanks = document.querySelector("#thankssub");
    const form = document.querySelector("#subscribe");
    event.preventDefault()
    // console.log('here', event.target.name.value)

    const res = await fetch(
      '/api/subscribe',
      {
        body: JSON.stringify({
          fname: event.target.fname.value ?? '-',
          lname: event.target.lname.value ?? '-',
          email: event.target.email.value ?? '-',
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    thanks.classList.remove("hidden");
    form.classList.add("hidden");

    const result = await res.json()
    console.log('here', result)
    // result.user => 'Ada Lovelace'
  }
    return (
      <section id="banner" className="flex justify-center py-10">
        <div className="flex max-w-screen-lg flex-col flex-wrap flex-1 md:flex-row m-3 space-x-4 ">
        <div className="flex-1  flex-grow">
          <p className="text-darkcolor  text-base leading-7 text-bold " >ROMEO POWER, INC.</p>
        <p className="address text-darkcolor font-P22Underground-thin text-base  " >4380 Ayers Ave, Vernon, CA 90058<br></br>
        sales@romeopower.com<br></br>
        +1 833.467.2237</p>
        <ul className="flex social">
          <li className="flex-1"><a target="_blank"  href="https://www.facebook.com/RomeoPowerInc"><img src="/social/facebook.svg"></img></a></li>
          <li className="flex-1"><a target="_blank"   href="https://twitter.com/romeopowerinc"><img src="/social/Twitter.svg"></img></a></li>
          <li className="flex-1"><a target="_blank"   href="https://www.linkedin.com/company/romeopowerinc/"><img src="/social/Linkedin.svg"></img></a></li>
          <li className="flex-1"><a target="_blank"   href="https://www.youtube.com/channel/UCBLrQ658VqC1XQTGajV3xlQ"><img src="/social/Youtube.svg"></img></a></li>
          <li className="flex-1"><a target="_blank"   href="https://www.instagram.com/romeopowerinc/"><img src="/instagram.png"></img></a></li>
        </ul>
        </div> 
        <div className="flex-1 ">
          <ul  className="bannerul flex flex-col  ">
            <li className="text-darkcolor w-1/2  text-bold "><Link  href="/media">Media</Link></li>
            <li className="text-darkcolor w-1/2 text-bold  "><a target="_blank" href="https://investors.romeopower.com/overview/default.aspx">Investors</a></li>
            <li className="text-darkcolor w-1/2 text-bold  "><Link href="/about/careers">Careers</Link></li>
            <li className="text-darkcolor w-1/2 text-bold  "><Link href="/contact">Contact</Link></li>
          </ul>
        </div> 
        <div className="flex-1  flex-grow flex flex-col">
        
        <p className="text-darkcolor  text-base  ">Subscribe</p>
        <p id="thankssub" className="hidden text-darkcolor  text-base  ">Thank You</p>
        <form className="flex-1  flex-grow flex flex-col" id="subscribe" onSubmit={formsubmit}>
          
          <input  name="fname" required
          className=" "   type="text" placeholder="First Name"></input>
           <input  name="lname" required
          className=" "   type="text" placeholder="Last Name"></input>
          <input  name="email" required
          className=" "   type="email" placeholder="Email"></input>

        <div className="flex"><button type="submit" className="bg-accent  float-left py-4 px-14 my-2 text-white">Submit</button>  </div>
        </form>
        </div> 
        </div>
        </section>
    );
}

export default Banner; 