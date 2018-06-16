$(function() {
    $(".mobile-nav").click(function() {
        $(this).toggleClass('visible');
        $(".menu-list").fadeToggle();
    })
})