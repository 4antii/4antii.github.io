$(document).ready(function () {
    $(".nav-list__burger").on("click",function () {
        $(".nav-list__nav-element").toggleClass("nav-list__nav-element--open");
        $(".nav").toggleClass("nav--opened");
    })

    $(".nav__cross").on("click",function () {
        console.log("clicked");
        console.log($(".nav-list__burger"));
        $(".nav-list__nav-element").toggleClass("nav-list__nav-element--open");
        $(".nav").toggleClass("nav--opened");
    })
});
