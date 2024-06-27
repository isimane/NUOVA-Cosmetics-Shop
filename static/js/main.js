const hamburgerlist = document.getElementById("burgerlist");
const noAnimationElements = document.querySelectorAll(".noAnimation");

const navbar = document.getElementById("navbar");
const unshowlist = document.getElementById("unshowlist")

hamburgerlist.addEventListener("click",() =>{
    console.log(navbar.style.display);

    if(navbar.style.display !== 'block'){
        
        navbar.style.display="block";
        hamburgerlist.style.display="none";
        unshowlist.style.display="block";

    }else{
        navbar.style.display="none";
        
    }
})
unshowlist.addEventListener("click",() =>{

    if(navbar.style.display !=='none'){
        navbar.style.display="none";
        hamburgerlist.style.display="block"
        unshowlist.style.display="none";
    }else{
        navbar.style.display="block";
        
    }
})

if (navbar) {
    navbar.classList.add("animateScroll");
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animateScroll");
      }
    });
  });
  
  noAnimationElements.forEach((element) => {
    if (element !== navbar) {
      observer.observe(element);
    }
  });