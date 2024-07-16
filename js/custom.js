$(function () {


    const tt = 0.3;

    const tl = gsap.timeline();

    tl.from('.intro .de01', {
        scale: 0.5,
        opacity: 0,
        duration: tt * 1,
        // ease: 'bounce'
    })
    tl.from('.intro .de02', {
        scale: 0.5,
        opacity: 0,
        duration: tt * 1,
        // ease: 'bounce'
    })
    tl.from('.intro .de03', {
        scale: 0.5,
        opacity: 0,
        duration: tt * 1,
        // ease: 'bounce'
    })
    tl.from('.intro .de04', {
        scale: 0.5,
        opacity: 0,
        duration: tt * 1,
        // ease: 'bounce'
    })
    tl.from('.intro .de06', {
        scale: 0.5,
        opacity: 0,
        duration: tt * 1,
        // ease: 'bounce'
    })
    tl.from('.intro .de05', {
        scale: 0.5,
        opacity: 0,
        duration: tt * 1,
        // ease: 'bounce'
    })

    tl.from('.intro h2', {
        scale: 0.5,
        opacity: 0,
        duration: tt * 3,
    })


    tl.from('.intro .title01', {
        opacity: 0,
        duration: tt * 3,
        // ease: 'bounce'
    })

    tl.from('.intro .title02', {
        opacity: 0,
        duration: tt * 3,
    })

    tl.from('.intro .title03', {
        opacity: 0,
        duration: tt * 3,
    })

    tl.from('.intro .title04', {
        opacity: 0,
        duration: tt * 3,
    })

    tl.from('.intro .title05', {
        opacity: 0,
        duration: tt * 3,
    })

    tl.from('.intro .title06', {
        scale: 2,
        opacity: 0,
        duration: tt * 4,
    })





    $('.content').fullpage({
        scrollOverflow: false,
    });





})