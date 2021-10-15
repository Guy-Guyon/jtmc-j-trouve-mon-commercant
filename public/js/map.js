/**
 * L.map('map') = On instancie un objet 'map' a partir de l'id dom d'un'div' élément
   .setView([longt-latit]),6 = on définie la vue de la carte par une longitude et latitude (positionner sur la france).
 */
var carte = L.map('map').setView([46.232192999999995, 2.209666999999996], 6);

/**
 * Ligne 11 = On instancie un objet de couche de tuille à partir d'une url template.
 * ligne 13 = Il est toujours bien de laisser le lien vers la source des données(petit caré en bas de la carte)
 */
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>'
}).addTo(carte);

/**
 *L.icon = On instancie une icône avec les option données.
  iconUrl = Donne le chemin ou se trouve l'icône
  iconSize = Donne la taille de l'icône
  iconeAnchor = Donne les coordonées de la poin=te de l'icône (par rapport à son coins supperrieur gauche)
  popupAnchor =  Donne les coordonées du point à partir duquel les coordonnées s'ouvrirons.
 */
let icone = L.icon
({
    iconUrl: "images/logo/marker-jtmc.png",
    iconSize: [40, 60],
    iconAnchor: [10, 40],
    popupAnchor: [9, -40]
})

/**
 * Requête Ajax qui permet d'interagir avec des serveurs
 * On peut récupérer des données à partir d'une URL sans avoir
 * à rafraîchir complètement la page. Cela permet à une page web
 * d'être mise à jour sans perturber les actions de l'utilisateur.
 * Principe de l'asynchrone
 */
let xmlhttp = new XMLHttpRequest();

/**
 * Ligne 48 = Un gestionnaire d'évènement (event handler) invoqué à chaque fois que l'attribut readyState change.
 * Ligne 49 = La propriété XMLHttpRequest.readyState renvoie l'état
 * dans lequel se trouve un client XMLHttpRequest
 * 0	UNSENT	Le client a été créé. open() n'a pas encore été appelé.
 * 1	OPENED	open()a été appelé.
 * 2	HEADERS_RECEIVED	send() a été appelé, et les en-têtes et le statut sont disponibles.
 * 3	LOADING	Téléchargement; responseText contient des données partielles.
 * 4	DONE	L'opération est terminée.
 */
xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState == 4) {
        // Si la transaction est un succès
        if (xmlhttp.status == 200) {
            // On traite les données reçues de la requête en Json
            let donnees = JSON.parse(xmlhttp.responseText)
                // console.log(donnees)
                /**
                 * Dans la boucle for on recupère la réponse de la
                 * requête on va demander le nom, l'id et l'image
                 */
            for (let i = 0; i < donnees.length; i++) {
                let name = donnees[i].name
                let id = donnees[i].id
                let picture = donnees[i].picture
                /**
                 * L.marker = On instancie un objet Marker à partir d'un point géographique
                 * On y met les donnée de la latitude et longitude marker option (dans ce cas cela sera la variable "icone" ligne 22)
                 * .addTo(carte) = On l'ajoute à la variable carte ligne 5
                 */
                let marker = L.marker([donnees[i].latitude, donnees[i].longitude], { icon: icone }).addTo(carte)
                marker.bindPopup('<div class="popup"><h1 class="popup-title">' + name + '</h1> <img class="popup-picture"src="uploads/' + picture + '" width="100px"/><br><a class="popup-link" href="http://localhost:8080/' + id + '/">Voir le commerce</a></div>')
            }
        } else {
            documentdocument.getElementById(map).innerHTML=' "<p class "loading"> Chargement de la page en cours...</p>' ;
            //console.log(xmlhttp.statusText);
        }
    }
}
xmlhttp.open("GET", "http://localhost:8080/api");
xmlhttp.send(null);