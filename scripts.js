/* scripts.js */ 
$(document).ready(function() {
    //USE ME TO ENCAPSULATE ALL ANIMATION STUFF!!
    var btnMenuOpen = document.querySelector('#btnMenuOpen');
    var btnMenuClose = document.querySelector('#btnMenuClose');
    function animateButton(b) {
        anime.remove(btnMenuOpen);
        if (b){  //show
            console.log('show')
            anime({
                targets: btnMenuOpen,
                opacity: {
                   value: [0,1],
                   duration: 800
                },
                duration:800,
                delay: 200,
            });
        }else{ //hide
            console.log('hide')
            anime({
                targets: btnMenuOpen,
                opacity: { value: [1,0], duration: 300 },
                duration: 300
            });
        }
    };
    function showButton() { animateButton(true); };
    function hideButton() { animateButton(false); };
    btnMenuOpen.addEventListener('click', hideButton, false);
    btnMenuClose.addEventListener('click', showButton, false);

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
            });

            // THEN YOU CAN JUST CALL ME LIKE THIS!!!!

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
    // var scene = document.getElementById('scene');
    // var parallaxInstance = new Parallax(scene);
});

function menuOpen(){
    var sidebar = document.getElementById("sidebar");

    sidebar.classList.remove('closed');
    sidebar.classList.add('open');
    sidebar.style.display = "flex";
}

function menuClose(){
    var sidebar = document.getElementById("sidebar");
    var hide = function (){
        sidebar.style.display = 'none';
    }

    sidebar.classList.remove('open');
    sidebar.classList.add('closed');
    setTimeout(hide, 400);
}

function nav(section){
    switch(section){
        case 'about':

        case 'experience':

        case 'projects':

        case 'contact':
    }
}

