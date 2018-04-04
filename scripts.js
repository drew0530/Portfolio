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
        onLeave: function(){
            
        },
        afterRender: function(){
            var nameText = anime.timeline();
            var lineDrawing = anime.timeline();
            lineDrawing.add({
                targets: '#lines line',
                strokeDashoffset: {
                    value: [anime.setDashoffset, 0],
                    duration: 600,
                    delay: 250,
                    easing: 'easeOutSine'
                }
            })
            nameText.add({
                targets: '#name',
                translateX: [1],
                duration: 600,
                delay: 250,
                easing: 'easeOutSine'
            })
        }
    });
    // Load Parallax Instance
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);



    



});

