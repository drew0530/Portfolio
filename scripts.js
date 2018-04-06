/* scripts.js */ 


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
                duration: 600,
                delay:(el,i)=> {
                    return 250 + (i*100);
                },
                easing: 'easeOutCubic'
            });
            titleText.add({
                targets: '.title',
                translateX: [-750, 0],
                opacity:[0,1],
                easing: "easeOutSine",
                duration: 600,
                delay: 250
            });
        },
        onLeave: function(index, nextIndex, direction){
            var titleText = anime.timeline({opacity:0});
            var lineDrawing = anime.timeline();
            lineDrawing.add({
                targets: '#section'+nextIndex+' .lines line',
                translateX: [-750, 0],
                duration: 600,
                delay:(el,i)=> {
                    return 250 + (i*100);
                },
                easing: 'easeOutCubic'
            });
            titleText.add({
                targets: '#section'+nextIndex+' .title',
                translateX: [-750, 0],
                opacity:[0,1],
                easing: "easeOutSine",
                duration: 600,
                delay: 250
            });
        }
    });
    // Load Parallax Instance
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
});

