import React from "react";
// Redux
import { useSelector } from "react-redux";

const Lore = () => {
  // Get Data
  const { currentChampion } = useSelector((state) => state.champion);
  const { lore } = currentChampion;

  return (
    <div>
      <h2>Cốt truyện</h2>
      <p>{currentChampion.lore}</p>
    </div>
  );
};

export default Lore;
