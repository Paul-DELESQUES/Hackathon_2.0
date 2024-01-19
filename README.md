# Botéal Shop

Bienvenue dans Botéal Shop, une application web immersive qui vous permet de d'explorer un salon et de découvrir des fonctionnalités innovantes.

## Table des matières

- [À propos](#à-propos)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Contribuer](#contribuer)
- [Licence](#licence)


## À propos

Botéal Shop est une plateforme interactive afin d'explorez un salon et découvrir une façon innovante de naviguer sur un site.

## Technologies utilisées

- **React** - Bibliothèque JavaScript pour la construction d'interfaces utilisateur réactives.
- **ThreeJS** - Utiliser pour la partie 3D
- **Sass** - Langage de feuilles de style en cascade pour une stylisation avancée.
- **Express.js** - Cadre d'application web Node.js pour la création d'API robustes.

## Installation

1. **Clonez ce dépôt sur votre machine locale.**
    ```bash
    git clone https://github.com/non-d'utilisateur/Hackathon_2.0.git
    ```

2. **Accédez au répertoire du projet.**
    ```bash
    cd Hackathon_2.0
    ```

3. **Installez les dépendances du serveur.**
    ```bash
    npm install
    ```

4. **Accédez au répertoire serveur (backend).**
    ```bash
    cd /backend
    ```

5. **Modifier le .env en utilisant le .env.sample / lancer migrate et seed**
    ```bash
    npm run db:migrate 
    npm run db:seed
    ```

6. **Revenez au répertoire principal.**
    ```bash
    cd ..
    ```

7. **Lancez le serveur.**
    ```bash
    npm run dev
    ```
8. **Ouvrez votre navigateur et accédez à `http://localhost:3000` pour utiliser Botéal Shop.**

## Utilisation

- **Page d'accueil** : Explorez les onglets grâce à une barre incluant des boutons en bas de l'écran.
- **Filtres** : Utilisez les filtres pour affiner votre recherche en fonction de vos besoins sur la page produits, etc.
- **Détails du produit** : Obtenez des informations détaillées sur un produit.
- **Utiliser un chatBot**: Le bouton Tablette permet d'accéder au chatBot pour faciliter la naviguation et vos besoins.
- ** formulaire d'abonnement**: Le bouton TV vous permettra d'accéder à un questionnaire afin de paramétrer un potentiel abonnement en fonction de vos besoins.

## Contribuer

Nous accueillons les contributions de la communauté ! Pour contribuer, veuillez suivre ces étapes :

1. **Fork le projet.**
2. **Créez une branche pour votre fonctionnalité (`git switch -c fonctionnalite-incroyable`).**
3. **Committez vos modifications (`git commit -m 'Ajouter une fonctionnalité incroyable'`).**
4. **Push vers la branche (`git push origin fonctionnalite-incroyable`).**
5. **Ouvrez une pull request.**

## Licence

Ce projet est sous licence [MIT](LICENSE).

---

**Botéal Shop** - Une innovation de navigation !!! 
