import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
             <div className="logo"><Link href="/"><img className="sm:w-full md:w-1/2" src="/logo.png" ></img></Link></div>

             <label htmlFor="btn" className="icon">
                <p className="text-white text-lg leading-loose pt-6">Menu</p>
            </label>
            <input type="checkbox" id="btn"></input>
            <ul>
            <li>
          <label htmlFor="btn-1" className="show">Products</label>
          <Link href="/products"><a >Products</a></Link>
          <input type="checkbox" id="btn-1"></input>
          <ul>
            <li className="mobilelink hidden"><Link href="/products"><a >Products</a></Link></li>
            <li><Link href="/products/banyan_module"><a >Banyan Module</a></Link></li>
            <li><Link href="/products/menara_pack_series"><a >Menara Pack Series</a></Link></li>
           
          </ul>
           </li>
           <li><Link href="/technology"><a >Technology</a></Link></li>
           <li>
          <label htmlFor="btn-2" className="show">About</label>
          <Link href="/about/our_story"><a >About</a></Link>
          <input type="checkbox" id="btn-2"></input>
          <ul>
            <li><Link href="/about/our_story"><a >Our Story</a></Link></li>
            <li><Link href="/about/leadership"><a >Leadership</a></Link></li>
            <li><Link href="/about/us_manufacturing"><a >U.S. Manufacturing</a></Link></li>
            <li><Link href="/about/faqs"><a >FAQs</a></Link></li>
            <li><a target="_blank" href="/RomeoPower_Brochure01.pdf">Product Brochure</a></li>
            {/* <li><Link href="/about/resources"><a >Resources</a></Link></li> */}
          </ul>
           </li>
           <li><Link href="/careers"><a >Careers</a></Link></li>
           <li><Link href="/media"><a >Media</a></Link></li>
           <li><a target="_blank" href="https://investors.romeopower.com/overview/default.aspx">Investors</a></li>
            </ul>
            
           <section style={{backgroundColor: '#fff', paddingRight: '2rem'}}  className="flex  gap-8 justify-end items-center  " id="subnav">
              <p className="text-2xl text-black">Important information about Romeo Power’s Annual Shareholder Meeting.</p>
              <button style={{backgroundColor: '#fff', border: '2px solid #4F7A32'}}  href="#" 
              className="uppercase text-xl   text-black font-P22Underground-book md:float-left  p-4 my-10">Learn More</button>
              
            </section> 
        </nav>
    );
}

export default Navbar; 