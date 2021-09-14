const navSlide= function(){
    const burger= document.querySelector('#burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click',function(){
        nav.classList.toggle('nav-active');
    });
}
navSlide();