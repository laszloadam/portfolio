const biblio = [
    {
        id:1,
        title:'Az oroszlán, a boszorkány és a ruhásszekrény',
        author: 'C.S. Lewis',
        publication: 1950,
        image: '../konyvtar/pics/narnia2.jpg',
        description:'Narnia sztori',
        rating: 4
    },
    {
        id:2,
        title: 'Aliens versus Predator: Háború',
        author: 'Stephani Perry',
        publication: 1999,
        image: '../konyvtar/pics/avpWar.jpg',
        description: 'AVP sztori',
        rating: 5
    },
    {
        id:3,
        title: 'Harry Potter és a bölcsek köve',
        author: 'J. K. Rowling',
        publication: 1997,
        image: '../konyvtar/pics/hp1.jpg',
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

let dolog = document.getElementById("dolog");


for (let x=0; x <= booksNumber-1; x++){
    let main = document.getElementById("main");
    let makeDiv = document.createElement("DIV");
    makeDiv.classList.add('div1');
    let subDiv = document.createElement("DIV");
    subDiv.classList.add('div2');


    main.appendChild(makeDiv)
    makeDiv.style.backgroundImage = "url('"+biblio[x].image+"')";
    makeDiv.appendChild(subDiv).innerHTML = biblio[x].id +'<br>'+  biblio[x].title +'<br>'+  biblio[x].author +'<br>'+  biblio[x].description +'<br>'+  biblio[x].rating;

};
