$(document).ready(function () {
    let main = document.getElementById("window");
    $("main").load("inc/main.html");
    $("#main").click(function () {
        $("main").load("inc/main.html");
        main.classList.remove("minimal")
    });
    $("#referenc").click(function () {
        $("main").load("inc/referenc.html");
        main.classList.remove("minimal")
    });
    $("#contact").click(function () {
        $("main").load("inc/contact.html", function () {
            $("main").fadeIn("slow");
        });
        main.classList.remove("minimal")
    });
});
