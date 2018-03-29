/* scripts.js */ 
//Andrew Williamson

$(document).ready(function() {
    // Load FullPage Instance
    $('#fullpage').fullpage({
        'anchors': ['page1', 'page2', 'page3', 'page4', 'page5'],
        'lockanchors': true,
        'verticalCentered': true,
        'horizontalCentered': true,
        'showActiveTooltip': true,
        'css3': true,
        'sectionsColor': ['#072142', '#072142', '#072142', '#072142', '#072142'],
        // 'navigation': true,
        // 'navigationPosition': 'left'
    });
    // Load Parallax Instance
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    var lineDrawing = anime({
        targets: '#lineDrawing .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function (el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });
});

