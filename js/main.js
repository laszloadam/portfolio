$(document).ready(function () {
    $("main").load("inc/main.html");
    $("#main").click(function () {
        $("main").load("inc/main.html");
    });
    $("#referenc").click(function () {
        $("main").load("inc/referenc.html");
    });
    $("#contact").click(function () {
        $("main").load("inc/contact.html", function () {
            $("main").fadeIn("slow");
        });
    });
});
