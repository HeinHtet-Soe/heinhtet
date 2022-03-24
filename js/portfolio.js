window.onscroll = function() { navbarFix() };

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function navbarFix() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
$(document).ready(function() {
    $('.progress-value > span').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1500,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

$(document).ready(function() {

    $(".nav-link").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
});