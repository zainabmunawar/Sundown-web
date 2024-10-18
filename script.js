function tilesAnimation(){
    let fixed = document.querySelector('.fixed-img');
console.log(fixed);
let con = document.querySelector('.tile-container');
con.addEventListener('mouseenter',function(){
    fixed.style.display = "block"
}) 
con.addEventListener('mouseleave',function(){
    fixed.style.display = "none"
}) 
let tiles = document.querySelectorAll(".tile");
tiles.forEach(function(e){
    e.addEventListener('mouseenter',function(){
    let image = e.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`
})
})
}

function swiperAnimation(){
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 70,
  });
}



function menuAnimation(){
    let menu = document.querySelector('.menu h3');
let scr = document.querySelector('.responsive');
let navImg = document.querySelector(".navbar img");
var flag = 0;
menu.addEventListener("click", function () {
    if(flag == 0){
        scr.style.top = 0
        navImg.style.opacity = 0
        flag = 1
    }else {
        scr.style.top = '-100%'
        navImg.style.opacity = 1
        flag = 0
    }

})
}


function loaderAnimation(){
let loader = document.querySelector('.loader')
setTimeout(function(){
    loader.style.top = "-100%"
},4000)
}


tilesAnimation();
swiperAnimation();
menuAnimation();
loaderAnimation();