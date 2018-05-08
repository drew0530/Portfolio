/* scripts.js */ 
$(document).ready(function() {
    //
    // Side Bar animations
    var btnMenuOpen = document.querySelector('#btnMenuOpen');
    var btnMenuClose = document.querySelector('#btnMenuClose');
    var navbar = document.querySelector('.navbar');
    function animateButton(b) {
        anime.remove(btnMenuOpen);
        if (b){  //show
            anime({
                targets: navbar,
                translateX: {
                   value: [300,0]
                },
                easing: "easeInOutCubic",
                duration:400,
            });
        }else{ //hide
            anime({
                targets: navbar,
                translateX: {
                    value: [0,300]
                },
                easing: "easeInOutCubic",
                duration: 400
            });
        }
    };
    function showButton() { animateButton(true); };
    function hideButton() { animateButton(false); };
    btnMenuOpen.addEventListener('click', hideButton, false);
    btnMenuClose.addEventListener('click', showButton, false);
    
    //
    // General FullPage Animations
    $('#fullpage').fullpage({
        'anchors': ['page1', 'page2', 'page3', 'page4', 'page5'],
        'verticalCentered': true,
        'horizontalCentered': true,
        'showActiveTooltip': true,
        'css3': true,
        'sectionsColor': ['#072142', '#072142', '#072142', '#072142', '#072142'],
        afterRender: function(){
            var showText = anime.timeline({opacity:0});
            var showLines = anime.timeline();
            showLines.add({
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
            showText.add({
                targets: '.title',
                translateX: [-750, 0],
                opacity:[0,1],
                easing: "easeOutQuad",
                duration: 800,
                delay: 250
            });
            var navbar = anime({
                targets: '.navbar',
                translateY: [-50, 0],
                opacity: {
                   value: [0,1],
                   duration: 800
                },
                duration:500,
                delay: 700,
                easing: 'easeInOutCubic'
            });

            // THEN YOU CAN JUST CALL ME LIKE THIS!!!!

        },
        onLeave: function(index, nextIndex, direction){
            var showTitle = anime.timeline({opacity:0});
            var showLines = anime.timeline();
            showLines.add({
                targets: '#s'+nextIndex+' .content__lines line',
                translateX: [-750, 0],
                duration: 800,
                delay:(el,i)=> {
                    return 250 + (i*100);
                },
                easing: 'easeOutQuad'
            });
            showTitle.add({
                targets: '#s'+nextIndex+' .content__title',
                translateX: [-750, 0],
                opacity:[0,1],
                easing: "easeOutQuad",
                duration: 800,
                delay: 250
            });
        }
    });
    
    // Load Parallax Instance
    // var scene = document.getElementById('scene');
    // var parallaxInstance = new Parallax(scene);
});

function menuOpen(){
    var sidebar = document.getElementsByClassName("sidebar")[0];

    sidebar.classList.remove('sidebar--closed');
    sidebar.classList.add('sidebar--open');
    sidebar.style.display = "flex";
}

function menuClose(){
    var sidebar = document.getElementsByClassName("sidebar")[0];
    var hide = function (){
        sidebar.style.display = 'none';
    }

    sidebar.classList.remove('sidebar--open');
    sidebar.classList.add('sidebar--closed');
    setTimeout(hide, 400);
}

function nav(section){
    switch(section){
        case 'home':
            return $.fn.fullpage.moveTo('page1', 0)
        case 'about':
            return $.fn.fullpage.moveTo('page2', 1)
        case 'experience':
            return $.fn.fullpage.moveTo('page3', 2)
        case 'projects':
            return $.fn.fullpage.moveTo('page4', 3)
        case 'contact':
            return $.fn.fullpage.moveTo('page5', 4)
        default:
            break;
    }
}
