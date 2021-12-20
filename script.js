const tl = gsap.timeline({ paused: true })

let home_circle = document.querySelector('.home__circle');

tl.to(home_circle, {
    duration: 0.5, translateY: 0
})

home_circle.addEventListener('click', () => {
    tl.play();
    document.querySelector('.home__circle__text').style.marginBottom = 0
})