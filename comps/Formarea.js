import Link from 'next/link'

const Formarea = () => {
    return (
      <section  className="formarea text-center bg-darkaccent flex justify-center items-center" >
      <section className="flex flex-1  max-w-screen-lg justify-center items-center align-center py-16 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
              <h2 className="font-P22Underground-thp text-5xl font-bold text-white">Romeo Power’s Packs Are Accelerating Change</h2>
              <p className=" text-center text-white flex-1 font-P22Underground-thin text-lg py-8">
              Please tell us about your system needs below.
                </p>
                <div className="flex space-x-20">
                  <div className="w-1/2">
                    <input className="sm:w-full my-4 p-4 "   type="text" placeholder="Value"></input>
                    <input className="sm:w-full my-4 p-4"   type="text" placeholder="Value"></input>
                    <input className="sm:w-full my-4 p-4"   type="text" placeholder="Value"></input>
                    </div>
                    <div className="w-1/2">
                    <input className="sm:w-full my-4 p-4"   type="text" placeholder="Value"></input>
                    <input className="sm:w-full my-4 p-4"   type="text" placeholder="Value"></input>
                    <input className="sm:w-full my-4 p-4"   type="text" placeholder="Value"></input>
                    </div>
                </div>
                <Link href="/products/hermes_module">
              <button className="bg-accent   py-4 px-14 my-14 text-white">Submit</button> 
              </Link>

              
            </div>
        </div>
        </section>
        
      </section>
    );
}

export default Formarea; 