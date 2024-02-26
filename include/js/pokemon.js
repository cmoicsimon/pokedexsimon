// Remplir le menu avec les types de pokémon
let ul = document.querySelector('#liste-types')
for (let type of types) {
	let li = document.createElement("li")
	li.innerHTML = `<a href="type.html?id=${type}"><img src="img/${type}.png"></a>`
	ul.appendChild(li)
}

// Renvoie le pokémon en fontion de l'URL
function get_pokemon(data) {
	let queryString = window.location.search
	let urlParams = new URLSearchParams(queryString)
	let id = urlParams.get('id')
	for (let pokemon of data) {
		if (pokemon['nom'] === id) {
			return pokemon
		}
	}
}

// Renvoie une chaîne de caractères avec chaque type de pokémon
// et un lien vers sa page
function format_types(types) {
	let str = "Types : "
	for (let type of types) {
		str += `<a href="type.html?id=${type}"><img src="img/${type}.png"></a>`
	}
	return str
}

// Renvoie une chaîne de caractères avec chaque pokémon
// et un lien vers sa page
function format_evolutions(evolutions) {
	str = "Évolutions : "
	for (let evolution of evolutions) {
		str += `<a class="evolnone" href="pokemon.html?id=${evolution}">${evolution}</a>`
	}
	return str
}

// Remplir les informations sur le pokemon
let pokemon = get_pokemon(data)
document.querySelector("title").textContent += pokemon['nom']
document.querySelector("h1").textContent = pokemon['nom']
document.querySelector("p#description").textContent = pokemon["description"]
document.querySelector("img#image").setAttribute("src", "img/" + pokemon["png"])
document.querySelector("img#gif").setAttribute("src", "img/" + pokemon["gif"])
document.querySelector("#nom").textContent = pokemon["nom"]
document.querySelector("#taille").textContent = "Taille : " + pokemon["taille"]
document.querySelector("#poids").textContent = "Poids : " + pokemon["poids"]
document.querySelector("#noms").textContent = `Anglais : ${pokemon['nom_en']} ; Japonais : ${pokemon['nom_ja'][1]} (${pokemon['nom_ja'][0]})`
document.querySelector("#types").innerHTML = format_types(pokemon["type"])
document.querySelector("#evolutions").innerHTML = format_evolutions(pokemon["evolutions"])





// Sélectionne tous les liens contenus dans les éléments avec l'ID "evolutions"
let evolutionLinks = document.querySelectorAll("#evolutions a")
// Pour chaque lien trouvé
evolutionLinks.forEach(link => {
    // Vérifie si le texte du lien correspond au nom du Pokémon actuel
    if (link.textContent === pokemon["nom"]) {
        // Supprime la classe "evolnone" du lien
        link.classList.remove("evolnone")
        // Ajoute la classe "evolact" au lien
        link.classList.add("evolact")
    }
})






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