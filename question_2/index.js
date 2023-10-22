const planets = [
    { name: "Mercury", details: "Mercury is the smallest planet in our solar system." },
    { name: "Venus", details: "Venus is the hottest planet in our solar system." },
    { name: "Earth", details: "Earth is the only known planet to support life." },
];

const planetButton = document.getElementById("planetButton");
const planetButtonsContainer = document.getElementById("planetButtonsContainer");
const planetDetails = document.getElementById("planetDetails");

planetButton.addEventListener("click", function () {
    planetButtonsContainer.innerHTML = "";
    planets.forEach(function (planet) {
        const planetButton = document.createElement("button");
        planetButton.textContent = planet.name;
        planetButton.addEventListener("click", function () {
            planetDetails.textContent = planet.details;
        });
        planetButtonsContainer.appendChild(planetButton);
    });
});