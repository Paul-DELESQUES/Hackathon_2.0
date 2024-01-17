import React from "react";
import "./productChoise.scss";

function ProductChoise() {
  const options = [
    {
      text: "Parfum",
      handler: () => {},
      id: 1,
    },
    {
      text: "carton",
      handler: () => {},
      id: 2,
    },
    {
      text: "rouge à lèvre",
      handler: () => {},
      id: 3,
    },
    {
      text: "lèvre",
      handler: () => {},
      id: 4,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      type="button"
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {" "}
      {option.text}{" "}
    </button>
  ));
  return <div className="learning-options-container">{optionsMarkup}</div>;
}

export default ProductChoise;
