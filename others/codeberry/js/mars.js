function calculateFuelToOffload() {

    let totalDistanceToTravel = document.getElementById("tavolsag").value;

    let averageLitersOverHundred = document.getElementById("fogyasztas").value;

    let tankCapacity = document.getElementById("tartaly").value;



    let requiredFuel = Math.floor(totalDistanceToTravel * (averageLitersOverHundred / 100));

    let fuelToOffload = Math.floor(tankCapacity - requiredFuel);


    let divEredmeny = document.querySelector("#eredmeny");
    let p = document.querySelector("p");

    p.remove();
    divEredmeny.innerHTML += "<p>Az utazáshoz szükséges üzemanyag-mennyiség: " + "<br>" + requiredFuel + "L" + "<br>" + "Leadandó üzemanyag-mennyiség: " + "<br>" + fuelToOffload + " L</p>";

}
