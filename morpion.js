// jeu morpion : player(vous) vs cpu (un robot qui n'est autre que cet ordinateur - votre ordinateur)
// Au lancement du jeu, choix de pions : crix ou rond, vous choisissez et le robot 
// prend la forme restante. => bouton start et boutons de choix (boutons radios)


(function() {

    // Récupération des cases à clicker
    const items = document.getElementsByClassName('grid-item');

    function choiseCase(id) {

    }

    // Vide le contenu de toute les cases
    function reset() {
        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
            items[i].textContent = ''
        }
    }

})();