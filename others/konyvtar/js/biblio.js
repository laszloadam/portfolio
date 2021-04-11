const biblio = [
    {
        id:1,
        title:'Az oroszlán, a boszorkány és a ruhásszekrény',
        author: 'C.S. Lewis',
        publication: 1950,
        image: '../konyvtar/pics/narnia2.jpg',
        description:'Narnia egy jéggé dermesztett ország, ahol sohasem jár a Mikulás és nem létezik a karácsony. A négy testvér - Peter, Susan, Edmund és Lucy - egy vidéki kastélyban álló ruhásszekrényen keresztül lép be a birodalomba, hogy felvegye a harcot a Fehér Boszorkánnyal és csatlósaival.... ',
        rating: 4
    },
    {
        id:2,
        title: 'Aliens versus Predator: Háború',
        author: 'Stephani Perry',
        publication: 1999,
        image: '../konyvtar/pics/avpWar.jpg',
        description: 'Machiko Noguchi már egy teljes éve él a vadászok közt, de még mindig úgy érzi, hogy társai nem tartják egyenrangú félnek. Bármit tesz, jutalma büntetés és megvetés. Tudja, nem maradhat sokáig a jautják között.Lara, Jess és Ellis, a 949-es állomáson történt mészárlás túlélői, egy mentőkabinban fuldokolva sodródnak az űrben. Már csak perceik vannak hátra az életből, amikor a Weyland-Yutani társaság megmenti őket. A csapatot egy perembolygóra szállítják. A ragadozók hajója ismét pályára áll egy világ körül, hogy elhintse rajta a halál magvait. A vadászat izgalmasnak ígérkezik, hiszen egyszerre akarnak megküzdeni az univerzum két legveszélyesebb prédájával, az idegenekkel és az emberekkel. Machiko kénytelen meghozni élete legnehezebb döntését, és harcba száll - ezúttal az emberek oldalán, az idegenek és a ragadozók ellen.',
        rating: 5
    },
    {
        id:3,
        title: 'Harry Potter és a bölcsek köve',
        author: 'J. K. Rowling',
        publication: 1997,
        image: '../konyvtar/pics/hp1.jpg',
        description: 'A Roxfort Boszorkány- és Varázslóképző Szakiskolában töltött első tanév kemény erőpróba a diákok számára. Harry Potternek nem csupán a vizsgákon kell megfelelnie, de egy életre-halálra szóló küzdelemnek is részese lesz. A tizenegy éves varázslójelölt története meghódította az egész világot.',
        rating: 2
    }
];


// kiszámolja, hogy hány könyv van.
let booksNumber = biblio.length;


//könyvek kiiratása

for (let x=0; x <= booksNumber-1; x++) {
    let main = document.getElementById("main");
    let makeDiv = document.createElement("DIV");
    makeDiv.classList.add('div1');
    let subDiv = document.createElement("DIV");
    subDiv.setAttribute('class', 'allDiv hide');
    subDiv.setAttribute('id', 'div-'+x);
    makeDiv.setAttribute('onmouseover', 'mouseOver(this)');
    makeDiv.setAttribute('onmouseout', 'mouseOut(this)');

    // a main-hez adja a div1-et, majd a háttérképet

    main.appendChild(makeDiv);
    makeDiv.style.backgroundImage = "url('"+biblio[x].image+"')";

    // A div1-hez adja a subDiv-et, ami rövid leírást tartalmazza.

    makeDiv.appendChild(subDiv).innerHTML = '<h3>'+biblio[x].title +'</h3><p>'+biblio[x].author+'</p><p>'+  biblio[x].publication +'</p><p>Vélemény:</p>';
    for(let star =1; star <= biblio[x].rating; star++ ){
        subDiv.innerHTML += '✰';
    };

    // add button

    subDiv.innerHTML += '<button class="btns" id="subDiv-btns'+x+'">Részletek</button>';
    
    // Add onclick funkció

     document.getElementById('subDiv-btns'+x).setAttribute('onclick', 'showDescription('+x+')')

    function showDescription(xDesc){
        alert(biblio[xDesc].description)
    }
    
};

//Rating: Annyi csillag jelenjen meg, amennyi a pontja.

var content = document.getElementById('content');





// Show/Hide funkció

function mouseOver(xDiv) {
    xDiv.getElementsByTagName('div')[0].setAttribute('class', 'allDiv show')
};
function mouseOut(xDiv) {
    xDiv.getElementsByTagName('div')[0].setAttribute('class', 'allDiv hide')
}