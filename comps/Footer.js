import Link from 'next/link'

const Footer = () => {
    return (
       

      <section id="footer" className=" flex justify-center bg-darkaccent ">
       <div className="flex flex-col md:flex-row max-w-screen-lg   px-4 gap-0 md: gap-4 flex-1 ">
        <div className="flex-1 text-white  text-xs lg:leading-10 pt-2 pl-0 flex items-center ">
          <img className="" src="/logos/footer.svg" ></img>
        </div> 
        <div className=" text-white  text-xs  lg:leading-10">
        <span>© 2021 Romeo Power, Inc. All Rights Reserved.</span>
        </div>
        <div className=" text-white  text-xs  lg:leading-10">
        <Link href="/privacy_policy">Privacy Policy</Link>
        </div>
        <div className="hidden text-white  text-xs  lg:leading-10">
        <Link href="/terms">Terms of Service</Link>
        </div>
        <div className=" text-white  text-xs  lg:leading-10">
        <a target="_blank" href="/Romeo Power_Social Media Community Standards 2021.pdf">Social Media Community Standards</a>
        </div>
        <div className=" text-white  text-xs  lg:leading-10">
        <a target="_blank" href="/RomeoPower_Brochure01.pdf">Product Brochure</a>
        </div>
     
      </div>
      </section>
    );
}

export default Footer; 