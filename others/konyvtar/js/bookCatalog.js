var bookCatalog = {
    'myBook1': {
        'title': 'Az oroszlán, a boszorkány és a ruhásszekrény',
        'author': 'C.S. Lewis',
        'year of publication': 1950,
        'image': '../pics/narnia2.jpg',
        'has been read': true,
        'main characters': ['Lucy Pevensie', 'Peter Pevensie', 'Edmound Pevensie', 'Susan Pevensie'],
        'quotes': {
            'p71': 'Akit egyszer Namiában királlyá vagy királynővé koronáztak, az örökké viselni fogja.',
            'p72': 'Tudjátok, ő végső soron vadon élő állat. Nem egy szelídített oroszlán.'
        },
        'borrowed by': ['Viki'],
        'rating': 4,
    },
    'myBook2': {
        'title': 'Aliens versus Predator: Háború',
        'author': 'Stephani Perry',
        'year of publication': 1999,
        'image': 'pics/avpWar.jpg',
        'has been read': true,
        'main characters': ['Machiko Noguchi'],
        'quotes': {
            'p16': 'nincs idézet'
        },
        'borrowed by': ['Peti'],
        'rating': 5,
    },
    'myBook3': {
        'title': 'Harry Potter és a bölcsek köve',
        'author': 'J. K. Rowling',
        'year of publication': 1997,
        'image': 'pics/hp1.jpg',
        'has been read': true,
        'main characters': ['Harry Potter', 'Ron Weasley', 'Hermione Granger'],
        'quotes': {
            'p239': 'Átkozottként élni rosszabb, mint meghalni!',
            'p240': 'Meghalni csak emberek tudnak, de benne nem volt már semmi emberség.'
        },
        'borrowed by': null,
        'rating': 5,
    }
};


var rating = "",
    stars;
for (let star = 1; star <= bookCatalog.myBook1.rating; star++) {
    rating = rating + "✰";
}



//document.getElementById("kiir").innerHTML = bookCatalog.myBook1.title + "</b><br><p>" + bookCatalog.myBook1.author + "</p>" + "Kiadás éve: " + bookCatalog.myBook1['year of publication'];

//document.getElementById("front").innerHTML = "Szereplők:<br>" + bookCatalog.myBook1['main characters'].join("," + "<br>") + "<br><p>" + "Idézetek:<br>" + bookCatalog.myBook1.quotes.p71 + "</p><br>" + "Értékelés:<br>" + rating;

$(document).ready(function () {
    $(".konyvek").css('background-image', 'url("pics/narnia2.jpg")');
    $("#front").prepend("<b>" + bookCatalog.myBook1.title + "</b>" + "<p>" + bookCatalog.myBook1.author + "</p>" + "Kiadás éve: " + bookCatalog.myBook1['year of publication']);
    $("#side").append("Szereplők:<br>" + bookCatalog.myBook1['main characters'].join("," + "<br>") + "<br><p>" + "Idézetek:<br>" + bookCatalog.myBook1.quotes.p71 + "</p><br>" + "Értékelés:<br>" + rating);
    $(".konyvek").mouseenter(function () {
        $("#front").slideToggle(200)
    });
    $(".konyvek").mouseleave(function () {
        $("#front").slideUp(0)
    });
    $("button").click(function () {
        $("#side").slideDown(200);
    });
    $(".close").click(function () {
        $("#side").slideUp(0);
    });
});
