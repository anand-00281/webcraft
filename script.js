Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: [
    "./videos1.mp4",
    "./videos2.mp4",
    "./videos3.mp4",
  ],
});

gsap.to(".fleftelem", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect("#images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          console.log(prog);
          setScroll(prog.progress + index);
        },
      });
    });
  },
});
var tl = gsap.timeline()

tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.to("#loader h3",{
    x: -40,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.to("#loader",{
    opacity:0,

})
tl.from("#page1-con h1",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})
tl.to("#loader",{
    display:"none",
})

function cursorEffect(){
  var page1cont = document.querySelector("#page1-con")
var cursor = document.querySelector("#cursor")

page1cont.addEventListener('mousemove',(dets) => {
  gsap.to("#cursor",{
      x:dets.x,
      y:dets.y
  })
})
page1cont.addEventListener('mouseenter',(dets) => {
  gsap.to("#cursor",{
      scale:1,
      opacity:1
  })
})
page1cont.addEventListener('mouseleave',(dets) => {
  gsap.to("#cursor",{
      scale:0,
      opacity:0
  })
})
}
cursorEffect()

document.addEventListener('DOMContentLoaded', () => {
  // Initial animation for footer sections
  gsap.from('.footer-section', {
    duration: 1.2,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // Animation for footer bottom
  gsap.from('.footer-bottom', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.5
  });

  // Animation for company info
  gsap.from('.company-info > *', {
    duration: 0.8,
    x: -30,
    opacity: 0,
    stagger: 0.2,
    ease: 'power2.out',
    delay: 1
  });

  // Animation for social icons
  gsap.from('.social-icons i', {
    duration: 0.6,
    scale: 0,
    opacity: 0,
    stagger: 0.1,
    ease: 'back.out(1.7)',
    delay: 1.5
  });

  // Hover animation for footer links
  const footerLinks = document.querySelectorAll('.footer-section li');
  footerLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        duration: 0.3,
        x: 5,
        color: '#007bff',
        ease: 'power2.out'
      });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        duration: 0.3,
        x: 0,
        color: '#333',
        ease: 'power2.out'
      });
    });
  });

  // Continuous subtle animation for hashtag
  gsap.to('.hashtag', {
    duration: 2,
    y: -5,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1
  });

  // Scroll-triggered animations
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.footer-section h3', {
    scrollTrigger: {
      trigger: 'footer',
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 20,
    opacity: 0,
    stagger: 0.2,
    ease: 'power2.out'
  });
});