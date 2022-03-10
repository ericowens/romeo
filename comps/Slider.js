import Link from 'next/link'

const Slider = () => {

  function vidurl(src,e) {
    document.getElementById("slider").src = src;
    const navs = document.querySelectorAll(".navigation .btn");
    navs.forEach((button) => {
      button.classList.remove("active");
    });
    e.target.classList.add("active");
    console.log(navs)
  }

  function unmute(src,e) {
    document.getElementById("slider").muted = false
  }
  
    return (
      
      <section id="hero" className="hero-vid" >

        <video id="slider" autoPlay muted loop poster="/thumbnail_HM_Slide1-gradient.png">
          <source src="/vid/yt/Production.mp4" type='video/mp4'></source>
        </video>

        <div id='unmute'>
          <button  
          onClick={(e) => unmute(e)} 
          className="bg-accent  float-left py-4 px-14 my-2 text-white">
            Sound (Icon?)
            </button> 
        </div>


        <div className="navigation">
          <div  onClick={(e) => vidurl("/vid/yt/Production.mp4",e)}  className="btn active"></div>
          <div  onClick={(e) => vidurl("/vid/yt/Brighter.mp4",e)} className="btn"></div>
        </div>



      </section>
    );
}

export default Slider; 