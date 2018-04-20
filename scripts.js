/* scripts.js */ 

$(document).ready(function() {
    // Load FullPage Instance

    //USE ME TO ENCAPSULATE ALL ANIMATION STUFF!!
    // var buttonEl = document.querySelector('#menu');

    // function animateButton(scale, duration, elasticity) {
    //   anime.remove(buttonEl);
    //   anime({
    //     targets: buttonEl,
    //     scale: scale,
    //     duration: duration,
    //     elasticity: elasticity
    //   });
    // }
    // function enterButton() { animateButton(1.2, 800, 400) };
    // function leaveButton() { animateButton(1.0, 600, 300) };
    
    $('#fullpage').fullpage({
        'anchors': ['page1', 'page2', 'page3', 'page4', 'page5'],
        'verticalCentered': true,
        'horizontalCentered': true,
        'showActiveTooltip': true,
        'css3': true,
        'sectionsColor': ['#072142', '#072142', '#072142', '#072142', '#072142'],
        afterRender: function(){
            var titleText = anime.timeline({opacity:0});
            var lineDrawing = anime.timeline();
            lineDrawing.add({
                targets: '.lines line',
                // strokeDashoffset: {
                //     value: [anime.setDashoffset, 0],
                //     duration: 600,
                //     delay: 250,
                //     easing: 'easeOutSine'
                // }
                translateX: [-750, 0],
                duration: 800,
                delay:(el,i)=> {
                    return 250 + (i*100);
                },
                easing: 'easeOutQuad'
            });
            titleText.add({
                targets: '.title',
                translateX: [-750, 0],
                opacity:[0,1],
                easing: "easeOutQuad",
                duration: 800,
                delay: 250
            });
            var navbar = anime({
                targets: '#navbar',
                translateY: [-50, 0],
                opacity: {
                   value: [0,1],
                   duration: 800
                },
                duration:500,
                delay: 700,
                easing: 'easeInOutCubic'
            })

            // THEN YOU CAN JUST CALL ME LIKE THIS!!!!
            // buttonEl.addEventListener('mouseenter', enterButton, false);
            // buttonEl.addEventListener('mouseleave', leaveButton, false);
        },
        onLeave: function(index, nextIndex, direction){
            var titleText = anime.timeline({opacity:0});
            var lineDrawing = anime.timeline();
            lineDrawing.add({
                targets: '#section'+nextIndex+' .lines line',
                translateX: [-750, 0],
                duration: 800,
                delay:(el,i)=> {
                    return 250 + (i*100);
                },
                easing: 'easeOutQuad'
            });
            titleText.add({
                targets: '#section'+nextIndex+' .title',
                translateX: [-750, 0],
                opacity:[0,1],
                easing: "easeOutQuad",
                duration: 800,
                delay: 250
            });
        }
    });
    
    // Load Parallax Instance
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
});

