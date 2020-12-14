import React from "react";
// Styled & Anim
import styled from "styled-components";
import { motion } from "framer-motion";

const Champion = ({ name, id }) => {
  // Get logo URL
  const getLogo = (name) =>
    `http://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/${name}.png`;

  return (
    <StyledChampion>
      <img src={getLogo(id)} alt="" />
      <p>{name.length > 12 ? name.substring(0, 8) + "..." : name}</p>
    </StyledChampion>
  );
};

const StyledChampion = styled(motion.div)`
  padding: 0.5rem;
`;

export default Champion;
