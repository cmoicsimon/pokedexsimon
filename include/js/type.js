// Remplir le menu avec les types de Pokémon
let ul = document.querySelector('#liste-types') // Sélectionne la liste des types
for (let type of types) {
    let li = document.createElement("li") // Crée un élément de liste
    li.innerHTML = `<a href="type.html?id=${type}"><img src="img/${type}.png"></a>` // Ajoute un lien avec une image pour chaque type
    ul.appendChild(li) // Ajoute l'élément à la liste
}

// Renvoie un tableau avec les Pokémon du type spécifié
function get_pokemons(data, id) {
    let pokemons = []
    for (let pokemon of data) {
        for (let type of pokemon["type"]) {
            if (type === id) {
                pokemons.push(pokemon)
            }
        }
    }
    return pokemons
}

// Trouver le type de Pokémon à montrer en fonction du paramètre dans l'URL
let queryString = window.location.search // Récupère la partie de l'URL après le '?'
let urlParams = new URLSearchParams(queryString) // Analyse les paramètres de l'URL
let id = urlParams.get('id') // Récupère la valeur du paramètre 'id'

// Remplir la page
// Ce code est identique à celui de main.js
document.querySelector("title").textContent += id // Ajoute le type au titre de la page
document.querySelector("h1").textContent = id // Ajoute le type au titre principal

let pokemons = get_pokemons(data, id) // Récupère les Pokémon du type spécifié
ul = document.querySelector('#liste-pokemon') // Sélectionne la liste des Pokémon
for (let pokemon of pokemons) {
    let li = document.createElement("li") // Crée un élément de liste
    li.innerHTML = `<a class="carte" href="pokemon.html?id=${pokemon['nom']}"><img class="pokemonimg" transform: translateZ(100px) src="img/${pokemon['png']}" height="120px"></a><div class="infos"><h2>${pokemon['nom']}</h2></div>` + pkmn_types (pokemon["type"])
    ul.appendChild(li) // Ajoute l'élément à la liste
}

// Renvoie une chaîne de caractères avec chaque type de pokémon
// et un lien vers sa page
function pkmn_types(types) {
    let str = ""
    for (let type of types) {
        str += `<a id="type" href="type.html?id=${type}"><img class="typeimg" src="img/${type}.png"></a>`
    }
    return str
}





// Sélectionner l'élément de description
var descriptionDiv = document.querySelector("div#description")

