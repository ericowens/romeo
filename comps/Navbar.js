import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
             <div className="logo"><Link href="/"><img className="" src="/logo.png" width="50%"></img></Link></div>
             <label htmlFor="btn" className="icon">
                Menu
            </label>
            <input type="checkbox" id="btn"></input>
            <ul>
            <li>
          <label htmlFor="btn-1" className="show">Products</label>
          <Link href="/products"><a >Products</a></Link>
          <input type="checkbox" id="btn-1"></input>
          <ul>
            <li><Link href="/products/hermes_module"><a >Hermes Module</a></Link></li>
            <li><Link href="/products/orion_pack"><a >Orion Pack</a></Link></li>
           
          </ul>
           </li>
           <li><Link href="/technology"><a >Technology</a></Link></li>
           <li>
          <label htmlFor="btn-1" className="show">About</label>
          <Link href="/about/our_story"><a >About</a></Link>
          <input type="checkbox" id="btn-1"></input>
          <ul>
            <li><Link href="/about/our_story"><a >Our Story</a></Link></li>
            <li><Link href="/about/leadership"><a >Leadership</a></Link></li>
            <li><Link href="/about/us_manufacturing"><a >U.S. Manufacturing</a></Link></li>
            <li><Link href="/about/faqs"><a >FAQs</a></Link></li>
            <li><Link href="/about/careers"><a >Careers</a></Link></li>
            {/* <li><Link href="/about/resources"><a >Resources</a></Link></li> */}
          </ul>
           </li>
           <li><Link href="/media"><a >Media</a></Link></li>
           <li><a target="_blank" href="https://investors.romeopower.com/overview/default.aspx">Investors</a></li>
            </ul>
        </nav>
    );
}

export default Navbar; 