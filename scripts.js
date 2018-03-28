/* scripts.js */ 
//Andrew Williamson


$(document).ready(function() {
    $('#fullpage').fullpage({
        'anchors': ['page1', 'page2', 'page3', 'page4', 'page5'],
        'lockanchors': true,
        'verticalCentered': true,
        'horizontalCentered': true,
        'showActiveTooltip': true,
        'css3': true,
        'sectionsColor': ['#102444', '#102444', '#0A4138', '#8f3985', '#a675a1']
    });
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
});

