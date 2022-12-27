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
 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//nav variable
const navigation = document.getElementById("navbar__list");
//Sectiona variable
const sections = document.querySelectorAll("Section");
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
const navBuilder =()=>{
  let navUI ='';
  //section loop
    sections.forEach(section =>{
    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;

    navUI += `<li><a class ="menu__link" href ="#${sectionID}" >${sectionDataNav}</a></li>`

  });
  navigation.innerHTML = navUI;
}
navBuilder();
/**
 * End Main Functions
 * Begin Events
 * 
 */
// Add class 'active' to section when near top of viewport

const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};
// removing the active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText ="linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
    sectionid = section.id.slice(7,8) -1;
    navigation.childNodes[sectionid].style.cssText="white;";
   
};
// adding the active class
const addActive = (conditional,section) =>{
    if (conditional){
           section.classList.add('your-active-class');
           section.style.cssText="background-color:rgb(33, 203, 241);";
           sectionid = section.id.slice(7,8) -1;
           navigation.childNodes[sectionid].style.cssText="background-color:rgb(33, 203, 241);";
    };
};
// section activation function 
const sectionActivation = () =>{
    sections.forEach(section =>{
        const elementOffset = offset(section);
       
        inviewport = () => elementOffset < 150 && elementOffset >=-150;
        removeActive(section);
        addActive( inviewport(),section);
    }); 

     
};    
window.addEventListener(`scroll`,sectionActivation);
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
const scrolling = () =>{
    const links = document.querySelectorAll('navbar__menu a');
    links.forEach(link =>{
        link.addEventListener("click",()=>{
            for(i =0 ;i<sections;i++){
                sections[i].addEventListener("click",sectionScroll(link));
            };
        });
    });
};
scrolling();
// Set sections as active
let span = document.querySelector(".up");
window.onscroll = function(){
    if(this.scrollY>=2500){
        span.classList.add("show");
    }else{
        span.classList.remove("show");
    }
};
span.onclick =function(){
    window.scrollTo({
        top: 0,
       behavior:"smooth",
    });
};

