gsap.timeline({
    scrollTrigger: {
        trigger: ".box1",
        start: "top",
        end: "bottom top",
        markers: false,
        scrub: true,
        pin: true
    }
})
.from(".box1 .img_1", { y: innerHeight * -1 })
.from(".box1 .img_2", { y: innerHeight * 1 })

gsap.timeline({
    scrollTrigger: {
        trigger: ".box2",
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: true,
        pin: true
    }
})
.from(".box.box2", { opacity: 0 })
.from(".box.box2 .text_box_1", { y: innerHeight * -1 })
.from(".box2 .img_1", { y: innerHeight * -1 })
.from(".box2 .img_2", { y: innerHeight * 1 })

gsap.timeline({
    scrollTrigger: {
        trigger: ".box3",
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: true,
        pin: true
    }
})
.from(".box.box3", { opacity: 0 })
.from(".box.box3 .text_box_1", { y: innerHeight * -1 })
.from(".box3 .img_1", { y: innerHeight * -1 })
.from(".box3 .img_2", { y: innerHeight * 1 })

gsap.timeline({
    scrollTrigger: {
        trigger: ".box4",
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: true,
        pin: true
    }
})
.from(".box.box4", { opacity: 0 })
.from(".box.box4 .text_box_1", { y: innerHeight * 1 })
.from(".box4 .img_1", { y: innerHeight * -1 })

gsap.timeline({
    scrollTrigger: {
        trigger: ".box5",
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: true,
        pin: true
    }
})
.from(".box.box5", { opacity: 0 })
.from(".box.box5 .text_box_1", { y: innerHeight * -1 })
.from(".box5 .img_1", { y: innerHeight * -1 })
.from(".box5 .img_2", { y: innerHeight * 1 })

gsap.timeline({
    scrollTrigger: {
        trigger: ".box6",
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: true,
        pin: true
    }
})
.from(".box.box6", { opacity: 0 })
.from(".box.box6 .text_box_1", { y: innerHeight * 1 })
.from(".box6 .img_1", { y: innerHeight * 1 })
.from(".box6 .img_2", { y: innerHeight * -1 })

gsap.timeline({
    scrollTrigger: {
        trigger: ".box7",
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: true,
        pin: true
    }
})
.from(".box.box7", { opacity: 0 })
.from(".box.box7 .text_box_1", { y: innerHeight * -1 })
.from(".box7 .img_1", { y: innerHeight * 1 })
.from(".box7 .img_2", { y: innerHeight * -1 })


