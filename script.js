


var tl = gsap.timeline();
// tl.to(".bike", {
//     x: 1200,
//     duration: 5,
//     repeat: -1
// })




tl.from("#delovery-boy", {
    opacity: 0,
    scale: 0,
    stagger: 1,
    scrollTrigger: {
        trigger: "#delivery-boy",
        scroller: "body",
        start: "top 40%",
        end: "top 30%",
        scrub: 2
    }

})


gsap.from(".hero-banner", {
    opacity: 0,
    scale: 0,
    stagger: 1,
    scrollTrigger: {
        trigger: ".hero-banner",
        scroller: "body",
        start: "top 40%",
        end: "top 30%",
        scrub: 2
    }
})



tl.from(".food-menu", {
    scale: 0,
    opacity: 0,
    duration: 4,
    delay: 0.2,
    stagger: 3,

    scrollTrigger: {
        trigger: ".food-menu",
        scroller: "body",
        start: "center 70%",
        end: " center 20%",
        scrub: 2
    }
})


tl.from("#about-banner", {
    scale: 0,
    opacity: 0,
    duration: 4,
    delay: 0.2,
    stagger: 1,
    rotate: 360,

    scrollTrigger: {
        trigger: "#about-banner",
        scroller: "body",
        start: "center 30%",
        end: "center 30%",
        scrub: 2
    }
})

tl.from("#card-imgs", {
    scale: 0,
    opacity: 0,
    duration: 4,
    delay: 0.5,
    stagger: 3,

    scrollTrigger: {
        trigger: "#card-imgs",
        scroller: "body",
        start: "top 30%",
        end: "top 30%",
        scrub: 2
    }
})

tl.from("#hero-banner", {
    scale: 0,
    duration: 2,
    opacity: 0,
    duration: 3,
    delay: 0.5,
    stagger: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: "#hero-banner",
        scroller: "body",
        start: " center 10%",
        end: " center 30%",
        scrub: 2
    }
})



// function changeImg() {

//     document.getElementById("bike").src = "./images/delivered.png"

// }
// setTimeout(changeImg, 5500)

// clearInterval()
