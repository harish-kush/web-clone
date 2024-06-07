const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var tl = gsap.timeline()
tl.to("#yellow",{
    top:"-100%",
    delay:0.5,
    duration:1,
    ease:"expo.out"
})
tl.from("#loader video",{
    top:"100%",
    delay:0,
    duration:0.5,
    ease:"expo.out"
})
tl.to("#loader video",{
    top:"-100%",
    delay:0,
    duration:0.5,
    ease:"expo.out"
})
tl.to("#loader h1",{
    color:"black",
    delay:0
})
tl.to("#loader",{
    opacity:0
})
var elems = document.querySelectorAll(".elem")
var page2= document.querySelector("#page2")
elems.forEach(function (ele) {
    ele.addEventListener("mousemove",()=>{
        var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})`
    })
})
elems.forEach(function (ele) {
    ele.addEventListener("mouseleave",()=>{
        var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundColor = "black"
    })
})