import React from "react";
// Styling & Anim

const Champion = ({ name }) => {
  // Get logo URL
  const getLogo = (name) =>
    `http://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/${name}.png`;

  return (
    <div>
      <img src={getLogo(name)} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default Champion;
