const biblio = [
    {
        id:1,
        title:'Az oroszlán, a boszorkány és a ruhásszekrény',
        author: 'C.S. Lewis',
        publication: 1950,
        image: '../pics/narnia2.jpg',
        description:'Narnia sztori',
        rating: 4
    },
    {
        title: 'Aliens versus Predator: Háború',
        author: 'Stephani Perry',
        publication: 1999,
        description: 'AVP sztori',
        rating: 5
    },
    {
        title: 'Harry Potter és a bölcsek köve',
        author: 'J. K. Rowling',
        publication: 1997,
        image: 'pics/hp1.jpg',
        description: 'HP sztori',
        rating: 5
    }
];


// kiszámolja, hogy hány könyv van.
let booksNumber = biblio.length;


// könyv osztályozása

/*var rating = "",
    stars;
for (let star = 1; star <= bookCatalog.myBook1.rating; star++) {
    rating = rating + "✰";
}
*/

//könyvek kiiratása

var dolog = document.getElementById("dolog");
var div = document.createElement("div");

// dolog.innerHTML = "Valami";


for (let x=0; x <= booksNumber; x++){
    dolog.innerHTML = x;
};
