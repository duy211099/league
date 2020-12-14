import React from "react";
import { useHistory } from "react-router-dom";
// Styled & Anim
import styled from "styled-components";
import { motion } from "framer-motion";

const Champion = ({ name, id }) => {
  const history = useHistory();
  // Get logo URL
  const getLogo = (name) =>
    `http://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/${name}.png`;

  const loadChampionHandler = () => {
    history.push(`/champion/${id}`);
  };

  return (
    <StyledChampion onClick={loadChampionHandler}>
      <img src={getLogo(id)} alt="" />
      <p>{name.length > 12 ? name.substring(0, 8) + "..." : name}</p>
    </StyledChampion>
  );
};

const StyledChampion = styled(motion.div)`
  margin: 0.5rem;
  cursor: pointer;
`;

export default Champion;
