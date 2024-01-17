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
        "INSERT INTO product (name, brand, category, sub_cat, price, description, quantity_unitary, quantity_total, color, picture) VALUES ('Préférence blonds polaires', 'LOréal Paris', 'hair', 'coloration', 9.15, 'Couleur profonde et lumineuse riche en reflets', 1, 100, 'Blond clair cendré','https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwdc2cc28a/ProductImages/OAP7104/3600523947331/3600523947331_1.jpg?sw=750&sh=750&sm=cut&sfrm=jpg&q=70'), ('Teinture professionnelle', 'LOréal Paris', 'hair', 'coloration', 17.99, 'Teinture capillaire professionnelle pour des résultats époustouflants.', 1, 80, 'Noir'),('Teinture éclatante', 'LOréal Paris', 'hair', 'coloration', 14.99, 'Teinture capillaire pour une couleur éclatante qui dure.', 1, 120, 'Rouge foncé'),('Teinture sans ammoniaque', 'LOréal Paris', 'hair', 'coloration', 16.49, 'Teinture capillaire sans ammoniaque pour un soin en douceur.', 1, 90, 'Brun clair'),('Gel coiffant fort', 'LOréal Paris', 'hair', 'gel', 7.99, 'Gel coiffant ultra-fort pour une tenue longue durée.', 1, 75, 'Transparent'),('Gel coiffant extra-fort', 'LOréal Paris', 'hair', 'gel', 8.99, 'Gel coiffant extra-fort pour des coiffures audacieuses.', 1, 60, 'Transparent'),('Gel douche hydratant', 'LOréal Paris', 'hygiene', 'gel', 5.49, 'Gel douche hydratant pour une peau douce et propre.', 1, 150, 'Bleu'),('Gel nettoyant visage', 'LOréal Paris', 'hygiene', 'gel', 6.99, 'Gel nettoyant visage pour une peau fraîche et éclatante.', 1, 100, 'Transparent'),('Shampooing revitalisant', 'LOréal Paris', 'hair', 'shampoo', 9.99, 'Shampooing revitalisant pour des cheveux doux et éclatants.', 1, 120, 'Transparent'),('Shampooing anti-pelliculaire', 'LOréal Paris', 'hair', 'shampoo', 8.49, 'Shampooing anti-pelliculaire pour un cuir chevelu sain.', 1, 100, 'Transparent'),('Shampooing hydratant', 'LOréal Paris', 'hair', 'shampoo', 7.99, 'Shampooing hydratant pour des cheveux nourris et brillants.', 1, 150, 'Transparent'),('Shampooing fortifiant', 'LOréal Paris', 'hair', 'shampoo', 10.49, 'Shampooing fortifiant pour des cheveux plus forts et résistants.', 1, 80, 'Transparent'),('Rouge à lèvres mat', 'LOréal Paris', 'makeup', 'redlips', 12.99, 'Rouge à lèvres mat longue tenue pour des lèvres glamour.', 1, 60, 'Rouge vif'),('Rouge à lèvres liquide', 'LOréal Paris', 'makeup', 'redlips', 11.49, 'Rouge à lèvres liquide ultra-pigmenté pour une couleur intense.', 1, 50, 'Rose nude'),('Rouge à lèvres hydratant', 'LOréal Paris', 'makeup', 'redlips', 10.99, 'Rouge à lèvres hydratant pour des lèvres douces et nourries.', 1, 70, 'Corail'),('Rouge à lèvres satiné', 'LOréal Paris', 'makeup', 'redlips', 13.49, 'Rouge à lèvres satiné pour une finition élégante et soyeuse.', 1, 40, 'Rouge cerise'),('Mascara Panorama Volume Million De Cils', 'LOréal Paris', 'makeup', 'mascara', 14.90, 'Nouveau Mascara Panorama noir de Volume Millions de Cils pour un volume panoramique et un regard jusqu'à 1,4x plus grand*. Donnez à vos cils un Volume Panoramique.', 1, 80, 'Noir', 'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwf5b642a0/ProductImages/OAP7391/30149649/0000030149649_1.jpg?sw=465&sh=465&sm=cut&sfrm=png&q=70'),('Mascara Telescopic Lift', 'LOréal Paris', 'makeup', 'mascara', 14.90, 'Mascara allongeant pour des cils magnifiquement étirés.', 1, 100, 'Noir', 'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw8394eac3/ProductImages/OAP7228/30152540/30152540_1.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70'),('Mascara Lash Paradise Waterproof', 'LOréal Paris', 'makeup', 'mascara', 14.20', 'Mascara waterproof pour une tenue longue durée, même par temps humide.', 1, 70, 'Noir', 'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw0a7204d8/ProductImages/OAP6851/3600523591831/3600523591831_5.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70'),('Pro XXL Mascara Lift', 'LOréal Paris', 'makeup', 'mascara', 15.90, 'Mascara coloré pour des cils vibrants et audacieux.', 1, 60, 'Noir', 'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwa2b085f0/ProductImages/OAP7209/3600524031091/3600524031091_1.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70'),('Essie Classique Vernis à Ongles Les Rouges', 'LOréal Paris', 'makeup', 'nail', 10.20, 'Vernis à ongles classique pour des ongles impeccables.', 1, 90, 'Rouge vif', 'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwf748f825/ProductImages/ESS_017/30095571/30095571_2.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70'),('Essie Classique Vernis à Ongles Les Taupes', 'LOréal Paris', 'makeup', 'nail', 10.20, 'Vernis à ongles mat pour un look tendance et élégant.', 1, 70, 'Angora', 'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw8ab313cf/ProductImages/ESS_018/30095441/30095441_2.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70'),('Essie Classique Vernis à Ongles Les Taupes', 'LOréal Paris', 'makeup', 'nail', 10.20, 'Vernis à ongles métallique pour un effet brillant.', 1, 60, 'Pailleté', 'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw41a490c5/ProductImages/ESS_018/30154919/30154919_2.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70'),('Essie Classique Vernis à Ongles Les Prunes', 'LOréal Paris', 'makeup', 'nail', 10.20, 'Vernis à ongles pailleté pour une touche de glamour.', 1, 80, 'Pink', 'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw74a9105c/ProductImages/ESS_015/30095229/30095229_2.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70'),('Fond de teint Acoord Parfait', 'LOréal Paris', 'makeup', 'face_powder', 14.90, 'Fond de teint fluide sur mesure.', 1, 50, 'Beige', 'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwb95a7b4c/ProductImages/OAP3000/3600524057503/3600524057503_1.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70'),('Poudre Accord Parfait', 'LOréal Paris', 'makeup', 'face_powder', 14.90, 'Poudre fondante perfectrice.', 1, 70, 'Rose', 'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw9dedae1a/ProductImages/OAP3002/3600524052003/3600524052003_1.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70'),('Infaillible 32h Fond de Teint Fluide', 'LOréal Paris', 'makeup', 'eye_shadow', 16.99, 'Fond de Teint Fluide Haute Couvrance.', 1, 60, 'Rosé'),('Fond De Teint Infaillible 32h Matte Cover', 'LOréal Paris', 'makeup', 'face_powder', 13.90, 'Fond de Teint Mat Haute Couvrance.', 1, 80, 'Mat', 'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwa642332c/ProductImages/OAP7040/0000030177451/0000030177451_1.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70'),('Revitalift Filler Gel Crème Repulpant', 'LOréal Paris', 'hygiene', 'cream', 24.99, 'Gel-Crème Jour Anti-âge, Repulpant & Hydratant, à l’Acide Hyaluronique.', 1, 50, '', 'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwb150818c/ProductImages/OAP7232/3600524070601/3600524070601_1.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70'),('Age Perfect Golden Age Crème de Jour Re-Fortifiante FPS 20', 'LOréal Paris', 'hygiene', 'cream', 15.49, 'Soin Jour Rosé FPS20 pour peaux matures et ternes.', 1, 50, '', 'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw66d3197d/ProductImages/OAP6430/3600523216420/3600523216420_1.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70'),('Age Perfect Renaissance Cellulaire Crème de Nuit', 'LOréal Paris', 'hygiene', 'cream', 15.49, 'Soin Nuit Régénérant.', 1, 50, '', 'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw28e2886e/ProductImages/OAP6016/3600522323624/3600522323624_1.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70'),('Sucres de Soin Gommage Purifiant', 'LOréal Paris', 'hygiene', 'cream', 9.57, 'Gommage purifiant.', 1, 30, '', 'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwa6595d86/ProductImages/OAP6516/3600523541973/3600523541973_1.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70')"
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
