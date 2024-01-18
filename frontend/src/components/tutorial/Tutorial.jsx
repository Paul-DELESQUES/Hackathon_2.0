import PropTypes from "prop-types";
import "../../styles/tutorial.scss";

function Tutorial({ step, tutorialCompleted }) {
  const instructions = {
    // 1: "Cliquez sur les articles pour accéder à notre catalogue de produits",
    2: "Cliquez sur la tablette, pour utiliser discuter avec notre assistant virtuel",
    3: "Cliquez sur la TV pour accéder au formulaire d'abonnement",
    4: "Tutoriel terminé, c'est à vous !",
  };
  if (tutorialCompleted || step > 4) {
    return null;
  }
  return <div className="tutorial">{instructions[step]}</div>;
}

Tutorial.propTypes = {
  step: PropTypes.number.isRequired,
  tutorialCompleted: PropTypes.bool.isRequired,
};

export default Tutorial;
