let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        console.log();
        if(top >= offset && top <offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })
        }
    })

    let header = document.querySelector('header');
    console.log(window.scrollY);
    header.classList.toggle('sticky',window.scrollY > 100);

    
    // remove toggle icon and navbar when click nav links
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}



// toggle navbar icon
let menuIcon=document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// about read more
let readMore = document.querySelector('.about-btn');
let skills = document.querySelector('.skill-bar');
let education = document.querySelector('.education-box');
readMore.onclick = () =>{
    skills.classList.toggle('show');
    education.classList.toggle('show');
    if(readMore.innerHTML=='Read More')
        readMore.innerHTML="Read Less"
    else
        readMore.innerHTML="Read More";
}

// show/hide Experiance-box
let work=document.querySelector('#exp-work');
let exp_list1=document.querySelector('.exp-list1');
work.onmouseenter = () =>{
    exp_list1.classList.toggle('view');
}
work.onmouseleave = () =>{
    exp_list1.classList.toggle('view');
}

let intership=document.querySelector('#exp-internship');
let exp_list2=document.querySelector('.exp-list2');
intership.onmouseenter = () =>{
    exp_list2.classList.toggle('view');
}
intership.onmouseleave = () =>{
    exp_list2.classList.toggle('view');
}

let volunteer=document.querySelector('#exp-volunteer');
let exp_list3=document.querySelector('.exp-list3');
volunteer.onmouseenter = () =>{
    exp_list3.classList.toggle('view');
}
volunteer.onmouseleave = () =>{
    exp_list3.classList.toggle('view');
}

// Scroll Reveal
ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:100
    
}); 

ScrollReveal().reveal('.home-content, .heading' , {origin:'top'});
ScrollReveal().reveal('.home-img, .contact form' , {origin:'bottom'});
ScrollReveal().reveal('.about-img' , {origin:'left'});

