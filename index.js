let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let cancel = document.getElementById("cancel")
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx bx-x')
//     navbar.classList.toggle('active');
// };
let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if (top >= offset && top <offset +height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelectorAll('header nav a[href*=' + id +']').classList.add('active')
            });
        }
    });

    /*============= sticky nav bar============= */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx bx-x')
    navbar.classList.remove('active');
};




menuIcon.onclick = function(){
navbar.style.display = "block";

if(menuIcon == menuIcon){
menuIcon.style.display= "none";
cancel.style.display= "flex";
navbar.style.transition = "3s";
}
}

cancel.onclick = function(){

navbar.style.display = "none";
navbar.style.transition = "3s";

if(cancel == cancel){
    menuIcon.style.display = "flex";
    cancel.style.display = "none";
}

}