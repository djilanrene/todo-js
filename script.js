// récupérer les éléments du html
const inputfield = document.getElementById('inputfield');
const addtodo = document.getElementById('addtodo');
const todolist = document.getElementById('todolist');
const errorMessage = document.getElementById('error-message');


// ===================================================================================================

// faire un focus sur le champ input au chargement de la page
window.onload = function () {
  inputfield.focus();
};
// créer une variable pour garder la trace du minuteur
let clickTimer = null

// ===================================================================================================



// FONCTION PRINCIPALE ================================================================================

// définir la fonction de sauvegarde de la saisie
function saveTodo() {

  // SI LE CHAMP INPUT EST VIDE...
  if (inputfield.value.trim() == '') {
    /* trim pour supprimer les espaces inutiles */
    errorMessage.innerText = 'Remplissez le champ !';
    errorMessage.style.display = 'block';
    return; /* pour retourner au début sans exécuter la suite du code et reparcourir la fonction. ça évite de créer une tâche vide  */

  // SINON...
  } else {
    errorMessage.style.display = 'none';
    // dans ce cas, créer un paragraphe
    const paragraph = document.createElement('p'); /* une balise p */
    // attribuer le contenu de l'input au paragraphe
    paragraph.innerText = inputfield.value;
    // insérer le paragraphe dans la todolist
    todolist.prepend(paragraph); 
    /* pour faire en sorte que le paragraphe soit un enfant de todolist. prepend au lieu de append pour faire monter en haut de la liste */
    inputfield.value = ''; /* vider l'input après la saisie */
    inputfield.focus(); /* repositionner le curseur dans le champ après la validation */


    // GESTION DU CLICK ========================================================================
    paragraph.addEventListener('click', function () {

      // Chaque fois qu'on clique, on annule le minuteur précédent pour éviter les exécutions multiples
      clearTimeout(clickTimer)

      // on lance un nouveau timer
      clickTimer = setTimeout(function(){
        
        // Ce code ne s'exécutera que si aucun double-clic n'est détecté après 250ms
        paragraph.classList.toggle('disabled');
        if (paragraph.classList.contains('disabled')){
          todolist.appendChild(paragraph); /* pour faire déscnedre les tâches cochées */
        } else { todolist.prepend(paragraph) }
      }, 250)
    });


    // GESTION DU DOUBLE CLICK ========================================================================
    paragraph.addEventListener('dblclick', function (e) {

      // annuler le minuteur du simple click pour éviter de confondre les clicks
      clearTimeout(clickTimer)

        e.stopPropagation() /* stopper la propagation de l'évènement sur les éléments parents */
        e.target.remove() /* cibler le paragraphe qui a l'évènement avec target et le supprimer */
    });
  }
}



// RACCOURCIS CLAVIER =================================================================================
window.addEventListener('keydown', (shotcut) => {
  //   console.log(shotcut.key);
  if (shotcut.key == 'Enter') {
    saveTodo();
  }
});
