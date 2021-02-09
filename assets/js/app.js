
//Menu Toggle
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header");
const menuToggle = document.querySelector(".menu-toggle");

navMenu.addEventListener("click", function(){
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});

menuToggle.addEventListener("click", function(){
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});

//ScrollEffect
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Navigation Active
const headerContent = document.getElementById("header-content");
const navActive = headerContent.getElementsByClassName("nav-item");

for(var i = 0; i < navActive.length; i++){

    navActive[i].addEventListener("click", function(){

       const currentActive = document.getElementsByClassName("nav-active");
       
       currentActive[0].className = currentActive[0].className.replace(" nav-active");

       this.className += " nav-active";
    });
}


const modalView = document.getElementById('modalView');
const buttonModal = document.getElementById('buttonModal');
const closed = document.getElementById('closed');


$('#buttonModal').click(function(){
    modalView.style.display = "block";
});

$('#closed').click(function(){
    modalView.style.display = "none";
})



