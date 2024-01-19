const json = {
  logoPosition: "right",
  pages: [
    {
      name: "Premières informations",
      elements: [
        {
          type: "text",
          name: "Âge",
          title: "Quel est votre âge ?",
          isRequired: true,
        },
        {
          type: "dropdown",
          name: "Région",
          title: "Dans quel région situez-vous ?",
          isRequired: true,
          choices: [
            {
              value: "Item 1",
              text: "Auvergne-Rhône-Alpes",
            },
            {
              value: "Item 2",
              text: "Bourgogne-Franche-Comté",
            },
            {
              value: "Item 3",
              text: "Bretagne",
            },
            {
              value: "Item 4",
              text: "Centre-Val de Loire",
            },
            {
              value: "Item 5",
              text: "Corse",
            },
            {
              value: "Item 6",
              text: "Grand Est",
            },
            {
              value: "Item 7",
              text: "Hauts-de-France",
            },
            {
              value: "Item 8",
              text: "Île-de-France",
            },
            {
              value: "Item 9",
              text: "Normandie",
            },
            {
              value: "Item 10",
              text: "Nouvelle-Aquitaine",
            },
            {
              value: "Item 11",
              text: "Occitanie",
            },
            {
              value: "Item 12",
              text: "Pays de la Loire",
            },
            {
              value: "Item 13",
              text: "Provence-Alpes-Côte d'Azur",
            },
            {
              value: "Item 14",
              text: "Guadeloupe",
            },
            {
              value: "Item 15",
              text: "Martinique",
            },
            {
              value: "Item 16",
              text: "Guyane",
            },
            {
              value: "Item 17",
              text: "La Réunion",
            },
            {
              value: "Item 18",
              text: "Mayotte",
            },
          ],
        },
        {
          type: "dropdown",
          name: "Genre",
          title: "Êtes-vous ?",
          isRequired: true,
          choices: [
            {
              value: "Item 1",
              text: "Homme",
            },
            {
              value: "Item 2",
              text: "Femme",
            },
          ],
        },
      ],
    },
    {
      name: "Femme",
      elements: [
        {
          type: "tagbox",
          name: "Produits_Femme",
          title:
            "Quel types de produits de maquillage utilisez-vous régulièrement ?",
          isRequired: true,
          choices: [
            {
              value: "Item 1",
              text: "Rouge à lèvres",
            },
            {
              value: "Item 2",
              text: "Fond de Teint",
            },
            {
              value: "Item 3",
              text: "Mascara",
            },
            {
              value: "Item 4",
              text: "Eyeliners",
            },
            {
              value: "Item 5",
              text: "Ombre à paupières",
            },
            {
              value: "Item 6",
              text: "Vernis à ongles",
            },
            {
              value: "Item 7",
              text: "Crayons",
            },
          ],
        },
        {
          type: "dropdown",
          name: "Fréquence_Maquillage",
          title:
            "Combien de fois utilisez-vous ces produits de maquillage par semaine ?",
          choices: [
            {
              value: "Item 1",
              text: "Tous les jours",
            },
            {
              value: "Item 2",
              text: "Plusieurs fois par semaine",
            },
            {
              value: "Item 3",
              text: "Une fois par semaine",
            },
          ],
        },
        {
          type: "dropdown",
          name: "question2",
          title:
            "Combien de temps en moyenne consacrez-vous à votre routine de soins de la peau chaque jour ?",
          choices: [
            {
              value: "Item 1",
              text: "Moins de 5 minutes",
            },
            {
              value: "Item 2",
              text: "5 à 10 minutes",
            },
            {
              value: "Item 3",
              text: "10 à 20 minutes",
            },
            {
              value: "Item 4",
              text: "Plus de 20 minutes",
            },
            {
              value: "Item 5",
              text: "Plus de 21 minutes",
            },
          ],
        },
        {
          type: "dropdown",
          name: "question3",
          title: "A quelle fréquence achetez-vous de nouveaux produits ?",
          choices: [
            {
              value: "Item 1",
              text: "Chaque semaine",
            },
            {
              value: "Item 2",
              text: "Chaque mois",
            },
            {
              value: "Item 3",
              text: "Tous les trois mois",
            },
            {
              value: "Item 4",
              text: "Tous les six mois",
            },
            {
              value: "Item 5",
              text: "Chaque année",
            },
          ],
        },
        {
          type: "tagbox",
          name: "Produits_Soins_Femme",
          title:
            "Quels types de produits de soins de la peau utilisez-vous régulièrement ?",
          isRequired: true,
          choices: [
            {
              value: "Item 1",
              text: "Crème soin de nuit",
            },
            {
              value: "Item 2",
              text: "Crème soin de jour",
            },
            {
              value: "Item 3",
              text: "Masques",
            },
            {
              value: "Item 4",
              text: "Gommage",
            },
          ],
        },
        {
          type: "dropdown",
          name: "Fréquence_Soins",
          title:
            "Combien de fois utilisez-vous ces produits de soin utilisez-vous par semaine ?",
          choices: [
            {
              value: "Item 1",
              text: "Tous les jours",
            },
            {
              value: "Item 2",
              text: "Plusieurs fois par semaine",
            },
            {
              value: "Item 3",
              text: "Une fois par semaine",
            },
          ],
        },
      ],
      visibleIf: "{Genre} = 'Item 2'",
    },
    {
      name: "Homme",
      elements: [
        {
          type: "tagbox",
          name: "Produits_Homme",
          title:
            "Quel types de produits de soins utilisez-vous régulièrement ?",
          isRequired: true,
          choices: [
            {
              value: "Item 1",
              text: "Soin Barbe",
            },
            {
              value: "Item 2",
              text: "Soin Visage",
            },
            {
              value: "Item 3",
              text: "Gel Douche",
            },
            {
              value: "Item 4",
              text: "Shampoing",
            },
          ],
        },
        {
          type: "dropdown",
          name: "question1",
          title: "Quelles sont vos critères pour choisir vos produits ?",
          choices: [
            {
              value: "Item 1",
              text: "Prix",
            },
            {
              value: "Item 2",
              text: "Ingrédients",
            },
            {
              value: "Item 3",
              text: "Recommandations",
            },
          ],
        },
        {
          type: "dropdown",
          name: "question4",
          title:
            "Combien de temps en moyenne consacrez-vous à votre routine de soins de la peau chaque jour ?",
          choices: [
            {
              value: "Item 1",
              text: "Moins de 5 minutes",
            },
            {
              value: "Item 2",
              text: "5 à 10 minutes",
            },
            {
              value: "Item 3",
              text: "10 à 20 minutes",
            },
            {
              value: "Item 4",
              text: "Plus de 20 minutes",
            },
            {
              value: "Item 5",
              text: "Plus de 21 minutes",
            },
          ],
        },
        {
          type: "dropdown",
          name: "question5",
          title: "A quelle fréquence achetez-vous de nouveaux produits ?",
          choices: [
            {
              value: "Item 1",
              text: "Chaque semaine",
            },
            {
              value: "Item 2",
              text: "Chaque mois",
            },
            {
              value: "Item 3",
              text: "Tous les trois mois",
            },
            {
              value: "Item 4",
              text: "Tous les six mois",
            },
            {
              value: "Item 5",
              text: "Chaque année",
            },
          ],
        },
        {
          type: "dropdown",
          name: "question6",
          title:
            "Combien de fois utilisez-vous ces produits de soin utilisez-vous par semaine ?",
          choices: [
            {
              value: "Item 1",
              text: "Tous les jours",
            },
            {
              value: "Item 2",
              text: "Plusieurs fois par semaine",
            },
            {
              value: "Item 3",
              text: "Une fois par semaine",
            },
          ],
        },
        {
          type: "dropdown",
          name: "question7",
          title: "Quelles sont vos critères pour choisir vos produits ?",
          choices: [
            {
              value: "Item 1",
              text: "Prix",
            },
            {
              value: "Item 2",
              text: "Ingrédients",
            },
            {
              value: "Item 3",
              text: "Recommandations",
            },
          ],
        },
      ],
      visibleIf: "{Genre} = 'Item 1'",
    },
  ],
};

export default json;
