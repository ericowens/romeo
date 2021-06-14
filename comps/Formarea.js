import Link from 'next/link'

const Formarea = () => {
  const registerUser = async event => {
    event.preventDefault()
    console.log('here', event.target.name.value)

    const res = await fetch(
      '/api/form',
      {
        body: JSON.stringify({
          name: event.target.name.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json()
    console.log('here', result)
    // result.user => 'Ada Lovelace'
  }
    return (
      <section  className="formarea text-center bg-darkaccent flex justify-center items-center" >
      <section className="flex flex-1  max-w-screen-lg justify-center items-center align-center py-16 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
                {/* <form onSubmit={registerUser}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
            <button type="submit">Register</button>
          </form> */}
              <h2 className="font-P22Underground-thp text-5xl font-bold text-white">Romeo Power’s Packs Are Accelerating Change</h2>
              <p className=" text-center text-white flex-1 font-P22Underground-thin text-lg py-8">
              Please tell us about your system needs below.
                </p>
                <div className="flex space-x-20">
                  <div className="w-1/2">
                    <input className="sm:w-full my-4 p-4 "   type="text" placeholder="First Name"></input>
                    <input className="sm:w-full my-4 p-4"   type="text" placeholder="Email"></input>
                    <input className="sm:w-full my-4 p-4"   type="text" placeholder="Company"></input>
                    </div>
                    <div className="w-1/2">
                    <input className="sm:w-full my-4 p-4"   type="text" placeholder="Last Name"></input>
                    <input className="sm:w-full my-4 p-4"   type="text" placeholder="Phone"></input>
                    <input className="sm:w-full my-4 p-4"   type="text" placeholder="Title"></input>
                    </div>
                </div>
                <div className="flex space-x-20">
                  <div className="flex-1 w-full">
                  <textarea className="my-4 p-4 form-textarea mt-1 block w-full" rows="3" 
                  placeholder="Please tell us about the types of applications, projected volume over time, and any other details about how you're looking to use our innovative packs."></textarea>
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