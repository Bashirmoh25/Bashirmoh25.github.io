const menuOpen = document.getElementById("open");
const menuClose = document.getElementById("close");
const menuIcons = document.querySelectorAll(".menuIcon");
const navMenu = document.querySelector(".navMenu");
const readButton =document.getElementsByTagName("button");
const screenSize = window.innerWidth || document.documentElement.clientWidth;
let isMenuOpen= false;

/**intial menu state */
if (screenSize>375){
    menuClose.style.display = "none";
    navMenu.style.display = "flex";
    menuOpen.style.display = "none";
}else{
    menuClose.style.display = "none";
    navMenu.style.display = "none";
   
}
/**handle nemu toggle */
function handleReadBtn(){
   
}
readButton[0].addEventListener("click",handleReadBtn);
const handleMenu=()=>{
    if(isMenuOpen){
        menuOpen.style.display="block";
        menuClose.style.display="none";
        navMenu.style.display="none";
        
    }else{
        menuOpen.style.display="none";
        menuClose.style.display="block";
        navMenu.style.display="block";
    }
    /*menuOpen.style.display=isMenuOpen?"none":"block";
    menuClose.style.display=isMenuOpen?"block":"none";
    navMenu.style.display=isMenuOpen?"block":"none";*/
     
    isMenuOpen=!isMenuOpen;
    console.log("event called "+isMenuOpen)
    
}


/****hadle keyboard press */
menuIcons.forEach((icon)=>{
    icon.addEventListener("click",handleMenu);
    icon.setAttribute("tabindex",0);
    icon.addEventListener("keydown",(e)=>{
        if(e.key==="Enter"||e.key===""){
            handleMenu();
            console.log('keey ppresssed')
        }
    })
})

/***handle menu resize */
window.addEventListener("resize", () => {
    const newSize = window.innerWidth || document.documentElement.clientWidth;
    if (newSize > 375) {
        menuClose.style.display = "none";
        navMenu.style.display = "flex";
        menuOpen.style.display = "none";
    } else {
        menuClose.style.display = "none";
        navMenu.style.display = "none";
        menuOpen.style.display = "block";
    }
})