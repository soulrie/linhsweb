
(function () {
    // Set properties
    TweenMax.defaultEase = Power2.easeOut;
    TweenMax.set('.bp__ground', {
        transformOrigin: 'center bottom',
        scaleX: 0.6,
        scaleY: 2
    });
    TweenMax.set('.bp__flower--b', {
        transformOrigin: 'center',
        scale: 0.5
    });
    TweenMax.set('.bp__flower--02-a, .bp__flower--05-a, .bp__flower--07-a', {
        transformOrigin: 'center',
        scale: 0.8
    });

    // Positioning flower elements
    TweenMax.set('.bp__flower--02-a', { x: 43, y: -34 });
    TweenMax.set('.bp__flower--02-b', { x: 43, y: -34 });
    TweenMax.set('.bp__flower--03-a', { x: 170, y: 16 });
    TweenMax.set('.bp__flower--03-b', { x: 170, y: 16 });
    TweenMax.set('.bp__flower--04-a', { x: 71, y: 111 });
    TweenMax.set('.bp__flower--04-b', { x: 71, y: 111 });
    TweenMax.set('.bp__flower--05-a', { x: -90, y: 87 });
    TweenMax.set('.bp__flower--05-b', { x: -90, y: 87 });
    TweenMax.set('.bp__flower--06-a', { x: -143, y: 24 });
    TweenMax.set('.bp__flower--06-b', { x: -143, y: 24 });
    TweenMax.set('.bp__flower--07-a', { x: -32, y: 4 });
    TweenMax.set('.bp__flower--07-b', { x: -32, y: 4 });

    // Build stalk object
    let stalk = {};

    document.querySelectorAll('.bp__stalk').forEach(el => {
        const length = el.getTotalLength();
        stalk[el.getAttribute('data-n')] = { el, length };
        el.style.strokeDasharray = length;
        el.style.strokeDashoffset = length;
    });

    // Define animation objects
    const flowerAAnimation = {
        morphSVG: '#bp__flower-shape',
        opacity: 1,
        ease: Elastic.easeOut
    };
    const flowerBAnimation = {
        scale: 1,
        opacity: 1,
        ease: Elastic.easeOut
    };
    const flowerB2Animation = {
        scale: 0.8,
        opacity: 1,
        ease: Elastic.easeOut
    };

    // Animation timeline
    new TimelineMax({ repeat: -1, repeatDelay: 2 })
        .to('.bp__ground', 1, { scale: 1, ease: Back.easeOut.config(3) })
        .to(stalk['01-a'].el, 4, { strokeDashoffset: 0 }, '-=0.2')
        .to(stalk['01-b'].el, 3, { strokeDashoffset: 0 }, '-=3')
        .to(stalk['01-c'].el, 3, { strokeDashoffset: 0 }, '-=3')
        .to(stalk['02-a'].el, 4, { strokeDashoffset: 0 }, '-=3.8')
        .to(stalk['02-b'].el, 3, { strokeDashoffset: 0 }, '-=3.1')
        .to(stalk['03-a'].el, 4, { strokeDashoffset: 0 }, '-=4')
        .to(stalk['03-b'].el, 3, { strokeDashoffset: 0 }, '-=3')
        .to('.bp__flower--01-a', 2, flowerAAnimation, '-=1.5')
        .to('.bp__flower--01-b', 2.2, flowerBAnimation, '-=1.9')
        .to('.bp__flower--02-a', 2, flowerAAnimation, '-=2.1')
        .to('.bp__flower--02-b', 2.2, flowerB2Animation, '-=2.1')
        .to('.bp__flower--03-a', 2, flowerAAnimation, '-=2.1')
        .to('.bp__flower--03-b', 2.2, flowerBAnimation, '-=2.1')
        .to('.bp__flower--04-a', 2, flowerAAnimation, '-=2.1')
        .to('.bp__flower--04-b', 2.2, flowerBAnimation, '-=2.1')
        .to('.bp__flower--05-a', 2, flowerAAnimation, '-=2.1')
        .to('.bp__flower--05-b', 2.2, flowerB2Animation, '-=2.1')
        .to('.bp__flower--06-a', 2, flowerAAnimation, '-=2.1')
        .to('.bp__flower--06-b', 2.2, flowerBAnimation, '-=2.1')
        .to('.bp__flower--07-a', 2, flowerAAnimation, '-=2.1')
        .to('.bp__flower--07-b', 2.2, flowerB2Animation, '-=2.1')
        .timeScale(2); // Speed up the animation
})();