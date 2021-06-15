const observe_nav = () => {
  if (typeof window !== 'undefined') {
    // console.log('Nav')
    const header = document.querySelector("nav");
    // const sectionOne = document.querySelector("#hero");
  
    // const sectionOneOptions = {
    //   rootMargin: "-100px 0px 0px 0px"
    // };
  
    // const sectionOneObserver = new IntersectionObserver(function(
    //   entries,
    //   sectionOneObserver
    // ) {
    //   entries.forEach(entry => {
    //     if (!entry.isIntersecting) {
    //       header.classList.add("nav-scrolled");
    //     } else {
    //       header.classList.remove("nav-scrolled");
    //     }
    //   });
    // },
    // sectionOneOptions);
  
    // sectionOneObserver.observe(sectionOne);


    window.addEventListener("scroll", function(e){
      // console.table(e.target.defaultView.pageYOffset)
      if(e.target.defaultView.pageYOffset > 200){
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    });


    var myVideo = document.getElementById("myVid");
    var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    // Javascript for image slider manual navigation
    var manualNav = function(manual){
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });
      if(manual == 1){
        myVideo.play(); 
      }else{
        myVideo.pause(); 
      }

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // Javascript for image slider autoplay navigation
    var repeat = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      var repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 10000);
      }
      repeater();
    }
    // repeat();
    // myVideo.play(); 











  }
}

export default observe_nav; 