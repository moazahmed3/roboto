const toggleBtn = document.querySelector("#open-list");
const navList = document.querySelector("#nav-list");

let isOpen = false;

///  open list
toggleBtn.addEventListener("click", function () {
  isOpen = !isOpen;
  toggleBtn.innerHTML = isOpen
    ? `<i class="fa-solid fa-2x fa-xmark"></i>`
    : `<i class="fa-solid fa-2x fa-bars-staggered"></i>`;
  navList.classList.toggle("hidden");
});

// scroll nav
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("bg-black");
  } else {
    navbar.classList.remove("bg-black");
  }
});


// ScrollReveal
const sr = ScrollReveal();

// hero section
sr.reveal(".hero-content", {
   origin: 'left',     
    distance: '100px',  
    duration: 1000,     
    delay: 200,         
    easing: 'ease-in-out',
    reset: true         
})

sr.reveal(".hero-img", {
   origin: 'right',     
    distance: '100px',  
    duration: 1000,     
    delay: 200,         
    easing: 'ease-in-out',
    reset: true         
})


sr.reveal(".work-left", {
   origin: 'left',     
    distance: '100px',  
    duration: 1300,     
    delay: 200,         
    easing: 'ease-in-out',
    reset: true         
})
sr.reveal(".work-right", {
   origin: 'right',     
    distance: '100px',  
    duration: 1300,     
    delay: 200,         
    easing: 'ease-in-out',
    reset: true         
})



