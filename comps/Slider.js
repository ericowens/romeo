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
  
    return (
      
      <section id="hero" className="hero-vid" >

        <video id="slider" autoPlay muted loop>
          <source src="/vid/FINAL ROMEO POWER BF MASTER 360.mp4" type='video/mp4'></source>
        </video>


        <div className="navigation">
          <div  onClick={(e) => vidurl("/vid/FINAL ROMEO POWER BF MASTER 360.mp4",e)}  className="btn active"></div>
          <div  onClick={(e) => vidurl("/vid/2.mp4",e)} className="btn"></div>
        </div>



      </section>
    );
}

export default Slider; 