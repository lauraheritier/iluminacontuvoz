$(document).ready(function() {    
    AOS.init();
    $(".nav-item").on("click", function() {
        $(this).addClass("active");
        $(this).siblings(".nav-item").removeClass("active");
    });
    $(".small-menu-container .nav-link").on("click", function() {
        $("input").prop("checked", false);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    
    $("#toTop").click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
     });
});