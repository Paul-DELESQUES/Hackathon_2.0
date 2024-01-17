/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    await database.query("truncate product");

    queries.push(
      database.query(
        "INSERT INTO product (name, brand, category, sub_cat, price, description, quantity_unitary, quantity_total, color, picture) VALUES ('Préférence blonds polaires', 'LOréal Paris', 'hair', 'coloration', 9.15, 'Couleur profonde et lumineuse riche en reflets', 1, 100, 'Blond clair cendré','https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwdc2cc28a/ProductImages/OAP7104/3600523947331/3600523947331_1.jpg?sw=750&sh=750&sm=cut&sfrm=jpg&q=70'), ('Teinture professionnelle', 'LOréal Paris', 'hair', 'coloration', 17.99, 'Teinture capillaire professionnelle pour des résultats époustouflants.', 1, 80, 'Noir'),('Teinture éclatante', 'LOréal Paris', 'hair', 'coloration', 14.99, 'Teinture capillaire pour une couleur éclatante qui dure.', 1, 120, 'Rouge foncé'),('Teinture sans ammoniaque', 'LOréal Paris', 'hair', 'coloration', 16.49, 'Teinture capillaire sans ammoniaque pour un soin en douceur.', 1, 90, 'Brun clair'),('Gel coiffant fort', 'LOréal Paris', 'hair', 'gel', 7.99, 'Gel coiffant ultra-fort pour une tenue longue durée.', 1, 75, 'Transparent'),('Gel coiffant extra-fort', 'LOréal Paris', 'hair', 'gel', 8.99, 'Gel coiffant extra-fort pour des coiffures audacieuses.', 1, 60, 'Transparent'),('Gel douche hydratant', 'LOréal Paris', 'hygiene', 'gel', 5.49, 'Gel douche hydratant pour une peau douce et propre.', 1, 150, 'Bleu'),('Gel nettoyant visage', 'LOréal Paris', 'hygiene', 'gel', 6.99, 'Gel nettoyant visage pour une peau fraîche et éclatante.', 1, 100, 'Transparent'),('Shampooing revitalisant', 'LOréal Paris', 'hair', 'shampoo', 9.99, 'Shampooing revitalisant pour des cheveux doux et éclatants.', 1, 120, 'Transparent'),('Shampooing anti-pelliculaire', 'LOréal Paris', 'hair', 'shampoo', 8.49, 'Shampooing anti-pelliculaire pour un cuir chevelu sain.', 1, 100, 'Transparent'),('Shampooing hydratant', 'LOréal Paris', 'hair', 'shampoo', 7.99, 'Shampooing hydratant pour des cheveux nourris et brillants.', 1, 150, 'Transparent'),('Shampooing fortifiant', 'LOréal Paris', 'hair', 'shampoo', 10.49, 'Shampooing fortifiant pour des cheveux plus forts et résistants.', 1, 80, 'Transparent'),('Rouge à lèvres mat', 'LOréal Paris', 'makeup', 'redlips', 12.99, 'Rouge à lèvres mat longue tenue pour des lèvres glamour.', 1, 60, 'Rouge vif'),('Rouge à lèvres liquide', 'LOréal Paris', 'makeup', 'redlips', 11.49, 'Rouge à lèvres liquide ultra-pigmenté pour une couleur intense.', 1, 50, 'Rose nude'),('Rouge à lèvres hydratant', 'LOréal Paris', 'makeup', 'redlips', 10.99, 'Rouge à lèvres hydratant pour des lèvres douces et nourries.', 1, 70, 'Corail'),('Rouge à lèvres satiné', 'LOréal Paris', 'makeup', 'redlips', 13.49, 'Rouge à lèvres satiné pour une finition élégante et soyeuse.', 1, 40, 'Rouge cerise'),('Mascara volumisant', 'LOréal Paris', 'makeup', 'mascara', 9.99, 'Mascara volumisant pour des cils plus épais et plus longs.', 1, 80, 'Noir'),('Mascara allongeant', 'LOréal Paris', 'makeup', 'mascara', 8.49, 'Mascara allongeant pour des cils magnifiquement étirés.', 1, 100, 'Noir intense'),('Mascara waterproof', 'LOréal Paris', 'makeup', 'mascara', 10.99, 'Mascara waterproof pour une tenue longue durée, même par temps humide.', 1, 70, 'Noir profond'),('Mascara coloré', 'LOréal Paris', 'makeup', 'mascara', 11.49, 'Mascara coloré pour des cils vibrants et audacieux.', 1, 60, 'Bleu électrique'),('Vernis à ongles classique', 'LOréal Paris', 'makeup', 'nail', 7.99, 'Vernis à ongles classique pour des ongles impeccables.', 1, 90, 'Rouge vif'),('Vernis à ongles mat', 'LOréal Paris', 'makeup', 'nail', 8.49, 'Vernis à ongles mat pour un look tendance et élégant.', 1, 70, 'Noir mat'),('Vernis à ongles métallique', 'LOréal Paris', 'makeup', 'nail', 9.99, 'Vernis à ongles métallique pour un effet brillant.', 1, 60, 'Or métallique'),('Vernis à ongles pailleté', 'LOréal Paris', 'makeup', 'nail', 10.49, 'Vernis à ongles pailleté pour une touche de glamour.', 1, 80, 'Argent pailleté'),('Palette de fards à paupières nude', 'LOréal Paris', 'makeup', 'eye_shadow', 14.99, 'Palette de fards à paupières nude pour des looks subtils.', 1, 50, 'Nude'),('Fard à paupières liquide', 'LOréal Paris', 'makeup', 'eye_shadow', 11.49, 'Fard à paupières liquide pour une application facile et intense.', 1, 70, 'Rose doré'),('Palette de fards à paupières smoky', 'LOréal Paris', 'makeup', 'eye_shadow', 16.99, 'Palette de fards à paupières smoky pour des looks audacieux.', 1, 60, 'Noir fumé'),('Fard à paupières crémeux', 'LOréal Paris', 'makeup', 'eye_shadow', 13.49, 'Fard à paupières crémeux pour une couleur riche et durable.', 1, 80, 'Bleu ciel'),('Parfum floral', 'LOréal Paris', 'hygiene', 'perfume', 29.99, 'Parfum floral léger et rafraîchissant pour une sensation de fraîcheur.', 1, 40, 'Rose'),('Eau de toilette boisée', 'LOréal Paris', 'hygiene', 'perfume', 34.99, 'Eau de toilette boisée pour une note chaude et élégante.', 1, 50, 'Marron'),('Parfum fruité', 'LOréal Paris', 'hygiene', 'perfume', 27.49, 'Parfum fruité et sucré pour une touche de gourmandise.', 1, 60, 'Orange'),('Eau de parfum romantique', 'LOréal Paris', 'hygiene', 'perfume', 39.99, 'Eau de parfum romantique pour une allure séduisante.', 1, 30, 'Rouge intense')"
      )
    );

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
