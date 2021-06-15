import Link from 'next/link'

const Formarea = () => {
  const formsubmit = async event => {
    const thanks = document.querySelector("#thanks");
    const form = document.querySelector("#pleasetell");
    event.preventDefault()
    // console.log('here', event.target.name.value)

    const res = await fetch(
      '/api/form',
      {
        body: JSON.stringify({
          fname: event.target.fname.value ?? '-',
          lname: event.target.lname.value ?? '-',
          email: event.target.email.value ?? '-',
          company: event.target.company.value ?? '-',
          phone: event.target.phone.value ?? '-',
          title: event.target.title.value ?? '-',
          comment: event.target.comment.value ?? '-',
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
      <section  className="formarea text-center bg-darkaccent flex justify-center items-center" >
      <section className="flex flex-1  max-w-screen-lg justify-center items-center px-4 align-center py-16 ">
        <div className=" max-w-screen-lg  ">
          <div className="">
                
              <h2 className="font-P22Underground-thp text-5xl font-bold text-white">Romeo Power’s Packs Are Accelerating Change</h2>
              <p className=" text-center text-white flex-1 font-P22Underground-thin text-lg py-8">
              Please tell us about your system needs below.
                </p>
                <h2 id="thanks" className="hidden text-center font-P22Underground-thp text-5xl font-bold text-white">Thank You</h2>
                <form id="pleasetell" onSubmit={formsubmit}>
            
                  <div className="flex space-x-20">
                    <div className="w-1/2">
                      <input  name="fname" className="sm:w-full my-4 p-4 "   type="text" placeholder="First Name"  required></input>
                      <input  name="email" className="sm:w-full my-4 p-4"   type="email" placeholder="Email"   required></input>
                      <input  name="company" className="sm:w-full my-4 p-4"   type="text" placeholder="Company" required ></input>
                      </div>
                      <div className="w-1/2">
                      <input  name="lname" className="sm:w-full my-4 p-4"   type="text" placeholder="Last Name" required></input>
                      <input  name="phone" className="sm:w-full my-4 p-4"   type="text" placeholder="Phone"></input>
                      <input  name="title" className="sm:w-full my-4 p-4"   type="text" placeholder="Title" required></input>
                      </div>
                  </div>
                  <div className="flex space-x-20">
                    <div className="flex-1 w-full">
                    <textarea  name="comment" className="my-4 p-4 form-textarea mt-1 block w-full" rows="3" 
                    placeholder="Please tell us about the types of applications, projected volume over time, and any other details about how you're looking to use our innovative packs."></textarea>
                      </div>
                  </div>
                
                <button type="submit" className="bg-accent   py-4 px-14 my-14 text-white">Submit</button>               
             
           
            </form>

              
            </div>
        </div>
        </section>
        
      </section>
    );
}

export default Formarea; 