// Définir la description et la couleur en fonction du type
if (id === "Eau") {
    let description = document.div;
    let newP = document.createElement('p');
    newP.textContent = "Les Pokémon de type Eau sont d'excellents nageurs qui attaquent en manipulant l'eau.";
    descriptionDiv.prepend(newP);
}
if(id==="Combat"){
    let description = document.div;
	let newP = document.createElement('p');
	newP.textContent = "Les Pokémon de type Combat se battent avec leur corps et la puissance de leurs muscles surdéveloppés.";
	descriptionDiv.prepend(newP);
}
if(id==="Sol"){
    let description = document.div;
	let newP = document.createElement('p');
	newP.textContent = "Les Pokémon de type Sol sont assignés à la terre ou au sable ; ils creusent, modèlent le sol, etc.";
	descriptionDiv.prepend(newP);
}
if(id==="Glace"){
    let description = document.div;
	let newP = document.createElement('p');
	newP.textContent = "Les Pokémon de type Glace refroidissent leur environnement pour frapper avec des cristaux de glace ou geler leurs ennemis.";
	descriptionDiv.prepend(newP);
}
if(id==="Psy"){
    let description = document.div;
	let newP = document.createElement('p');
	newP.textContent = "Les Pokémon de type Psy se battent avec des techniques psychiques ; ils soulèvent des objets par la force de la pensée par exemple.";
	descriptionDiv.prepend(newP);
}
if(id==="Poison"){
    let description = document.div;
	let newP = document.createElement('p');
	newP.textContent = "Les Pokémon de type Poison intoxiquent leur adversaire ; ils produisent de nombreuses toxines.";
	descriptionDiv.prepend(newP);
}
if(id==="Feu"){
    let description = document.div;
	let newP = document.createElement('p');
	newP.textContent = "Les Pokémon de type Feu attaquent avec les flammes ! Ils ont souvent une température interne élevée, et des flammes ou motif de flammes sur le corps.";
	descriptionDiv.prepend(newP);
}
if(id==="Dragon"){
    let description = document.div;
	let newP = document.createElement('p');
	newP.textContent = "Les Pokémon de type Dragon possèdent des pouvoirs mystiques et sacrés, déchaînant des forces destructrices en tous genres.";
	descriptionDiv.prepend(newP);
}
if(id==="Roche"){
    let description = document.div;
	let newP = document.createElement('p');
	newP.textContent = "Les Pokémon de type Roche sont souvent composés de pierres et se défendent en projetant celles-ci.";
	descriptionDiv.prepend(newP);
}
if(id==="Normal"){
    let description = document.div;
	let newP = document.createElement('p');
	newP.textContent = "Le type Normal est le type standard : ce sont les Pokémon qui n'ont pas vraiment de pouvoir spécial et ne sont associés à aucun élément en particulier. Ils sont néanmoins capables de maîtriser des capacités de types variés.";
	descriptionDiv.prepend(newP);
}
if(id==="Fée"){
    let description = document.div;
	let newP = document.createElement('p');
	newP.textContent = "Les Pokémon de type Fée utilisent des pouvoirs magiques en lien étroit avec la nature.";
	descriptionDiv.prepend(newP);
}
if(id==="Insecte"){
    let description = document.div;
	let newP = document.createElement('p');
	newP.textContent = "Les Pokémon de type Insecte ont la forme d'un insecte et attaquent à l'aide de dards, de pinces, de mandibules ou de sécrétions.";
	descriptionDiv.prepend(newP);
}
if(id==="Plante"){
    let description = document.div;
	let newP = document.createElement('p');
	newP.textContent = "Les Pokémon de type Plante maîtrisent les pouvoirs des végétaux, et sont souvent eux même composés de végétaux.";
	descriptionDiv.prepend(newP);
}
if(id==="Spectre"){
    let description = document.div;
	let newP = document.createElement('p');
	newP.textContent = "Les Pokémon de type Spectre sont des esprits maîtrisant des pouvoirs occultes et se nourrissant de force vitale.";
	descriptionDiv.prepend(newP);
}
if(id==="Vol"){
    let description = document.div;
	let newP = document.createElement('p');
	newP.textContent = "Les Pokémon de type Vol peuvent fendre les airs, et créer de violentes bourrasques, avec ou sans ailes.";
	descriptionDiv.prepend(newP);
}
if(id==="Électrik"){
    let description = document.div;
	let newP = document.createElement('p');
	newP.textContent = "Les Pokémon de type Électrik sont de véritables centrales électriques qui attaquent en déversant des milliers de volts sur leur adversaire.";
	descriptionDiv.prepend(newP);
}
if(id==="Acier"){
    let description = document.div;
	let newP = document.createElement('p');
	newP.textContent = "Les Pokémon de type Acier sont recouverts de métal et se servent de celui-ci pour écraser ou taillader.";
	descriptionDiv.prepend(newP);
}





// Sélectionner l'élément body
var body = document.querySelector("body")

// Définir la couleur de fond en fonction du type
if (id === "Eau") {
    body.style.setProperty("background-color", "#5fabff");
}
if(id==="Combat"){
    body.style.setProperty("background-color", "#ff5084");
}
if(id==="Sol"){
    body.style.setProperty("background-color", "#ffa451");
}
if(id==="Glace"){
    body.style.setProperty("background-color", "#88f4e3");
}
if(id==="Psy"){
    body.style.setProperty("background-color", "#ff7373");
}
if(id==="Poison"){
    body.style.setProperty("background-color", "#d888ff");
}
if(id==="Feu"){
    body.style.setProperty("background-color", "#ffb354");
}
if(id==="Dragon"){
    body.style.setProperty("background-color", "#0d82e9");
}
if(id==="Roche"){
    body.style.setProperty("background-color", "#ebdaa7");
}
if(id==="Normal"){
    body.style.setProperty("background-color", "#b3bec8");
}
if(id==="Fée"){
    body.style.setProperty("background-color", "#ff9aeb");
}
if(id==="Insecte"){
    body.style.setProperty("background-color", "#bfff3e");
}
if(id==="Plante"){
    body.style.setProperty("background-color", "#77e26c");
}
if(id==="Spectre"){
    body.style.setProperty("background-color", "#6480d3");
}
if(id==="Vol"){
    body.style.setProperty("background-color", "#a4b6ff");
}
if(id==="Électrik"){
    body.style.setProperty("background-color", "#fff53e");
}
if(id==="Acier"){
    body.style.setProperty("background-color", "#5a8ea2");
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