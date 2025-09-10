# Quick Todo List en JavaScript

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

> Une application de liste de tâches simple et intuitive, entièrement réalisée en HTML, CSS et JavaScript pur, pour gérer efficacement vos tâches quotidiennes.

Ce projet est une application web de type "Todo List" qui permet d'ajouter, de gérer et de supprimer des tâches. L'interface est épurée et responsive, et l'application est contrôlée par la souris et des raccourcis clavier pour une productivité maximale.

![Aperçu de la Quick Todo List](https://i.imgur.com/quick-todo-list-X8j6097.png)

---

## 📋 Table des Matières

1.  [Aperçu du Projet](#-aperçu-du-projet)
2.  [Fonctionnalités](#-fonctionnalités)
3.  [Technologies Utilisées](#-technologies-utilisées)
4.  [Installation et Lancement](#-installation-et-lancement)
5.  [Utilisation](#-utilisation)
6.  [Défis et Apprentissages](#-défis-et-apprentissages)
7.  [Améliorations Possibles](#-améliorations-possibles)
8.  [Auteur](#-auteur)
9.  [Licence](#-licence)

---

## 🚀 Aperçu du Projet

Cette "Quick Todo List" a été développée comme un exercice pratique pour maîtriser les manipulations avancées du DOM et la gestion complexe des événements en JavaScript, notamment la distinction entre un clic simple et un double-clic sur un même élément.

---

## ✨ Fonctionnalités

*   **Ajout de tâches** : Saisissez une tâche dans le champ et ajoutez-la à la liste.
*   **Validation de la saisie** : Impossible d'ajouter une tâche vide, un message d'erreur guide l'utilisateur.
*   **Marquer comme terminée** : Un **clic simple** sur une tâche la barre et la déplace en bas de la liste. Un second clic la réactive et la remonte.
*   **Suppression de tâches** : Un **double-clic** sur une tâche la supprime définitivement de la liste.
*   **Raccourci clavier** :
    *   Appuyez sur `Entrée` pour ajouter rapidement la tâche saisie.
*   **Focus automatique** : Le champ de saisie est automatiquement sélectionné au chargement de la page et après chaque ajout de tâche.

---

## 🛠️ Technologies Utilisées

Ce projet a été construit sans aucun framework, en utilisant uniquement les technologies web de base.

*   **Frontend**
    *   HTML5
    *   CSS3 (avec une utilisation de Flexbox pour le layout responsive)
    *   JavaScript (ES6+)
*   **Outils de développement**
    *   Git & GitHub pour le versioning

---

## ⚙️ Installation et Lancement

Le projet est entièrement statique et ne nécessite aucune installation de dépendances.

1.  **Clonez le dépôt :**
    ```bash
    git clone https://github.com/djilanrene/todo-js.git
    ```
    *(Note : Remplacez l'URL par le lien de votre dépôt si nécessaire)*

2.  **Accédez au dossier du projet :**
    ```bash
    cd todo-js
    ```

3.  **Ouvrez le fichier `index.html` :**
    Ouvrez simplement le fichier `index.html` dans votre navigateur web. L'application est prête à être utilisée.

---

## 📖 Utilisation

Une fois la page ouverte, interagissez avec la liste de tâches :

*   **Pour ajouter une tâche** : Tapez votre texte dans le champ "Nouvelle tâche" et cliquez sur le bouton `+` ou appuyez sur la touche `Entrée`.
*   **Pour marquer une tâche comme terminée** : Faites un clic simple sur le texte de la tâche. Elle sera barrée et déplacée en bas.
*   **Pour réactiver une tâche** : Faites un clic simple sur une tâche terminée pour la débarrer et la replacer en haut de la liste.
*   **Pour supprimer une tâche** : Faites un double-clic sur le texte de n'importe quelle tâche.

---

## 🧠 Défis et Apprentissages

**Défi : Conflit entre le clic simple (`click`) et le double-clic (`dblclick`)**

Le principal défi technique a été de faire cohabiter deux actions différentes sur le même élément : un clic pour *marquer* la tâche et un double-clic pour la *supprimer*. Par défaut, un double-clic déclenche également deux événements de clic simple, ce qui provoquait le déplacement de la tâche avant sa suppression, créant des bugs et une mauvaise expérience utilisateur.

**Solution :**
La solution a consisté à utiliser un minuteur (`setTimeout`) pour différencier les deux intentions de l'utilisateur.
1.  Lors d'un `click`, une action (marquer la tâche) est mise en attente dans un `setTimeout` de 250 ms.
2.  Si un `dblclick` se produit pendant ce court délai, le `setTimeout` du clic simple est annulé via `clearTimeout()`, et seule l'action de suppression est exécutée.
3.  Si le délai de 250 ms s'écoule sans second clic, l'action du clic simple est alors exécutée.
Ce "débounce" manuel garantit que les deux événements ne rentrent jamais en conflit.

**Apprentissages :**
*   **Gestion avancée des événements :** Compréhension de l'ordre d'exécution des événements du DOM et mise en place d'une logique pour les gérer.
*   **JavaScript Asynchrone :** Utilisation pratique de `setTimeout()` et `clearTimeout()` pour contrôler le flux d'exécution du code.
*   **Manipulation du DOM :** Maîtrise de `createElement`, `prepend`, `appendChild` et `remove()` pour une interface dynamique.
*   **Logique d'état :** Utilisation des classes CSS (`.disabled`) pour gérer et refléter visuellement l'état d'une tâche.

---

## 🔮 Améliorations Possibles

- [ ] **Sauvegarde locale** : Utiliser le `localStorage` du navigateur pour que les tâches persistent même après avoir rechargé la page.
- [ ] **Fonction d'édition** : Permettre de modifier une tâche existante (par exemple, avec un autre double-clic ou un bouton "éditer").
- [ ] **Filtrage des tâches** : Ajouter des boutons pour afficher "Toutes", "Actives" ou "Terminées".
- [ ] **Interface améliorée** : Remplacer le double-clic par un bouton de suppression visible sur chaque tâche pour une meilleure ergonomie.
- [ ] **Accessibilité (a11y)** : Ajouter des attributs ARIA pour rendre l'application plus accessible aux lecteurs d'écran.

---

## 👤 Auteur

*   **Junior (René DJILAN)**
*   GitHub: [@djilanrene](https://github.com/djilanrene/)
*   LinkedIn : [@djilanrene](https://linkedin.com/in/djilanrene/)

---

## 📜 Licence

Ce projet est distribué sous la licence MIT.
