// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++) {

    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // On crée l’élément img.
    const imageElement = document.createElement("img");
    const nomElement = document.createElement("h2");
    nomElement.innerText = pieces[i].nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${pieces[i].prix} € (${pieces[i].prix < 35 ? "€" : "€€€"})`;
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = pieces[i].description ?? "aucune description pour le moment";
    const categorieElement = document.createElement("p");
    categorieElement.innerText = pieces[i].categorie ?? "aucune catégorie disponible";
    const stockElement = document.createElement("p");
    stockElement.innerText = pieces[i].disponibilite ? "En stock" : "Stock epuisé !";
    // On accède à l’indice i de la liste pieces pour configurer la source de l’image.
    imageElement.src = pieces[i].image;
    // Idem pour le nom, le prix et la catégorie...

    // On rattache la balise article à la section Fiches
    sectionFiches.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);
    // Idem pour le nom, le prix et la catégorie...
}

const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
     });
     console.log(piecesOrdonnees);
 });

 const boutonFilter = document.querySelector(".btn-filtrer");
 boutonFilter.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (pieces) {
        return pieces.prix <= 35;
    }) 
     console.log(piecesFiltrees);
 });