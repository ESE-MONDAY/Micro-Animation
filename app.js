const tl = gsap.timeline({ defaults:
     {
         ease: "power2.easeOut",
         duration: 0.35,
         } });

gsap.set(".feather", { scale: 0, transformOrigin: "center" });

const home = document.querySelector(".home");
const notifications = document.querySelector(".notification");
gsap.set(".wave", {opacity: 0, transformOrigin: "bottom"})

home.addEventListener("click", () => {
    tl.fromTo(".home-svg", { scale: 1 }, { scale: 0.9 , yoyo: true, repeat: 1,  });
   
    tl.fromTo(".feather", { y: -5, scale: 0 }, { y: 20, scale: 1.2, duration: 1, stagger: 0.5}, )
    gsap.fromTo(".right-feather", { x: 0 }, { x: 5 });
    gsap.fromTo(".left-feather", {x:0}, {x:-5},)
   
});


notifications.addEventListener("click", () => {
    gsap.fromTo(".bell", { rotation : -7 , transformOrigin: "top center"}, { rotation: 0 ,duration: 1.5,  ease: "elastic.out(3, 0.2)"  });
    gsap.fromTo(".ringer", { rotation : -5,  x:0.5, transformOrigin: "top center"}, { rotation: 0 , x: 0,duration: 1,  ease: "elastic.out(3, 0.2)"  });
    gsap.fromTo(".wave", {scale: 0, opacity: 1}, {scale:1.2, opacity: 0, duration: 1})
})



const  messages = document.querySelector(".messages")


gsap.set(".flap", {transformOrigin: "top"})
messages.addEventListener("click", () =>{
    tl.fromTo(".messages-svg", {scale:1}, {scale:0.9})
    tl.fromTo(".flap", {scale: 1}, {scale: -1}, "<50%")
    tl.fromTo(".messages-svg", {scale:0.9}, {scale:1}, "<50%")
    tl.fromTo(".note", {y: 0, opacity: 1}, {opacity:0 , y: -30, duration: 0.75})
    tl.to(".flap", {scale: 1}, "<50%")


})