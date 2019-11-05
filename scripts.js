document.addEventListener('DOMContentLoaded', function (event) {

    // setTimeout(function () {
    //     $("#loaderBg").fadeOut();
    // }, 2000)
    
    $("#loaderBg").fadeOut();

    // Type Writer
    // array with texts to type in typewriter
    var dataText = ["Programmer.", "Web Developer.", "Designer.", "Student."];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.getElementById("wlcmTW").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 500);
        }
        // check if dataText[i] exists
        else if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);

    //nav bar
    // $('a[href^="#"]').click(function (event) {
    $('.sideNav').click(function (event) {
        var id = $(this).attr("href");
        var target = $(id).offset().top;
        $('html, body').animate({
            scrollTop: target
        }, 500);
        event.preventDefault();
    });

    function getTargetTop(elem) {
        var id = elem.attr("href");
        var offset = 60;
        return $(id).offset().top - offset;
    }


    $(window).scroll(function (e) {
        isSelected($(window).scrollTop())
    });

    var sections = $('.sideNav');

    function isSelected(scrolledTo) {

        var threshold = 100;
        var i;

        for (i = 0; i < sections.length; i++) {
            var section = $(sections[i]);
            var target = getTargetTop(section);

            if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
                sections.removeClass("active");
                section.addClass("active");
            }

        };
    }

    $(function () {
        $("#services-tabs").responsiveTabs({
            animation: 'slide'
        });
    });
});