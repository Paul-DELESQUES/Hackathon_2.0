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
        "INSERT INTO product (name, brand, category, sub_cat, price, description, quantity_unitary, quantity_total, color, picture) VALUES ('Préférence blonds polaires', 'LOréal Paris', 'hair', 'coloration', 9.15, 'Couleur profonde et lumineuse riche en reflets', 1, 100, 'Blond clair cendré','https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwdc2cc28a/ProductImages/OAP7104/3600523947331/3600523947331_1.jpg?sw=750&sh=750&sm=cut&sfrm=jpg&q=70'), ('Préférence reflets', 'LOréal Paris', 'hair', 'coloration', 11.90, 'Dublin est une nuance cuivrée intense aux reflets ultra-visibles. Cette nuance révèle votre personnalité. Elle convient aux cheveux blonds à châtain clair.Coloration profonde et lumineuse riche en reflets. Nouveau parfum floral', 1, 80, 'Roux', 'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwed7dab05/ProductImages/OAP4005/3600521367209/3600521367209_1.jpg?sw=930&sh=930&sm=cut&sfrm=jpg&q=70'),('Excellence Crème Universal Nudes - Les Bruns', 'LOréal Paris', 'hair', 'coloration', 11.90, 'Ce Brun universel s'accorde à toutes les tonalités de peau pour un effet bonne mine quelle que soit votre carnation. Sa formule triple soin sans ammoniaque couvre 100% des cheveux blancs pour une couleur longue durée au résultat naturel, lumineux et vibrant.', 1, 120, 'Coloration Sans Ammoniaque Les Bruns','https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwe3df14ac/ProductImages/OAP7205/3600523999101/3600523999101_1.jpg?sw=930&sh=930&sm=cut&sfrm=jpg&q=70'),('Préférence Les Ombrés', 'LOréal Paris', 'hair', 'coloration', 16.49, 'Un dégradé sublime et lumineux, pour un look tie & dye intense ultra-mode au résultat naturel.', 1, 90, 'Chatain clair','https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw986f20b7/ProductImages/OAP6058/3600522269762/3600522269762_1.jpg?sw=930&sh=930&sm=cut&sfrm=jpg&q=70'),('Laque Elnett Nutrition Cheveux Secs ou Abîmés', 'LOréal Paris', 'hair', 'hairspray', 4.59, 'Laque fixation forte nutri protection pour cheveux secs ou abîmés. Maintient votre coiffure en lui gardant tout son naturel.Protège les cheveux secs ou abîmés.', 1, 150, 'Transparent','https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw1d44d171/ProductImages/OAP2038/3600520148939/3600520148939_1.jpg?sw=750&sh=750&sm=cut&sfrm=jpg&q=70'),('Laque Elnett Éclat et Souplesse', 'LOréal Paris', 'hair', 'hairspray', 8.00, 'Pour la 1ère fois, la tenue légendaire d’Elnett s’enrichit à l'huile précieuse d'Argan, reconnue pour ses bénéfices de soin et de douceur.Spécialement conçue pour sublimer et protéger tous les types de cheveux, même abimés.', 1, 300, 'Transparent','https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwdfff8e7d/ProductImages/OAP6305/3600522909989/3600522909989_1.jpg?sw=750&sh=750&sm=cut&sfrm=jpg&q=70'),('Laque Elnett Brillance Cheveux Ternes', 'LOréal Paris', 'hygiene', 'hairspray', 8.50, 'Maintient parfaitement votre coiffure & illumine les cheveux ternes.Des micro-réflecteurs de lumière apportent brillance et lumière à vos cheveux.', 1, 300, 'Transparent','https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwf7123c8e/ProductImages/OAP2069/3600522229711/3600522229711_1.jpg?sw=750&sh=750&sm=cut&sfrm=jpg&q=70'),('Laque Elnett Fixation Normale', 'LOréal Paris', 'hygiene', 'hairspray', 5.10, 'Laque fixation normale. Maintient votre coiffure en lui gardant tout son naturel. Protège vos cheveux de l'humidité.', 1, 150, 'Transparent','https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw9eb6e8a1/ProductImages/OAP2035/3054080000075/3054080000075_1.jpg?sw=750&sh=750&sm=cut&sfrm=jpg&q=70'),('Elseve Pro Bond Repair Shampooing Sans Sulfates', 'LOréal Paris', 'hair', 'shampoo', 5.99, 'La fibre du cheveu est constituée de millions de ponts internes. Appareils chauffants, colorations, décolorations cassent ces ponts et les cheveux sont visiblement abîmés : pointes fourchues, effet paille, casse. Des ponts internes forts sont le secret des cheveux sains.', 1, 200, 'Transparent','https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw1c2cf447/ProductImages/OAP7233/3600524074647/3600524074647_1.jpg?sw=750&sh=750&sm=cut&sfrm=jpg&q=70'),('Elseve Hyaluron Repulp Shampoing Ré-Hydratant 72H enrichi en Acide Hyaluronique', 'LOréal Paris', 'hair', 'shampoo', 4.15, 'Cheveux déshydratés, fatigués ? Ils ont besoin dêtre reboostés. Notre Shampooing Ré-Hydratant 72H enveloppe instantanément la fibre pour une rétention durable de lhydratation pendant 72H*. Les cheveux sont brillants, 10x plus hydratés*. Ils sont repulpés, comme revitalisés. ', 1, 250, 'Transparent','https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwe2a1e329/ProductImages/OAP7177/3600524029531/3600524029531_1.jpg?sw=750&sh=750&sm=cut&sfrm=jpg&q=70'),('Elseve Color-Vive Shampoing Violet Déjaunisseur', 'LOréal Paris', 'hair', 'shampoo', 4.14, 'Découvrez le Shampoing Violet Déjaunisseur Elseve Color-Vive. Pourquoi une formule violette ? Vos cheveux sont méchés, blonds, décolorés ou blancs? Des reflets jaunes ou orangés indésirables peuvent apparaître. Comme le violet est la couleur opposée au jaune et à lorange, notre formule enrichie en pigments violets neutralise instantanément les reflets jaunes et orangés indésirables, et nettoie vos cheveux en douceur.', 1, 200, 'Transparent','https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw031e9d26/ProductImages/OAP6931/3600523682676/3600523682676_1_v2.jpg?sw=750&sh=750&sm=cut&sfrm=JPG&q=70'),('Elseve Huile Extraordinaire Low Shampoo', 'LOréal Paris', 'hair', 'shampoo', 6.50, 'Le Low Shampoo 3-en-1 Huile Extraordinaire, enrichi en 6 huiles de fleurs rares, reconnues pour leur pouvoir embellisseur, nourrit et illumine vos cheveux.', 1, 400, 'Transparent','https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwd7999c95/huile-extra/3600523328819/LOW%20SHAMP%20FRONT.jpg?sw=750&sh=750&sm=cut&sfrm=png&q=70'),('LOréal Paris Infaillible Matte Resistance', 'LOréal Paris', 'makeup', 'lipstick', 14.90, 'Découvrez Infaillible Matte Resistance, le nouveau rouge à lèvres liquide mat au fini poudré tenue 16h', 1, 5, 'Rouge','https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwfe8edb3c/ProductImages/OAP7282/0000030146945/0000030146945-01.jpg?sw=750&sh=750&sm=cut&sfrm=jpg&q=70'),('Baume à lèvres teinté Glow Paradise', 'LOréal Paris', 'makeup', 'lipstick', 12.90, 'Découvrez le nouveau baume à lèvres teinté Glow Paradise de LOréal Paris ! Composé jusquà 98% dingrédients dorigine naturelle, il ravive la couleur naturelle de vos lèvres pour un résultat brillant.', 1, 5, 'Rose','https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw9667ea04/ProductImages/OAP6779/3600523465255/3600523465255_1.jpg?sw=930&sh=930&sm=cut&sfrm=jpg&q=70'),('Color Riche Rouge à Lèvres', 'LOréal Paris', 'makeup', 'lipstick', 12.60, 'Rouge à lèvres soin confort extrême. Une texture voluptueuse qui gorge vos lèvres d’hydratation et les préserve du desséchement. Une palette de couleurs intenses et éclatantes.', 1, 5, 'Violet','https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw33c037af/ProductImages/OAP3124/3600523801954/3600523801954_1.jpg?sw=750&sh=750&sm=cut&sfrm=jpg&q=70'),('Plump-In-Gloss Effet Volume', 'LOréal Paris', 'makeup', 'lipstick', 10.20, 'Signez vos lèvres dune brillance intense avec le nouveau Plump-in-Gloss de LOréal Paris, le nouveau gloss effet repulpant et hydratant immédiat de L’Oréal Paris, enrichi en acide hyaluronique. ', 1, 20, 'Rose','https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw9bb5e451/ProductImages/OAP7144/3600523971312/3600523971312_4.jpg?sw=750&sh=750&sm=cut&sfrm=jpg&q=70'),('Mascara volumisant', 'LOréal Paris', 'makeup', 'mascara', 9.99, 'Mascara volumisant pour des cils plus épais et plus longs.', 1, 80, 'Noir'),('Mascara allongeant', 'LOréal Paris', 'makeup', 'mascara', 8.49, 'Mascara allongeant pour des cils magnifiquement étirés.', 1, 100, 'Noir intense'),('Mascara waterproof', 'LOréal Paris', 'makeup', 'mascara', 10.99, 'Mascara waterproof pour une tenue longue durée, même par temps humide.', 1, 70, 'Noir profond'),('Mascara coloré', 'LOréal Paris', 'makeup', 'mascara', 11.49, 'Mascara coloré pour des cils vibrants et audacieux.', 1, 60, 'Bleu électrique'),('Vernis à ongles classique', 'LOréal Paris', 'makeup', 'nail', 7.99, 'Vernis à ongles classique pour des ongles impeccables.', 1, 90, 'Rouge vif'),('Vernis à ongles mat', 'LOréal Paris', 'makeup', 'nail', 8.49, 'Vernis à ongles mat pour un look tendance et élégant.', 1, 70, 'Noir mat'),('Vernis à ongles métallique', 'LOréal Paris', 'makeup', 'nail', 9.99, 'Vernis à ongles métallique pour un effet brillant.', 1, 60, 'Or métallique'),('Vernis à ongles pailleté', 'LOréal Paris', 'makeup', 'nail', 10.49, 'Vernis à ongles pailleté pour une touche de glamour.', 1, 80, 'Argent pailleté'),('Palette de fards à paupières nude', 'LOréal Paris', 'makeup', 'eye_shadow', 14.99, 'Palette de fards à paupières nude pour des looks subtils.', 1, 50, 'Nude'),('Fard à paupières liquide', 'LOréal Paris', 'makeup', 'eye_shadow', 11.49, 'Fard à paupières liquide pour une application facile et intense.', 1, 70, 'Rose doré'),('Palette de fards à paupières smoky', 'LOréal Paris', 'makeup', 'eye_shadow', 16.99, 'Palette de fards à paupières smoky pour des looks audacieux.', 1, 60, 'Noir fumé'),('Fard à paupières crémeux', 'LOréal Paris', 'makeup', 'eye_shadow', 13.49, 'Fard à paupières crémeux pour une couleur riche et durable.', 1, 80, 'Bleu ciel'),('Parfum floral', 'LOréal Paris', 'hygiene', 'perfume', 29.99, 'Parfum floral léger et rafraîchissant pour une sensation de fraîcheur.', 1, 40, 'Rose'),('Eau de toilette boisée', 'LOréal Paris', 'hygiene', 'perfume', 34.99, 'Eau de toilette boisée pour une note chaude et élégante.', 1, 50, 'Marron'),('Parfum fruité', 'LOréal Paris', 'hygiene', 'perfume', 27.49, 'Parfum fruité et sucré pour une touche de gourmandise.', 1, 60, 'Orange'),('Eau de parfum romantique', 'LOréal Paris', 'hygiene', 'perfume', 39.99, 'Eau de parfum romantique pour une allure séduisante.', 1, 30, 'Rouge intense')"
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
