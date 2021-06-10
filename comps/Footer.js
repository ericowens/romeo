import Link from 'next/link'

const Footer = () => {
    return (
      <section id="footer" className="flex justify-center bg-accent ">
      <div className="flex flex-col flex-wrap flex-1 md:flex-row m-3 space-x-4 ">
      <div className="flex-1 text-white  text-sm leading-10  ">
        <img src="/POWERBUTTONLOGO_WHITERGB.png" width="50"></img>
      </div> 
      <div className="flex-1 text-white  text-sm leading-10">
      © 2021 Romeo Power, Inc. All Rights Reserved.
      </div>
      <div className="flex-1 text-white  text-sm leading-10">
      <Link href="/privacy_policy">Privacy Policy</Link>
      </div>
      <div className="flex-1 text-white  text-sm leading-10">
      <Link href="/terms">Terms of Service</Link>
      </div>
      <div className="flex-1 text-white  text-sm leading-10">
      <Link href="/social_media_guidelines">Social Media Community Guidelines</Link>
      </div>
     
      </div>
      </section>
    );
}

export default Footer; 