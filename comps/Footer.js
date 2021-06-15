import Link from 'next/link'

const Footer = () => {
    return (
       

      <section id="footer" className=" flex justify-center bg-darkaccent ">
       <div className="flex max-w-screen-lg  gap-4 flex-1 ">
        <div className=" text-white  text-sm leading-10 p-2  ">
          <img src="/logos/footer.svg" width="70"></img>
        </div> 
        <div className=" text-white  text-sm leading-3 lg:leading-10">
        <span>© 2021 Romeo Power, Inc. All Rights Reserved.</span>
        </div>
        <div className=" text-white  text-sm leading-3 lg:leading-10">
        <Link href="/privacy_policy">Privacy Policy</Link>
        </div>
        <div className="hidden text-white  text-sm leading-3 lg:leading-10">
        <Link href="/terms">Terms of Service</Link>
        </div>
        <div className=" text-white  text-sm leading-3 lg:leading-10">
        <a target="_blank" href="/Romeo Power_Social Media Community Standards 2021.pdf">Social Media Community Guidelines</a>
        </div>
     
      </div>
      </section>
    );
}

export default Footer; 