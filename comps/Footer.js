import Link from 'next/link'

const Footer = () => {
    return (
       

      <section id="footer" className=" flex justify-center bg-darkaccent ">
       <div className="flex max-w-screen-lg  gap-4 flex-1 justify-evenly">
        <div className=" text-white  text-sm leading-10 p-2  ">
          <img src="/logos/footer.svg" width="70"></img>
        </div> 
        <div className=" text-white  text-sm leading-10">
        © 2021 Romeo Power, Inc. All Rights Reserved.
        </div>
        <div className=" text-white  text-sm leading-10">
        <Link href="/privacy_policy">Privacy Policy</Link>
        </div>
        <div className=" text-white  text-sm leading-10">
        <Link href="/terms">Terms of Service</Link>
        </div>
        <div className=" text-white  text-sm leading-10">
        <Link href="/social_media_guidelines">Social Media Community Guidelines</Link>
        </div>
     
      </div>
      </section>
    );
}

export default Footer; 