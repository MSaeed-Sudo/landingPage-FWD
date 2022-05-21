/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let navbarList = document.querySelector('#navbar__list');
let sections = document.querySelectorAll('section'); // return nodelist of the match selected element;
function generateNavbarLink(){
    for(let section of sections){
        let newElement = document.createElement('li');
        newElement.innerHTML = `<li><a href="" data-link=${section.id} class="menu__link">${section.getAttribute('data-nav')} </a></li>`;
        navbarList.appendChild(newElement);
    }
}
generateNavbarLink();


// Add class 'active' to section when near top of viewport
let navLinks = document.querySelectorAll('.menu__link');

window.addEventListener('scroll', ()=>{
    for(let section of sections){
            if(section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().bottom <= 1550){
                section.classList.add('your-active-class');
                for(let link of navLinks){
                    if(link.getAttribute('data-link') === section.id){
                        link.classList.add('active');
                    }else{
                        link.classList.remove('active');
                    }
                }

            }else{
                section.classList.remove('your-active-class');
            }
    }
})






// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
for(let element of navLinks){
    element.addEventListener('click', (evt) =>{
        evt.preventDefault()
        if(evt.target.dataset.link){
            document.querySelector(`#${evt.target.dataset.link}`).scrollIntoView({block:'center'})
        }
    })
}

// Set sections as active
let goTopBtn = document.querySelector("#goTop");
window.onscroll = function () {
  this.scrollY > 300
    ? (goTopBtn.style["transform"] = "translateY(-1em)")
    : (goTopBtn.style["transform"] = "translate(4em,4em)");
};

goTopBtn.addEventListener('click', function(){
    window.scrollTo(0,0);
})



//responsive menu
let menuIcon = document.getElementById('col-menu');
menuIcon.addEventListener('click',()=>{
    if(navbarList.classList.contains('responsive')){
        navbarList.classList.remove('responsive');
    }else{
        navbarList.classList.add('responsive');
    }
})
