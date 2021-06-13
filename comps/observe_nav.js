const observe_nav = () => {
  if (typeof window !== 'undefined') {
    console.log('Nav')
    const header = document.querySelector("nav");
    const sectionOne = document.querySelector("#hero");
  
    const sectionOneOptions = {
      rootMargin: "-100px 0px 0px 0px"
    };
  
    const sectionOneObserver = new IntersectionObserver(function(
      entries,
      sectionOneObserver
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          header.classList.add("nav-scrolled");
        } else {
          header.classList.remove("nav-scrolled");
        }
      });
    },
    sectionOneOptions);
  
    sectionOneObserver.observe(sectionOne);


    // window.addEventListener("scroll", function(e){
    //   console.log('scrolling')
    //   console.table(e)
    // });
  }
}

export default observe_nav; 