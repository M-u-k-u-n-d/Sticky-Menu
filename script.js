
const navbar = document.getElementById("menu-bar");

// Get the offset position of the navbar
const Sticky = navbar.offsetTop;

window.addEventListener('scroll', function(){
    let navbar = this.document.getElementById('menu-bar');
    
    if(window.scrollY  >= Sticky){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
});