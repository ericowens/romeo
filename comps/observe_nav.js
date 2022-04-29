const observe_nav = () => {
  if (typeof window !== 'undefined') {
    // console.log('Nav')
    const header = document.querySelector("nav");
    


    window.addEventListener("scroll", function(e){
      console.table(e.target.defaultView.pageYOffset)
      if(e.target.defaultView.pageYOffset > 200){
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    });


  }
}

export default observe_nav; 