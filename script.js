var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 90%",
        end: "0% 50%",
        scrub: true,
        // markers: true,
    }
});

tl.to("#fanta", {
    top: "130%",
    left: "5.5%"
},"lemon_half")

tl.to("#lemon_half",{
    top:"170%",
    left:"24%"
},"lemon_half")

tl.to("#orange_fruit",{
    top:"165%",
    left:"70%"

},"lemon_half")
tl.to("#leaf1",{
    top:"100%",
    rotate:"130deg",
    left:"70%"

},"lemon_half")
tl.to("#leaf2",{
    top:"115%",
    rotate:"130deg",
    left:"0%"

},"lemon_half")

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 90%",
        end: "20% 50%",
        scrub: true,
        // markers: true,
    }
});

tl.from("#lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')

tl.from("#sprite",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl.from("#lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')

tl.from("#cococola",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl.to("#lemon_half",{
    width:"18%",
    left: "41%",
    top: "208%"
}, 'ca')

tl.to("#fanta",{
    width:"35%",
    top: "217.6%",
    left: "32.5%",
}, 'ca')
