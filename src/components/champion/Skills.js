import React from "react";
// Redux
import { useSelector } from "react-redux";

const Skills = () => {
  // Get skill image
  const getSpell = (name) =>
    `http://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${name}.png`;
  // Get Passive image
  const getPassive = (name) =>
    `http://ddragon.leagueoflegends.com/cdn/10.25.1/img/passive/${name}`;

  // Get Data
  const { currentChampion } = useSelector((state) => state.champion);
  const { passive, spells } = currentChampion;

  return (
    <div>
      <h2>Kỹ năng</h2>
      <img
        key={passive.image.full}
        src={getPassive(passive.image.full)}
        alt={passive.image.full}
      />
      {spells.map((spell) => (
        <img key={spell} src={getSpell(spell.id)} alt={spell.id} />
      ))}
    </div>
  );
};

export default Skills;
