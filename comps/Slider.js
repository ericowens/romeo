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

  function unmute(e) {
     let vid = document.getElementById("slider")
     if(vid.muted){
      e.target.innerText = 'Mute'
     }else {
      e.target.innerText = 'Unmute'
     }
      vid.muted = !vid.muted
    
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
            Unmute
            </button> 
        </div>


        <div className="navigation">
          <div  onClick={(e) => vidurl("/vid/yt/Production.mp4",e)}  className="btn active"></div>
          <div  onClick={(e) => vidurl("/vid/yt/Brand-720p.mp4",e)} className="btn"></div>
        </div>



      </section>
    );
}

export default Slider; 