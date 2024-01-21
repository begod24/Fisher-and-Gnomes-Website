window.addEventListener('scroll', e=> {
document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content:'.content'
})

document.getElementById('clickableObject').addEventListener('click', function () {
    // Toggle the 'clicked' class to trigger the animation
    this.classList.toggle('clicked');

})
