// Remplir le menu avec les types de pokémon
let ul = document.querySelector('#liste-types')
for (let type of types) {
    let li = document.createElement("li")
    li.innerHTML = `<a href="type.html?id=${type}"><img src="img/${type}.png"></a>`
    ul.appendChild(li)
}

// Fonction pour générer le code HTML des types de Pokémon
function pkmn_types(types) {
    let str = ""
    for (let type of types) {
        str += `<a id="type" href="type.html?id=${type}"><img class="typeimg" src="img/${type}.png"></a>`
    }
    return str
}

// Remplir la liste de Pokemon avec le nom, le lien vers sa page et une image
let ulPokemon = document.querySelector('#liste-pokemon');
let pokemonIndex = 1; // le premier Pokémon
let limit = 20; // Nombre de Pokémon qui charge à chaque clic

function loadPokemons(startIndex, endIndex) {
    for (let i = startIndex; i <= endIndex; i++) {
        let pokemon = data[i - 1]; // Notez que l'index de tableau commence à 0
        let li = document.createElement("li");
        li.innerHTML = `<a class="carte" href="pokemon.html?id=${pokemon['nom']}"><img class="pokemonimg" transform: translateZ(100px) src="img/${pokemon['png']}" height="120px"></a><div class="infos"><h2>${pokemon['nom']}</h2></div>`+ pkmn_types(pokemon["type"]);
        ulPokemon.appendChild(li);
    }
}





// Charger les premiers Pokémon lors du chargement de la page
window.onload = function () {
    loadPokemons(1, limit);
    pokemonIndex = limit + 1; // Met à jour l'index pour la prochaine série de chargement
};

// Charger les 20 Pokémon suivants lors du clic sur le bouton
function loadNextTwenty() {
    let nextStartIndex = pokemonIndex;
    let nextEndIndex = pokemonIndex + limit - 1;
    loadPokemons(nextStartIndex, nextEndIndex);
    pokemonIndex += limit; // Met à jour l'index pour la prochaine série de chargement
}

// Ajouter une classe au bouton pour le positionner
document.getElementById('btn20').classList.add('bottom-center');

// Gérer le clic sur le bouton
var clickCount = 0;

function handleButtonClick() {
    clickCount++;

    if (clickCount >= 7) {
        // Si le bouton a été cliqué 7 fois ou plus, le cacher
        document.getElementById('btn20').style.display = 'none';
    }
}





// Fonction pour faire défiler vers le bas de la page
function scrollToBottom() {
    // Récupérer la hauteur totale de la page
    var totalHeight = document.documentElement.scrollHeight;

    // Récupérer la position actuelle de la fenêtre
    var currentScroll = window.scrollY || document.documentElement.scrollTop;

    // Calculer la distance à faire défiler
    var distanceToScroll = totalHeight - currentScroll;

    // Animer le défilement
    window.scrollBy({
        top: distanceToScroll,
        behavior: 'smooth'
    });
}





// Gérer le défilement de la page
window.onscroll = function () {
    scrollFunction();
};

// Afficher ou masquer le bouton de retour en haut en fonction du défilement
function scrollFunction() {
    var scrollUpButton = document.getElementById("scrollUpButton");

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollUpButton.style.bottom = "30px"; /* Affichez le bouton avec un effet de glissement */
    } else {
        scrollUpButton.style.bottom = "-80px"; /* Masquez le bouton avec un effet de glissement */
    }
}

// Faire défiler vers le haut de la page
function scrollToTop() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}





