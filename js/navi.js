$(document).ready(function () {
    var navButton = document.getElementById('nav-button');
    var navDrawer = document.getElementById('nav-main');
    var overlay = document.querySelector('.overlay');
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navButtonHeight = $('#nav-button').outerHeight();
    
    navButton.addEventListener('click', function () {
        navDrawer.classList.toggle('open');
        navButton.classList.toggle('open');
        overlay.classList.toggle('visible');
    });
    
    // Hide Header on scroll down
    $(window).scroll(function (event){
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            handleScroll();
            didScroll = false;
        }
    }, 250);

    function handleScroll () {
        var scrollTop = $(this).scrollTop();
        
        if (Math.abs(lastScrollTop - scrollTop) <= delta)
            return;
        if ($('#nav-button').hasClass('open'))
            return;

        // Hide nav button on scroll down, show on scroll up
        if (scrollTop > lastScrollTop && scrollTop > navButtonHeight){
            navButton.classList.add('hidden');
        } else if (scrollTop + $(window).height() < $(document).height()) {
            navButton.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    }

    
});